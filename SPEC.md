# SPEC.md — Personal Portfolio Website

Requirements spec for this repo, written from the context given across the
project's conversations so far. This documents *what was asked for and why*;
see `CLAUDE.md` for *how the repo is built and edited*.

## 1. Goal

Host a full personal portfolio / profile website, publicly, on **GitHub
Pages**, so it's reachable at `https://debrup-banerjee.github.io/` with no
paid hosting and no server to run or maintain.

- Repo location: `Agentic-ai-projects/portfolio/debrup-banerjee.github.io`
  on disk, pushed to a GitHub repo named `debrup-banerjee.github.io` (the
  `<username>.github.io` naming convention GitHub Pages requires for a
  user/profile site served from the repo root).
- Audience: recruiters, engineering peers, and anyone the owner shares the
  link with — the site is the canonical, always-current summary of the
  owner's professional background.
- **Content source of truth**: the owner's LinkedIn profile,
  <https://www.linkedin.com/in/debrupbanerjee/>, exported as `Profile.pdf`.
  All job history, dates, titles, and education entries in
  `src/data/site.js` were transcribed from that export, not invented or
  hand-drafted from scratch. `Profile.pdf` stays local-only (gitignored,
  constraint #9) — it's reference material for keeping the site in sync
  with LinkedIn, not something republished as-is.

## 2. Context timeline (why the repo looks the way it does)

1. **Initial build**: a single-page portfolio was created — hand-authored
   `index.html`, one `assets/css/style.css`, one `assets/js/main.js` — with
   sections for About, Experience, Selected work, Skills & recognition,
   Education, and Contact, plus SEO metadata (Open Graph, Twitter card,
   JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`) and a light/dark
   editorial theme. The *markup and code* were hand-authored, but the
   *content* (roles, dates, employers, education) was not invented — it was
   transcribed from the owner's LinkedIn profile, saved locally as
   `Profile.pdf`, which served as the source document for the whole site.
2. **Modularization request**: "update my portfolio code and modularise it
   ... so that the website builder code is scalable and modularised." Three
   approaches were weighed (client-side JS rendering, CSS/JS split only, or
   a static build script); a static build script was chosen specifically to
   keep the deployed output as plain static HTML — full SEO, no-JS fallback,
   identical runtime behavior — while making the *source* modular and
   data-driven. This produced the current `src/` + `tools/build.js` setup
   (see `CLAUDE.md`).
3. **Cleanup request**: remove folders that leak which AI tool built the
   site, and remove/collate anything unnecessary. `Claude outputs/` was
   renamed to `previews/`; the stray, empty `_to_delete/` (a leftover git
   lock artifact, already gitignored) was deleted.
4. **This document**: a standing spec + constraints record, so future work
   (by a person or an agent) has the original intent in one place instead of
   scattered across chat history.

## 3. Functional requirements

- **Content sections**: About, Experience (reverse-chronological jobs with
  roles and impact bullets), Selected work (project cards), Skills &
  recognition (grouped skill lists + awards), Education, Contact (with a
  working `mailto:` link and LinkedIn link).
- **Theming**: light and dark mode, following the OS preference by default,
  with a manual toggle that persists across visits (`localStorage`).
- **Responsive**: usable from small phones to wide desktop monitors.
- **Accessible**: skip-to-content link, semantic landmarks, keyboard-
  operable navigation and menu, `prefers-reduced-motion` respected.
- **SEO**: meta description, Open Graph + Twitter card tags, JSON-LD
  `Person` structured data, `sitemap.xml`, `robots.txt`, a canonical URL.
- **404 page**: a custom not-found page consistent with the site's design.
- **Content changes must not require touching markup.** Adding a job, a
  project, a skill, or an award is a data edit in one file
  (`src/data/site.js`), not an HTML edit.

## 4. Constraints

These are binding unless the owner says otherwise — they come directly from
decisions made earlier in this project, not just general best practice:

1. **GitHub Pages compatible, no server.** The deployed artifact (whatever
   is committed to `main`) must be servable as static files with no build
   step running on GitHub's side. `.nojekyll` stays — Jekyll processing is
   intentionally skipped.
2. **The deployed site works with JavaScript disabled.** All core content
   (text, structure, links) must be present in the static `index.html`
   itself, not injected by client-side JS. JS is for enhancement only
   (theme toggle, mobile menu, scroll spy, reveal-on-scroll animation).
3. **Zero client-side framework, zero client-side runtime dependencies.**
   No React/Vue/etc., no client-fetched JSON, no CDN script tags for the
   production page. Plain HTML/CSS/JS only.
4. **Zero npm dependencies for the build tooling.** `tools/build.js` uses
   only Node built-ins (`fs`, `path`, `url`). No `npm install` step, no
   `node_modules`, no lockfile. Anyone with a plain Node install can build
   the site.
5. **Generated files are committed, and are the deploy artifact.**
   `index.html`, `assets/css/style.css`, and `assets/js/main.js` are
   generated from `src/` by `tools/build.js` and must be regenerated
   (`npm run build`) and committed alongside any `src/` change — GitHub
   Pages serves exactly what's in the repo, not a live build.
6. **Single source of truth for content.** All page copy lives in
   `src/data/site.js`. No content duplication between a data file and
   hand-authored markup (the one exception is `404.html`, which is simple
   enough to stay hand-authored, per `CLAUDE.md`).
7. **No AI-tool attribution or branding in the repo's public surface.**
   File/folder names, page content, and visible UI must not reference the
   AI tooling used to build the site (e.g. no "Claude"-named folders/files).
   This is a public professional portfolio; the byline is the owner's.
8. **No secrets, anywhere in the repo, ever.** No API keys, tokens,
   credentials, private keys, or `.env` files in any folder — this is a
   public repo on a public site. `.gitignore` blocks common secret patterns
   (`.env*`, `*.pem`, `*.key`, `*credentials*`, `*secret*`) as a safety net,
   but that's a backstop, not a substitute for never adding one. If a
   feature ever needs a credential (e.g. a form-submission API key), it must
   not be committed in cleartext — use a build-time environment variable
   injected by whatever hosts it, never a value baked into `src/` or the
   generated output.
9. **No unnecessary personal files committed.** `Profile.pdf` (the LinkedIn
   export used as source material, see §1) and other local-only files stay
   gitignored; only the curated subset of content in `src/data/site.js` that
   belongs on a public profile page ships — not a raw resume dump.
10. **Accuracy of professional content, sourced from LinkedIn.** Job
    history, dates, titles, and education entries in `src/data/site.js` must
    match the owner's LinkedIn profile
    (<https://www.linkedin.com/in/debrupbanerjee/>) / `Profile.pdf` export —
    this is transcribed résumé content, not sample or invented content. When
    the LinkedIn profile changes, `src/data/site.js` should be updated to
    match, not left to drift.
11. **Repo hygiene.** No stray/placeholder folders (e.g. lock files, "to
    delete" directories, duplicate asset dumps). Auxiliary, non-deployed
    files (like preview screenshots for the README) live in one clearly
    named folder (`previews/`), not scattered or ambiguously named.

## 5. Non-goals

- No CMS, no admin UI, no database, no user accounts or comments.
- No analytics/tracking scripts unless explicitly requested later.
- No blog/CMS-style content pipeline — this is a fixed-section profile page,
  not a general-purpose site generator, even though the build script is
  written in a reusable, component-per-section style.

## 6. Deployment

1. `npm run build` to regenerate `index.html` / `assets/css/style.css` /
   `assets/js/main.js` from `src/`.
2. Commit the `src/` change and the regenerated output together.
3. Push to `main`.
4. GitHub repo settings: **Settings → Pages → Source: Deploy from a branch
   → `main` / `(root)`**.
5. Live at `https://debrup-banerjee.github.io/` within a couple of minutes.

## 7. Open items / future context to fold in here

- None recorded yet. When new constraints or goals are given in
  conversation, add them here rather than leaving them only in chat history.
