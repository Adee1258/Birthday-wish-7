import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix literal \n
content = content.replace(r'\n        ,{', '\n        ,{')
content = content.replace(r'\n    ];', '\n    ];')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
