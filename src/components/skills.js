import { esc } from '../../tools/lib/html.js';

function renderGroup(group) {
  const items = group.items.map((item) => `<li>${esc(item)}</li>`).join('');
  return `<div class="skill-group reveal">
            <h3>${esc(group.title)}</h3>
            <ul>${items}</ul>
          </div>`;
}

function renderAward(award) {
  return `<li>${award.html}</li>`;
}

export function renderSkills(skills) {
  const groups = skills.groups.map(renderGroup).join('\n          ');
  const awards = skills.awards.map(renderAward).join('\n            ');

  return `
    <section class="section" id="skills" aria-labelledby="skills-title">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="section-label"><span>${esc(skills.index)}</span>${esc(skills.label)}</p>
          <div>
            <h2 class="section-title" id="skills-title">${esc(skills.title)}</h2>
            <p class="section-intro">${esc(skills.intro)}</p>
          </div>
        </div>

        <div class="skills">
          ${groups}
        </div>

        <div class="awards reveal">
          <h3 class="section-label"><span>★</span>Recognition</h3>
          <ul>
            ${awards}
          </ul>
        </div>
      </div>
    </section>`;
}
