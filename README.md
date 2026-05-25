# Kali Cyan Vault

Một website portfolio/write-up/lab archive phong cách Kali Linux terminal + neon cyan, chạy tốt trên GitHub Pages.

## Tính năng

- Giao diện Kali-inspired, dark terminal, neon cyan, scanline và grid cybersec.
- Viết write-up bằng Markdown trong `src/content/writeups`.
- Lưu lab notes trong `src/content/labs`.
- Lưu code snippets, payloads, cheatsheets trong `src/content/code`.
- Có trang danh sách, trang chi tiết, tag, search/filter phía client.
- Deploy tự động bằng GitHub Actions lên GitHub Pages.
- Chỉ người có quyền push repo mới sửa được nội dung.

## Cài đặt local

```bash
npm install
npm run dev
```

Mở địa chỉ local Astro hiển thị trong terminal, thường là:

```bash
http://localhost:4321
```

## Tạo bài mới

```bash
npm run new:writeup -- "GraphQL auth bypass"
npm run new:lab -- "XSS DOM Lab"
npm run new:code -- "Burp payload checklist"
```

Sau đó sửa file `.md` vừa được tạo trong `src/content/...`.

## Build thử

```bash
npm run build
npm run preview
```

## Deploy lên GitHub Pages

1. Tạo repository GitHub mới, ví dụ: `cybersec-vault`.
2. Push toàn bộ project này lên branch `main`.
3. Vào repository GitHub → **Settings** → **Pages**.
4. Ở **Build and deployment**, chọn **Source: GitHub Actions**.
5. Mỗi lần bạn `git push`, workflow `.github/workflows/deploy.yml` sẽ build và publish site.

Lệnh push mẫu:

```bash
git init
git add .
git commit -m "init cybersec vault"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cybersec-vault.git
git push -u origin main
```

Website thường có dạng:

```text
https://YOUR_USERNAME.github.io/cybersec-vault/
```

Nếu repository tên là `YOUR_USERNAME.github.io`, website sẽ có dạng:

```text
https://YOUR_USERNAME.github.io/
```

## Lưu ý bảo mật

Không đưa các dữ liệu sau vào repo hoặc website public:

- token, API key, cookie, session;
- private key, SSH key;
- flag thật từ contest đang diễn ra;
- exploit dùng để tấn công hệ thống không được phép;
- thông tin cá nhân của người khác.

Nên viết write-up theo hướng học thuật/lab/CTF đã được phép.
