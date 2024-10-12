---
layout: single
title: Knockback Arena
permalink: /projects/knockback-arena/
sidebar:
  nav: "projects"
share: true
author: Frank
---

# Intro/Ideation

A while back I watched a [Miziziziz Video](https://youtu.be/5-iST0a69cI?si=3U4mzQ9sm-osOv-Z&t=189) which suggested the idea of making an arena shooter where bullets don't do damage, but instead knock enemies back. I was in the throws of debugging some network troubles I was having with [Castle Wars](/projects/castle-wars/) so I decided to give it a stab.

I'd make 1 map, 1 player controller, and let up to 4 players play split-screen in an arena shooter. Likewise, to prevent some scoping issues. I instituted what I called a "rule of 4" meaning that anything I add there can only be 4 of. Examples include
- 4 weapons
- 4 grenades
- 4 traps
- 4 enemy types
- 4 inventory slots

This was all to keep myself from going crazy, and also to keep the amount of work manageable. 

# Weapons

The first bit of work I did consisted of getting the player character working, split screen set up, and building out a basic interation and inventory system. I then built a shop from which players can buy items. The first set of items I wanted to build were weapons. I'm an FPS kid at heart, so I really like making shooters.

I added a pistol, a rifle, a shotgun, and rocket launcher (blame my Halo roots for this). I got models from Kenney Assets and I animated pickup and fire animations for each one.

I don't think that words are going to do any of it justice, so I suggest you watch this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/nNGxyOnwXAU?si=E6aJ06PhssqzKYuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---



# Traps

Originally I wanted Traps to be hazards laid throughout the map. There's a lava pit in the center that the player can activate, and I had planned for there to be spikes, tripwire, and decoys in the 4 "corners" of the map (The 4 points where enemies can spawn). I realized at some point that it'd be much more fun to be able to choose where the traps we're. That way players could choose to "stack" traps, and chain their effects together.

The lava pit is still an environmental hazard, but the spikes, tripwire, and decoy are placeable. There is a preview whil you're holding one to show where it'll be placed.

The Spikes wait until enemies are walking atop them, and then will trigger the spikes. There is a delay to let more enemies gather on top of the trap. The spikes currently appear to just kill the enemies, but I've implemented a hit system. Each entity with a health component can take a set number of hits before they die. Basic enemies take one. The spikes emit 1 hit, thus will kill any basic enemies. Other enemies will be able to take multiple. And the decoy can take multiple.

The tripwire is a basic trap. When enemies overlap with a tripwire trigger, 3 claymores explode and push them back. It also pushes the player if the player is in the way. I love this thing.

Decoys are more complex, they do not do damage or knock enemies back, but they do act as a target. Players can use these to get some recooperation time, or to lure enemies into other traps like spikes or a tripwire. This is that "chaining" or "stacking" effect I mentioned earlier.

Of course, none of the traps work without enemies to lure into them. Last update the enemies would spawn in, but we're static beyond that. I add basic horizontal movement and the ability to attack players (and decoys) directly in front of them. There is no navigation, so enemies will blindly walk into the lava if you are across it. I'll be updating this in a later update.

Here's the video for this update:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dwpOKPVbSHQ?si=yX2mHB3eFZUH6rwh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

 That's it for now, check back soon for further updates. :)
 - Frank