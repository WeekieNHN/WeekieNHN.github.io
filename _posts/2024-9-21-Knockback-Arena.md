---
layout: single
title: Knockback Arena
permalink: /projects/knockback-arena/
sidebar:
  nav: "projects"
share: true
author: Frank

toc: true
toc_label: "Table of Contents"
toc_icon: "cog"
toc_sticky: true
---

# Intro/Ideation

A while back I watched a [Miziziziz Video](https://youtu.be/5-iST0a69cI?si=3U4mzQ9sm-osOv-Z&t=189) which suggested the idea of making an arena shooter where bullets don't do damage, but instead knock enemies back. I was in the throws of debugging some network troubles I was having with [Castle Wars](/projects/castle-wars/) so I decided to give it a stab.

I upend up Unity and made 1 map, 1 player controller, and set up split screen to allow up to 4 players play split-screen in the arena. To prevent some scoping issues I instituted what I called a "rule of 4" meaning that anything I add there can only be 4 of. Examples include:
- 4 weapons
- 4 grenades
- 4 traps
- 4 enemy types
- 4 inventory slots

This was all to keep myself from going crazy, and also to keep the amount of work manageable. 

# Arena
![Shop-Right](/assets/images/knockback-arena/Arena_Gif_Small.gif){: .align-right height="30%" width="30%"}
The arena is pretty simple. It is an octogon which has a smaller octogon in the center. There is a shop zone and a drop zone. The arena is surround by a lava moat. Falling into the lava will cause the player, or anything that falls into it, to die. On the other side of the lava are some empty bleachers, and some walls which slowly move around the arena, just to make the background visuals a bit more dynamic.

There is a scoreboard on one end of the arena, where players can see stats on what round their on, round types, payout amounts, and how much money each player has.

Lastly there is a secret room underneath the arena where dead players can reside when playing split screen. This way they have something to do/watch while they wait to be revived.

I hope that I can spend some time world-building, I have some ideas given the empty bleachers, and the dead room, but at time of writing I don't plan on expanding the "lore" of the world.

# Shop & Drop Zone

![Shop-Left](/assets/images/knockback-arena/Shop_Gif_Small.gif){: .align-left height="30%" width="30%"}
Obviously the players are going to need some method of obtaining the weapons, traps, and grenades they'll need to fight the waves of enemies. The shop automatically comes out of the ground when the game starts, and it will appear every time a round ends. The shop is not available during rounds. There's buttons for weapons, throwables (grenades), traps, revives, and a button to start the next round.

![Parachute-Right](/assets/images/knockback-arena/Parachute_Gif_Small.gif){: .align-right height="30%" width="30%"}
When a player buys an item from the shop (with the exception of the lava pit, you'll understand why later) a parachute spawns on the other end of the arena. The other end of the area is the drop zone. The drop is where you'll recieve items, as well as where players spawn in and drop down.

Each parachute spawns in with an item, and will slowly makes it way to the ground. When the parachute reaches the ground it will drop it's item and disappear. The player can pick up the item as soon as it's within interaction range.

# Weapons
![Rifle-Right](/assets/images/knockback-arena/Rifle_Gif_Small.gif){: .align-right height="30%" width="30%"}
The first bit of work I did consisted of getting the player character working, split screen set up, and building out a basic interation and inventory system. I then built a shop from which players can buy items. The first set of items I wanted to build were weapons. I'm an FPS kid at heart, so I really like making shooters.

I added a pistol, a rifle, a shotgun, and rocket launcher (blame my Halo roots for both it's implementation, and visual). I got models from Kenney Assets and I animated pickup and fire animations for each one. I got sound effects from Open Game Art, and overall the weapons feel pretty nice to use. They each do their own amount of knockback when you hit enemies. They also have their own crosshairs (also from Kenney Assets).

## Devlog
I don't think that words are going to this enough justice, so I suggest you watch the video I made for it:

<iframe width="560" height="315" src="https://www.youtube.com/embed/nNGxyOnwXAU?si=E6aJ06PhssqzKYuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

# Traps
Originally I wanted Traps to be hazards laid throughout the map. There's a lava pit in the center that the player can activate, and I had planned for there to be spikes, tripwire, and decoys in the 4 "corners" of the map (The 4 points where enemies can spawn). I realized at some point that it'd be much more fun to be able to choose where the traps we're. That way players could choose to "stack" traps, and chain their effects together.

## The Lava Pit
![Lava-Pit-Right](/assets/images/knockback-arena/Lava_Pit_Gif_Small.gif){: .align-right height="30%" width="30%"}
The lava pit is still an environmental hazard, but the spikes, tripwire, and decoy are placeable. Placable traps have a preview of the trap while you're holding it to show where it'll be placed.

When purchased, the lava pit opens in the middle of the map. It will stay open until the game ends. You'll want to be sure that you do not fall in. This can be pair with a decoy to make the enemies blindly walk into it.


## Spikes
![Spikes-Left](/assets/images/knockback-arena/Spikes_Gif_Small.gif){: .align-left height="30%" width="30%"}
The Spikes wait until enemies are walking atop them, and then will trigger the spikes. There is a delay to let more enemies gather on top of the trap. The spikes currently appear to just kill the enemies, but I've implemented a hit system. Each entity with a health component can take a set number of hits before they die. Basic enemies take one. The spikes emit 1 hit, thus will kill any basic enemies. Other enemies will be able to take multiple. And the decoy can take multiple.

## Tripwires w/ Claymores
![Tripwire-Right](/assets/images/knockback-arena/Tripwire_Gif_Small.gif){: .align-right height="30%" width="30%"}
The tripwire is a basic trap. When enemies overlap with a tripwire trigger, 3 claymores explode and push them back. It also pushes the player if the player is in the way. I love this thing. It has a very meaty sound effect that plays, and it just feels nice to bully the enemies.

Tripwires work best when paired with a decoy, which we'll talk about in a second. This way enemies almost blindly walk into the tripwire. This knocks enemies back and also gives the players a chances to breathe.

## Decoys
![Decoy-Left](/assets/images/knockback-arena/Decoy_Gif_Small.gif){: .align-left height="30%" width="30%"}
Decoys are more complex, they do not do damage or knock enemies back, but they do act as a target. Players can use these to get some recooperation time, or to lure enemies into other traps like spikes or a tripwire. This is that "chaining" or "stacking" effect I mentioned earlier.

Of course, none of the traps work without enemies to lure into them. Last update the enemies would spawn in, but we're static beyond that. I add basic horizontal movement and the ability to attack players (and decoys) directly in front of them. There is no navigation, so enemies will blindly walk into the lava if you are across it. I'll be updating this in a later update.

## Devlog
Here's the video for this update:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dwpOKPVbSHQ?si=yX2mHB3eFZUH6rwh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

# Grenades (Throwables)

## Normal Grenade
![Grenade-Left](/assets/images/knockback-arena/Grenade_Gif_Small.gif){: .align-left height="30%" width="30%"}


## Nuke
![Nuke-Right](/assets/images/knockback-arena/Nuke_Gif_Small.gif){: .align-right height="30%" width="30%"}


## Black Hole
![Black-Hole-Left](/assets/images/knockback-arena/Black_Hole_Gif_Small.gif){: .align-left height="30%" width="30%"}


## Ice Grenade
![Ice-Grenade-Right](/assets/images/knockback-arena/Ice_Grenade_Gif_Small.gif){: .align-right height="30%" width="30%"}


## Devlog
Here's the video for this update:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ecjw-bEwJr0?si=0piR4N5P1jZyGWMb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---