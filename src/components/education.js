import { esc } from '../../tools/lib/html.js';

function renderSchool(school) {
  return `<li class="reveal">
            <span class="year">${esc(school.year)}</span>
            <h3>${esc(school.name)}</h3>
            <p>${esc(school.program)}</p>
          </li>`;
}

export function renderEducation(education) {
  const schools = education.schools.map(renderSchool).join('\n          ');

  return `
    <section class="section" id="education" aria-labelledby="education-title">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="section-label"><span>${esc(education.index)}</span>${esc(education.label)}</p>
          <h2 class="section-title" id="education-title">${esc(education.title)}</h2>
        </div>

        <ul class="edu">
          ${schools}
        </ul>
      </div>
    </section>`;
}
