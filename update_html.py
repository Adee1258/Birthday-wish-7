import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_text = '''🌺🥳🎉 Happy Birthday To You 🎁✨<br>
Meri Jaan 🔵❤️🥳<br>
God bless you 🥰🥰😍😍 My world 🌍🐥<br>
🌍💗 My everything 🤗🤔<br>
Allah give You alot 😊🥺🙂<br>
❤️❤️ Happiness in Your Life 🦋🥰😍<br>
🥰🥰 Stay blessed 😇😇 Stay Happy 💕💕<br>
🌸🌸 You're Soo special for me 💗🥰😍<br>
I feel so lucky to<br>
have you in my life 💯💫💝<br>
❤️❤️I love You sooo much 🌍🔵❤️❤️😘😘😘😘<br>
Meri Zindagi ❤️<br>
Happy birthday 🎉<br>
To You 🤗🐥<br>
Mine 🌍🔵❤️🥳🌍😘<br>
MY LOVE 😘 MY SWEETHEART<br>
💋 MY JANU 🥰🥰🥰MY WORLD 🌍 MY SAKOON ❤️🔥MY<br>
HAPPINESS 😊😊😊😊<br>
I MISS YOU 🥺😘<br>
I ALWAYS WITH YOU 😍<br>
🎉🎉🎉🥳🥳JAAAAN K TOTY 💝🌺🎉🎉🎉🎉<br>
❤️❤️❤️❤️❤️<br><br>
Happy Birthday<br>
I love you'''

pattern = r'(<p class="letter-body">)(.*?)(</p>)'
match = re.search(pattern, content, re.DOTALL)
if match:
    new_content = content[:match.start(2)] + new_text + content[match.end(2):]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("HTML updated")
else:
    print("Pattern not found")
