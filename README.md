To publish:

1. Edit/add content in `content` folder

2. Publish content changes in the `docs` folder:
   ```
   docker run --rm -v $(pwd):/workdir -w /workdir peaceiris/hugo:v0.134.3-full --destination docs
   ```

3. Push changes: `git commit`/`push`.

