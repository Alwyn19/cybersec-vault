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

## Dấu hiệu

- Response thay đổi khi nhập ký tự `'` hoặc `"`.
- Có lỗi database hoặc status code bất thường.
- Login thành công khi điều kiện WHERE bị biến đổi.

## Payload học tập

```text
' OR '1'='1' --
admin' --
' OR 1=1 LIMIT 1 --
```

## Phân tích

Bug thường xuất hiện khi server nối chuỗi trực tiếp vào câu SQL thay vì dùng parameterized query.

```js
const sql = `SELECT * FROM users WHERE username='${user}' AND password='${pass}'`;
```

## Phòng thủ

Dùng prepared statement, validate input, hash password đúng cách và không trả lỗi SQL chi tiết cho client.
