---
title: "数式を含む記事のテスト"
date: "2026-01-19"
description: "LaTeX/KaTeXを使った数式表示のデモ"
tags: ["数学", "TeX", "LaTeX"]
---

# 数式を含む記事のテスト

このブログではKaTeXを使って数式を表示できます。

## インライン数式

文中に数式を埋め込む場合は、`$`で囲みます。例えば、$E = mc^2$ というアインシュタインの有名な式や、$a^2 + b^2 = c^2$ というピタゴラスの定理などです。

## ブロック数式

独立した数式ブロックは`$$`で囲みます。

### 二次方程式の解の公式

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### 積分の例

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

### 行列

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix}
$$

### フーリエ変換

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} dx
$$

### シグマ記法

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## 複雑な数式

ベイズの定理：

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

オイラーの等式（世界で最も美しい数式と言われています）：

$$
e^{i\pi} + 1 = 0
$$

## まとめ

このように、TeX/LaTeX記法を使って数式を美しく表示できます！
