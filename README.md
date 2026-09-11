# debrup-banerjee.github.io

Personal portfolio of **Debrup Banerjee**, Engineering Leader at Appian.

**Live:** https://debrup-banerjee.github.io

A fast, dependency-free static site in plain HTML, CSS and JavaScript. No build step, no framework, no Jekyll.

## Features

- Clean editorial design with light and dark themes (follows the system setting, with a manual toggle that's remembered)
- Responsive from phones to wide desktops
- Sections: About, Experience, Selected work, Skills & recognition, Education, Contact
- Public GitHub repositories load live into the "On GitHub" grid. Forks, archived repos and this site's repo are excluded, and a static link shows if the API is unavailable.
- SEO basics: meta description, Open Graph/Twitter card, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`
- Accessible: skip link, semantic landmarks, keyboard-friendly navigation, respects `prefers-reduced-motion`

## Structure

```
.
├── index.html              # All page content
├── 404.html                # Custom not-found page
├── assets/
│   ├── css/style.css       # Theme tokens + layout
│   ├── js/main.js          # Theme toggle, menu, scroll spy, GitHub repos
│   └── img/                # favicon.svg, apple-touch-icon.png, og-image.png
├── .nojekyll               # Serve files as-is (skip Jekyll)
├── robots.txt
└── sitemap.xml
```

## Editing content

All text lives in `index.html`, grouped by section comments (`<!-- ============ Experience ============ -->`).

- **New role:** copy a `<li class="job">` block inside `<ol class="timeline">`.
- **New highlight card:** copy an `<article class="card">` inside `#featured`.
- **Colors and fonts:** change the CSS variables at the top of `assets/css/style.css`.
- **GitHub grid:** `GITHUB_USER` and `MAX_REPOS` are at the top of `assets/js/main.js`.

## Preview locally

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Deploy

GitHub Pages serves the `main` branch automatically for a repo named `<username>.github.io`.

1. Commit and push to `main`.
2. In the repo, open **Settings → Pages** and confirm **Source: Deploy from a branch → `main` / `(root)`**.
3. The site updates at https://debrup-banerjee.github.io within a minute or two.
