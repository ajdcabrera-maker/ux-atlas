import { getCollection } from 'astro:content';
import { designSystemMeta } from './design-system-catalog';
import { formatUpdated } from './format-updated';

export type DesignSystemLink = {
  slug: string;
  href: string;
  downloadHref: string;
  title: string;
  job: string;
  order: number;
  name: string;
  description: string;
  updated: string;
  updatedLabel: string;
  updatedBy: string;
};

export async function getDesignSystems(): Promise<DesignSystemLink[]> {
  const systems = await getCollection('systems');
  return systems
    .map((entry) => {
      const meta = designSystemMeta(entry.id);
      return {
        slug: entry.id,
        href: `/design-systems/${entry.id}`,
        downloadHref: `/design-systems/raw/${entry.id}`,
        title: meta.title,
        job: meta.job,
        order: meta.order,
        name: entry.data.name,
        description: entry.data.description,
        updated: entry.data.updated,
        updatedLabel: formatUpdated(entry.data.updated),
        updatedBy: entry.data.updatedBy,
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
