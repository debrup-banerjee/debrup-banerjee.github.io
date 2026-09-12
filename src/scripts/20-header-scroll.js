/* ---------- Header border on scroll ---------- */
(function () {
  'use strict';
  var header = document.getElementById('header');
  function onScroll() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
