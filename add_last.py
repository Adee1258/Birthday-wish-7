import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add the new moment at the end of the array
array_match = re.search(r'(const memoryMoments = \[)(.*?)(\];)', content, re.DOTALL)
if array_match:
    prefix = array_match.group(1)
    array_content = array_match.group(2)
    suffix = array_match.group(3)
    
    new_moment = '''        ,{
            tag: "MOMENT TWENTY",
            title: "Beautiful Journey",
            photo: "assets/last.jpeg",
            caption: "محبت کی آخری منزل بھی تم ہو،\\nمیری ہر دعا کا حاصل بھی تم ہو۔ ✨",
            isUrdu: true
        }'''
    
    # We append to the array content
    # Note that array_content ends with the last object (MOMENT NINETEEN)
    # We can just add a comma before the new object if needed, or simply append it.
    
    # Clean trailing spaces and newlines at the end of array_content
    array_content = array_content.rstrip()
    new_array_content = array_content + '\\n' + new_moment + '\\n    '
    
    new_full_array = f'{prefix}{new_array_content}{suffix}'
    
    content = content[:array_match.start()] + new_full_array + content[array_match.end():]

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
