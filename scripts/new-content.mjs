import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const collection = process.argv[2];
const title = process.argv.slice(3).join(' ').trim();

const allowed = new Set(['writeups', 'labs', 'code']);

if (!allowed.has(collection) || !title) {
  console.error('Usage: npm run new:writeup -- "Title"');
  console.error('       npm run new:lab -- "Title"');
  console.error('       npm run new:code -- "Title"');
  process.exit(1);
}

function slugify(input) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const slug = slugify(title);
const dir = path.join(process.cwd(), 'src', 'content', collection);
const file = path.join(dir, `${slug}.md`);
const today = new Date().toISOString().slice(0, 10);

if (existsSync(file)) {
  console.error(`File already exists: ${file}`);
  process.exit(1);
}

const shared = `title: "${title.replaceAll('"', '\\"')}"
description: "Viết mô tả ngắn ở đây."
date: ${today}
tags: [web, ctf]
difficulty: note
`;

const templates = {
  writeups: `---
${shared}category: web
platform: local
solved: true
---

## Tóm tắt

- Challenge:
- Mục tiêu:
- Bug chính:
- Kết quả:

## Recon

Ghi lại endpoint, request/response, source code hoặc hint quan trọng.

## Phân tích

Giải thích vì sao bug tồn tại.

## Khai thác trong lab/CTF

\`\`\`bash
# payload / command minh họa
\`\`\`

## Bài học rút ra

- 
`,
  labs: `---
${shared}area: web
status: draft
---

## Mục tiêu lab

Mô tả kỹ năng cần luyện.

## Mô hình

- Component:
- Input:
- Output:
- Điều kiện thắng:

## Gợi ý

<details>
<summary>Hint 1</summary>

Gợi ý nhẹ.

</details>

## Lời giải

<details>
<summary>Solution</summary>

Giải thích lời giải ở đây.

</details>
`,
  code: `---
${shared}language: python
---

## Mục đích

Ghi lại snippet/payload/checklist.

## Code

\`\`\`python
print("hello cybersec")
\`\`\`

## Cách dùng

\`\`\`bash
python3 script.py
\`\`\`
`
};

await mkdir(dir, { recursive: true });
await writeFile(file, templates[collection], 'utf8');
console.log(`Created ${file}`);
