/**
 * Site-wide constants. `url` must match `site` in astro.config.mjs.
 * `nav` is a short list of site sections. `to: 'first-skill'` opens the skill with the lowest order.
 * The skill list itself stays in the sidenav on skill pages.
 */
export type SiteNavEntry = { label: string; href: string } | { label: string; to: 'first-skill' };

export const site = {
  name: 'UX Atlas',
  url: 'https://atlas.aarondesign.rocks',
  nav: [{ label: 'Skills', to: 'first-skill' }] as SiteNavEntry[],
};
