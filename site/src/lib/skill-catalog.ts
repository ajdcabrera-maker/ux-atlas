/** Site catalog. Add a row for every new skill. `order` uses tens. A section's place is the lowest order among its skills. */
export const skillCatalog: Record<string, { title: string; section: string; order: number }> = {
  'ux-constitution': {
    title: 'The UX Constitution',
    section: 'foundations',
    order: 10,
  },
  'design-pipeline': {
    title: 'The Design Pipeline',
    section: 'design-ops',
    order: 20,
  },
  'ux-writing': {
    title: 'UX Writing',
    section: 'content',
    order: 30,
  },
};

export function skillMeta(name: string) {
  const entry = skillCatalog[name];
  if (!entry) {
    throw new Error(`Add "${name}" to site/src/lib/skill-catalog.ts`);
  }
  return entry;
}
