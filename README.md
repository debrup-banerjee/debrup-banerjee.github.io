# debrup-banerjee.github.io

Personal portfolio of **Debrup Banerjee**, Engineering Leader at Appian.

**Live:** https://debrup-banerjee.github.io

A dependency-free static site in plain HTML, CSS and JavaScript. GitHub Pages
serves `index.html`/`assets/` as-is (no Jekyll) — but those files are now
*generated* from a small modular source tree under `src/`, by a zero-dependency
Node build script. Edit `src/`, run `npm run build`, commit both.

## Features

- Clean editorial design with light and dark themes (follows the system setting, with a manual toggle that's remembered)
- Responsive from phones to wide desktops
- Sections: About, Experience, Selected work, Skills & recognition, Education, Contact
- SEO basics: meta description, Open Graph/Twitter card, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`
- Accessible: skip link, semantic landmarks, keyboard-friendly navigation, respects `prefers-reduced-motion`

## Structure

```
.
├── index.html              # GENERATED — do not hand-edit, see src/
├── 404.html                # Custom not-found page (hand-authored, rarely changes)
├── assets/
│   ├── css/style.css       # GENERATED from src/styles/*.css
│   ├── js/main.js          # GENERATED from src/scripts/*.js
│   └── img/                # favicon.svg, apple-touch-icon.png, og-image.png
├── src/                    # Source of truth — edit here
│   ├── data/site.js        # ALL page copy: nav, hero, jobs, projects, skills, education, contact...
│   ├── components/         # One render function per section (header, hero, about, experience, work, skills, education, contact, footer, layout)
│   ├── styles/              # CSS split by section, numeric-prefixed for cascade order
│   └── scripts/             # JS split by feature (theme, nav, header-scroll, scrollspy/reveal, footer-year)
├── tools/
│   ├── build.js             # Renders src/ → index.html, assets/css/style.css, assets/js/main.js
│   └── lib/html.js          # esc()/html() helpers shared by every component
├── package.json             # `npm run build`, `npm run serve`
├── .nojekyll                # Serve files as-is (skip Jekyll)
├── robots.txt
└── sitemap.xml
```

## Editing content

Everything text-based lives in one file: `src/data/site.js`.

- **New role:** add an object to `experience.jobs`.
- **New highlight card:** add an object to `work.projects`.
- **New skill / award / school:** add an entry to `skills.groups[n].items`, `skills.awards`, or `education.schools`.
- **Colors and fonts:** change the CSS variables in `src/styles/00-base.css`.
- **Markup for a whole section:** edit the matching file in `src/components/`.

After any change under `src/`, rebuild the static output:

```bash
npm run build
```

This regenerates `index.html`, `assets/css/style.css` and `assets/js/main.js`.
**Commit the generated files along with your `src/` change** — GitHub Pages
serves exactly what's committed and does not run the build itself.

## Preview locally

```bash
npm run build   # if you changed anything under src/
npm run serve   # python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

GitHub Pages serves the `main` branch automatically for a repo named `<username>.github.io`.

1. `npm run build` (skip if `index.html`/`assets/` are already up to date).
2. Commit and push to `main`.
3. In the repo, open **Settings → Pages** and confirm **Source: Deploy from a branch → `main` / `(root)`**.
4. The site updates at https://debrup-banerjee.github.io within a minute or two.
