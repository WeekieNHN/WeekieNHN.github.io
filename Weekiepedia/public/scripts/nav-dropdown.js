const games = [
    { label: 'Game One', href: '/games/game-one/' },
    { label: 'Game Two', href: '/games/game-two/' },
    { label: 'Game Three', href: '/games/game-three/' },
  ];

  function attachGamesDropdown() {
    // Find the nav link whose href ends in /games/ (adjust selector if needed)
    const link = document.querySelector('a[href$="/games/"]');
    if (!link || link.closest('.games-nav-item')) return; // already done or not found

    const wrapper = document.createElement('span');
    wrapper.className = 'games-nav-item';
    link.parentNode.insertBefore(wrapper, link);
    wrapper.appendChild(link);

    const menu = document.createElement('ul');
    menu.className = 'games-menu';
    menu.innerHTML = games
      .map(g => `<li><a href="${g.href}">${g.label}</a></li>`)
      .join('');
    wrapper.appendChild(menu);
  }

  attachGamesDropdown();
  document.addEventListener('astro:page-load', attachGamesDropdown);