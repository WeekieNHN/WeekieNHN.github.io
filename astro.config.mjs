// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black'
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Weekiepedia',
    social: [
      { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@weekie' },
      { icon: 'patreon', label: 'Patreon', href: 'https://www.patreon.com/Weekie/' },
      { icon: 'twitter', label: 'BlueSky', href: 'https://bsky.app/profile/weekiepedia.org' },
      { icon: 'github', label: 'GitHub', href: 'https://github.com/WeekieNHN' },
    ],
    sidebar: [
      {
        label: 'Guides',
        items: [
          { label: 'Example Guide', slug: 'guides/example' },
        ],
      },
      {
        label: 'Reference',
        items: [{ autogenerate: { directory: 'reference' } }],
      },
    ],
	components: {
      Header: './src/components/SiteHeader.astro',
    },
    plugins: [
      starlightThemeBlack({
        navLinks: [
          { label: 'Games', link: '/games/' },
          { label: 'Docs', link: '/getting-started' },
          { label: 'Stream', link: '' },
          { label: 'About', link: '/about' },
          { label: 'Contact', link: '' },
        ],
        docs: {
          showMarkdownActions: false
        }
      })
    ],
  }), mdx()],
});