---
layout: post
title:  "Idea: DIY Sourdough Incubator"
date:   2016-12-13 21:00:00
tags: diy, bread
---

The idea of ~~breaking bad~~ baking bread, really good bread, is super-fascinating to me. I got recently amazed by this guy named Lutz Geißler, who seems to be on a mission and already published nearly 800 bread recipes in his blog called [Plötzblog](https://www.ploetzblog.de/). I found him via an episode of the radio show [Alles in Butter](http://www1.wdr.de/mediathek/audio/wdr5/wdr5-alles-in-butter/index.html) on local radio WDR5. If you want to find out more about him, bread and his driving forces, check out [this lengthy and fascinating talk](https://cre.fm/cre213-brot) with him and Tim Pritlove (all in German).

![The Goal](/assets/img/2016-12-13/the-goal.png)

Inspired to try and bake my own bread, I started setting up a "Sauerteig", as we call in in German. Because that's the real thing.

A sourdough is basically a culture of natural yeast fungi and lactic acid bacteria, nurtured by flour and water. I doesn't require much: the right type of flour (I took rye whole grain), warm water, and a warm place to rest. Then some time, like four to five days. How hard can it be?

The hardest part seems to be the warm place. We have it rather warm in our living room/kitchen, but it's far below the recommended 30°C (86°F). And our oven has 50°C as a minimal temperature.

I tried creating a sourdough at room temperature, however the result after four days doesn't convince me. I see some bubbles and I smell some gas, but I don't see any volume increase or surface elevation. I saw a lot more activity in the dough when I had it in the still warm oven for a couple of hours. But that is hard to maintain for a longer time.

![The Solution](/assets/img/2016-12-13/sketch-dough-incubator.png)

So how about an automatic incubator that maintains the right temperature for the sourdough to grow its cultures?

## Prior Art

Of course, this has to exist. After a few minutes of research (a.k.a. googling), the terms *proof box*, *proofing box* or *rising box* come up. Wikipedia has [an article about the concept](https://en.wikipedia.org/wiki/Proofing_(baking_technique)) and there is a quite informative [article on cooksinfo.com](http://www.cooksinfo.com/proof-box).

This brings up issues I haven't thought of so far. First and foremost: keeping the humidity level, as the dough would otherwise likely dry out on the surface. Second: different temperatures might yield different qualities (as in tastes). Something to keep in mind.

What about DIY solutions?

A simple setup to be found in many places ([ex. 1](http://www.thefreshloaf.com/node/40377/homemade-proofing-box), [ex. 2](https://www.youtube.com/watch?v=Aaj8RupcADw)) is this: Take a box, put a light bulb and a thermostat inside, and make the thermostat control the light bulb. Put your bowl of dough and a bowl of water inside.

While this might work well, for me this appears a bit too simple and too "analog" to be fun. And I'm not too thrilled about the 220V (or 110V) circuit in a case together with a water bowl.

The [Electric Gardener](http://electricgardener.net/build-arduino-based-sourdough-incubator)'s approach is more what I'm after. The solution looks interesting, but there are two things I don't like so much when looking at it:

It makes use of a 220V lamp to heat the dough (see above). I assume that this generates a much higher temperature on the dough surface than actually required.

Then there is this fan. I have a feeling that there shouldn't be too much air flow around the dough. At least the instructions I have read recommend covering the dough lightly with some cloth, probably to protect from air flow. I am also worried that too much air exchange would increase the problem of keeping the dough moist.

## Wishlist

On a blank sheet of paper, here are my wishes (I don't dare to call them requirements, as I'm more thinking of it as a moving target):

- The temperature should be adjustable, to experiment with different settings.
- Humidity should be measured at least, maybe actively controlled.
- The dough container should ideally heat up the dough from the bottom and/or from the sides, to heat the greatest possible surface.
- The heat source should be regulated so that no extra cooling would be required.
- Only low voltages (say up to 12V) and currents should be required for safety reasons.
- I want the option to log some data, like temperature, humidity and maybe more. What if we could tell, based on the data, when the dough is ready? Maybe some gas concentration, the conductivity of the dough or something like that will work as a marker? Maybe we can even measure the volume of the dough to tell when it has risen? That's where the fun starts.

## Let's think

First thoughts:

- **Robust metal container** (thinking lathe or mill) with direct heating, plus a temperature sensor in the container wall. Maybe use Peltier element for heating. No idea how I would manufacture this though. Also no idea what metals would be fine for direct contact with dough. And how strong the Peltier element and the current would have to be. Possibly there are ways to calculate that.
- **A [terrarium heat mat](https://www.amazon.com/s/?url=search-alias%3Daps&field-keywords=terrarium+heat+mat)** could work, with a metal or ceramic bowl placed on top. They come in various sizes, with the smallest consuming about 8 Watt and measuring 16 by 23 cm. And they have some protection against humidity.
- **Moisture** could be provided via a heated water container next to the dough container, with a common enclosure. The warmer the water, the more water should evaporate. So to maintain a humidity level, the temperature of the water would have to be maintained, independent from the dough. An alert when moisture gets too low would be nice (probably indicating the water bowl is empty).
- **Logging data** is the easiest part. A [Wemos D1mini](https://www.wemos.cc/product/d1-mini.html) (that's an ESP8266 board I happen to have a spare of) with a few sensors attached will push data to a service like [Blynk](http://www.blynk.cc/) or something I would run myself.


![The Solution](/assets/img/2016-12-13/sketch-dough-incubator-refined.png)

If you want to join the brainstorming, be my guest! If I really come up with something, which depends on time, priorities, and feasibility, I'll definitely write a follow up.

#### Update 2016-12-15

I ordered a very small (14 x 15 cm) [heat mat](https://www.amazon.de/dp/B00CWSNRUI/) which is sold as terrarium equipment. No idea whether it is really useful for that! However I placed a plastic bowl with roughly 280 gram of sourdough on it. With its ~5 Watts (confirmed with a power meter), the mat rose the dough temperature from roughly 25°C to 32°C within a few hours. Bottom line: that seems to be a suitable source of warmth.
