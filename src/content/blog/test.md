---
title: "GitHub Actions CIコスト分析と最適化メモ"
description: "GitHub Actionsの料金の決まり方、project-sw-monorepoの課金分析、CI並列化・キャッシュ改善の実測記録。"
pubDate: 2026-07-10
---

## GitHub Actionsの料金はどう決まるか？
GitHub Actionsの料金は次の以下の要素で決まる：
- 各jobの実行時間
- 実行するrunner (VM)の種類
- job (VM)の起動台数
- strageに格納している要領×保持時間

## 各CIのボトルネック
- BE
    - 
- Mobile
    - 
- Web
    -





# Appendix: GitHub Actions 利用料金分析 (2026-07-01〜07-08)

元データ: `.github/usageReport_1_4db8c330d9bc4a37a352eaceede8460d.csv`
Organization: `lvgs-spotwork`(GitHub Enterprise Cloud, 576/630 seats)

## CSVの各カラムの意味

以下、07-08の実データ1行(`lambda-ci.yml`, keisuke-matsumoto-lvgs)を例に各カラムを説明する。

- `date`: 使用日(日次集計)
  - 例: `2026-07-08`
- `product`: 常に `actions`
  - 例: `actions`
- `sku`: `actions_linux`(x64ランナー) / `actions_linux_arm`(arm64ランナー) / `actions_storage`(Artifacts・キャッシュのストレージ)
  - 例: `actions_linux_arm`
- `quantity`: 使用量。minutes系は分数、storage系はGB時間(容量×保持時間の積分)
  - 例: `225`(分)
- `unit_type`: `minutes` または `gigabyte-hours`
  - 例: `minutes`
- `applied_cost_per_quantity`: 単価。x64=\$0.006/分、arm64=\$0.005/分、storage=\$0.00033602/GB時
  - 例: `0.005`
- `gross_amount`: 素の金額 = `quantity × applied_cost_per_quantity`(無料枠適用前)
  - 例: `1.125`(= 225 × 0.005)
- `discount_amount`: 無料枠(included minutes/storage)でカバーされた金額
  - 例: `0`(この時点で無料枠は枯渇済みのため相殺なし)
- `net_amount`: 実際に課金される金額 = `gross_amount − discount_amount`
  - 例: `1.125`
- `username`: ジョブをトリガーしたユーザー(botアカウントも含む)
  - 例: `keisuke-matsumoto-lvgs`
- `organization` / `repository`: Organization名 / リポジトリ名
  - 例: `lvgs-spotwork` / `project-sw-monorepo`
- `workflow_path`: 実行されたワークフローファイルのパス(storage課金は空)
  - 例: `.github/workflows/lambda-ci.yml`
- `cost_center_name`: 社内コストセンターラベル
  - 例: `レバウェル-新規事業-cost`

## 全体サマリー

- gross(素の使用量分): **\$109.37**
- net(実質課金額): **\$76.18**
- 差額 \$33.19 は月間無料枠(included minutes)でカバーされた分

## 日別の課金推移

| 日付 | gross | discount(無料枠) | net(実質課金) |
|---|---|---|---|
| 07-01 | \$15.08 | \$15.08 | \$0.00 |
| 07-02 | \$16.08 | \$16.08 | \$0.00 |
| 07-03 | \$22.22 | \$1.59 | **\$20.63** |
| 07-04 | \$0.65 | \$0.10 | \$0.55 |
| 07-05 | \$1.09 | \$0.09 | \$1.00 |
| 07-06 | \$21.51 | \$0.11 | \$21.39 |
| 07-07 | \$16.76 | \$0.12 | \$16.65 |
| 07-08 | \$16.00 | \$0.04 | \$15.96 |

**07-02までは無料枠が使用量を全部相殺(net=\$0)。07-03から無料枠が枯渇し、以降はほぼ全額が実課金になっている。**

無料枠(月50,000分、GitHub Enterprise Cloudの記載値)は `lvgs-spotwork` Enterprise全体で共有されているため、この枯渇は project-sw-monorepo 単体の消費だけが原因ではなく、Enterprise全体の消費が積み上がった結果と考えられる。

