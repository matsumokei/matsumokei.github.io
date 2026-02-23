---
title: "TypeScriptの型システム入門"
date: "2026-01-17"
description: "TypeScriptの基本的な型システムについて学びます"
tags: ["TypeScript", "プログラミング", "型システム"]
---

# TypeScriptの型システム入門

TypeScriptは、JavaScriptに静的型付けを追加した言語です。

## 基本的な型

TypeScriptには以下のような基本的な型があります：

### プリミティブ型

```typescript
// 文字列
let name: string = "太郎";

// 数値
let age: number = 25;

// 真偽値
let isActive: boolean = true;

// null と undefined
let nothing: null = null;
let notDefined: undefined = undefined;
```

### 配列とタプル

```typescript
// 配列
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["太郎", "花子"];

// タプル
let tuple: [string, number] = ["age", 30];
```

## インターフェース

インターフェースを使うと、オブジェクトの構造を定義できます。

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // オプショナル
}

const user: User = {
  id: 1,
  name: "太郎",
  email: "taro@example.com"
};
```

## ジェネリクス

ジェネリクスを使うと、再利用可能な型を作成できます。

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("Hello");
const result2 = identity<number>(42);
```

## ユニオン型と交差型

```typescript
// ユニオン型
type Status = "pending" | "approved" | "rejected";

// 交差型
type Admin = User & {
  role: "admin";
  permissions: string[];
};
```

## まとめ

TypeScriptの型システムを使うことで、コードの安全性と保守性が向上します。
