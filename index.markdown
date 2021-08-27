---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single
title: Home
author_profile: true
author: Frank

toc: true
toc_label: "Table of Contents"
toc_icon: "cog"
toc_sticky: true 

lmdGallery:
  - url: /assets/images/launch-my-dog/SE Screenshot 1.png
    image_path: /assets/images/launch-my-dog/SE Screenshot 1.png
    alt: "LMD Game"
    title: "Launch My Dog in-game"
  - url: /assets/images/launch-my-dog/SE Screenshot 2.png
    image_path: /assets/images/launch-my-dog/SE Screenshot 2.png
    alt: "LMD Main Menu"
    title: "Launch My Dog main menu"
  - url: /assets/images/launch-my-dog/SE Screenshot 3.png
    image_path: /assets/images/launch-my-dog/SE Screenshot 3.png
    alt: "LMD Toppings"
    title: "Launch My Dog in-game level 19"
  - url: /assets/images/launch-my-dog/SE Screenshot 4.png
    image_path: /assets/images/launch-my-dog/SE Screenshot 4.png
    alt: "LMD Level 30"
    title: "Launch My Dog in-game level 30"

pmbGallery:
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

![image-right](/assets/images/frank.jpg){: .align-right height="50%" width="50%"}
My Name is Frank Podraza, I go by Weekie on [**YouTube**](https://www.youtube.com/channel/UCqR1s3Jy4bRMN9c5XGLuLOQ){:target="_blank"}, [**Instagram**](https://www.instagram.com/weekie_nhn/){:target="_blank"}, [**Twitter**](https://twitter.com/Weekie_NHN){:target="_blank"}, and pretty much any social media I'm on. I created the [**Nerd Herd Network**](/about/){:target="_blank"}, I run the Nerd Herd YouTube Channel and this website.

I like to make games. I developed [**Poke My Balls**](/projects/poke-my-balls/){:target="_blank"} back in 2016, the [**CSGO Prop**](/projects/csgo-prop/){:target="_blank"} in 2019, and I just released [**Launch My Dog**](/projects/launch-my-dog/){:target="_blank"} in July of 2021. I am a third-year student at the University of California Santa Cruz. I am studying computer science. I want to end up in the games industry, but I also really enjoy software engineering and systems programming.

## Launch My Dog

This project has been released and has an official landing page.

[**Official Landing Page**](https://www.nerdherd.network/launch-my-dog/){: .btn .btn--info target="_blank" .align-center}

![image-left](/assets/images/LMD Icon.png){: .align-left height="45%" width="35%"}
Launch My Dog is a game where you launch a hot dog into a bun. Things get in the way. I almost finished this game back in 2018, but felt that it wasn't fun enough to release. I came back to it early 2020 and slowly worked on it until it was complete. The goal was a tight small game that I can release on Mobile. There's some fun programming in here like projectile trajectory prediction, even through different mediums. I have learned a lot about optimization with this project. The original had all the levels loaded simultaneously, which was awfully slow. Now it loads each level additively as a scene, on top of a base scene, which is considerably faster. This performance boost allowed me to push other aspects of the game, like level complexity. Launch My Dog released on July 10th, 2021. It is available on both the iOS App Store and Google Play. I am currently working on extra levels and general quality of life improvements.

## Launch My Dog Screenshot Gallery
{% include gallery id="lmdGallery" layout="half" %}

[**More Info**](/projects/launch-my-dog/){: .btn .btn--info target="_blank"}

## Poke My Balls

This project has been released and has an official landing page.

[**Official Landing Page**](https://www.nerdherd.network/poke-my-balls/){: .btn .btn--info target="_blank" .align-center}

![image-right](/assets/images/PMB Icon.png){: .align-right height="30%" width="30%"}
Poke My Balls started as a project called Tap2Kill. It's a simple game where different colored balls fall and you have to tap all of one color, but none of the other colors. My Father came up with the name one day and it stuck. I used this project as a way to start learning programming, and the Unity engine. I have come back to it over the years to implement concepts I have learned in university. Most recently, I used a class/subclass structure and polymorphism to make the game modes load as if they were game cartridges being put into a game console. There is one system that handles loading, and storing data (The "console"), and another that handles all the behaviors of the game (The "cartridge"). Poke My Balls released in August of 2016 and has been updated every once in a while since then.

## Poke My Balls Screenshot Gallery
{% include gallery id="pmbGallery" layout="half" %}

[**More Info**](/projects/poke-my-balls/){:target="_blank" .btn .btn--info}

## CSGO Prop


I wanted a way to play Counter Strike in real life with my friends. I decided to build a Raspberry Pi powered box with a touchscreen a speakers that would act as the C4 from the game. It originally ran a Unity application on the Windows 10 IOT platform. In desperate need of a speed-up I rewrote the entire project in python using the pygame library. I had wanted to learn python and this was an excellent outlet to do so. There is the defuse gamemode from Counter Strike, as well as King-of-the-Hill and Secure Area from Rainbow Six: Siege.

<iframe width="560" height="315" src="https://www.youtube.com/embed/K_t29QqYVi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

----

[**More Info**](/projects/csgo-prop/){:target="_blank" .btn .btn--info}

## My Skills

Since this is my portfolio, I wanted to list the skills I have acquired of the past 7 years of programming, video production, and game development.

### Skills/Programs
- Adobe Creative Cloud Suite  
  - Premiere Pro
  - After Effects
  - Photoshop
  - Audition
  - Media Encoder
- The C Programming language
- C#
- C++
- JavaScript
- Java
- Assembly Language/Machine code
- Python
- Shell programming
- HTML/CSS
- Unity game engine
- Unreal Engine 4
- The Microsoft Office Suite
  - Word
  - Excel
  - PowerPoint
- The Big 3 operating systems
  - Windows
  - MacOS
  - Linux (Ubuntu, Debian, Arch)
- Jekyll, Static site generation
- The YouTube interface
- OBS (Open Broadcasting System)
- Development tools
  - GitHub
  - Trello

## The Future

Now the Launch My Dog is complete, I want to start work on other projects. I no longer want to work on mobile games, and rather want to develop a PC game. I want to spend time honing my programming skills, and general project workflow. I have worked on First-Person-Shooter prototypes in the past, but none came to fruition. I also spent time on a possible parkour racing game in the Unreal Engine. If I had to make a short list of interests it would be this:

### Future Prospects
- PC development
- Networked Multiplayer Programming
- User generated content though in-game means (i.e. a level editor)
- Publishing on Steam
- First-Person Game Design

I will likely work next on a game with the running title of Castle Wars. Based on the Halo Reach gamemode of the same name. Castle Wars would be a simple networked multiplayer game where two fights over the control of the other's castles. It would be published on steam and be primary a PC game.

## Follow Me

<a href="https://www.youtube.com/channel/UCqR1s3Jy4bRMN9c5XGLuLOQ" class="btn btn--danger">Youtube</a> <a href="https://www.instagram.com/weekie_nhn/" class="btn btn--warning">Instagram</a> <a href="https://twitter.com/Weekie_NHN" class="btn btn--info">Twitter</a>
