// 高等数学 — 第四章：定积分
export default `
## 📖 知识要点

### 1. 定积分的定义

设函数 $f(x)$ 在 $[a, b]$ 上有界，将区间分成 $n$ 等份，每份长度 $\Delta x = \frac{b-a}{n}$，任取 $\xi_i \in [x_{i-1}, x_i]$，作和：
$$S_n = \sum_{i=1}^{n} f(\xi_i) \Delta x$$

当 $n \to \infty$ 时，若极限存在且与分割方式无关，则称此极限为 $f(x)$ 在 $[a, b]$ 上的**定积分**：
$$\int_a^b f(x) dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(\xi_i) \Delta x$$

### 2. 牛顿-莱布尼茨公式（微积分基本定理）

若 $F(x)$ 是 $f(x)$ 在 $[a, b]$ 上的连续原函数，则：
$$\int_a^b f(x) dx = F(b) - F(a)$$

这是联系微分学与积分学的桥梁。

### 3. 定积分的性质

- **线性性**：$\int_a^b [kf(x) + mg(x)] dx = k\int_a^b f(x) dx + m\int_a^b g(x) dx$
- **区间可加性**：$\int_a^b f(x) dx = \int_a^c f(x) dx + \int_c^b f(x) dx$
- **保号性**：若 $f(x) \geq 0$，则 $\int_a^b f(x) dx \geq 0$（$a < b$）
- **估值定理**：若 $m \leq f(x) \leq M$，则 $m(b-a) \leq \int_a^b f(x) dx \leq M(b-a)$
- **中值定理**：存在 $\xi \in [a, b]$，使得 $\int_a^b f(x) dx = f(\xi)(b-a)$

### 4. 变上限积分

设 $f(x)$ 连续，定义：
$$\Phi(x) = \int_a^x f(t) dt$$

则 $\Phi'(x) = f(x)$，即变上限积分是 $f(x)$ 的一个原函数。

### 5. 定积分的计算方法

- **牛顿-莱布尼茨公式**（最常用）
- **换元法**：令 $x = \varphi(t)$，注意换元必换限
- **分部积分法**：$\int_a^b u dv = [uv]_a^b - \int_a^b v du$

### 6. 定积分的几何应用

- **面积**：$S = \int_a^b |f(x) - g(x)| dx$
- **旋转体体积**：$V = \pi \int_a^b [f(x)]^2 dx$
- **旋转曲面面积**：$S = 2\pi \int_a^b f(x)\sqrt{1 + [f'(x)]^2} dx$

> 💡 **提示**：定积分的本质是"无限求和"。牛顿-莱布尼茨公式把求定积分转化为求原函数，是计算的核心方法。
`;
