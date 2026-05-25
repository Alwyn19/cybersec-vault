---
title: "GraphQL Introspection Recon"
description: "Cách đọc schema GraphQL, tìm query/mutation và suy luận bề mặt tấn công trong CTF."
date: 2026-05-25
tags: [web, graphql, recon, ctf]
difficulty: easy
category: web
platform: local
solved: true
---

## Tóm tắt

GraphQL thường để lộ nhiều thông tin qua schema. Trong CTF, introspection giúp xác định object type, field, argument và query/mutation khả dụng.

## Checklist recon

1. Kiểm tra endpoint phổ biến: `/graphql`, `/api/graphql`, `/query`.
2. Gửi query đơn giản để xác nhận service.
3. Thử introspection nếu được bật.
4. Liệt kê `Query`, `Mutation`, object type và argument.
5. Tìm field nhạy cảm như `secret`, `flag`, `admin`, `role`, `private`.

## Query mẫu

```graphql
query IntrospectionQuery {
  __schema {
    queryType { name }
    mutationType { name }
    types {
      name
      fields {
        name
        args { name type { name kind } }
      }
    }
  }
}
```

## Bài học

Introspection không tự động là bug nghiêm trọng, nhưng trong CTF nó thường là bước đầu để tìm logic flaw, authorization bypass hoặc SQL injection phía resolver.
