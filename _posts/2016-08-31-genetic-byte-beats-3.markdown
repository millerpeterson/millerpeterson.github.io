---
layout: post
title:  Genetic Programming for Byte Beats in ClojureScript (Part 3)
date:   2016-08-31 14:00:00
---

In the [past](http://millerpeterson.github.io/2016/06/03/genetic-byte-beats.html) 
[two](http://millerpeterson.github.io/2016/08/29/genetic-byte-beats-2.html) posts I've been describing a project to play byte beat formulas
in the browser. I had a way to play them using the Web Audio API, and a large
body of formulas to start out with, built by parsing existing C expressions into
Clojure ASTs.

Byte beat formulas are really fun to mess around with, but most programs give you
a text-editor style interface to modify the formulas. I wanted to create a way to
interact with the formulas that was more accessible, and more amenable to quick
experimentation.

Previously I had come across [this blog post](http://www.thattommyhall.com/2013/08/23/genetic-programming-in-clojure-with-zippers/),
about [genetic programming](https://en.wikipedia.org/wiki/Genetic_programming) in Clojure. What inspired me was the idea of "breeding"
two Clojure functions by swapping branches of their respective ASTs. This seemed like
an interesting way to explore the space of possible formulas: take two byte beats that you
like, and see what their offspring would sound like.

If you use [zippers](https://en.wikipedia.org/wiki/Zipper_(data_structure)),
a functional data structure well-suited to editing trees, the
genetic programming operations are simple to implement. Here is my implementation of
crossover:

{% highlight Clojure %}
(defn replace-branch
  "Replace a formula branch rooted at l with a formula branch rooted at r."
  [l r]
  (zip/root (zip/replace l (zip/node r))))
  
(defn crossover
  "Return a breed two formula, switching a random branch in l
   with a random branch in r."
  [l-form r-form]
  (let [l (rand-nth (op-tree-locs l-form))
        r (rand-nth (op-tree-locs r-form))]
    (replace-branch l r)))
{% endhighlight %}

`op-tree-locs` just filters the list of tree nodes to those that represent operators
in the byte beat formulas (and thus valid sites for swapping branches).

I also implemented operations that are akin to genetic mutation:

- Mutate: randomly change a constant in the formula.
- Complexify: grow a formula tree by replacing a constant with a sub-expression.
- Simplify: shrink a formula tree by replacing a sub-expression with a constant.

You can try the web demo for this out [here](http://millerpeterson.github.io/byte-beats).

It's not exactly genetic programming, unless you consider your own aesthetic 
preferences to be a fitness function. That said, I think the app achieves roughly what I set
out to do: it's a quick and easy way to play around with byte beat formulas in your browser. 