import os

repo = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project'
page_path = os.path.join(repo, 'src', 'app', 'page.tsx')
with open(page_path, 'r', encoding='utf-8') as f:
    page = f.read()

old = """      } else {
        // No remote progress yet - push local if exists
        const local = loadProgressFromLocal();
        if (local.subjects && Object.keys(local.subjects).length > 0) {
          // We'll sync on next mark
        }
        setSyncStatus("idle");
      }"""

new = """      } else {
        // No remote progress yet - push local if exists
        const local = loadProgressFromLocal();
        if (local.subjects && Object.keys(local.subjects).length > 0) {
          await syncProgressToGitHub(local);
        }
        setSyncStatus("idle");
      }"""

if old in page:
    page = page.replace(old, new)
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(page)
    print('page.tsx sync bug fixed')
else:
    print('target block not found in page.tsx')
