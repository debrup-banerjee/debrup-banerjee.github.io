# SPEC.md — Personal Portfolio Website

What this site is and the rules it has to follow. For day-to-day build/edit
instructions, see `CLAUDE.md`.

## Goal

A personal portfolio, free-hosted on **GitHub Pages** at
`https://debrup-banerjee.github.io/`, for recruiters and peers to see an
always-current summary of the owner's professional background.

- **Content source of truth**: the owner's [LinkedIn profile](https://www.linkedin.com/in/debrupbanerjee/),
  exported locally as `Profile.pdf`. Site copy is transcribed from it, not
  invented. `Profile.pdf` itself stays local (gitignored) — it's reference
  material, not something published as-is.

## What's on the site

- Sections: About, Experience, Selected work, Skills & recognition,
  Education, Contact.
- Light/dark theme — follows the OS setting, with a toggle that's remembered.
- Responsive and accessible (skip link, semantic landmarks, keyboard nav,
  respects reduced-motion).
- SEO: meta description, Open Graph/Twitter cards, JSON-LD `Person` schema,
  `sitemap.xml`, `robots.txt`.
- Custom 404 page.
- Adding a job, project, skill, or award is a **data edit**, not a markup
  edit — see "How it's built" below.

## How it's built

Source lives under `src/` (content data, per-section components, CSS/JS
partials). A zero-dependency Node script, `tools/build.js`, renders that
source into the three files GitHub Pages actually serves: `index.html`,
`assets/css/style.css`, `assets/js/main.js`. Those generated files are
committed — Pages has no build step of its own, so what's committed is what
ships. Full workflow in `CLAUDE.md`.

## Constraints

Binding unless the owner says otherwise:

1. **Static only.** No server, no build step at deploy time — GitHub Pages
   just serves committed files. `.nojekyll` stays.
2. **Works with JavaScript off.** Content lives in the static HTML; JS is
   enhancement only (theme toggle, mobile menu, scroll spy, reveal-on-scroll).
3. **No client-side framework or runtime dependency.** Plain HTML/CSS/JS.
4. **Zero npm dependencies for the build script.** `tools/build.js` uses
   only Node built-ins — no install step, no `node_modules`.
5. **Generated files are the deploy artifact.** Run `npm run build` and
   commit `index.html`/`assets/css/style.css`/`assets/js/main.js` alongside
   any `src/` change. Never hand-edit those three files.
6. **One source of truth for content:** `src/data/site.js`. (`404.html` is
   the one hand-authored exception — simple enough not to need it.)
7. **No AI-tool branding anywhere** — file names, folders, or visible
   content. This is the owner's professional portfolio.
8. **No secrets, ever, in any folder.** `.gitignore` backstops common
   patterns (`.env*`, `*.pem`, `*.key`, `*credentials*`, `*secret*`), but
   that's a safety net, not permission to add one.
9. **No unnecessary personal files committed.** `Profile.pdf` and other
   local-only files stay gitignored.
10. **Content must track LinkedIn.** When the source profile changes,
    update `src/data/site.js` to match — don't let it drift.
11. **Repo hygiene.** No stray/placeholder folders. Auxiliary files (e.g.
    README screenshots) live in one clearly named folder (`previews/`).
12. **Theming is token-driven.** Every color comes from the CSS custom
    properties in `src/styles/00-base.css` — never hardcode a hex value in
    another partial. `--accent` (backgrounds/borders/decoration) and
    `--accent-text` (text/icons) are intentionally separate tokens: a color
    dark enough for white button text on top isn't always light enough to
    pass 4.5:1 as text on the page background, so they can differ per theme
    (they do in dark mode). Any new accent color needs a WCAG AA contrast
    check (4.5:1 normal text, 3:1 large text/UI) in both themes, for both
    roles.

## Non-goals

- No CMS, admin UI, database, user accounts, or comments.
- No analytics/tracking unless explicitly requested.
- Not a general-purpose site generator — fixed sections, not a content
  pipeline.

## Deploy

1. `npm run build`
2. Commit the `src/` change and the regenerated output together
3. Push to `main`
4. GitHub → **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**
5. Live within a couple of minutes

## History

- **Built from LinkedIn**: content transcribed from `Profile.pdf`, not
  invented.
- **Modularized**: refactored from hand-written HTML/CSS/JS into the
  data-driven `src/` + `tools/build.js` setup above, so content changes
  don't require touching markup.
- **Cleaned up**: renamed `Claude outputs/` → `previews/`, removed the
  stray `_to_delete/` folder — no AI-tool branding, no clutter.
- **Repalette**: switched from a warm editorial palette to a professional
  one — light theme merges Classic Monochrome with Corporate Trust Blue
  (`#0052CC` accent), dark theme is Modern Tech Navy (`#111827` bg,
  `#6049EA` accent). A fourth option, Earthy Sage & Cream, was skipped as a
  better fit for creative portfolios than an engineering-leader profile.
- **Post-palette fixes**: a code review caught the `theme-color` meta tags
  left on the old palette, and the dark accent failing WCAG contrast when
  used as text (not just as a button background) — both fixed, which is
  what produced the `--accent`/`--accent-text` split in constraint #12.
