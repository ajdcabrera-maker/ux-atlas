/**
 * Site-wide constants. `url` must match `site` in astro.config.mjs.
 * `nav` is a short list of site sections. `to: 'first-skill'` opens the skill with the lowest order.
 * The skill list itself stays in the sidenav on skill pages.
 */
export type SiteNavEntry = { label: string; href: string } | { label: string; to: 'first-skill' };

/**
 * Ways to put Atlas in a project. Each method is its own page.
 * One row is `primary`.
 */
export type ApplyMethod = {
  id: string;
  label: string;
  hint: string;
  href: string;
  primary?: boolean;
};

export const applyMethods: ApplyMethod[] = [
  {
    id: 'package',
    label: 'Install the package',
    hint: 'The design skills. A package update brings newer skills. The brief skill is not in this package.',
    href: '/install',
    primary: true,
  },
  {
    id: 'folder',
    label: 'Download a project folder',
    hint: 'A copy for a project that does not yet turn a prompt into something Atlas can act on. This copy does not update.',
    href: '/download',
  },
];

export const site = {
  name: 'UX Atlas',
  url: 'https://atlas.aarondesign.rocks',
  nav: [
    { label: 'Skills', to: 'first-skill' },
    { label: 'Design systems', href: '/design-systems' },
    { label: 'Install the package', href: '/install' },
  ] as SiteNavEntry[],
  /** Reference links. The header stays the task list in `nav`. */
  footer: [{ label: 'Changelog', href: '/changelog' }] as { label: string; href: string }[],
};
