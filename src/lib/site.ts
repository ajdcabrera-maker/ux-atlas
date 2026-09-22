/**
 * Site-wide constants. Keep the public URL and nav in one place.
 * `url` must match `site` in astro.config.mjs.
 */
export const site = {
  name: 'UX Atlas',
  url: 'https://atlas.aarondesign.rocks',
  portfolioUrl: 'https://aarondesign.rocks',
  nav: [
    { href: '/foundations/ux-constitution', label: 'Constitution' },
  ],
} as const;
