---
title: File Upload Vulnerability labs
description: "mô tả File upload vulnerability qua các bài labs."
date: 2026-05-24
tags: [web, vulnerability, RCE, ctf]
difficulty: easy
category: web
platform: CBJS
solved: true
---

## Level 1
- Do level này không cấm định dạng file, nên ta up file bất kì và dùng `burp` để xem `request-response`.
- Thêm tên file `shell.php` vào `filename`, và nội dung của file `shell.php` để có thể thực thi file qua `URL`.
![image](https://hackmd.io/_uploads/S1gQCIJZ-e.png)

- Gửi `request` đi, nhận được `response` ta copy đường dẫn tới `webshell`.
![image](https://hackmd.io/_uploads/Hyg3AUybbg.png)

- Đọc `dockerfile` thấy được flag được để trong `/secret.txt`.
- Nên ta thêm vào `?cmd=cat /secret.txt` vào sau đường dẫn để thực thi và xem flag.
![image](https://hackmd.io/_uploads/rkhwJP1-We.png)

## Level 2
- Đọc source ta thấy khi phần mở rộng là `php` thì server báo `hack detected` nhưng nó chỉ hoạt động khi ngay phía sau dấu chấm đầu tiên là `php`.
![image](https://hackmd.io/_uploads/rk6KIwybWl.png)

- Nên ta có thể bypass bằng cách viết phần mở rộng `php` nhưng không để cho nó ở ngay phía sau dấu chấm (ví dụ: `..php`, `.png.php`,...).
- Sau đó ta viết code cho file `php`.
![image](https://hackmd.io/_uploads/HJ7YwwJb-e.png)

- Gửi `request` đi để lấy đường dẫn.
![image](https://hackmd.io/_uploads/r1FFPvkZbg.png)

- xem flag bằng `cat /secret.txt`.
![image](https://hackmd.io/_uploads/HkiB_PJZZg.png)

## Level 3
- Đọc source code ta thấy nó chặn `php` ở cuối.
![image](https://hackmd.io/_uploads/HkqTZK1ZZe.png)

- Nên ta thử một số payload như `pHp`, `PhP`, `php5` thì server không thực thi và trả về source.
![image](https://hackmd.io/_uploads/rkVQzY1Z-e.png)

- Tiếp tục thử thêm một số payload khác thì các payload như `phtml` hay `phar` thì được server thực thi, nên có thể lấy flag từ bằng những payload này.
![image](https://hackmd.io/_uploads/ryjYMFJ--e.png)

## Level 4
- Ở level này ta thấy đã bị chặn sử dụng các `extension`: `.php`, `.phar`, `.phtml` và có thêm file `apache2` (đọc file này thấy được nó cho phép sửu dụng `.htaccess` để cấu hình một `extension` khác thành `.php`).

	![image](https://hackmd.io/_uploads/BkWb4qJZZe.png)

- Đầu tiên, ta đặt tên filename là `*.jpg` hay `*.png` hay bất kìa một `extention` nào khác và viết `webshell`.
![image](https://hackmd.io/_uploads/B1ZQCtkZZe.png)

- Gửi `request` và tiếp tục sửa filename thành `.htaccess` và phần body thành `AddType application/x-httpd-php .php .png
`.
![image](https://hackmd.io/_uploads/HkSK0tJZ-l.png)

- Reload web sẽ nhận được flag.

## Level 5
- Đọc source code thấy được lần này code kiểm tra `MINE` có phải là ảnh hay không.
![image](https://hackmd.io/_uploads/Hyl84qyZZe.png)

- Nên ta chỉ cần thêm `Content-Type: image/png` ở body `request` và viết `webshell` như bình thường là có thể lấy được flag.
![image](https://hackmd.io/_uploads/BJGo491Zbx.png)
![image](https://hackmd.io/_uploads/SyO3Vqyb-l.png)

## Level 6
- Đọc source code ta thấy ở level này server kiểm tra `MIME type` mà không kiểm tra `extension`.
- Nên ta chỉ cần chèn `webshell` vào `magic bytes` là bypass được.
![image](https://hackmd.io/_uploads/r1mAdhxbWe.png)

- Nhưng khi chỉ chèn `webshell` vào thì server chỉ trả về nội dung của file mà ta upload.
![image](https://hackmd.io/_uploads/B11IF3xb-g.png)

- Nên phải sửa `filename="t.png"` thành `filename="t.php"` để `webshell` được thực thi.
![image](https://hackmd.io/_uploads/ryk5KhxZ-g.png)

- Load lại web thì server trả về flag.
![image](https://hackmd.io/_uploads/ryI3K2xZZl.png)
