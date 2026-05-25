---
title: "sql injection bypass WAF Advanced"
description: "SQL injection trong form search uid của lab/CTF."
date: 2026-05-24
tags: [web, sqli, auth, ctf]
difficulty: easy
category: web
platform: DreamHack
solved: true
---

# sql injection bypass WAF Advanced
![image](https://hackmd.io/_uploads/BJgbVTExbx.png)
![image](https://hackmd.io/_uploads/S1lKHT4eZe.png)

- Đọc source code thấy được bị cấm một số từ khóa như `union`, `select`, `and`, `or` nên không thể dùng `union` để lấy flag.
- Thử qua một số payload thấy trình duyệt trả về `uid` hoặc rỗng -> có thể là `blind`.
- Dùng hàm `substring` để test qua một số trường hợp. Thấy được khi cắt chuỗi `uid` thì output là những `uid` trong database trừ `admin` do có `abcde` xếp trước.
    ![image](https://hackmd.io/_uploads/Sk-d4TNlbl.png)

- Nên ta thử cắt chuỗi `upw` thì nó sẽ trả về `admin` nếu chuỗi cắt ra là kí tự trùng với `upw` của `admin`.
    ![image](https://hackmd.io/_uploads/BkUtEp4e-e.png)

- Sau khi có được payload, bỏ qua `intruder` để chạy và lấy ra những response trả về `admin`.

    ![image](https://hackmd.io/_uploads/BkbxNTNe-g.png)
    
- Sắp xếp lại ta được flag.
- Hoặc viết script để lấy flag.
![image](https://hackmd.io/_uploads/SJnQzwUgZg.png)

- Ghi flag vào file.
![image](https://hackmd.io/_uploads/rJ2SGPIeZg.png)

- flag:`DH{d3def39496c4153942f3f7d5451a4b98c6db1664}`.
    ![image](https://hackmd.io/_uploads/r1BAraEx-l.png)

