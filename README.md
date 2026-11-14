# gh.sung-eon.space

The hub for Sung-eon's open-source projects, served by GitHub Pages at https://gh.sung-eon.space.

This repository holds only the hub: `index.html` lists the projects. Each project's own site is built and deployed
from its own repository's `gh-pages` branch; because this user site has the custom domain (`CNAME`), GitHub serves
every project site under it at `/<repository>/`, for example https://gh.sung-eon.space/facetshot/.

- **Adding a project:** deploy its site to its own `gh-pages` branch with the site's base path set to
  `/<repository>` and its address to `https://gh.sung-eon.space`, then add an `<article class="project">` to
  `index.html` (newest first) using its link-preview image.
- **Look:** `style.css` follows the project sites: warm paper and ink, one violet accent, a dark mat in dark mode,
  thin display headings, mono for small print.
- **Publishing:** pushing `main` deploys it. There is no build step and no CI.
