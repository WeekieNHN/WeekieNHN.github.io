export interface Game {
  title: string;
  subtitle: string;
  cover: string; // URI: remote URL or a path under /public
  description: string;
  tags: string[];
  status?: 'released' | 'in-development' | 'unreleased'; // optional: defaults from releaseDate
  releaseDate?: string; // ISO format: YYYY-MM-DD. Only needed for released games.
  sortDate?: string; // ISO format: YYYY-MM-DD. Only used for ordering the list. Falls back to releaseDate.
  url: string; // path to the game's page
}

export const games: Game[] = [
  {
    title: 'PortalDoom (Working Title)',
    subtitle: 'A retro-inspired shooter',
    cover: '/images/portaldoom/card-cover.png',
    description: 'A retro-inspired shooter being built in Godot. Still in the prototyping phase, could be a boomer shooter, could be something else.',
    tags: ['Godot', 'FPS', '3D'],
    // no releaseDate: in development
    sortDate: '2026-01-01',
    url: '/games/portaldoom',
  },
  {
    title: 'Launch My Dog',
    subtitle: 'A hot-dog flinging puzzle game',
    cover: '/images/launch-my-dog/card-cover.jpg',
    description: 'A puzzle game where you shoot a hot dog into its bun. Plenty of obstacles get in the way.',
    tags: ['Unity', 'Physics-Based', 'Mobile'],
    releaseDate: '2021-07-10',
    url: '/games/launch-my-dog',
  },
  {
    title: 'Poke My Balls',
    subtitle: 'A colorful, quick poke',
    cover: '/images/poke-my-balls/card-cover.png',
    description: 'Colored balls drop from the top of the screen; you tap all of the right colors. Compete with your friends for the highest score.',
    tags: ['Unity', 'Arcade', 'Mobile'],
    releaseDate: '2016-08-22',
    url: '/games/poke-my-balls',
  },
  {
    title: 'Knockback Arena',
    subtitle: 'Arena shooter but you can\'t kill enemies',
    cover: '/images/knockback-arena/card-cover.png',
    description: 'A shelved Unity arena shooter where you can\'t kill enemies, only knock them back. Use guns, grenades, and traps to push enemies back.',
    tags: ['Unity', 'Shooter', 'Physics-Based'],
    // no releaseDate: in development
    sortDate: '2024-11-14',
    status: 'unreleased',
    url: '/games/knockback-arena',
  },
  {
    title: 'MetroidvaniASCII ',
    subtitle: 'A Metroidvania with an extra dimension',
    cover: '/images/metroidvaniascii/card-cover.png',
    description: 'A game where the only \"art\" is post-processing effects.',
    tags: ['Unity', 'Metroidvania', 'Shaders'],
    // no releaseDate: in development
    releaseDate: '2024-07-17',
    url: '/games/metroidvaniascii',
  },
];