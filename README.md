# addedpixels.github.io

The source for [addedpixels.com](https://addedpixels.com). A two-person Manchester studio's marketing site, hand-written HTML, no build step.

## Stack

- Static HTML, one file per page, hosted on GitHub Pages via the `CNAME`.
- Shared design system in `css/site-2026.css` and `js/site-2026.js`.
- Page-specific styles live in each file's `<style>` block.
- Light + dark via `prefers-color-scheme`, no toggle.
- Fonts: Fraunces (display) + Manrope (body) + Caveat (handwritten accents) + JetBrains Mono (case-study chrome).

## Local dev

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

No transpile, no bundler, no install step. Edit the HTML, refresh the browser.

## Pages

- `index.html` — homepage
- `about.html` — studio
- `marple.html`, `masonic-tracker.html`, `poynton-wmc.html` — case studies
- `showcontrol.html`, `speedlap.html`, `speedlap-insights.html`, `chordlibre.html`, `chordlibre-editor.html` — product pages and interactive tools

## Adding a new page

Copy the closest existing page (case studies copy from `marple.html`; product pages copy from `chordlibre.html`). Keep the shared `<header class="head">` and `<footer class="foot">` markup identical. Add page-specific layout to the inline `<style>` block.

---

Built and maintained by [Yannick McCabe-Costa](https://mccabecosta.com) and [Oliver Hemsted](https://hemsted.co).
