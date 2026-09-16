import re

with open('style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Make letter scale larger when open and centered
# original: transform: translateY(-200px) scale(1);
content = content.replace('transform: translateY(-200px) scale(1);', 'transform: translateY(-220px) scale(1.25);')

# Increase letter body max-height so we don't have to scroll too much
# original: max-height: 160px;
content = content.replace('max-height: 160px;', 'max-height: 280px;\n    font-size: 0.65rem;')

# original: height: 310px; for letter-card
content = content.replace('height: 310px;', 'height: 360px;')

# Since we increased letter height from 310 to 360, it might peek out more.
# Let's push it down more when closed:
# original: transform: translateY(15px) scale(0.92);
content = content.replace('transform: translateY(15px) scale(0.92);', 'transform: translateY(60px) scale(0.85);')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(content)
print("CSS updated")
