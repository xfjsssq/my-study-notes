import os

base = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project\src'

# Fix page.tsx
page_path = os.path.join(base, 'app', 'page.tsx')
with open(page_path, 'r', encoding='utf-8', errors='replace') as f:
    page = f.read()

page = page.replace('/my-study-notes/', '/')
page = page.replace('馃摎 鎴戠殑瀛︿範绗旇', 'My Study Notes')
page = page.replace('绯荤粺鍖栧彲涔犳紝鍙鏀鐭ヨ瘑鎴愪负涓€绉嶇Н绱', '打造你的个人学习空间，让知识成为一种习惯')
page = page.replace('鎬昏繘搴', '总体进度')
page = page.replace('绔犺妭鏈鏄', '章节完成度')
page = page.replace('浠GitHub 鍚屾枃杩涘', '同步 GitHub 进度')
page = page.replace('杩涘害宸插悓姝', '进度同步成功')
page = page.replace('鍚屾枃澶辫触', '同步失败')

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page)

# Fix ChapterPageClient.tsx
chapter_path = os.path.join(base, 'app', 'subjects', '[...slug]', 'ChapterPageClient.tsx')
with open(chapter_path, 'r', encoding='utf-8', errors='replace') as f:
    chapter = f.read()

chapter = chapter.replace('未找到章节', '章节未找到')

with open(chapter_path, 'w', encoding='utf-8') as f:
    f.write(chapter)

print('page.tsx and ChapterPageClient.tsx rewritten with valid utf-8')
