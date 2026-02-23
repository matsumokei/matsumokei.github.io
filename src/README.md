# src/ Directory Structure

エンタープライズレベルのNext.jsプロジェクト構造に基づいた、スケーラブルなアーキテクチャです。

## 📁 ディレクトリ構造

```
src/
├── app/              # Next.js App Router
│   ├── blog/        # ブログページ
│   ├── tags/        # タグページ
│   ├── layout.tsx   # ルートレイアウト
│   └── page.tsx     # トップページ
├── components/      # UIコンポーネント
│   ├── base/       # 基本コンポーネント（Atoms）
│   ├── global/     # グローバルコンポーネント
│   └── molecules/  # 複合コンポーネント
├── content/        # マークダウンコンテンツ
│   └── blog/      # ブログ記事
├── features/       # 機能モジュール
│   ├── blog/      # ブログ機能
│   └── tags/      # タグ機能
├── lib/           # ユーティリティ・ヘルパー
│   ├── hooks/    # カスタムフック
│   └── utils/    # ユーティリティ関数
├── config/        # 設定ファイル
└── types/         # 型定義
```

## 🎯 アーキテクチャの原則

### Components

- **base/**: 再利用可能な最小単位のコンポーネント（Button, Input, Iconなど）
- **global/**: アプリケーション全体で使用されるコンポーネント（Header, Footerなど）
- **molecules/**: 複数のbaseコンポーネントを組み合わせた複合コンポーネント

### Features

ドメイン駆動設計に基づいた機能モジュール。各機能は以下を含むことができます：
- `components/`: 機能固有のコンポーネント
- `hooks/`: 機能固有のフック
- `utils/`: 機能固有のユーティリティ
- `types/`: 機能固有の型定義

### Lib

アプリケーション全体で使用される共通ライブラリ：
- `hooks/`: 再利用可能なReactフック
- `utils/`: ユーティリティ関数

## 📦 インポートエイリアス

```typescript
@/components/*    → src/components/*
@/lib/*          → src/lib/*
@/features/*     → src/features/*
@/config/*       → src/config/*
@/types/*        → src/types/*
```

## ✨ 利点

1. **スケーラビリティ**: 機能ごとにコードを整理
2. **保守性**: 責任の明確な分離
3. **再利用性**: コンポーネントとユーティリティの共有が容易
4. **テスタビリティ**: 独立したモジュールのテストが簡単
5. **開発効率**: 明確な構造により新機能の追加が容易
