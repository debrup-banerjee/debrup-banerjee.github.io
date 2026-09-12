import { esc } from '../../tools/lib/html.js';

function renderProject(project) {
  const meta = project.meta.map((m) => `<span>${esc(m)}</span>`).join('');
  return `<article class="card reveal">
            <span class="card-tag">${project.tagHtml}</span>
            <h3>${esc(project.title)}</h3>
            <p>${project.descriptionHtml}</p>
            <div class="card-meta">${meta}</div>
          </article>`;
}

export function renderWork(work) {
  const projects = work.projects.map(renderProject).join('\n          ');

  return `
    <section class="section" id="work" aria-labelledby="work-title">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="section-label"><span>${esc(work.index)}</span>${esc(work.label)}</p>
          <div>
            <h2 class="section-title" id="work-title">${esc(work.title)}</h2>
            <p class="section-intro">${esc(work.intro)}</p>
          </div>
        </div>

        <div class="projects" id="featured">
          ${projects}
        </div>
      </div>
    </section>`;
}
