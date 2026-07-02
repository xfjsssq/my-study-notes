import os
import subprocess

repo = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project'

files = [
    'src/components/Sidebar.tsx',
    'src/app/page.tsx',
    'src/app/subjects/[...slug]/ChapterPageClient.tsx',
    'src/components/VideoPlayer.tsx',
]

# Ensure clean base from git
for rel in files:
    subprocess.run(['git', 'checkout', '--', rel], cwd=repo, check=True)

# Apply minimal safe fixes with explicit UTF-8 handling
page_path = os.path.join(repo, 'src', 'app', 'page.tsx')
with open(page_path, 'r', encoding='utf-8', errors='replace') as f:
    page = f.read()

page = page.replace('/my-study-notes/', '/')
with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page)

chapter_path = os.path.join(repo, 'src', 'app', 'subjects', '[...slug]', 'ChapterPageClient.tsx')
with open(chapter_path, 'r', encoding='utf-8', errors='replace') as f:
    chapter = f.read()
chapter = chapter.replace('未找到章节', '章节未找到')
with open(chapter_path, 'w', encoding='utf-8') as f:
    f.write(chapter)

# Remove any remaining known garbled sequences from all target files
for rel in files:
    path = os.path.join(repo, rel)
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        data = f.read()
    # Replace only known garbled fragments with safe Chinese/ASCII
    replacements = {
        '绔?': '章节',
        '鈻? : 鈻?': '展开 : 收起',
        'Agnes 鉂わ笍': 'Agnes',
        '馃摎 My Study Notes': 'My Study Notes',
        '鍚屾枃澶辫触 鈿狅笍': '同步失败',
        '鍚屾枃杩涘': '同步',
        '杩涘害宸插悓姝': '同步成功',
        '涓粺杩涘澶辫触': '同步失败',
        '涓粺杩涘': '同步',
        '绔犺妭鏈鏄': '章节未找到',
        '杩斿洖棣栭〉': '返回首页',
    }
    for old, new in replacements.items():
        data = data.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(data)

print('sanitized files rewritten')