## ワークフロー別 実質課金額 (project-sw-monorepo, 上位)

| ワークフロー | gross | net(実質課金) | 割合(net) |
|---|---|---|---|
| `ci.yml` | \$53.77 | **\$36.11** | 47% |
| `mobile-build.yml` | \$23.35 | **\$16.28** | 21% |
| `lambda-ci.yml` | \$7.89 | \$7.66 | 10% |
| `db-migration-check.yaml` | \$8.25 | \$5.53 | 7% |
| `label.yml` | \$4.26 | \$2.87 | 4% |
| `backend-integration-test.yml` | \$2.98 | \$2.29 | 3% |
| `mention-to-slack.yml` | \$3.05 | \$1.85 | 2% |
| その他 | 〜\$1.5 | 〜\$1.1 | 1% |

`ci.yml` + `mobile-build.yml` の2つで実質課金の **68%** を占める。この2つが最大のレバレッジポイント。

## lambda-ci.yml の日別消費分数(参考: 今回のCI改修作業)

| 日付 | actions_linux | actions_linux_arm | 合計 |
|---|---|---|---|
| 07-01 | 6分 | 39分 | 45分 |
| 07-03 | 19分 | 88分 | 107分 |
| 07-04 | 2分 | 8分 | 10分 |
| 07-05 | 1分 | 4分 | 5分 |
| 07-06 | 59分 | 250分 | 309分 |
| 07-07 | 54分 | 235分 | 289分 |
| **07-08(matrix→単一ジョブ化 + affected化の作業日)** | 37分 | **740分** | **777分** |

07-08 が最大なのは、matrix撤去・turbo `--affected` 化などの試行錯誤で push→CI失敗→修正のループを多数回した結果であり、1回あたりのコストが上がったわけではない(むしろ改修後の1回あたりコストは実測で約87%減、後述)。

## lambda-ci.yml 改修の実測ビフォーアフター (billable job-minutes)

| | OLD (16セルmatrix) | NEW (単一ジョブ化) |
|---|---|---|
| 対象run | `28982414983` | `28985218642` |
| lambda-check | 16セル×50〜66秒 | 93秒(1ジョブ) |
| docker-build-check | 198秒 | 40秒(buildx GHAキャッシュ有効) |
| **合計billable時間** | **1078秒(18.0分)** | **138秒(2.3分)** |
| \$0.005/分換算 | \$0.09/回 | \$0.0115/回 |

**約87%削減**(実測)。1matrixセルの内訳を見ると、実際の検査作業(Lint 1s / Type check 3s / Build 0s)は数秒で終わっており、支配的だったのは各セルのVM起動(checkout/setup ≈10秒)と、毎セルで重複していた共通パッケージ(`@repo/database`等)のビルド(≈35秒)だった。

## Actions Storage(Artifacts/キャッシュ)

| repo | GB時間 | 実質課金 |
|---|---|---|
| labor-compliance-core | 2045.6 | \$0.00 |
| project-sw-monorepo | 214.0 | \$0.00 |

無料枠(Enterprise Cloudは50GB)の範囲内で、現時点では課金なし。

## 結論・示唆

1. **\$100超えの直接原因は無料枠(月50,000分、Enterprise全体で共有)の枯渇**であり、特定ワークフローの異常ではない。07-02→07-03に枯渇し、以降は通常運転の使用量がそのまま課金されている。
2. 実質課金の68%は `ci.yml` と `mobile-build.yml`。lambda-ciの改修で得られる削減効果(月換算で数ドル程度)より、これら2つに同じ手法(matrix見直し・affected化・キャッシュ)を適用する方がレバレッジが大きい。
3. lambda-ci.yml 自体は今回の改修で1回あたり約87%のコスト削減を実測済み。今後の安定運用後に効果が数字として表れる見込み(07-08は改修作業自体のCI実行回数が異常に多かったため、コスト削減効果がまだ数字に出ていない)。


# CI 最適化 POC メモ

## 作業ブランチ
`feat/be/ci-cache`

