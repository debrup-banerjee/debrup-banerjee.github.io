/* Debrup Banerjee — portfolio interactions (no dependencies) */
(function () {
  'use strict';

  var GITHUB_USER = 'debrup-banerjee';
  var MAX_REPOS = 6;
  var root = document.documentElement;

  /* ---------- Theme ---------- */
  var themeBtn = document.getElementById('theme-toggle');
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function syncThemeLabel() {
    if (!themeBtn) return;
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    themeBtn.setAttribute('aria-label', 'Switch to ' + next + ' mode');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeLabel();
    });
    syncThemeLabel();
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    if (!menuBtn || !nav) return;
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---------- Header border on scroll ---------- */
  var header = document.getElementById('header');
  function onScroll() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll spy + reveal ---------- */
  if ('IntersectionObserver' in window) {
    var links = {};
    document.querySelectorAll('.nav a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Object.keys(links).forEach(function (id) { links[id].removeAttribute('aria-current'); });
        var link = links[entry.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });

    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); reveal.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(function (el) { reveal.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- GitHub repositories ---------- */
  var repoGrid = document.getElementById('repos');
  if (!repoGrid || !window.fetch) return;

  var CACHE_KEY = 'gh-repos-v1';
  var CACHE_MS = 60 * 60 * 1000;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function timeAgo(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return '';
    return 'Updated ' + d.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  }

  function render(repos) {
    var list = repos
      .filter(function (r) { return !r.fork && !r.archived && r.name.toLowerCase() !== (GITHUB_USER + '.github.io').toLowerCase(); })
      .sort(function (a, b) { return (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)); })
      .slice(0, MAX_REPOS);

    if (!list.length) return; // keep the static "browse on GitHub" fallback

    repoGrid.textContent = '';
    list.forEach(function (r) {
      var card = el('article', 'card');
      card.appendChild(el('span', 'card-tag', 'Repository'));
      var h = el('h3');
      var a = el('a', null, r.name.replace(/[-_]/g, ' '));
      a.href = r.html_url; a.target = '_blank'; a.rel = 'noopener';
      h.appendChild(a);
      card.appendChild(h);
      card.appendChild(el('p', null, r.description || 'No description yet.'));
      var meta = el('div', 'card-meta');
      if (r.language) meta.appendChild(el('span', 'lang', r.language));
      if (r.stargazers_count) meta.appendChild(el('span', null, '★ ' + r.stargazers_count));
      meta.appendChild(el('span', null, timeAgo(r.pushed_at)));
      card.appendChild(meta);
      repoGrid.appendChild(card);
    });
  }

  try {
    var cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
    if (cached && Date.now() - cached.t < CACHE_MS) { render(cached.data); return; }
  } catch (e) {}

  fetch('https://api.github.com/users/' + GITHUB_USER + '/repos?per_page=100&sort=pushed', {
    headers: { Accept: 'application/vnd.github+json' }
  })
    .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
    .then(function (data) {
      if (!Array.isArray(data)) return;
      try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data: data })); } catch (e) {}
      render(data);
    })
    .catch(function () { /* offline or rate-limited: static fallback stays */ });
})();
