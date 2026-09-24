/**
 * Site-wide constants. `url` must match `site` in astro.config.mjs.
 * `nav` is a short list of site sections. `to: 'first-skill'` opens the skill with the lowest order.
 * The skill list itself stays in the sidenav on skill pages.
 */
export type SiteNavEntry = { label: string; href: string } | { label: string; to: 'first-skill' };

/**
 * Ways to put Atlas in a project. Every method is a section on `/download`.
 * Add a row here and a section with the same `id` on that page. Do not add a route.
 * One row is `primary`.
 */
export type ApplyMethod = {
  id: string;
  label: string;
  hint: string;
  primary?: boolean;
};

export const applyMethods: ApplyMethod[] = [
  {
    id: 'folder',
    label: 'Download a project folder',
    hint: 'Puts the skills and one design system in the project.',
    primary: true,
  },
];

export const site = {
  name: 'UX Atlas',
  url: 'https://atlas.aarondesign.rocks',
  nav: [
    { label: 'Skills', to: 'first-skill' },
    { label: 'Design systems', href: '/design-systems' },
    { label: 'Download', href: '/download' },
  ] as SiteNavEntry[],
};
