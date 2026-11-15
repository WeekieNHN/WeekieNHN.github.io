export interface CategoryInfo {
  description: string;
  link?: { text: string; href: string };
}

// Keys are category slugs (the URL part, like /category/castle-wars-devlogs)
export const categoryInfo: Record<string, CategoryInfo> = {
  'castle-wars-devlogs': {
    description: 'Castle Wars is a now defunct multiplayer project being built in Unity using the Fishnet networking stack.',
  },
  'portaldoom-devlogs': {
    description: 'Behind-the-scenes updates on the development of PortalDoom.',
    link: { text: 'About the game', href: '/games/portaldoom' },
  },
  'franks-radio-show': {
    description: 'A monthly Hand-curated radio show, new theme every month. Tune in now.',
  },
  '20-game-challenge': {
    description: 'After working on games for a decade I realized I never learned how to design games, just use an engine really well. THis is how I\'m gonna fix that.',
  },
};