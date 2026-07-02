import os

repo = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project'
path = os.path.join(repo, 'src', 'components', 'Sidebar.tsx')
with open(path, 'r', encoding='utf-8', errors='replace') as f:
    data = f.read()

# Replace garbled text with correct Chinese.
data = data.replace('绔?', '章节')
data = data.replace('鈻? : 鈻?', '展开 : 收起')
data = data.replace('Agnes 鉂わ笍', 'Agnes')
data = data.replace('馃摎 My Study Notes', 'My Study Notes')

with open(path, 'w', encoding='utf-8') as f:
    f.write(data)

print('Sidebar.tsx sanitized')
