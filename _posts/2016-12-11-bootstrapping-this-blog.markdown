---
layout: post
title:  "Bootstrapping Jekyll for GitHub Pages"
date:   2016-12-11 10:13:10 +0100
categories: tech
---

Is there anything simpler than setting up a static blog on GitHub pages?

Still, it took some reading to set up this blog. What I should have done, as a gist:

```nohighlight
gem install jekyll
gem install bundler
jekyll new www.sendung.de
cd www.sendung.de
```

Then, create the `marians/www.sendung.de` repository on GitHub. To add my site content:

```nohighlight
git init
git add .
git remote add origin git@github.com:marians/www.sendung.de.git
git commit -a -m "Raw jekyll site"
git push -u origin master
```

Then:

- In the settings for the repository, I set the `Source` for GitHub Pages to the `master branch` and hit the `Save` button next to it.
- Configured the custom domain entry on the settings page to `www.sendung.de`
- Set up a CNAME for `www.sendung.de` pointint to `marians.github.io` in my DNS provider's admin UI

