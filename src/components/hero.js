import { esc } from '../../tools/lib/html.js';

function renderAction(action) {
  const classes = `btn ${action.primary ? 'btn-primary' : 'btn-ghost'}`;
  const attrs = action.external ? ' target="_blank" rel="noopener"' : '';
  const arrow = action.arrow
    ? '\n            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'
    : '';
  return `<a class="${classes}" href="${esc(action.href)}"${attrs}>
            ${esc(action.label)}${arrow}
          </a>`;
}

function renderFact(fact) {
  return `<div><dt>${esc(fact.term)}</dt><dd>${fact.descriptionHtml}</dd></div>`;
}

export function renderHero(hero) {
  const actions = hero.actions.map(renderAction).join('\n          ');
  const facts = hero.facts.map(renderFact).join('\n            ');

  return `
    <section class="hero" id="top">
      <div class="wrap">
        <p class="eyebrow"><span class="dot" aria-hidden="true"></span>${esc(hero.eyebrow)}</p>
        <h1>${esc(hero.firstName)}<br><em>${esc(hero.lastName)}</em></h1>

        <div class="hero-grid">
          <div>
            <p class="lede">${hero.ledeHtml}</p>
            <div class="actions">
              ${actions}
            </div>
          </div>

          <dl class="facts">
            ${facts}
          </dl>
        </div>
      </div>
    </section>`;
}
