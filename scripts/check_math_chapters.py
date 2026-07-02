import os

repo = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project'
base = os.path.join(repo, 'src', 'subjects', 'math')
for c in ['chapter2', 'chapter3', 'chapter4']:
    p = os.path.join(base, c, 'knowledge.ts')
    with open(p, 'r', encoding='utf-8', errors='replace') as f:
        text = f.read()
    print(c, 'length:', len(text))
    print(text[:200])
    print('---')
