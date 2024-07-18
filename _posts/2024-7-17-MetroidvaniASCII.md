---
layout: single
title: MetroidvaniASCII
permalink: /projects/metroidvaniascii/
sidebar:
  nav: "projects"
share: true
author: Frank

gallery:
  - url: /assets/images/metroidvaniascii/title.png
    image_path: /assets/images/metroidvaniascii/title.png
    alt: "Title screen"
    title: "Title screen"
  - url: /assets/images/metroidvaniascii/room2.png
    image_path: /assets/images/metroidvaniascii/room2.png
    alt: "Jumping through room 2"
    title: "Jumping through room 2"
  - url: /assets/images/metroidvaniascii/button.png
    image_path: /assets/images/metroidvaniascii/button.png
    alt: "The first button"
    title: "The first button"
  - url: /assets/images/metroidvaniascii/pickup.png
    image_path: /assets/images/metroidvaniascii/pickup.png
    alt: "View Swapper Pickup"
    title: "View Swapper Pickup"
---


Video Embed
----

I wanted to see just how far I could push an art style with only Post-Processing effects. I used primitives for shapes, solid colors for textures, basic procedural animation, and default fonts. I built a processing stack consisting of 
1. A small amount of film grain
2. A good amount of bloom
3. A lot of chromatic abrasion

Which gets run into a fullscreen shader which pixelates the whole thing. Alternatively, an ASCII filter gets overlayed to convey that you are viewing the world differently.

It's a very basic prototype, there's no sound, but it works with both keyboard and controllers. Here's a trailer I threw together for it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_aogxmFD1Ts?si=_3sB795dIsAhEuwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---


I wanted to use this as a project I finished. I would love to keep working on it, so if there's enough demand I would be happy to open it up again. Also, the source is on [**GitHub**](https://github.com/WeekieNHN/MetroidvaniASCII){:target="_blank"}, so you are welcome to modify or expand it yourself.

## Screenshot Gallery
{% include gallery layout="half" %}


Download Links:
[**Windows (.zip)**](https://github.com/WeekieNHN/MetroidvaniASCII/tree/main/Zip){:target="_blank" .btn .btn--info .align-center}
