"""Shrink the photos for the web: max 1200px wide, JPEG quality 82, EXIF removed.

Removing EXIF matters: phone photos can carry GPS location in their metadata.

Usage (needs Python 3 + Pillow:  pip install pillow):
    python tools/compress_photos.py            # processes ./photos in place
    python tools/compress_photos.py path/to/folder
"""
import sys
from pathlib import Path

from PIL import Image, ImageOps

MAX_W = 1200
QUALITY = 82


def main(folder: Path) -> None:
    files = sorted(p for p in folder.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp", ".heic"})
    if not files:
        print(f"No photos found in {folder}")
        return
    for src in files:
        im = Image.open(src)
        im = ImageOps.exif_transpose(im).convert("RGB")  # keep the right orientation, drop alpha
        if im.width > MAX_W:
            im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
        dst = src.with_suffix(".jpg")
        before = src.stat().st_size
        im.save(dst, "JPEG", quality=QUALITY, optimize=True, progressive=True)  # no exif= → metadata removed
        if dst != src:
            src.unlink()
        print(f"{dst.name}: {before // 1024} KB -> {dst.stat().st_size // 1024} KB ({im.width}x{im.height})")


if __name__ == "__main__":
    main(Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent / "photos")
