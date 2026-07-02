import os

base = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project\src\subjects\math'

chapter5 = u"""// 高等数学 - 第五章：多元函数微分学
export default `
## 多元函数微分学

### 1. 偏导数

设函数 z=f(x,y) 在点 (x0,y0) 的某邻域内有定义。当 y 固定在 y0 时，若 f(x,y0) 在 x0 处可导，则称该导数为函数在 (x0,y0) 处对 x 的偏导数。

### 2. 全微分

若函数 z=f(x,y) 在点 (x,y) 处的全增量可表示为线性主部加高阶无穷小，则称函数在该点可微。

### 3. 多元复合函数求导

链式法则：若 z=f(u,v)，而 u=varphi(x,y), v=psi(x,y)，则需要正确套用链式法则求偏导。

### 4. 方向导数与梯度

方向导数描述函数在某点沿某一方向的变化率；梯度是一个向量，指向函数增长最快的方向。

### 5. 多元函数极值

无条件极值先求驻点并用二阶偏导数判别；有条件极值常用拉格朗日乘数法。
`;"""

chapter6 = u"""// 高等数学 - 第六章：多元函数积分学
export default `
## 多元函数积分学

### 1. 二重积分

二重积分是定积分在平面区域上的推广，可用于计算体积、质量等物理量。

### 2. 三重积分

三重积分将积分区域推广到三维空间，常用于质量、重心、转动惯量等计算。

### 3. 曲线积分

曲线积分分为对弧长积分与对坐标积分，是物理学中做功、流量等问题的数学工具。

### 4. 曲面积分

曲面积分是曲线积分在曲面上的推广，与通量、散度等内容密切相关。

### 5. 场论初步

了解梯度、散度、旋度的基本意义，建立多元微积分与物理场之间的联系。
`;"""

open(os.path.join(base, 'chapter5', 'knowledge.ts'), 'w', encoding='utf-8').write(chapter5)
open(os.path.join(base, 'chapter6', 'knowledge.ts'), 'w', encoding='utf-8').write(chapter6)

videos5 = '[]'
videos6 = '[]'
open(os.path.join(base, 'chapter5', 'videos.json'), 'w', encoding='utf-8').write(videos5)
open(os.path.join(base, 'chapter6', 'videos.json'), 'w', encoding='utf-8').write(videos6)

print('chapter5/chapter6 content and video placeholders written')
