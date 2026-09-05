import os
import glob

components = glob.glob('src/components/**/*.jsx', recursive=True)

for path in components:
    with open(path, 'r') as f:
        content = f.read()
    
    original = content
    # Remove complete style attribute if it only contains fontFamily
    content = content.replace(' style={{ fontFamily: \'"Fraunces", serif\' }}', '')
    
    # Remove fontFamily if it is part of a larger style attribute
    content = content.replace(", fontFamily: '\"Fraunces\", serif'", '')
    content = content.replace("fontFamily: '\"Fraunces\", serif', ", '')
    
    if content != original:
        with open(path, 'w') as f:
            f.write(content)
        print(f"Fixed {path}")

print("Replaced all Fraunces styles")
