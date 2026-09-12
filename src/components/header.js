import { esc } from '../../tools/lib/html.js';

export function renderHeader({ brand, nav }) {
  const navItems = nav.map((item) => `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`).join('\n          ');

  return `
  <header class="site-header" id="header">
    <div class="wrap">
      <a class="brand" href="#top" aria-label="${esc(brand.name)} — home">
        <span class="brand-mark" aria-hidden="true">${esc(brand.mark)}</span>
        <span>${esc(brand.name)}</span>
      </a>

      <nav class="nav" id="nav" aria-label="Primary">
        <ul>
          ${navItems}
        </ul>
      </nav>

      <div class="header-actions">
        <button class="icon-btn theme-toggle" type="button" id="theme-toggle" aria-label="Toggle dark mode">
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        </button>
        <button class="icon-btn menu-toggle" type="button" id="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}
