---
layout: post
title:  Connecting Clojure to Max/MSP
date:   2015-03-25 20:46:22
---

### Background

For a long time I've been working on an animation system built on the Novation Launchpad MIDI controller, and I've settled on Clojure as the platform. The data-oriented nature of Clojure seems ideal for representing streams of LED frames and their transformation.

Since I'd already written two interfaces for the Launchpad (for Node.js and Max), I was not eager to go through the same exercise with Clojure. Instead, I decided to run the Launchpad for Max/MSP, and have Clojure send messages to it.

Since the project is an animation system that will be sending a series of frames to the Launchpad (via Max), timing is important, while guaranteeing arrival of all information is not so much. Open Sound Control (OSC) is a real-time data format developed as a modern successor to MIDI. Since it runs on the UDP protocol and is natively supported by Max, it seemed like an easy solution. The osc-clj module (part of the Overtone project) appears to be the main contender for OSC support in Clojure.

### Clojure to Max

It's pretty easy to connect osc-clj to Max. In Max we can receive OSC messages via the `udpreceive` object. It takes one argument for the port on which you want it to run. I feel like this objects should be called `oscreceive`, but that's neither Arthur nor Matha as my mom says.

![udpreceive in Max](/assets/udpreceive.png)

[(Max Patch)](assets/udpreceive_print_example.maxpat)

Max will print any OSC messages it gets on port 1337. Doesn't get much easier than that.

Let's create an OSC client in Clojure:

{% highlight lisp %}
(use 'overtone.osc)
(def c (osc-client "localhost" 1337))
{% endhighlight %}

Then say 'hello' to Max (send a string and a series of numbers):

{% highlight lisp %}
(osc-send c "/max" "Hey buddy." (Integer. 1) (Float. 2.7))
{% endhighlight %}

Take a look in the Max console - you will see a message like:

{% highlight lisp %}
received: /max Hey buddy. 1 2.7
{% endhighlight %}

So messages are coming through. Note that for numbers, I am creating Java Integer and Float classes to tell osc-clj what OSC data type I want to send. If you use bare Clojure numbers it doesn't currently seem to properly infer the type.

### Max to Clojure

To get messages going in the other direction, we'll use the `udpreceive` object's counterpart `udpsend` to send data over port 7331.

![udpsend in Max](/assets/udpsend.png)

[(Max Patch)](/assets/udpsend_example.maxpat)

On Clojure's end, we need to first of all create a server to receive messages on the path "/clojure" and print them:

{% highlight lisp %}
(def s (osc-server 7332))
(osc-handle s "/clojure" (fn [msg] (println msg)))
{% endhighlight %}

Send the Max message shown above, and you will see something like:

{% highlight lisp %}
{:src-port 53016, :src-host localhost, :path /clojure, :type-tag sif, :args (Hey Bro! 1 4.6)}
{% endhighlight %}

So osc-clj gives us a map of various message properties (```:args``` is the key for the message content).

If you want to use OSC routing in Max (as opposed to just using a ```route``` object), [CNMAT](http://cnmat.berkeley.edu/downloads) has some objects available.

