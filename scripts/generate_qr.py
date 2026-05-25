"""Generate a QR code for the program website."""

from pathlib import Path

import qrcode
from qrcode.constants import ERROR_CORRECT_M

ROOT = Path(__file__).resolve().parents[1]
URL = "https://touradam.github.io/AI-Builder-Bootcamp/"
OUTPUT = ROOT / "assets" / "qr-website.png"


def main() -> None:
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_M,
        box_size=12,
        border=4,
    )
    qr.add_data(URL)
    qr.make(fit=True)

    qr_img = qr.make_image(fill_color="#0c0c0f", back_color="#ffffff")
    qr_img.save(OUTPUT, format="PNG", optimize=True)
    size = qr_img.size[0]
    print(f"Saved {OUTPUT} ({size}x{size}px)")


if __name__ == "__main__":
    main()
