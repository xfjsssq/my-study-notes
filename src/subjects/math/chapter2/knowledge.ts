// 高等数学 — 第二章：导数与微分
export default `
## 📖 知识要点

### 1. 导数的定义

导数是描述函数在某一点处变化率的工具。设函数 $y=f(x)$ 在点 $x_0$ 的某邻域内有定义，如果极限

$$\lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$$

存在，则称 $f(x)$ 在点 $x_0$ 处**可导**，该极限值称为 $f(x)$ 在 $x_0$ 处的**导数**，记作 $f'(x_0)$ 或 $\frac{dy}{dx}\big|_{x=x_0}$。

等价形式：
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### 2. 基本求导公式

- 常数：$(C)' = 0$
- 幂函数：$(x^n)' = nx^{n-1}$
- 指数函数：$(a^x)' = a^x \ln a$，特别地 $(e^x)' = e^x$
- 对数函数：$(\log_a x)' = \frac{1}{x \ln a}$，特别地 $(\ln x)' = \frac{1}{x}$
- 三角函数：
  - $(\sin x)' = \cos x$
  - $(\cos x)' = -\sin x$
  - $(\tan x)' = \sec^2 x$
  - $(\cot x)' = -\csc^2 x$

### 3. 求导法则

设 $u(x)$、$v(x)$ 均可导：

- **加减法则**：$(u \pm v)' = u' \pm v'$
- **乘积法则**：$(uv)' = u'v + uv'$
- **商法则**：$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$
- **链式法则**：若 $y = f(u)$，$u = g(x)$，则 $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$

### 4. 高阶导数

导数的导数称为二阶导数：
$$f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right)$$

### 5. 微分

函数 $y = f(x)$ 的微分为：
$$dy = f'(x) dx$$

> 💡 **提示**：链式法则是求导的核心，复合函数求导时要逐层剥开，每一层求导后再乘以内层的导数。
`;
