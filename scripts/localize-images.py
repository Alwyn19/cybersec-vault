from pathlib import Path
import re
import urllib.request

targets = {
    "src/content/writeups/SQL Injection Bypass WAF Advanced.md": "public/images/writeups/sql-injection-bypass-waf-advanced",
    "src/content/labs/file-upload-vulnerability-labs.md": "public/images/labs/file-upload-vulnerability-labs",
}

image_pattern = re.compile(r'!\[(.*?)\]\((https://hackmd\.io/_uploads/[^)]+)\)')

for md_file, image_dir in targets.items():
    md_path = Path(md_file)
    img_dir = Path(image_dir)

    if not md_path.exists():
        print(f"[skip] Không thấy file: {md_file}")
        continue

    img_dir.mkdir(parents=True, exist_ok=True)

    content = md_path.read_text(encoding="utf-8")
    matches = list(image_pattern.finditer(content))

    if not matches:
        print(f"[skip] Không có ảnh HackMD trong: {md_file}")
        continue

    replacements = {}

    for index, match in enumerate(matches, start=1):
        alt_text = match.group(1) or "image"
        url = match.group(2)

        ext = url.split(".")[-1].split("?")[0]
        if ext.lower() not in ["png", "jpg", "jpeg", "gif", "webp"]:
            ext = "png"

        filename = f"image-{index:02d}.{ext}"
        output_path = img_dir / filename

        print(f"[download] {url}")
        urllib.request.urlretrieve(url, output_path)

        public_relative = image_dir.replace("public/", "")
        new_link = f"![{alt_text}](../../{public_relative}/{filename})"

        replacements[match.group(0)] = new_link

    for old, new in replacements.items():
        content = content.replace(old, new)

    md_path.write_text(content, encoding="utf-8")
    print(f"[ok] Đã sửa ảnh trong {md_file}")
