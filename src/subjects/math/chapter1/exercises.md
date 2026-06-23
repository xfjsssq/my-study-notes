# 练习题目

## 例 1：计算极限
求极限：
$$\\lim_{x \\to 0} \\frac{\\sin 3x}{x}$$

<details>
<summary>查看答案</summary>

$$\\lim_{x \\to 0} \\frac{\\sin 3x}{x} = \\lim_{x \\to 0} 3 \\cdot \\frac{\\sin 3x}{3x} = 3 \\cdot 1 = 3$$

</details>

## 例 2：利用夹逼定理
证明：
$$\\lim_{n \\to \\infty} \\frac{\\sin n}{n} = 0$$

<details>
<summary>查看答案</summary>

因为 $-1 \\leq \\sin n \\leq 1$，所以：
$$-\\frac{1}{n} \\leq \\frac{\\sin n}{n} \\leq \\frac{1}{n}$$

而 $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$，由夹逼定理可知原极限为 0。
</details>