## やったこと

### 1. Composite Action 作成（`.github/actions/setup-node/`）
Node.js + pnpm のセットアップを再利用可能な Composite Action に切り出した。
- Renovate の action 設計を参考にした
- `save-cache` / `os` input を持つ

### 2. backend-ci.yml の並列化
**変更前（直列1ジョブ）:**
```
setup-node → shared-schema → db:generate → lint → type-check → test → build:internal-api → build:batch → swagger
```

**変更後（並列5ジョブ）:**
```
lint ──────────────────────────────────────────┐
type-check（tsbuildinfo キャッシュあり）────────┤
test ──────────────────────────────────────────┤─ ci（ゲート）
build (internal-api + swagger) ───────────────┤
build (batch) ────────────────────────────────┘
```

- `swagger` ジョブを廃止して `build (internal-api)` の matrix に統合（build:internal-api の二重実行を解消）
- type-check に `tsbuildinfo` インクリメンタルキャッシュを追加

### 3. ランナーを ubuntu-24.04-arm に統一
- `ubuntu-latest`（x86）が混在していたのを全ジョブ arm に統一

### 4. postgres チューニング（db-migration-check.yaml）
- postgres を 15.10 → 16.8（本番 Aurora に合わせる）
- ヘルスチェック改善（`--health-start-period 5s` 追加）
- fsync チューニングはコメントアウト（怖いので保留）

### 5. db-migration-check.yaml の並列化
1ジョブ（直列）→ 2ジョブ（並列）に分割：
- `prisma-validate`（DB不要）: Validate / Generate / Type check
- `migration-run`（DB必要）: migrate / seed / status

**効果: 85s → 63s（約26%改善）**

### 6. setup.yml の削除
setup.yml が pnpm install のみ実行して何もキャッシュしない状態になっていた（79s の純粋なオーバーヘッド）。削除して detect-changes 直後に全 CI を並列実行するよう変更。

**効果: 279s → 189s（約32%改善）**

### 7. アクションバージョンのハッシュ固定
- `actions/checkout` v7.0.0
- `dorny/paths-filter` v4.0.1
- `actions/cache` v6.1.0
- `pnpm/action-setup` v6.0.9
- `actions/setup-node` v6.4.0

### 8. mobile CI に pub キャッシュを追加
`mobile-generate-code` / `mobile-analyze` / `mobile-test` の全ジョブに `~/.pub-cache` キャッシュを追加。`pubspec.lock` が変わらない限りヒット。

---

## 試して断念したもの

### node_modules キャッシュ
- **狙い**: `pnpm install`（60s）をスキップして node_modules 復元（~15s）で済ます
- **問題1**: pnpm monorepo では `packages/backend/node_modules/.bin/nest` など各パッケージの node_modules が必要で、root の node_modules だけキャッシュしても `nest not found` / `prisma not found` になる
- **問題2**: `packages/*/node_modules` もキャッシュに追加したが、並列ジョブが同じキーに競合して保存し、先に保存したジョブ（lint など）の不完全なキャッシュが後続に使われた
- **問題3**: sparse checkout + pnpm workspace の組み合わせでキャッシュが正しく作られなかった
- **問題4**: キャッシュキーをバンプ（v2→v3）して回避しようとしたが根本解決にならない
- **結論**: `cache: "pnpm"`（pnpm store キャッシュ + 毎回 install）が正解。Renovate / Turborepo 公式も同じ方針。

### ローカルでの計測結果
```
pnpm install --frozen-lockfile（warm store）: 23.5s
tar -xzf（node_modules 展開）:               59.7s
```
→ node_modules キャッシュの展開はローカルでも pnpm install より遅かった

### setup.yml で node_modules キャッシュを1回だけ保存する方式
- 1ジョブだけ save、他は restore のみ（Renovate 方式）を試みた
- sparse checkout で `packages/backend/**/package.json` が取得されず pnpm workspace が正しく動かなかった
- フル checkout に変更したが、setup が 73s かかる上に後続ジョブも 60s の install をするため意味がなかった
- 結局 setup.yml ごと削除

---

