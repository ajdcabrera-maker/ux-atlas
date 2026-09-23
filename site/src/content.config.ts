import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { skillMeta } from './lib/skill-catalog';

const docs = defineCollection({
  loader: glob({
    pattern: '**/SKILL.md',
    base: '../skills',
    generateId: ({ entry, data }) => {
      const folder = entry.replace(/\/SKILL\.md$/i, '');
      const name = typeof data.name === 'string' ? data.name : folder;
      return `${skillMeta(name).section}/${name}`;
    },
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = { docs };
