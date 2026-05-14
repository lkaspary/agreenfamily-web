import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Leandro Kaspary'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    affiliateProducts: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
          store: z.enum(['amazon', 'walmart']),
          description: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { articles };