## 残課題

### Turbo リモートキャッシュ
- `turbo.json` を整備して `pnpm turbo run lint --filter=project-sw-backend` で CI コマンドを1行化
- `rharkor/caching-for-turbo` でリモートキャッシュを追加するとコード未変更時はタスク実行が 0s になる
- `shared-schema build` / `db:generate` も Turbo でキャッシュできる

### turbo.json に追加が必要なタスク定義
```json
{
  "globalEnv": ["CI"],
  "tasks": {
    "db:generate": {
      "inputs": ["prisma/schema.prisma", "prisma/migrations/**/*.sql"],
      "outputs": ["node_modules/.prisma/**", "dist/**"]
    },
    "type-check": { "dependsOn": ["^build"], "outputs": [] },
    "project-sw-backend#type-check": {
      "dependsOn": ["^build", "@repo/database#db:generate"]
    },
    "lint": { "dependsOn": ["^build"], "outputs": [] }
  }
}
```

### ブランチ保護の Ruleset 対応
- setup.yml を削除したので必須チェック「setup」が消えた
- GitHub Ruleset で `skipped = pass` に設定すれば各 CI ジョブを必須チェックにしつつスキップを通過扱いにできる

### mobile CI の改善
- `mobile-generate-code` の pnpm install を `setup-node` action に統一
- Mock fvm の3ジョブコピペを Composite Action に切り出す

---

## 計測サマリー

| 施策 | 壁時計時間 | 備考 |
|---|---|---|
| 変更前（直列 setup + backend-check） | ~279s | setup 79s がボトルネック |
| db-migration 並列化 | 85s → 63s | PR #3565 の db-migration のみ |
| setup.yml 削除 | 279s → **189s** | 32%改善 |
| 最長ジョブ（backend / test） | 180s | pnpm install 62s + test 101s |

### pnpm install 内訳（CI 計測）
- pnpm store キャッシュダウンロード: ~15s
- pnpm install（リンク処理）: ~40s
- 合計: ~55-60s/ジョブ

これは Turbo リモートキャッシュで「タスク自体をスキップ」することで間接的に改善できる。

---

## 旧 CI 設計の問題点

### 構造的な問題

**3層の直列依存**
```
ci.yml（detect-changes）
    ↓ 直列待ち
setup.yml（setup-skip / setup-check / setup ゲート）
    ↓ 直列待ち
web-ci.yml / backend-ci.yml / shared-schema-ci.yml
```
setup が完了するまで全ての後続 CI がブロックされていた。

**3ジョブのゲートパターンが全 CI に重複**
```
xxx-skip（変更なし時の成功用）
xxx-check（実処理）
xxx（ゲート：ブランチ保護の必須チェック名固定のためだけに存在）
```
このパターンが setup / backend / web / shared-schema の4箇所で繰り返されていた。

**setup.yml が意図通りに機能していなかった**
「共通キャッシュを作って後続ジョブで使いまわす」意図で作られたが：
- キャッシュしていたのは `packages/shared-schema` と `packages/database` のビルド成果物のみ
- `node_modules` はキャッシュされておらず、後続ジョブは毎回 `pnpm install` を実行していた
- 結果として setup は 70〜80s かかるだけで後続ジョブに何も渡せていなかった

### キャッシュ設計の問題

**キャッシュキーに `github.ref` が含まれていた**
```yaml
key: node-setup-${{ github.ref }}-${{ hashFiles(...) }}
```
新しいブランチを切るたびに初回は必ずキャッシュミスし、フルインストールが走っていた。`restore-keys` のフォールバックもなかった。

**キャッシュ + artifact の二重保存**
同じ内容を `actions/cache` と `actions/upload-artifact` の両方に保存していた。どちらかが失敗すると壊れるリスクがあり、ネットワーク転送も二重になっていた。

**`node_modules` はキャッシュされていなかった**
`.ci-cache` の中身は `packages/shared-schema/` と `packages/database/` のビルド成果物のみ。最も重い `pnpm install` をスキップする仕組みがなかった。

### 並列化の欠如

