with open('style.css', 'r', encoding='utf-8') as f:
    content = f.read()

import re
matches = re.finditer(r'(\.envelope-wrapper|\.envelope|\.letter-card|\.letter-body|\.letter-inner-content).*?\{[^{}]*\}', content, re.DOTALL)
for m in matches:
    print(m.group(0))
    print('---')
