import { esc } from '../../tools/lib/html.js';

function renderHead(meta, jsonLd) {
  const og = meta.og;
  return `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}">
  <meta name="author" content="${esc(meta.author)}">
  <link rel="canonical" href="${esc(meta.url)}">
  <meta name="theme-color" content="${esc(meta.themeColorLight)}" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="${esc(meta.themeColorDark)}" media="(prefers-color-scheme: dark)">

  <meta property="og:type" content="${esc(og.type)}">
  <meta property="og:title" content="${esc(og.title)}">
  <meta property="og:description" content="${esc(og.description)}">
  <meta property="og:url" content="${esc(og.url)}">
  <meta property="og:image" content="${esc(og.image)}">
  <meta property="og:image:width" content="${og.imageWidth}">
  <meta property="og:image:height" content="${og.imageHeight}">
  <meta property="profile:first_name" content="${esc(og.firstName)}">
  <meta property="profile:last_name" content="${esc(og.lastName)}">
  <meta name="twitter:card" content="${esc(meta.twitterCard)}">

  <link rel="icon" href="${esc(meta.favicon)}" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${esc(meta.appleTouchIcon)}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Inter:wght@400;500;600&display=swap">
  <link rel="stylesheet" href="assets/css/style.css">

  <script>
    // Apply saved theme before first paint to avoid a flash.
    (function () {
      var d = document.documentElement;
      d.classList.remove('no-js');
      try { var t = localStorage.getItem('theme'); if (t === 'light' || t === 'dark') d.setAttribute('data-theme', t); } catch (e) {}
    })();
  </script>

  <script type="application/ld+json">
  ${JSON.stringify(jsonLd, null, 2).split('\n').join('\n  ')}
  </script>
</head>`;
}

export function renderLayout({ meta, jsonLd }, { header, main, footer }) {
  return `<!doctype html>
<html lang="${esc(meta.lang)}" class="no-js">
${renderHead(meta, jsonLd)}
<body>
  <a class="skip-link" href="#main">Skip to content</a>

${header}

  <main id="main">
${main}
  </main>

${footer}

  <script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}
