"""
Ruptech Image Optimizer
========================
Drop your raw product images (JPG / PNG / HEIC / WEBP) into any subfolder
under  public/images/products/  then run this script.

What it does:
  • Converts every image to WebP (best compression + quality)
  • Resizes to max 1200px wide (keeps aspect ratio)
  • Strips EXIF metadata (privacy + size)
  • Prints before/after file sizes so you can see the savings

Usage:
  python optimize_images.py

Run from anywhere — it auto-finds the public/images folder.
"""

import sys, os
from pathlib import Path
from PIL import Image, ExifTags

# ── Config ────────────────────────────────────────────────────────────────────
SCRIPT_DIR   = Path(__file__).resolve().parent
PUBLIC_DIR   = SCRIPT_DIR / "public" / "images"
MAX_WIDTH    = 1200   # px — full-size product image
WEBP_QUALITY = 82     # 0-100 (82 is visually lossless for most product photos)

SUPPORTED = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', '.webp', '.heic'}

# ── Helpers ───────────────────────────────────────────────────────────────────
def human(size):
    for unit in ['B','KB','MB']:
        if size < 1024:
            return f"{size:.1f} {unit}"
        size /= 1024
    return f"{size:.1f} GB"

def fix_orientation(img):
    """Respect EXIF orientation so phone photos aren't rotated."""
    try:
        exif = img._getexif()
        if not exif:
            return img
        for tag, val in exif.items():
            if ExifTags.TAGS.get(tag) == 'Orientation':
                ops = {3: 180, 6: 270, 8: 90}
                if val in ops:
                    img = img.rotate(ops[val], expand=True)
                break
    except Exception:
        pass
    return img

def resize(img, max_w):
    w, h = img.size
    if w <= max_w:
        return img
    ratio = max_w / w
    return img.resize((max_w, int(h * ratio)), Image.LANCZOS)

def convert_image(src: Path):
    orig_bytes = src.stat().st_size
    dest_full  = src.with_suffix('.webp')

    try:
        with Image.open(src) as img:
            img = fix_orientation(img)
            # Convert palette/RGBA images for JPEG-compat WebP
            if img.mode in ('P', 'RGBA', 'LA'):
                img = img.convert('RGBA')
            else:
                img = img.convert('RGB')

            # Full-size
            full = resize(img.copy(), MAX_WIDTH)
            full.save(dest_full, 'WEBP', quality=WEBP_QUALITY, method=6)

        new_bytes = dest_full.stat().st_size
        saving = (1 - new_bytes / orig_bytes) * 100 if orig_bytes else 0
        print(f"  [OK]  {src.name}")
        print(f"        {human(orig_bytes)} → {human(new_bytes)}  ({saving:.0f}% smaller)")

        # Remove original if it's not already a WebP
        if src.suffix.lower() != '.webp':
            src.unlink()
            print(f"        Original deleted.")
    except Exception as e:
        print(f"  [ERR] {src.name}: {e}")

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    print(f"\nRuptech Image Optimizer")
    print(f"Scanning: {PUBLIC_DIR}\n")

    files = [f for f in PUBLIC_DIR.rglob('*') if f.suffix.lower() in SUPPORTED and f.is_file()]

    if not files:
        print("No images found. Drop your product photos into:")
        for folder in PUBLIC_DIR.iterdir():
            if folder.is_dir():
                print(f"  {folder}")
        return

    print(f"Found {len(files)} image(s):\n")
    for f in files:
        convert_image(f)

    print("\nDone! All images are now WebP and ready to use in Next.js.\n")
    print("In your JSX, use:")
    print("  import Image from 'next/image';")
    print("  <Image src=\"/images/products/panel-enclosures/your-image.webp\"")
    print("         alt=\"...\" width={800} height={600} />")

if __name__ == '__main__':
    main()
