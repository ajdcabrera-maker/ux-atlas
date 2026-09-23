import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/docs',
    // SKILL.md is the file on disk. Public URLs omit that segment:
    // foundations/ux-constitution/SKILL.md → foundations/ux-constitution
    generateId: ({ entry }) => {
      return entry
        .replace(/\.(md|mdx)$/, '')
        .replace(/\/SKILL$/i, '')
        .replace(/^SKILL$/i, 'index');
    },
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { docs };
