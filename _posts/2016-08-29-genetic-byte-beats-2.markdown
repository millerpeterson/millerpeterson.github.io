---
layout: post
title:  Genetic Programming for Byte Beats in ClojureScript (Part 2)
date:   2016-08-29 17:41:00
---

As I outlined in my [previous post](http://millerpeterson.github.io/2016/06/03/genetic-byte-beats.html), 
I had set out to create a byte beat player for the web
using ClojureScript and the Web Audio API. Ideally this would have some novel ways to generate new
formulas. My main complaint with existing byte beat synth programs is that the interface is
basically a text editor and a C compiler. You should be able to have fun with byte beats without
having to understand what is actually going on in byte beat formulas.

To start, I needed to figure out how to play a byte beat formula in the browser. From past tinkering
withthe Web Audio API, I knew that there was an audio graph element called a 
[ScriptProcessorNode](https://developer.mozilla.org/en/docs/Web/API/ScriptProcessorNode),
which could be used to create samples by evaluating an arbitrary function. The way this works is that
your ScriptProcessorNode will execute a callback which is passed an audio buffer, and the callback
fills up the buffer with sample values. Here is what my ClojureScript implementation looked like;
this function returns the callback that will receive ScriptProcessorNode events:

```clojure
(defn audio-event-processor
  [clock-ref sample-gen rate-ratio]
  "A function that fills the audio buffer in an autioprocess event with samples from using
   sample-gen ranging over a clock's values, rate adjusted according to a sample rate ratio."
  (fn [ap-event]
    (let [out-buff (.-outputBuffer ap-event)
          buffer-sample-gen (fn [buff-index]
                              (let [clock-rel-t (+ buff-index (deref clock-ref))
                                    rate-adjusted-t (Math/floor (/ clock-rel-t rate-ratio))]
                                (sample-gen rate-adjusted-t)))]
      (fill-buffer! out-buff (comp folded-amp buffer-sample-gen))
      (swap! clock-ref #(+ % (.-length out-buff))))))
```

`sample-gen` is a function that would take one argument, essentially the "t" in byte beat formulas.
There's a bit of math using `rate-ratio` - basically this allows you to stretch or compress a 
formula by manipulating its sample rate. This function mutates a global clock reference to increment
the byte beat "t" value, but if I had to do it again I would try to do this with a closure. This
approach 
 
Having a way to play the byte beats, I wanted to try out some of the awesome [existing byte beat 
formulas](https://github.com/erlehmann/algorithmic-symphonies). 
At first I tried manually re-writing some of the famous ones in ClojureScript. Here's
the ClojureScript version of the famous `t * ((t>>12 | t>>8) & 63 & t>>4)`:

```Clojure
(def yv1f1
  '(* t (bit-and (bit-or (bit-shift-right t 12)
                         (bit-shift-right t 8))
                 63
                 (bit-shift-right t 4))))
```

Manually coding these rapidly grew tedious, so I decided I needed a way to parse the C expressions
and convert them into ClojureScript expressions. A bit of searching lead me to 
[Instaparse](https://github.com/Engelberg/instaparse), an awesome library for generating parsers
for language grammars. And it works in the browser through the [instaparse-cljs](https://github.com/lbradstreet/instaparse-cljs) port!
Arithmetic is a classic instructional example for CFGs, so I was able to 
get oriented quickly. Through some trial and error I figured out how to get the operator precedence 
right for the byte beat grammar. Here is what I came up with:

```
expr          = bitwise-or
<bitwise-or>  = bitwise-xor | bit-or
bit-or        = bitwise-or <'|'> bitwise-xor
<bitwise-xor> = bitwise-and | bit-xor
bit-xor       = bitwise-xor <'^'> bitwise-and
<bitwise-and> = bit-shift | bit-and
bit-and       = bitwise-and <'&'> bit-shift
<bit-shift>   = add-sub | shift-left | shift-right
shift-left    = bit-shift <'<<'> add-sub
shift-right   = bit-shift <'>>'> add-sub
<add-sub>     = mult-div | add | sub
add           = add-sub <'+'> mult-div
sub           = add-sub <'-'> mult-div
<mult-div>    = term | mult | div | mod
mult          = mult-div <'*'> term
div           = mult-div <'/'> term
mod           = mult-div <'%'> term
int-cast      = <'(int)('> bitwise-or <')'>
sin           = <'sin('> bitwise-or <')'>
tan           = <'tan('> bitwise-or <')'>
<term>        = number | variable | <'('> bitwise-or <')'> | int-cast | sin | tan
variable      = 't'
<number>      = floating | integer | hex
floating      = #'-{0,1}\d+\.\d+'
integer       = #'-{0,1}\d+'
hex           = #'-{0,1}0x(\d|[a-f]|[A-F])+'
```

Now I was able to parse and play all the cool byte beat formulas people have come
up with. It's pretty fantastic that ClojureScript and Instaparse let you do all this
in the browser!

In the next post I'll get into how I used genetic programming operations with the 
byte beat formula syntax trees to generate formulas.