import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  position: 'right',
  links: [
    {
      text: 'Games',
      links: [
        { text: 'PortalDoom (Working Title)', href: getPermalink('/games/portaldoom') },
        { text: 'Launch My Dog', href: getPermalink('/games/launch-my-dog') },
        { text: 'Poke My Balls', href: getPermalink('/games/poke-my-balls') },
        { text: 'More on Itch.io', href: 'https://weekie.itch.io/', target: '_blank' },
      ],
    },
    {
      text: 'Docs',
      links: [
        { text: 'Godot Dev Console', href: getPermalink('/docs/godot-dev-console') },
        { text: 'Godot Localization', href: getPermalink('/docs/godot-localization') },
        { text: 'Godot Menu System', href: getPermalink('/docs/godot-menu-system') },
      ],
    },
    {
      text: 'Blog',
      links: [
        { text: 'PortalDoom Devlogs', href: getPermalink('portaldoom-devlogs', 'category') },
        { text: 'Castle Wars Devlogs', href: getPermalink('castle-wars-devlogs', 'category') },
        { text: '20 Game Challenge', href: getPermalink('20-game-challenge', 'category') },
        { text: 'Frank\'s Radio Show', href: getPermalink('franks-radio-show', 'category') },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Patreon', icon: 'tabler:brand-patreon', href: 'https://www.patreon.com/c/Weekie' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@weekie' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Games',
      links: [
        { text: 'PortalDoom (Working Title)', href: getPermalink('/games/portaldoom') },
        { text: 'Launch My Dog', href: getPermalink('/games/launch-my-dog') },
        { text: 'Poke My Balls', href: getPermalink('/games/poke-my-balls') },
        { text: 'More on Itch.io', href: 'https://weekie.itch.io/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Media Kit', href: 'https://beacons.ai/weekie/mediakit?origin=lib' },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@weekie', target: '_blank' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/weekiepedia.org', target: '_blank' },
    { ariaLabel: 'Patreon', icon: 'tabler:brand-patreon', href: 'https://www.patreon.com/c/Weekie', target: '_blank' },
    { arialabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/weekie_nhn', target: '_blank' },
    { ariaLabel: 'Itch.io', icon: 'simple-icons:itchdotio', href: 'https://weekie.itch.io/', target: '_blank' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/WeekieNHN', target: '_blank'  },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `Weekiepedia 2016-${new Date().getFullYear()} · All rights reserved.`,
};
