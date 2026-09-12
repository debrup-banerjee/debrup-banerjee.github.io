import { esc } from '../../tools/lib/html.js';

function renderLink(link) {
  const attrs = link.external ? ' target="_blank" rel="noopener"' : '';
  return `<li>
            <a href="${esc(link.href)}"${attrs}>
              <span class="label">${esc(link.label)}</span>
              <span>${esc(link.value)}</span>
            </a>
          </li>`;
}

export function renderContact(contact) {
  const links = contact.links.map(renderLink).join('\n          ');

  return `
    <section class="contact" id="contact" aria-labelledby="contact-title">
      <div class="wrap">
        <p class="section-label reveal"><span>${esc(contact.index)}</span>${esc(contact.label)}</p>
        <h2 class="reveal" id="contact-title">${contact.titleHtml}</h2>
        <p class="reveal">${esc(contact.intro)}</p>

        <ul class="contact-links reveal">
          ${links}
        </ul>
      </div>
    </section>`;
}