**backend CI が全部直列1ジョブ**
```
lint → type-check → test → build:internal-api → build:batch → swagger
```
test（95s）が終わるまで build が動けなかった。

**web CI も同様**
lint(2s) → typecheck(16s) → test(235s) → build(44s) が直列。

### 計測（旧構成 vs 新構成）

BE のみの PR（feature/be/3388-event-logs）での比較：

| | 旧構成 | 新構成 |
|---|---|---|
| setup（直列） | 9s | なし |
| backend-check（直列1ジョブ） | 253s | - |
| backend 並列（最長 test） | - | 192s |
| **壁時計時間** | **272s（4分32秒）** | **201s（3分21秒）** |

---

## ジョブ分割 vs 直列化：コストとレイテンシのトレードオフの定式化

「ジョブを分割して並列化するか、1ジョブに直列でまとめるか」は、実測を重ねる中で単なる場当たり的なチューニングではなく、**課金コストとウォールクロックレイテンシの trade-off を最小化する分割問題**として一般化できることがわかった。

### 前提（GitHub Actionsの課金モデル）

実際の課金CSVから逆算して確認した通り、課金は「ワークフロー全体の壁時計時間」ではなく、**ジョブ単位で `ceil(秒数 / 60)` に切り上げた分数の総和**で決まる。

ジョブ $i$ の実行時間を、そのジョブ固有の固定オーバーヘッド $o_i$（checkout・pnpm/Node.jsセットアップ・依存インストール・DBコンテナ起動など）と、実際の処理時間 $w_i$ の和とする：

$$
t_i = o_i + w_i
$$

ジョブ $i$ の分単価を $r_i$（例: arm64 = \$0.005/min）とすると、あるジョブ分割 $P = \{1, \dots, k\}$ 全体の課金コストは

$$
C(P) = \sum_{i=1}^{k} r_i \left\lceil \frac{t_i}{60} \right\rceil
$$

一方、ジョブ間に依存関係が無く並列実行される場合のウォールクロックレイテンシ（PR作者が待つ時間）は、最も遅いジョブで決まる：

$$
L(P) = \max_{i \in P} t_i
$$

すべてを1ジョブに直列でまとめた場合（$k=1$）は、オーバーヘッドを1回だけ払う代わりに、処理時間は全部の合計になる：

$$
C(\{1\}) = r \left\lceil \frac{o + \sum_i w_i}{60} \right\rceil, \qquad L(\{1\}) = o + \sum_i w_i
$$

### 分割数 $k$ に対する単調性

- $k$ を増やす（ジョブを細かく分ける）ほど、固定オーバーヘッド $o_i$ を払う回数が増え、かつ `ceil` による切り上げ回数も増えるため、**$C(P)$ は概ね単調増加**する。
- $k$ を増やすほど、並列実行できるタスクが増えるため、**$L(P)$ は概ね単調減少**する（依存関係で直列にせざるを得ない部分を除く）。

つまり両者は原理的に**同時最適化できないトレードオフ**であり、「コストを最小化する分割」と「レイテンシを最小化する分割」は基本的に一致しない。

### 一般化した最適化問題

タスク集合 $T$ をジョブに分割する写像 $P$（依存関係グラフ $G$ 上で、依存元が依存先より前に来る制約を満たすもの）について、コストとレイテンシの重み付き和を最小化する分割を選ぶ問題として書ける：

$$
P^* = \arg\min_{P \,\text{is valid partition of}\, T \,\text{under}\, G} \Big[ \alpha \cdot C(P) + \beta \cdot L(P) \Big]
$$

- $\alpha$: 実際の \$/分のコスト重視度
- $\beta$: 開発者の待ち時間1秒あたりの価値（"時間を金額換算した"重み）

$\alpha, \beta$ の相対的な大きさをどう置くかは組織のポリシー次第で、これ自体に「正解」はない。今回のセッションでは実測値を出した上で、どちらを優先するかを都度judgment callとして扱った。

### 実測での具体例

**例1: `db-migration-check.yaml`（$k=1$ vs $k=2$）**

