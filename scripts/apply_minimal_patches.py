import os

repo = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project'
page_path = os.path.join(repo, 'src', 'app', 'page.tsx')
chapter_path = os.path.join(repo, 'src', 'app', 'subjects', '[...slug]', 'ChapterPageClient.tsx')

with open(page_path, 'r', encoding='utf-8') as f:
    page = f.read()

page = page.replace('/my-study-notes/', '/')
# Optional: keep page.tsx otherwise original to avoid new encoding damage.

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page)

with open(chapter_path, 'r', encoding='utf-8') as f:
    chapter = f.read()

chapter = chapter.replace('未找到章节', '章节未找到')
# keep otherwise original

with open(chapter_path, 'w', encoding='utf-8') as f:
    f.write(chapter)

print('minimal patches applied')
