import re

with open('style.css', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('transform: translateY(-220px) scale(1.25);', 'transform: translateY(-190px) scale(1.22);')
content = content.replace('font-size: 0.65rem;', 'font-size: 0.68rem;')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(content)
