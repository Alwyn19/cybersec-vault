---
title: "API Authorization Checklist Lab"
description: "Checklist kiểm tra lỗi phân quyền API trong môi trường lab hợp pháp."
date: 2026-05-22
tags: [api, auth, access-control, lab]
difficulty: medium
area: api-security
status: published
---

## Mục tiêu

Luyện tư duy kiểm tra authorization thay vì chỉ authentication.

## Checklist

- Đổi `user_id` trong path/body/query.
- Kiểm tra object ownership.
- So sánh quyền user thường và admin.
- Thử method khác: `GET`, `POST`, `PUT`, `DELETE`.
- Kiểm tra ID dạng số tăng dần, UUID, slug.

## Ghi chú

Trong write-up public, chỉ mô tả lab/CTF được phép. Không đưa endpoint thật của hệ thống bên thứ ba.
