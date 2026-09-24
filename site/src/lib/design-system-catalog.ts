/**
 * Site presentation for design systems. The DESIGN.md files stay agent-facing.
 * Title, job, and order are for the catalog only.
 */
export const designSystemCatalog: Record<string, { title: string; job: string; order: number }> = {
  'material-3': {
    title: 'Material 3',
    job: 'Expressive product UI',
    order: 10,
  },
  carbon: {
    title: 'Carbon',
    job: 'Dense information UI',
    order: 20,
  },
  spectrum: {
    title: 'Spectrum',
    job: 'Professional tool UI',
    order: 30,
  },
};

export const designSystemCompiled = 'Compiled by UX Atlas from the public spec.';

export function designSystemMeta(slug: string) {
  const entry = designSystemCatalog[slug];
  if (!entry) throw new Error(`Add "${slug}" to site/src/lib/design-system-catalog.ts`);
  return entry;
}
