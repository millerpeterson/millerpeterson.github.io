---
layout: post
title:  Running node.js in Docker during development
date:   2015-04-25 22:33:00
---

### Docker for development

After coming across being convinced by [this article](https://medium.com/@treeder/why-and-how-to-use-docker-for-development-a156c1de3b24) that Docker is a useful tool for running a dev environemnt, I've been running my recent [Node.js-based FitBit logger project](https://github.com/millerpeterson/fitbit-logger) from a Docker container. I'm looking at [Amazon's EC2 Container Service](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html) to host the thing, so I'm writing basic Docker rather than something fancier like [Compose](https://docs.docker.com/compose/).

### Setting up a Node.js container

[This tutorial](https://docs.docker.com/examples/nodejs_web_app/) on the docs.docker.com site goes through the process of building a Docker image for Node.js. Here is the one I ended up with by following their instructions:

{% highlight bash %}
FROM    centos:6

RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN     yum install -y npm

# App
ADD . /src
WORKDIR /src
RUN npm install

# For Dev
RUN npm install -g nodemon

EXPOSE  80
CMD ["node", "/src/server.js"]
{% endhighlight %}

Note the ```install -g nodemon```: [Nodemon](https://github.com/remy/nodemon) will monitor your filesystem for changes and restart a Node.js server when source code is modified.

This is how I start up my container using Nodemon:

{% highlight bash %}
docker run -d -p 80:80 -v /Users/miller/dev/fitbit-logger:/src --name fbit millerpeterson/fitbit-logger nodemon server.js
{% endhighlight %}

One thing to watch is that you have to have run ```npm install``` at least once locally, so that the ```node_modules``` directory is created. You need this because the contents of the local source directory will get copied over the container source directory with the ```-v /Users/miller/dev/fitbit-logger:/src``` portion of the command.

Now you can edit your code and have it reflected in your Docker container automatically, without having to run additional commands on the container!

