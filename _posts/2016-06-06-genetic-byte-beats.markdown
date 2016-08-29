---
layout: post
title:  Genetic Programming for Byte Beats in ClojureScript (Part 1)
date:   2016-06-03 22:33:00
---

Consider for a moment the following small fragment of C code,
which outputs a sequence of bytes based on an ever-incrementing counter (`t`):

```
for (t=0;;t++) {
    putchar(t * ((t>>12 | t>>8) & 63 & t>>4));
}
```

Now imagine this is generating samples to be passed to a DAC to create sound
(e.g. pipe the output of this program to `/dev/dsp` on a Unix system). What
do you think this would sound like? Probably just a bunch of random crunchy
noise, right? The formula, a seemingly arbitrary combination of mostly bitwise
operators, doesn't really resemble a typical synthesis algorithm. There are no
obviously periodic aspects to the formula; there are no sine or cosine functions.

And yet if you actually try running this, you'll see that it produces a musical,
chiptune-style melody that exhibits a surprising amount of variety, both in terms
of its melody and timbre, as it evolves over time. This formula and many others
were originally discovered in the [demoscene](https://en.wikipedia.org/wiki/Demoscene) community,
principally by [Viznut](http://www.pelulamu.net/viznut/), and documented in
a series of [blog posts](http://countercomplex.blogspot.ca/2011/10/algorithmic-symphonies-from-one-line-of.html)
 and YouTube videos; the first one is worth checking out if you haven't seen this already:

<iframe width="420" height="315" src="https://www.youtube.com/embed/GtQdIYUtAHg" frameborder="0" allowfullscreen></iframe>

This phenomena has come to be known as [byte beats](http://thecreatorsproject.vice.com/blog/meet-bytebeat-a-brand-new-electronic-music-genre), and people have been exploring
the musical possibilities of these short formulas through a variety of applications
([Bitwiz](http://kymatica.com/Software/BitWiz) and [GlitchMachine](http://madgarden.net/apps/glitch-machine/) for iOS are some of my favourites). You can try some out
on the web [here](http://wurstcaptures.untergrund.net/music/).

Personally, I am fascinated by two aspects of these formulas:

 - You can pack an enormous amount of sonic variety in an extremely concise formula;
  byte beats are generative in the best sense.

 - The synthesis technique is somewhat mysterious, and mixes concerns about melody and
  timbre.

If you are curious about why these formulas sound the way they do, Viznut has a fairly
in-depth analysis of some of them in this [blog post](http://countercomplex.blogspot.ca/2011/10/some-deep-analysis-of-one-line-music.html).
To simplify, the periodicity that is required for harmonic sounds comes from the implicit modular "wrap-around"
that occurs when you 8-bit downsample the evaluated value of a formula. The melodies
come from the bitshift operators, which are tantamount to multiplication or division by powers
of two, and thus create the kinds of whole-number interval relations between frequencies
that exist in melodies.

I'm not particularly interested in engineering byte beat formulas to
make conventional sounds or melodies, although I can see how this would be a really cool
"compression algorithm" for the soundtrack to a 64kB demo. For me, the fun is in playing
around with these formulas in a trial-and-error kind of way, and just seeing what kind of
sounds you can produce.

For the past few months, I've been working on a browser-based program for exploring the
sonic possibilities of byte beats in a fun and intuitive way. The idea is to use genetic
programming to generate novel and interesting byte beat formulas. I'm coding the project
using [ClojureScript](https://github.com/clojure/clojurescript) and rendering the audio in-browser using the
[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).
I'll be documenting my work on this project in a series of upcoming posts.