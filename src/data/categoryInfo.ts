export interface CategoryInfo {
  title: string;
  description: string;
  link?: { text: string; href: string };
  disabled?: boolean; // set to true to hide this category until it's ready
}

// Keys are category slugs (the URL part, like /category/castle-wars-devlogs)
export const categoryInfo: Record<string, CategoryInfo> = {
  'castle-wars-devlogs': {
    title: 'Castle Wars Devlogs',
    description: 'Castle Wars is a now defunct multiplayer project being built in Unity using the Fishnet networking stack.',
  },
  'portaldoom-devlogs': {
    title: 'PortalDoom Devlogs',
    description: 'Behind-the-scenes updates on the development of PortalDoom.',
    //link: { text: 'About the game', href: '/games/portaldoom' },
  },
  'franks-radio-show': {
    title: "Frank's Radio Show",
    description: 'A monthly Hand-curated radio show, new theme every month. Tune in.',
    disabled: true,
  },
  '20-game-challenge': {
    title: '20 Game Challenge',
    description: 'After working on games for a decade I realized I never learned how to design games, just use an engine really well. This is how I\'m gonna fix that.',
    disabled: true,
  },
};

// Slugs shown as "Keep reading" buttons under the feed, in display order.
export const blogSlugs = [
  'castle-wars-devlogs',
  'portaldoom-devlogs',
  '20-game-challenge',
  'franks-radio-show',
];

// Derived from categoryInfo, skipping any category marked disabled.
export const blogs = blogSlugs
  .filter((slug) => !categoryInfo[slug].disabled)
  .map((slug) => ({
    text: categoryInfo[slug].title,
    slug,
  }));