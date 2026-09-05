import urllib.request
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

fonts = [
    ("Montserrat-Regular.ttf", "https://github.com/JulietaUla/Montserrat/raw/master/fonts/ttf/Montserrat-Regular.ttf"),
    ("Montserrat-Bold.ttf", "https://github.com/JulietaUla/Montserrat/raw/master/fonts/ttf/Montserrat-Bold.ttf"),
    ("Montserrat-Black.ttf", "https://github.com/JulietaUla/Montserrat/raw/master/fonts/ttf/Montserrat-Black.ttf")
]

os.makedirs("src/assets/fonts/montserrat", exist_ok=True)

for name, url in fonts:
    path = os.path.join("src/assets/fonts/montserrat", name)
    print(f"Downloading {name}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response, open(path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Saved {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
