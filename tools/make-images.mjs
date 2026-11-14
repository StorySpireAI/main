// Draws the sharing image and the app icons. Run with: npm run images
// Needs Playwright with Chromium. The results are saved in src/, so you only
// need to run this again if you change the pictures.
import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import { spire } from '../src/pages/parts.mjs';

const { chromium } = createRequire(import.meta.url)('playwright');

const fonts = async (name) =>
  `data:font/woff2;base64,${(await readFile(new URL(`../src/assets/fonts/${name}`, import.meta.url))).toString('base64')}`;
const icon = await readFile(new URL('../src/static/favicon.svg', import.meta.url), 'utf8');

const og = `<style>
@font-face{font-family:F;src:url(${await fonts('fraunces-latin-opsz-normal.woff2')});font-weight:100 900}
@font-face{font-family:F;font-style:italic;src:url(${await fonts('fraunces-latin-opsz-italic.woff2')});font-weight:100 900}
@font-face{font-family:N;src:url(${await fonts('nunito-latin-wght-normal.woff2')});font-weight:200 1000}
body{margin:0;width:1200px;height:630px;overflow:hidden;background:radial-gradient(120% 90% at 80% 0%,#1c2b5e 0%,#0b1430 60%);color:#f6f1e4;font-family:N}
.t{position:absolute;left:80px;top:150px;width:600px}
.b{font:800 22px N;letter-spacing:.14em;text-transform:uppercase;color:#ebc566;margin:0 0 22px}
h1{font:560 92px/1.05 F;letter-spacing:-.015em;margin:0 0 28px}
em{font-weight:420;color:#ebc566}
p{font:600 30px/1.4 N;color:#dfe3f1;margin:0}
svg{position:absolute;right:20px;bottom:-40px;width:560px;height:auto}
</style><div class="t"><p class="b">Story Spire</p><h1>Stories you make <em>together.</em></h1><p>A story app for children aged 4 to 10.</p></div>${spire}`;

const browser = await chromium.launch();
const shot = async (html, width, height, path) => {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path });
  await page.close();
};
await shot(og, 1200, 630, 'src/assets/og.png');
for (const size of [180, 512]) {
  await shot(`<style>body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${icon.replace('rx="7"', 'rx="0"')}`, size, size, `src/assets/icon-${size}.png`);
}
await browser.close();
console.log('Images saved in src/assets/');
