import { esc } from '../../tools/lib/html.js';

function renderHighlight(item) {
  return `<li><h3>${item.statHtml}</h3><p>${item.descriptionHtml}</p></li>`;
}

export function renderAbout(about) {
  const paragraphs = about.proseHtml.map((p) => `<p>${p}</p>`).join('\n            ');
  const highlights = about.highlights.map(renderHighlight).join('\n              ');

  return `
    <section class="section" id="about" aria-labelledby="about-title">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="section-label"><span>${esc(about.index)}</span>${esc(about.label)}</p>
          <h2 class="section-title" id="about-title">${esc(about.title)}</h2>
        </div>

        <div class="section-body">
          <div class="col-2 prose reveal">
            ${paragraphs}

            <ul class="focus" aria-label="Highlights">
              ${highlights}
            </ul>
          </div>
        </div>
      </div>
    </section>`;
}
