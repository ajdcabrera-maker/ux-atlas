import { getCollection } from 'astro:content';
import { site } from './site';
import { skillMeta } from './skill-catalog';
import { getDesignSystems } from './design-systems';

export type SkillLink = {
  id: string;
  href: string;
  title: string;
  section: string;
  order: number;
};

export type SkillSection = {
  id: string;
  label: string;
  skills: SkillLink[];
};

function sectionLabel(id: string) {
  return id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/** Published skills, grouped and ordered the same way as the sidenav. */
export async function getSkillNav(): Promise<SkillSection[]> {
  const skills = (await getCollection('docs'))
    .map((entry) => {
      const meta = skillMeta(entry.data.name);
      return {
        id: entry.id,
        href: `/${entry.id}`,
        title: meta.title,
        section: meta.section,
        order: meta.order,
      };
    })
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      return a.title.localeCompare(b.title);
    });

  const sectionIds = [...new Set(skills.map((skill) => skill.section))].sort((a, b) => {
    const rank = (section: string) =>
      Math.min(...skills.filter((skill) => skill.section === section).map((skill) => skill.order));
    const byOrder = rank(a) - rank(b);
    return byOrder !== 0 ? byOrder : a.localeCompare(b);
  });

  return sectionIds.map((id) => ({
    id,
    label: sectionLabel(id),
    skills: skills.filter((skill) => skill.section === id),
  }));
}

export type ResolvedNavLink = {
  label: string;
  href: string;
  /** `skills` is current on any skill page. `path` is current on that URL. */
  match: 'skills' | 'path';
};

/** Header, burger, and footer links. Skills opens the first skill in catalog order. */
export async function getSiteNav() {
  const sections = await getSkillNav();
  const published = sections.flatMap((section) => section.skills);
  const first = published[0];
  const systems = await getDesignSystems();

  const links = site.nav.flatMap((entry): ResolvedNavLink[] => {
    if ('to' in entry) {
      if (!first) return [];
      return [{ label: entry.label, href: first.href, match: 'skills' }];
    }
    if (entry.href === '/design-systems' && systems.length === 0) return [];
    return [{ label: entry.label, href: entry.href, match: 'path' }];
  });

  return {
    links,
    skillHrefs: published.map((skill) => skill.href),
  };
}

export function isSiteNavActive(link: ResolvedNavLink, pathname: string, hrefs: string[]) {
  const path = pathname.replace(/\/$/, '') || '/';
  if (link.match === 'skills') return hrefs.some((href) => path === href);
  const href = link.href.replace(/\/$/, '') || '/';
  return path === href || path.startsWith(`${href}/`);
}
