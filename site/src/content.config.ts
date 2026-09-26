import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { skillMeta } from './lib/skill-catalog';

const systems = defineCollection({
  loader: glob({
    pattern: '**/DESIGN.md',
    base: '../design-systems',
    generateId: ({ entry }) => entry.replace(/\/DESIGN\.md$/i, ''),
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updatedBy: z.string(),
  }),
});

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
    metadata: z.object({
      updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      updatedBy: z.string(),
    }),
  }),
});

const changelog = defineCollection({
  loader: glob({
    pattern: 'CHANGELOG.md',
    base: '..',
    generateId: () => 'changelog',
  }),
});

export const collections = { docs, systems, changelog };
