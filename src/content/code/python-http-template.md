---
title: "Python HTTP Request Template"
description: "Template Python tối giản để gửi request trong CTF/lab."
date: 2026-05-20
tags: [python, requests, ctf, tooling]
difficulty: note
language: python
---

## Template

```python
import requests

BASE_URL = "http://127.0.0.1:3000"

session = requests.Session()

response = session.get(f"{BASE_URL}/")
print(response.status_code)
print(response.text[:500])
```

## Ghi chú

Luôn dùng với hệ thống bạn được phép kiểm thử: lab local, CTF, bug bounty scope hợp lệ hoặc môi trường được ủy quyền.
