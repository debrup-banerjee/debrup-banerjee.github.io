import { esc } from '../../tools/lib/html.js';

function renderRole(role) {
  const date = role.date ? `<span>${esc(role.date)}</span>` : '';
  return `<li><strong>${esc(role.title)}</strong>${date}</li>`;
}

function renderJob(job) {
  const roles = job.roles.map(renderRole).join('\n                ');
  const impact = job.impactHtml.map((line) => `<li>${line}</li>`).join('\n                ');
  const location = job.location ? `<small>${esc(job.location)}</small>` : '';

  return `<li class="job reveal">
            <div class="job-when">${job.whenHtml}</div>
            <div>
              <h3 class="job-org">${esc(job.org)}${location}</h3>
              <ul class="roles">
                ${roles}
              </ul>
              <ul class="impact">
                ${impact}
              </ul>
            </div>
          </li>`;
}

export function renderExperience(experience) {
  const jobs = experience.jobs.map(renderJob).join('\n\n          ');

  return `
    <section class="section" id="experience" aria-labelledby="experience-title">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="section-label"><span>${esc(experience.index)}</span>${esc(experience.label)}</p>
          <div>
            <h2 class="section-title" id="experience-title">${esc(experience.title)}</h2>
            <p class="section-intro">${esc(experience.intro)}</p>
          </div>
        </div>

        <ol class="timeline">
          ${jobs}
        </ol>
      </div>
    </section>`;
}
