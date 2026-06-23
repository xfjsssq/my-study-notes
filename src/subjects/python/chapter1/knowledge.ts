// Python 自学 — 第一章：Python 基础语法
export default `
## 📖 知识要点

### 1. 变量与数据类型

Python 是动态类型语言，变量无需声明类型。

\`\`\`python
name = "Alice"        # 字符串 str
age = 20              # 整数 int
score = 95.5          # 浮点数 float
is_student = True     # 布尔 bool
print(type(name))     # <class 'str'>
\`\`\`

### 2. 控制流程

\`\`\`python
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("需要努力")
\`\`\`

### 3. 函数定义

\`\`\`python
def greet(name: str) -> str:
    return f"你好, {name}!"

result = greet("世界")
print(result)  # 你好, 世界!
\`\`\`

> 💡 多写代码是学习 Python 最快的方式。
`;
