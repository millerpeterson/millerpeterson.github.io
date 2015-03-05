---
layout: post
title:  Running ElasticSearch + Marvel in Docker.
date:   2015-03-05 23:55:22
---

Lately I'm fascinated with [ElasticSearch](http://www.elasticsearch.org/), and I'd like to start indexing / analyzing the content I've built up in my gratefulness journal ([thx-journal.net](http://thx-journal.net)) in the many years I've been using it. I decided this would be a good excuse to get familiar with [Docker](http://docker.com) at the same time.

After familiarizing myself with the basics of Docker, I found a project called [dockerfile/elasticsearch](https://github.com/dockerfile/elasticsearch), a nice image that runs ElasticSearch with an EC2 discovery plugin enabled.

There was one thing small thing missing that I love to have in ElasticSearch: the [Marvel plugin](http://www.elasticsearch.com/products/marvel). This provides pretty-looking analytics for your cluster, as well
 an excellent json developer console (formerly known as [Sense](https://github.com/bleskes/sense)). Getting this included in the image was a one liner in the
 :

 ```
 RUN cd elasticsearch && bin/plugin -install elasticsearch/elasticsearch-cloud-aws/2.4.1 && bin/plugin -install elasticsearch/marvel/latest
 ```

Ran the new image, and everything just worked (once I figured out how to get my boot2docker VM ip)! I'm beginning to get the hype surrounding Docker and other lightweight container platforms. Next step is to try this new image on EC2. All my words of thanks will soon go to the the big paper shredder up in the cloud: ElasticSearch.