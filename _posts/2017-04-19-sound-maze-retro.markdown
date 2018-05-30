---
layout: post
title: Lessons from Attempting to Build a Distributed Sound-Based Game Engine
date:   2017-05-30 23:00:00
---

This is a lessons learned post concerning a longstanding game idea of mine that I attempted to make, the progress I made doing so, and the reasons why I ultimately put it down to move on to other projects. The code for the game, as far as I got with it, is here: [github.com/millerpeterson/sound-maze-game](https://github.com/millerpeterson/sound-maze-game).

The basic idea of the game is that you are trapped in a dark maze, and you are being hunted by an unseen entity. You must find the exit before the thing finds you, but the darkness means you have only auditory clues as to which direction to take. The unique selling point for the game would be its minimal graphics and user interface: you would play the game on the Novation Launchpad MIDI controller, an 8 x 8 grid of LED push buttons. With these stripped down visual possibilities, 3D audio would be the immersive focus of the game.

I had other vague notions of making it a rogue-like with procedurally generated mazes, and evolving AI behaviors, though I never fleshed those ideas out. In the end, I implemented a simple proof of concept where you can walk through a maze and hear a 3D sound source relative to you. If that doesn't sound too impressive, that's because it isn't - I'm writing this to reflect on why it took me so long build this prototype. In short, my two main take-away lessons are:

1. Don't make your game engine a distributed system.
2. Validate your gameplay ideas before you start building a game engine in the first place.

Both of those may be obvious! In my case, however, I had this game concept that I thought would be awesome brewing for over 5 years, and then a few months of experimentation was all it took to see some major flaws in both my technical approach and the game concept itself.

### Working with a Distributed Game Engine

Before I came up with the idea for this game, it had long been my conviction that sound design is an under-developed aspect of games. Most technical innovation in games seem to be focused on graphics, with sound being a more marginal consideration. Of course, AAA games like Call of Duty have amazing sound design, but the relationship between the sound and gameplay hasn't changed much in the past decade. It would be interesting, I thought, to make a game where the focus was on creating an experience primarily with sound, rather than having sound play second fiddle to graphics.

To achieve this sound-first approach to game design, I reckoned it would make sense to use a system that would allow me to rapidly prototype different sound generators. At first I looked at Max/MSP for this, as it lets you quickly experiment with synthesizer designs, and I have some experience integrating it with other programming environments (see [my post on connecting Max/MSP to Clojure](http://millerpeterson.github.io/2015/03/25/clojure-max-msp.html) below). Integrating more traditional programming environments with Max/MSP has gotten a bit easier, as recent releases of Max/MSP include better capabilities for working with JSON data.

Without too much effort I was able to pass structured data from my main game logic process running in Clojure to the audio engine in Max/MSP by sending JSON over UDP. The Clojure process would compute a "view" of the game state, then pass this over the wire to the audio engine, which would make sure the correct sounds were playing.

Having the amazing interactive development experience of Clojure mixed with the ability to rapidly prototype the sounds in Max/MSP, I was pumped to start programming my game! But as it turns out, there was a fair bit of friction between the worlds of the game logic in the JVM and Max/MSP. For example, if I failed to clean up network resources in my Clojure app, I would need to rebind both the game logic and the sound engine to a new UDP port.

In the end, it would typically take me 10 - 15 minutes each time I worked on the project to get the two pieces talking to each other and the state properly synchronized between them. Given that I work on projects like this in my spare time, often on weeknights, that is a significant price to pay in terms of productivity. The much-discussed lengthy startup time for Clojure REPLs, to my chagrin, did start to bother me towards the end of working on this project.

This brings me to my first take-away from this project: don't make your weird side-project game idea into a distributed system if you don't absolutely need to! You will unnecessarily waste your precious creative energy fighting with configuration and sync issues that have nothing to do with the idea you are trying to realize.

But even more fundametally: is the idea you are trying to realize any good?

### Building the Wrong Thing

I've heard it said that often the problem with software is not that it's technically lacking in some way, but rather that the fundamentally idea behind it is ill-conceived. As much as I hate to admit it, I believe this is true of this project.

I had it in my head that a game played in the dark with 3D sound cues was somehow a new idea that would be immersive in a novel way. In fact, FPS games nowadays already make excellent use of 3D sound to provide an immersive gaming experience. Recently while playing Prey (a survival shooter in the tradition of BioShock) I found myself creeping around a space station, narrowly avoiding roaming aliens using only the sounds of their footsteps and creepy vocalizations. In conjunction with the AAA graphics, this is an incredibly engrossing experience.

The detail and polish of the interactivity matter for things like this. The rough edges on the sound module I was using to position sounds in 3D space really detracted from the experience, and it began to seem pointless to fight with this given that high-quality 3D sound positioning is now available with basically no effort in game engines.

My second take-away from this project is therefore the following: take the quickest path to validating you game / application idea before implementing a complex technical apparatus to support it. Had I started with a rougher prototype using a technically simpler approach, I may have realized quicker that the whole plan wasn't really that compelling.
