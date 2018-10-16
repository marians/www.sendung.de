---
layout: post
title: Re-claiming my content
date: 2018-10-16 10:00:00
tags:
 - tech
 - content
---

Yesterday I was stuck in a commute situation, and so I decided to google for `jekyll microblogging` to find out how easy it would be to make my blog fit smaller content chunks. I want to gather what I'm emitting on my home turf, at [www.sendung.de](https://www.sendung.de/), which is a Jekyll site served by Github Pages.

What I found was [a great post by Fiona Voss](http://fionavoss.blog/2018/04/01/microblogging-in-jekyll/) that shows a way to re-claim my content by using my own blog as the center of my conversation in other channels. And it opens a door to phenomenons like the [IndieWeb](https://indieweb.org/), [MicroPub](https://indieweb.org/Micropub), and [POSSE](https://indieweb.org/POSSE).

Shortcut into a possible future: Fiona has given up this approach by now. She abandoned her own Jekyll site for performance reasons. Publishing became too slow over time, as the number of posts grew. Read more about it [in her update](http://fionavoss.blog/2018/09/25/how-i-microblog/) if you like.

Here is what I am roughly doing now:

![My POSSE schema](/media/2018-10-reclaiming-my-content/my-posse-schema.png)

Depending on what content I am publishing, I can use one of several methods.

- Longer articles that contain both text and images, like this one, I write in a text editor and commit them into [my Github repo](https://github.com/marians/www.sendung.de).

  All content in my repo is picked up by a [micro.blog](https://micro.blog/) site via my blog's RSS feed. From there, content is cross-published to Twitter, following [a few rules](http://help.micro.blog/2016/cross-posting-twitter/). In the case of an article like this, the title and URL will be posted on Twitter.

- Photos that I am publishing on Instagram are automatically picked up by [OwnYourGram](https://ownyourgram.com/) (thanks [Aaron Parecki](http://aaronparecki.com/)!). The service also pushes new (and older, to my surprise) photos into blog posts in my Jekyll/Github Pages site.

- Little notes, i. e. texts that don't justify opening a text editor and fiddling with git, I can now write on the PC or on the mobile.

And the magic glue for all three channels is the micropub service.

