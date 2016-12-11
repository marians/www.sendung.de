---
layout: post
title:  "Bootstrapping Jekyll for GitHub Pages"
date:   2016-12-11 10:13:10 +0100
categories: tech
---

It took some reading to set up this blog. What I should have done, as a gist:

```nohighlight
gem install jekyll
gem install bundler
jekyll new www.sendung.de
cd www.sendung.de
```

Next steps:

- create the `marians/www.sendung.de` repository on GitHub
- In the settings for the repository, I set the `Source` for GitHub Pages to the `master branch`
- Configured the custom domain entry on the settings page to `www.sendung.de`
- Set up a CNAME for `www.sendung.de` pointint to `marians.github.io` in my DNS provider's admin UI
- Pushed my commits like this:

```
git init
git remote add origin git@github.com:marians/www.sendung.de.git
git commit -a -m "First content"
git push -u origin master
```