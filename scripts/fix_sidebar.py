import os

p = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project\src\components\Sidebar.tsx'
with open(p, 'r', encoding='utf-8', errors='replace') as f:
    data = f.read()

data = data.replace('馃摎 My Study Notes', 'My Study Notes')
data = data.replace('绔?', '章节')
data = data.replace('鈻? : 鈻?', '展开 : 收起')
data = data.replace('Agnes 鉂わ笍', 'Agnes')

with open(p, 'w', encoding='utf-8') as f:
    f.write(data)

print('Sidebar.tsx fixed')
