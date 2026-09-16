import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

for i, line in enumerate(content.splitlines()):
    if 'letter' in line.lower() or 'envelope' in line.lower():
        print(f'{i+1}: {line.strip()}')
