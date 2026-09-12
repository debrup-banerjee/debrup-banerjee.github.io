// Small helpers shared by every component renderer.

export function esc(value = '') {
  return String(value).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// Joins fragments, dropping falsy ones — lets components use `cond && html`.
export function html(...fragments) {
  return fragments.filter(Boolean).join('');
}
