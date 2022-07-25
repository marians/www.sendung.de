---
title: Energy efficiency of programming languages
slug: programming-languages-energy-efficiency
date: 2022-07-24 13:00:00
description: More and more server side applications are constantly contributing to the global electricity usage. As a developer, you might be responsible for such applications. Have you ever considered the impact which the selection of the programming language has on the energy consumption?
tags:
  - sustainability
  - tech
comments:
  host: mastodon.social
  username: sendung
  id: 108702630896547339
---

Servers are taking an [ever growing share](https://digital-strategy.ec.europa.eu/en/library/energy-efficient-cloud-computing-technologies-and-policies-eco-friendly-cloud-market) of our electricity usage. Of course, they exist to run applications. And the energy consumption is, to a large degree, determined by the applications running on them.

Ironically, servers turn electricical energy into thermal energy and thus contribute to global warming in a very concrete sense.

When I look around, I don't see a lot of discussion happening around the **responsibility of application developers** regarding energy usage and the impact this has on climate change. We are used to juggling often contradicting goals like software maintainability, development and release cycles, user experience, and security. Yet we fail to take into account how our applications could be made more friendly to our climate. And, to be honest, that makes me quite unhappy.

**Is it ignorance? Do we under-estimate the effects of our decisions?**

When developing an application, we can make many decisions that influence the energy usage. For example, whether our program should query an API periodically -- and if yes, how often -- or whether the program should instead _receive_ messages whenever a relevant change happened. Whether data should be calculated or persisted to memory. And even which programming language the application should be written in.

Pereira et. al. (2021) have compared the energy efficiency of several popular programming languages based on a benchmark suite. The diagram below shows the relative energy consumption, with values normalized to the most efficient one. So C, as the most energy efficient, has the value 1.

<iframe title="Programming languages ranked by energy use" aria-label="Dot Plot" id="datawrapper-chart-u0vYb" src="https://datawrapper.dwcdn.net/u0vYb/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none; padding: 15px;" height="615"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script>

To compare Ruby (69,91) with Go (3,23), for example, we simply divide the larger by the smaller value and find that the factor is 21.64.

So in Ruby, the benchmark requires about 22 times the energy used when running as a Go program. Or about 68 times the energy of the Rust implementation. Or 70 times the energy of the C implementation.

I think these numbers are **huge**, in terms of relevance.

Maybe the numbers are not surprising to you, because you know about the differences between compiled and interpreted languages, for example. But maybe these numbers make you think whether your preferred interpreted language is the right one for your application.

## References

Rui Pereira, Marco Couto, Francisco Ribeiro, Rui Rua, Jácome Cunha, João Paulo Fernandesd, João Saraiva. 2021. Ranking Programming Languages by Energy Efficiency. Preprint submitted to Elsevier.
https://haslab.github.io/SAFER/scp21.pdf
