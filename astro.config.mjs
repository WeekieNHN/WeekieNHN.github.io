// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black'
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Weekiepedia',
    customCss: ['./src/styles/custom.css'], // Load to make sure sidebar home link is at the same indentation as the rest of the links in the docs
    social: [
      { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@weekie' },
      { icon: 'patreon', label: 'Patreon', href: 'https://www.patreon.com/Weekie/' },
      { icon: 'twitter', label: 'BlueSky', href: 'https://bsky.app/profile/weekiepedia.org' },
      { icon: 'github', label: 'GitHub', href: 'https://github.com/WeekieNHN' },
    ],
    sidebar: [
      {
        label: 'Docs Home',
        link: '/docs/',
        attrs: {
          class: 'docs-home-link',
        },
      },
      {
        label: 'Godot Packages',
        items: [{ autogenerate: { directory: '/docs/godot' } }],
      },
      {
        label: 'Misc.',
        items: [{ autogenerate: { directory: '/docs/misc' } }],
      },
    ],
	components: {
      Header: './src/components/SiteHeader.astro',
      Footer: './src/components/Footer.astro'
    },
    plugins: [
      starlightThemeBlack({
        navLinks: [
          { label: 'Games', link: '/games/' },
          { label: 'Docs', link: '/docs/' },
          { label: 'Stream', link: '' },
          { label: 'About', link: '/about/' },
          { label: 'Contact', link: '/contact/' },
        ],
        docs: {
          showMarkdownActions: false
        }
      })
    ],
  }), mdx()],
});