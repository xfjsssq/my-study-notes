import os
p = r'D:\Agent\Agent  workplace\Claude Code工作区\learn\project\src\subjects\math\chapter5\knowledge.ts'
data = open(p, 'rb').read()
print(data[:20])
print('utf8 sig:', data[:3] == b'\xef\xbb\xbf')
