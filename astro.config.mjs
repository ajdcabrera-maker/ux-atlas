// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UX/UI Design Skills',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Foundations',
					items: [
						{ label: 'The UX Constitution', slug: 'foundations/ux-constitution' },
					],
				},
				{
					label: 'Patterns',
					items: [{ autogenerate: { directory: 'patterns' } }],
				},
				{
					label: 'Components',
					items: [{ autogenerate: { directory: 'components' } }],
				},
				{
					label: 'Design Ops',
					items: [{ autogenerate: { directory: 'design-ops' } }],
				},
			],
		}),
	],
});
