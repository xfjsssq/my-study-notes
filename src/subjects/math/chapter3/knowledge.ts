// 高等数学 — 第三章：不定积分
export default `
## 📖 知识要点

### 1. 原函数与不定积分

若 $F'(x) = f(x)$，则称 $F(x)$ 是 $f(x)$ 的**原函数**。

$f(x)$ 的**全体原函数**称为 $f(x)$ 的**不定积分**，记作：
$$\int f(x) dx = F(x) + C$$

其中 $C$ 为任意常数。

### 2. 基本积分公式

- 幂函数：$\int x^n dx = \frac{x^{n+1}}{n+1} + C$（$n \neq -1$）
- 倒数：$\int \frac{1}{x} dx = \ln|x| + C$
- 指数函数：$\int e^x dx = e^x + C$，$\int a^x dx = \frac{a^x}{\ln a} + C$
- 三角函数：
  - $\int \sin x dx = -\cos x + C$
  - $\int \cos x dx = \sin x + C$
  - $\int \sec^2 x dx = \tan x + C$
  - $\int \csc^2 x dx = -\cot x + C$
  - $\int \sec x \tan x dx = \sec x + C$
  - $\int \csc x \cot x dx = -\csc x + C$
- 反三角函数：
  - $\int \frac{1}{\sqrt{1-x^2}} dx = \arcsin x + C$
  - $\int \frac{1}{1+x^2} dx = \arctan x + C$

### 3. 换元积分法（第一类）

若 $\int f(u) du = F(u) + C$，则：
$$\int f(g(x)) \cdot g'(x) dx = F(g(x)) + C$$

### 4. 分部积分法

$$\int u dv = uv - \int v du$$

选取原则：**反对幂三指**（反三角 > 对数 > 幂函数 > 三角 > 指数），排在前面的优先设为 $u$。

> 💡 **提示**：不定积分是求导的逆运算。掌握基本积分公式是基础，换元法和分部积分法是两大核心技巧。
`;
