import { esc } from '../../tools/lib/html.js';

export function renderFooter(footer) {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <span>© <span id="year">2026</span> ${esc(footer.name)}</span>
      <span>${footer.builtWithHtml}</span>
    </div>
  </footer>`;
}