| 分割 | 内訳 | $C$（課金） | $L$（壁時計） |
|---|---|---|---|
| $k=1$（直列・現行本番） | postgres起動27s + checkout/setup≈33s + 実処理≈36s ≈ 96s | `ceil(96/60)` = **2分** | **96s** |
| $k=2$（並列分割） | `prisma-validate`: checkout/setup≈33s + 実処理≈27s ≈ 60s / `migration-run`: postgres27s + checkout/setup≈33s + 実処理6s ≈ 66s | `ceil(60/60) + ceil(66/60)` = 1+2 = **3分** | `max(60, 66)` = **66s** |

$k=2$ にすると课金が1.5倍（2分→3分）になる代わりに、壁時計は約30%短縮（96s→66s）する。checkout/pnpm/Node.jsセットアップという**同じオーバーヘッドを2ジョブ分払っている**のがコスト増の直接原因。

**例2: `lambda-ci.yml`（16セルmatrix → 単一ジョブ）**

こちらは逆に、$k$ を **16 → 1** に減らしたことで課金・壁時計の**両方**が改善した稀な例（18.0分 → 2.3分、約87%減）。理由は、各セルの実処理時間（Lint 1s / Type check 3s / Build 0s）がオーバーヘッド（checkout+共通パッケージビルド ≈ 45s）に比べて極端に小さく、$o_i \gg w_i$ の状態で$k$を増やしても並列化によるレイテンシ短縮効果が無視できるほど小さかったため。トレードオフが成立するのは $w_i$ が $o_i$ に対して十分大きい場合に限られる、という反例になっている。

### 示唆

- $o_i \gg w_i$（オーバーヘッドが支配的）なジョブ群は、統合（$k$を減らす）が両方の指標で有利になりやすい。
- $w_i \gg o_i$（実処理が支配的）なジョブ群は、分割（$k$を増やす）でレイテンシは縮むがコストは増える、という素直なトレードオフになる。
- どちらに倒すかは「PR作者の待ち時間 vs 月間課金額」のどちらを組織として優先するかで決める判断であり、一律の正解を持たない。

### この問題の一般化：他分野での同型の問題

「固定オーバーヘッドを何回払うか」対「並列/バッチ化による待ち時間短縮」という同じ形の目的関数（$\alpha C + \beta L$）を最小化する問題は、CI/CDに限らず様々な分野に同型のインスタンスがある。

- **並列計算の「粒度（granularity）問題」**: タスクを細かく分けるほど並列度は上がるがスレッド/プロセス生成・同期のオーバーヘッドが支配的になり、粗くまとめるほどオーバーヘッドは減るが並列化の恩恵が減る。Amdahlの法則に固定オーバーヘッド項を加えた形で議論される、まさに今回の $o_i$ vs $w_i$ の比。
- **スケジューリング理論の「バッチスケジューリング（setup time付き）」**: 各バッチ(ジョブ)に固定セットアップコストがあり、複数タスクを1バッチにまとめるとセットアップ回数(=コスト)は減るがバッチの完了時間(makespan)は伸びる、という古典的な生産スケジューリング問題そのもの。
- **分散処理の「タスク粒度チューニング」**: Hadoop/Sparkでmapper/reducer数を増減する際の悩みも同じ形（タスク起動オーバーヘッド vs 並列度）。
- **group commit / Nagleのアルゴリズム**: DBのfsyncやTCP送信をバッファして一括処理すると1回あたりのオーバーヘッドは減るが、バッファが溜まるまでの待ち時間(レイテンシ)が伸びる、というのも同じ「バッチ化コスト vs レイテンシ」構造。
- **経済発注量（EOQ）モデル**: 発注(=ジョブ起動)ごとの固定コストと、注文を溜め込むことによる保管コスト(≒待ち時間)のトレードオフを最小化する在庫理論の古典問題とも数式的に同型。

共通しているのは「固定オーバーヘッドを何回払うか」対「並列/バッチ化による待ち時間短縮」という同じ形の目的関数を最小化する問題である点。CI/CDのジョブ分割は、この一般問題の一インスタンスに過ぎない。
