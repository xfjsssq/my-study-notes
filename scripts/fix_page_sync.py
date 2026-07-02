import os

repo = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project'
page_path = os.path.join(repo, 'src', 'app', 'page.tsx')
with open(page_path, 'r', encoding='utf-8') as f:
    page = f.read()

if 'syncProgressToGitHub' not in page:
    page = page.replace(
        'import {\n  loadProgressFromLocal,\n  loadProgressFromGitHub,\n  saveProgressToLocal,\n} from "@/lib/progress";',
        'import {\n  loadProgressFromLocal,\n  loadProgressFromGitHub,\n  saveProgressToLocal,\n  syncProgressToGitHub,\n} from "@/lib/progress";'
    )

old_block = """        const local = loadProgressFromLocal();
        if (local.subjects && Object.keys(local.subjects).length > 0) {
          // We'll sync on next mark
        }
        setSyncStatus("idle");"""

new_block = """        const local = loadProgressFromLocal();
        if (local.subjects && Object.keys(local.subjects).length > 0) {
          await syncProgressToGitHub(local);
        }
        setSyncStatus("idle");"""

if old_block in page:
    page = page.replace(old_block, new_block)
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(page)
    print('page.tsx progress sync fixed')
else:
    print('target block not found')
