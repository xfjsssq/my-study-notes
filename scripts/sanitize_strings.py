import os

base = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project\src'

page_path = os.path.join(base, 'app', 'page.tsx')
with open(page_path, 'r', encoding='utf-8', errors='replace') as f:
    page = f.read()

# Keep replacements narrow and idempotent.
page = page.replace('鍚屾枃澶辫触 鈿狅笍', '同步失败')
page = page.replace('鍚屾枃杩涘', '同步')
page = page.replace('杩涘害宸插悓姝', '同步成功')
page = page.replace('涓粺杩涘澶辫触', '同步失败')
page = page.replace('涓粺杩涘', '同步')

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page)

chapter_path = os.path.join(base, 'app', 'subjects', '[...slug]', 'ChapterPageClient.tsx')
with open(chapter_path, 'r', encoding='utf-8', errors='replace') as f:
    chapter = f.read()

chapter = chapter.replace('绔犺妭鏈鏄', '章节未找到')
chapter = chapter.replace('鍚屾枃澶辫触 鈿狅笍', '同步失败')
chapter = chapter.replace('杩斿洖棣栭〉', '返回首页')
chapter = chapter.replace('章节未找', '章节未找到')

with open(chapter_path, 'w', encoding='utf-8') as f:
    f.write(chapter)

print('sanitized strings third')
