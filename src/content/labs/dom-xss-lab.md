---
title: "DOM XSS Mini Lab"
description: "Lab tự học về sink nguy hiểm trong JavaScript phía client."
date: 2026-05-23
tags: [web, xss, javascript, lab]
difficulty: medium
area: web
status: published
---

## Mục tiêu

Nhận biết luồng dữ liệu từ source đến sink trong DOM XSS.

## Source nguy hiểm

```js
const name = new URLSearchParams(location.search).get('name');
```

## Sink nguy hiểm

```js
document.querySelector('#preview').innerHTML = name;
```

## Gợi ý

<details>
<summary>Hint 1</summary>

Tìm nơi dữ liệu từ URL được đưa vào HTML mà không escape.

</details>

## Fix

```js
document.querySelector('#preview').textContent = name;
```
