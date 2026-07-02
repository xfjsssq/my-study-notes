import subprocess, os

repo = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project'
files = [
    'src/app/page.tsx',
    'src/app/subjects/[...slug]/ChapterPageClient.tsx',
    'src/components/Sidebar.tsx',
]

for rel in files:
    path = os.path.join(repo, rel)
    subprocess.run(['git', 'checkout', '--', rel], cwd=repo, check=True)
    print('restored', rel)
