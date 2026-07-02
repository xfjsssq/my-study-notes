import os

base = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project\src\subjects\math'

chapter5 = r"""// 高等数学 - 第五章：多元函数微分学
export default `
## 多元函数微分学

### 1. 偏导数

设函数 z=f(x,y) 在点 (x0,y0) 的某邻域内有定义，当 y 固定在 y0 时，f(x,y0) 在 x0 处可导，称此导数为函数 z=f(x,y) 在点 (x0,y0) 对 x 的偏导数。

### 2. 全微分

若函数 z=f(x,y) 在点 (x,y) 的全增量可表示为线性主部加高阶无穷小，则称函数在该点可微。

### 3. 多元复合函数求导

链式法则：若 z=f(u,v)，而 u=phi(x,y), v=psi(x,y)，则需正确套用链式法则。

### 4. 方向导数与梯度

方向导数描述函数在某点沿某方向的变化率；梯度是一个向量，指向函数增长最快的方向。

### 5. 多元函数极值

求无条件极值时，先求驻点，再利用二阶偏导数判别；有条件极值常用拉格朗日乘数法。
`;"""

chapter6 = r"""// 高等数学 - 第六章：多元函数积分学
export default `
## 多元函数积分学

### 1. 二重积分

二重积分是定积分在二维区域的推广，几何上可理解为曲顶柱体的体积。

### 2. 三重积分

三重积分将积分区域推广到三维空间，常用于计算质量、重心等物理量。

### 3. 曲线积分

曲线积分分为对弧长和对坐标的曲线积分，是物理学中做功、流量等问题的数学工具。

### 4. 曲面积分

曲面积分是曲线积分在曲面上的推广，与通量、散度等内容密切相关。

### 5. 场论初步

了解梯度、散度、旋度的基本意义，建立多元微积分与物理场之间的联系。
`;"""

open(os.path.join(base, 'chapter5', 'knowledge.ts'), 'w', encoding='utf-8').write(chapter5)
open(os.path.join(base, 'chapter6', 'knowledge.ts'), 'w', encoding='utf-8').write(chapter6)
print('chapter5/chapter6 written')
