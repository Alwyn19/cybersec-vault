import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  difficulty: z.enum(['easy', 'medium', 'hard', 'note']).default('note'),
  draft: z.boolean().default(false)
});

const writeups = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    category: z.string().default('web'),
    platform: z.string().optional(),
    solved: z.boolean().default(true)
  })
});

const labs = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    area: z.string().default('web'),
    status: z.enum(['draft', 'published', 'archived']).default('draft')
  })
});

const code = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    language: z.string().default('text')
  })
});

export const collections = { writeups, labs, code };
