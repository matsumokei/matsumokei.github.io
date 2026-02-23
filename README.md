# Next.js Markdown Blog

Next.jsとMarkdownで構築された、モダンなブログシステムです。
エンタープライズレベルのアーキテクチャを採用し、スケーラブルで保守性の高い構造になっています。

## ✨ 機能

- 📝 Markdownで記事を書ける
- 🏷️ タグ機能
- 🎨 Tailwind CSSでスタイリング
- ⚡ Next.js App Routerによる高速なビルド
- 🌙 ダークモード対応（手動切り替え可能）
- 📖 読了時間の表示
- 🔍 SEOフレンドリー（OGP、Twitter Card対応）
- 📱 完全レスポンシブデザイン
- 🎯 アクセシビリティ対応
- ⚙️ 数式表示（KaTeX）
- 💻 シンタックスハイライト
- 🔗 ソーシャルメディアリンク
- 📑 目次機能（Zenn風）

## 🏗️ アーキテクチャ

エンタープライズレベルのディレクトリ構造を採用：

```
nextjs-blog/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── blog/        # ブログページ
│   │   ├── tags/        # タグページ
│   │   ├── layout.tsx   # ルートレイアウト
│   │   └── page.tsx     # トップページ
│   ├── components/      # UIコンポーネント
│   │   ├── base/       # 基本コンポーネント（Atoms）
│   │   ├── global/     # グローバルコンポーネント
│   │   └── molecules/  # 複合コンポーネント
│   ├── content/        # マークダウンコンテンツ
│   │   └── blog/      # ブログ記事
│   ├── features/       # 機能モジュール
│   │   ├── blog/      # ブログ機能
│   │   └── tags/      # タグ機能
│   ├── lib/           # ユーティリティ・ヘルパー
│   │   ├── hooks/    # カスタムフック
│   │   └── utils/    # ユーティリティ関数
│   ├── config/        # 設定ファイル
│   └── types/         # 型定義
├── public/            # 静的ファイル
└── content/          # Markdownコンテンツ
```

詳細は [src/README.md](src/README.md) を参照してください。

## セットアップ

### インストール

```bash
pnpm install
```

### 環境変数の設定

`.env.example` をコピーして `.env.local` を作成し、必要な環境変数を設定します：

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### ビルド

```bash
pnpm build
```

### 本番環境での起動

```bash
pnpm start
```

## ブログ記事の追加

`content/blog/` ディレクトリに新しいMarkdownファイルを作成します。

### フロントマター形式

```markdown
---
title: "記事のタイトル"
date: "2026-01-19"
description: "記事の説明"
tags: ["タグ1", "タグ2"]
---

ここに記事の本文を書きます...
```

### サポートしているフィールド

- `title`: 記事のタイトル（必須）
- `date`: 公開日（必須、ISO 8601形式）
- `description`: 記事の説明（任意）
- `tags`: タグの配列（任意）
- `draft`: 下書きフラグ（trueの場合、記事は公開されません）

## ディレクトリ構造

```
nextjs-blog/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/              # ブログページ
│   │   ├── tags/              # タグページ
│   │   ├── layout.tsx         # ルートレイアウト
│   │   ├── page.tsx           # トップページ
│   │   └── globals.css        # グローバルスタイル
│   ├── components/            # UIコンポーネント
│   │   ├── base/             # 基本コンポーネント
│   │   ├── global/           # グローバルコンポーネント（Header, Footer）
│   │   └── molecules/        # 複合コンポーネント
│   ├── content/              # マークダウンコンテンツ
│   │   └── blog/            # ブログ記事
│   ├── features/             # 機能モジュール
│   │   ├── blog/            # ブログ機能
│   │   └── tags/            # タグ機能
│   ├── lib/                  # ユーティリティ
│   │   ├── hooks/           # カスタムフック
│   │   └── utils/           # ユーティリティ関数
│   ├── config/               # 設定ファイル
│   │   ├── site.ts          # サイト設定
│   │   └── paths.ts         # パス定義
│   └── types/                # 型定義
│       └── index.ts         # 共通型
├── public/                   # 静的ファイル
└── content/                  # マークダウンコンテンツ（旧）
```

詳細は [src/README.md](src/README.md) を参照してください。

## 技術スタック

- **Next.js 16**: Reactフレームワーク
- **TypeScript**: 型安全性
- **Tailwind CSS**: CSSフレームワーク
- **pnpm**: パッケージマネージャー
- **gray-matter**: Markdownフロントマターパーサー
- **next-mdx-remote**: MDX/Markdownレンダリング
- **rehype-highlight**: コードハイライト
- **date-fns**: 日付フォーマット
- **reading-time**: 読了時間計算

## カスタマイズ

### サイト名の変更

`app/layout.tsx` のメタデータと `components/Header.tsx` のサイト名を編集してください。

### スタイルの変更

Tailwind CSSを使用しているため、コンポーネント内のクラス名を編集することでスタイルを変更できます。

## ライセンス

MIT
