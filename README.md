# zubincarvalho.github.io

Personal website. Static HTML, CSS, and JavaScript. No build step and no dependencies.

## Files

- `index.html` is the page. All content lives here.
- `style.css` is all styling. The theme colors and fonts are at the very top under `:root`.
- `main.js` handles the scroll reveal, the active nav highlight, and the footer year.
- `assets/` is where you drop your images.

## Deploy to GitHub Pages

1. Put these files at the root of your repo, then push:

   ```bash
   git add .
   git commit -m "Add personal site"
   git push origin main
   ```

2. In your repo on GitHub, go to **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, pick the `main` branch and the `/ (root)` folder, then save.
4. Wait about a minute. Your site goes live at `https://zubincarvalho.github.io`.

## Editing content

Everything you change is in `index.html`. Look for the comment blocks that say `EDIT THIS`. Each section is clearly marked.

To add another project or job, copy one `<article class="entry">` block and edit it.

## Adding images

Put image files in the `assets/` folder, then in the Design or Personal section replace a placeholder tile:

```html
<figure class="tile">
  <div class="tile__ph">Image</div>
  <figcaption>Caption</figcaption>
</figure>
```

with this:

```html
<figure class="tile">
  <img src="assets/your-photo.jpg" alt="Short description" />
  <figcaption>Your caption</figcaption>
</figure>
```

## Changing colors and fonts

Open `style.css` and edit the variables under `:root` at the top. For example, change `--accent` to swap the terracotta accent for another color.
