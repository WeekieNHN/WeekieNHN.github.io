---
layout: single
title: Poke My Balls Project
permalink: /projects/poke-my-balls/
sidebar:
  nav: "projects"
share: true

gallery:
  - url: /assets/images/poke-my-balls/screen-main.PNG
    image_path: /assets/images/poke-my-balls/screen-main.PNG
    alt: "PMB Menu"
    title: "Poke My Balls menu"
  - url: /assets/images/poke-my-balls/screen-game.PNG
    image_path: /assets/images/poke-my-balls/screen-game.PNG
    alt: "PMB Game"
    title: "Poke My Balls in-game"
  - url: /assets/images/poke-my-balls/screen-shop.PNG
    image_path: /assets/images/poke-my-balls/screen-shop.PNG
    alt: "PMB Shop"
    title: "Poke My Balls shop"
  - url: /assets/images/poke-my-balls/screen-blue.PNG
    image_path: /assets/images/poke-my-balls/screen-blue.PNG
    alt: "PMB Menu Blue"
    title: "Poke My Balls menu with blue background active"
---

_By Frank "Weekie" Podraza_

This project was released and has an official landing page.

[**Check it out**](https://www.nerdherd.network/poke-my-balls/){:target="_blank" .btn .btn--info .align-center}

![logo-right](/assets/images/PMB Icon.png){: .align-right height="30%" width="30%"}
Poke My Balls started as a project called Tap2Kill. It's a simple game where different colored balls fall and you have to tap all of one color, but none of the other colors. My Father came up with the name one day and it stuck (for better or for worse). I used this project as a way to consolidate my programming abilities and dive into the Unity engine. I have come back to it over the years to implement concepts I have learned in university, and on my own. Most recently, I used a class/subclass structure and polymorphism to make the game modes load as if they were game cartridges being put into a game console. There is one system that handles loading, and storing data (The "console"), and another that handles all the behaviors of the game (The "cartridge"). Poke My Balls was released in August of 2016, and had its 2.0 update in the Summer of 2018.

## Development Process
![Screenshot-menu-left](/assets/images/poke-my-balls/screen-main.PNG){: .align-left height="30%" width="30%"}
I started development on Poke My Balls in the Summer of 2016. I wanted to make the next Flappy Bird, and this game was an idea I had floating around in my head for about a year. I toyed with prototypes in Unity, and one in BuildBox (god, remember BuildBox? Exactly). I settled on Unity because BuildBox did not allow any upward mobility when it came to game scope or programming ability. Unity did. I started working and built most of the game in a couple of days. I wrote the entire project in JavaScript, as that was all I knew at the time. I had only been programming for a year at this point. The game was released on iOS on August 22nd, 2016, and a few weeks later on Android. I released a few updates in the following months, adding a colorblind mode, more settings, and fixing bugs.

![Screenshot-game-right](/assets/images/poke-my-balls/screen-game.PNG){: .align-right height="30%" width="30%"}
A year later, I became a much more experienced programmer. For the first time, I did what I tend to do nowadays, which is to come back to a project after learning more, and applying what I've learned. I wanted to overhaul the game. I have learned C# over the past year. Using C#, I added 2 more game modes: Power Poking and Living by Poking. Power poking had falling powerups that added depth to the game. Living by Poking allowed the player to use 3 lives to get as far as possible. I avoided editing as much of the JavaScript as possible, the JavaScript was messy, overwritten, and generally bad code. I also added In-App Purchasing to hopefully obtain some revenue.

Over the next year, I toyed with more game mode ideas and wanted to release another update. To do this, I needed a newer version of Unity to support newer versions of iOS and Android. Unfortunately, I had hit the limit with JavaScript. Unity deprecated it well before the new version I needed to use. This meant I would have to overhaul to entire basic codebase and rewrite all of it in C#. It was starting from scratch. This was a roadblock for me. I didn't want to commit time to a project with no active players, even if an update could bring in some new users.

That roadblock got metaphorically smaller a year later. I was now in University. In my first proper programming course, I learned more than I had in the past 3 years. The biggest concept I learned was polymorphism, and the ability to make a parent class, with subclasses having modified behaviors. These concepts spawned an idea in my brain. To make the game more expandable, at least when it comes to game modes. I could make a console cartridge system. There was a set of systems that acted as the console, and the game modes acted as cartridges, holding the behaviors for certain events. I then rewrote the whole codebase with this philosophy. That is the update that is currently available. I have no plans to update the game further.


## What I learned:
- A stopping point is necessary, if you don't tell yourself when to stop, you'll keep going forever.
- Advertising is important, it's really hard to get users as a solo developer with no resources.
- Build/program as general as possible, to allow easy expansion in the future.
- Keep code neat. It is less daunting to come back to.
