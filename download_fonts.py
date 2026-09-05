import urllib.request
import zipfile
import io
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

os.makedirs('src/assets/fonts', exist_ok=True)

def download_font(url, extract_to_dir=None, save_as=None):
    print(f"Downloading from {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        data = response.read()
        
        if extract_to_dir:
            # It's a zip file
            with zipfile.ZipFile(io.BytesIO(data)) as z:
                for fileinfo in z.infolist():
                    if fileinfo.filename.lower().endswith(('.ttf', '.otf')):
                        z.extract(fileinfo, extract_to_dir)
            print(f"Successfully extracted fonts to {extract_to_dir}")
        elif save_as:
            with open(save_as, 'wb') as f:
                f.write(data)
            print(f"Successfully saved to {save_as}")
            
    except Exception as e:
        print(f"Failed to download from {url}: {e}")

if __name__ == "__main__":
    # Download Montserrat (Regular and Bold)
    download_font('https://raw.githubusercontent.com/google/fonts/main/ofl/montserrat/Montserrat-Regular.ttf', save_as='src/assets/fonts/Montserrat-Regular.ttf')
    download_font('https://raw.githubusercontent.com/google/fonts/main/ofl/montserrat/Montserrat-Bold.ttf', save_as='src/assets/fonts/Montserrat-Bold.ttf')
    
    # Download Delight from DaFont
    download_font('https://dl.dafont.com/dl/?f=delight', extract_to_dir='src/assets/fonts')
