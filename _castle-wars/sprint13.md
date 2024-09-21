---
layout: single
title:  "Castle Wars Update 13 - Porting to Godot pt. 1 - Groundwork"
collection: castle-wars
permalink: /castle-wars/sprint13/
sidebar:
  nav: "castle-wars-nav"
---

_By Frank "Weekie" Podraza, Sept. 21, 2024_

---
It's been a minute since we had an update here. I've been really busy recently. 

However! I woke up a few weeks ago and decided to try the Godot engine. I had a blast. This video summarizes my thoughts after the first week.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Edv-xI_29AE?si=0mmiN0Ot8XKUeh4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

If you don't care for watching the video. I tried the engine and wanted to see how long it took to replicate the Networked + Split-screen multiplayer setup I had in Unity. It took 3 days. I find Godot easier to work in (and I've been using Unity for 10 years).

Following that video I said I was going to work on finishing up some Unity projects (See: [**Knockback Arena**](/projects/knockback-arena/), [**MetroidvaniASCII**](/projects/metroidvaniascii/)). I couldn't help myself, I immediately started working on porting the game to Godot. Here's how far I got in a week:

<iframe width="560" height="315" src="https://www.youtube.com/embed/tXGm7u8A1Hc?si=-v8hFss3LPyi-nw_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

I was able to get a lobby setup and working over either ENet (using IP Address) or Steam (using GodotSteam and SteamMultiplayerPeer). I also got network-synced loading of a map, so the project has a complete lobby cycle (Lobby -> Game -> Lobby...).

There's a few bugs with it but it's working pretty well.

I hope y'all enjoy the video!
-Frank
