// Builds the website into ./dist. No dependencies: `node build.mjs`.
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './site.config.mjs';
import { pages } from './src/pages/index.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');
const abs = (path) => site.url + path;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const nav = [
  ['/how-it-works/', 'How it works'],
  ['/parents/', 'For parents'],
  ['/guides/', 'Guides'],
  ['/faq/', 'Questions'],
];

const organization = {
  '@type': 'Organization',
  '@id': abs('/#organization'),
  name: site.company,
  url: abs('/'),
  logo: abs('/assets/icon-512.png'),
  sameAs: [site.appStore, site.googlePlay],
};

const website = {
  '@type': 'WebSite',
  '@id': abs('/#website'),
  name: site.name,
  url: abs('/'),
  inLanguage: site.locale,
  publisher: { '@id': abs('/#organization') },
};

function breadcrumbs(page) {
  if (!page.crumbs) return null;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [['/', 'Home'], ...page.crumbs].map(([path, name], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: abs(path),
    })),
  };
}

function layout(page) {
  const graph = [organization, website, breadcrumbs(page), ...(page.schema || [])].filter(Boolean);
  const title = page.path === '/' ? page.title : `${page.title} | ${site.name}`;
  const crumbs = page.crumbs
    ? `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a>${page.crumbs
        .map(([path, name], i, all) =>
          i === all.length - 1 ? `<span aria-current="page">${name}</span>` : `<a href="${path}">${name}</a>`
        )
        .join('')}</nav>`
    : '';
  const legal = [
    site.privacyUrl && `<a href="${site.privacyUrl}">Privacy</a>`,
    site.termsUrl && `<a href="${site.termsUrl}">Terms</a>`,
    site.email && `<a href="mailto:${site.email}">${site.email}</a>`,
  ].filter(Boolean);

  return `<!doctype html>
<html lang="${site.locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${abs(page.path)}">`}
<meta name="theme-color" content="#0b1430">
<meta property="og:site_name" content="${site.name}">
<meta property="og:type" content="${page.article ? 'article' : 'website'}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${abs(page.path)}">
<meta property="og:image" content="${abs('/assets/og.png')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Story Spire: stories you make together">
<meta name="twitter:card" content="summary_large_image">
<meta name="apple-itunes-app" content="app-id=6474238411">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/fraunces-latin-opsz-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/nunito-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
<body${page.bodyClass ? ` class="${page.bodyClass}"` : ''}>
<a class="skip" href="#main">Skip to the page</a>
<header class="top">
  <div class="wrap top-in">
    <a class="brand" href="/" aria-label="${site.name}, home">
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path d="M16 2l7 9H9z" fill="#ebc566"/><rect x="10.5" y="11" width="11" height="6" rx="1.2" fill="#fbf7ef"/><rect x="7.5" y="18" width="17" height="5" rx="1.2" fill="#e2725b"/><rect x="5" y="24" width="22" height="5" rx="1.2" fill="#fbf7ef"/></svg>
      <span>${site.name}</span>
    </a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav id="menu" class="menu" aria-label="Main">
      ${nav
        .map(([path, name]) => `<a href="${path}"${page.path.startsWith(path) ? ' aria-current="page"' : ''}>${name}</a>`)
        .join('\n      ')}
      <a class="btn btn-gold btn-small" href="/#get">Get the app</a>
    </nav>
  </div>
</header>
<main id="main">
${crumbs ? `<div class="crumbs-bar"><div class="wrap">${crumbs}</div></div>` : ''}
${page.body}
</main>
<footer class="foot">
  <div class="wrap foot-in">
    <div>
      <p class="foot-brand">${site.name}</p>
      <p>A story app for children aged 4 to 10 and the grown-ups who read with them.</p>
    </div>
    <nav aria-label="Footer">
      <a href="/how-it-works/">How it works</a>
      <a href="/parents/">For parents</a>
      <a href="/guides/">Guides</a>
      <a href="/faq/">Questions</a>
    </nav>
    <nav aria-label="Get the app">
      <a href="${site.appStore}" rel="noopener">App Store</a>
      <a href="${site.googlePlay}" rel="noopener">Google Play</a>
      ${legal.join('\n      ')}
    </nav>
  </div>
  <div class="wrap foot-note">
    <p>&copy; ${site.updated.slice(0, 4)} ${site.company}</p>
    <p>App Store is a trademark of Apple Inc. Google Play is a trademark of Google LLC.</p>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(join(root, 'src/assets'), join(out, 'assets'), { recursive: true });
await cp(join(root, 'src/static'), out, { recursive: true });

for (const page of pages) {
  const file = page.file || join(page.path, 'index.html');
  await mkdir(dirname(join(out, file)), { recursive: true });
  await writeFile(join(out, file), layout(page));
}

const listed = pages.filter((p) => !p.noindex);

await writeFile(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${listed.map((p) => `  <url><loc>${abs(p.path)}</loc><lastmod>${site.updated}</lastmod></url>`).join('\n')}
</urlset>
`
);

// Search engines and AI assistants are all welcome to read the site.
await writeFile(
  join(out, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${abs('/sitemap.xml')}
`
);

// A plain summary for AI assistants (llmstxt.org).
await writeFile(
  join(out, 'llms.txt'),
  `# ${site.name}

> ${site.appName} is a mobile app for children aged 4 to 10 and their parents. Together they make a character and choose a story. The app writes the story, reads it aloud and adds pictures. Some stories end with a short quiz.

## Facts

- Made by: ${site.company}
- Ages: 4 to 10
- Where to get it: App Store (iPhone) and Google Play (Android)
- Price: free to download. Premium features have a 7-day free trial. Current prices are shown in the App Store and Google Play.
- Each story has: text, a voice that reads it aloud, and pictures
- Quizzes: stories with a lesson and word stories end with a short quiz
- App Store: ${site.appStore}
- Google Play: ${site.googlePlay}

## Pages

${listed.map((p) => `- [${p.title}](${abs(p.path)}): ${p.description}`).join('\n')}
`
);

await writeFile(
  join(out, 'site.webmanifest'),
  JSON.stringify(
    {
      name: site.name,
      short_name: site.name,
      start_url: '/',
      display: 'browser',
      background_color: '#0b1430',
      theme_color: '#0b1430',
      icons: [{ src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png' }],
    },
    null,
    2
  )
);

console.log(`Built ${pages.length} pages into dist/`);
