import subprocess, os

repo = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project'
rel = 'src/components/Sidebar.tsx'
subprocess.run(['git', 'checkout', '--', rel], cwd=repo, check=True)

path = os.path.join(repo, rel)
with open(path, 'r', encoding='utf-8') as f:
    data = f.read()

data = data.replace('/my-study-notes/', '/')
with open(path, 'w', encoding='utf-8') as f:
    f.write(data)

print('sidebar minimal patch applied')
