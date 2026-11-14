# Story Spire website

The public website for the Story Spire app. Plain HTML, CSS and a little JavaScript. No framework and nothing to install.

## Build it

```
npm run build
```

The finished site appears in `dist/`. Upload that folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Build command: `npm run build`. Output folder: `dist`.

To look at it on your own computer: `npm run preview`.

## Change things

| To change | Edit |
| --- | --- |
| Web address, store links, email, privacy and terms links | `site.config.mjs` |
| Home page | `src/pages/home.mjs` |
| Questions and answers | `src/pages/faq.mjs` |
| Guides | `src/pages/guides.mjs` |
| Colours, fonts, layout | `src/assets/site.css` |
| Header, footer, search engine tags | `build.mjs` |

The build also writes `sitemap.xml`, `robots.txt` and `llms.txt` (a summary for AI assistants), so they always match the pages.

The sharing image and icons are made with `npm run images` (needs Playwright). Run it only if the pictures change.

## Before going live

- Set the real web address in `site.config.mjs`.
- Add the privacy policy and terms links there. They are hidden until filled in.
- Check every claim on the site against the app as it is today.

Fonts are Fraunces and Nunito, both under the SIL Open Font License, served from this site.
