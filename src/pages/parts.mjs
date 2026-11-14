// Pieces used on more than one page.
import { site } from '../../site.config.mjs';

export const storeButtons = (tone = 'gold') => `
<div class="stores">
  <a class="btn btn-${tone}" href="${site.appStore}" rel="noopener">
    <small>Download on the</small> App Store
  </a>
  <a class="btn btn-${tone === 'gold' ? 'line' : 'ink-line'}" href="${site.googlePlay}" rel="noopener">
    <small>Get it on</small> Google Play
  </a>
</div>`;

export const getApp = (heading = 'Tonight&rsquo;s story is waiting') => `
<section class="band band-night get" id="get">
  <div class="wrap get-in">
    <h2>${heading}</h2>
    <p>Free to download. Premium is free for the first 7 days.</p>
    ${storeButtons('gold')}
  </div>
</section>`;

// Small line icons. One colour, drawn by hand, so they stay sharp at any size.
const icon = (paths) =>
  `<svg class="icon" viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const icons = {
  character: icon('<circle cx="24" cy="20" r="11"/><path d="M19 18.5v1M29 18.5v1M19.5 24c2.6 2.6 6.4 2.6 9 0"/><path d="M10 42c1.5-7 7-10 14-10s12.500 3 14 10"/>'),
  book: icon('<path d="M24 12c-4-3-10-4-16-3v27c6-1 12 0 16 3 4-3 10-4 16-3V9c-6-1-12 0-16 3z"/><path d="M24 12v27"/>'),
  voice: icon('<path d="M8 19v10h7l9 8V11l-9 8z"/><path d="M31 18c2.500 3.500 2.500 8.500 0 12M36 13c5 6.500 5 15.500 0 22"/>'),
  picture: icon('<rect x="7" y="9" width="34" height="30" rx="4"/><circle cx="17" cy="19" r="3.500"/><path d="M7 33l10-9 8 7 6-5 10 9"/>'),
  quiz: icon('<circle cx="24" cy="24" r="17"/><path d="M18.500 19c.5-3 2.800-5 5.800-5 3.200 0 5.700 2.200 5.700 5.200 0 4.300-5.500 4.300-5.500 8.300"/><path d="M24.500 33.500v.5"/>'),
  moon: icon('<path d="M38 28A16 16 0 0 1 20 10a16 16 0 1 0 18 18z"/>'),
};

// The picture on the phone screen.
export const phone = `
<div class="phone" role="img" aria-label="The app showing a story called Nora and the Moon Boat, with a picture, a few lines of text and a button to hear it read aloud">
  <div class="phone-screen" aria-hidden="true">
    <svg class="phone-art" viewBox="0 0 240 170" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="pa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d2f63"/><stop offset="1" stop-color="#41508f"/></linearGradient></defs>
      <rect width="240" height="170" fill="url(#pa)"/>
      <circle cx="186" cy="42" r="22" fill="#f6e6ae"/>
      <g fill="#f6e6ae"><circle cx="30" cy="26" r="1.600"/><circle cx="74" cy="46" r="1.200"/><circle cx="118" cy="20" r="1.600"/><circle cx="52" cy="78" r="1.200"/><circle cx="222" cy="92" r="1.400"/><circle cx="142" cy="66" r="1"/></g>
      <path d="M0 128c30-12 50 10 80 0s50-12 80 0 50 10 80-2v44H0z" fill="#2b6f86"/>
      <path d="M0 146c30-10 50 8 80 0s50-10 80 0 50 8 80-2v26H0z" fill="#1f556b"/>
      <path d="M84 118h74c-4 16-14 22-37 22s-33-6-37-22z" fill="#e2725b"/>
      <path d="M121 116V64" stroke="#fbf7ef" stroke-width="3" stroke-linecap="round"/>
      <path d="M124 68c18 8 26 22 28 42h-28z" fill="#fbf7ef"/>
      <circle cx="104" cy="106" r="9" fill="#f3c9a5"/>
      <path d="M94 104c1-10 19-10 20 0-6-4-14-4-20 0z" fill="#5b3a29"/>
    </svg>
    <div class="phone-text">
      <p class="phone-title">Nora and the Moon Boat</p>
      <p>Nora pushed off from the shore. The water was so still she could see the moon in it twice.</p>
      <p class="phone-play"><span class="play-dot"></span>Read to me</p>
    </div>
  </div>
</div>`;

// The hero picture: a tower of books with a lit room on top.
export const spire = `
<svg class="spire" viewBox="0 0 520 600" role="img" aria-label="A tall tower made of stacked books under a full moon, with a small lit room at the top">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#f6e6ae" stop-opacity=".45"/><stop offset="1" stop-color="#f6e6ae" stop-opacity="0"/></radialGradient>
    <linearGradient id="win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#f3b95c"/></linearGradient>
  </defs>
  <circle cx="384" cy="140" r="134" fill="url(#glow)"/>
  <circle cx="384" cy="140" r="62" fill="#f6e6ae"/>
  <circle cx="364" cy="120" r="9" fill="#ead796"/><circle cx="404" cy="158" r="13" fill="#ead796"/><circle cx="400" cy="114" r="5" fill="#ead796"/>
  <g class="stars" fill="#f6e6ae">
    <path d="M70 80l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/>
    <path d="M196 40l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
    <path d="M478 250l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
    <path d="M110 250l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
    <circle cx="150" cy="140" r="2"/><circle cx="40" cy="190" r="1.600"/><circle cx="260" cy="96" r="1.600"/><circle cx="500" cy="60" r="2"/><circle cx="60" cy="340" r="1.600"/><circle cx="470" cy="360" r="2"/><circle cx="300" cy="30" r="1.400"/>
  </g>
  <ellipse cx="250" cy="606" rx="248" ry="74" fill="#16224a"/>
  <ellipse cx="310" cy="612" rx="200" ry="50" fill="#1d2c5c"/>

  <!-- books, bottom to top -->
  <g>
    <rect x="128" y="510" width="230" height="40" rx="7" fill="#3f6fb0"/><rect x="342" y="516" width="16" height="28" fill="#fbf7ef"/><rect x="150" y="510" width="10" height="40" fill="#ebc566"/>
    <rect x="150" y="472" width="200" height="38" rx="7" fill="#e2725b"/><rect x="150" y="478" width="16" height="26" fill="#fbf7ef"/><rect x="318" y="472" width="10" height="38" fill="#fbf7ef" opacity=".55"/>
    <rect x="138" y="438" width="196" height="34" rx="7" fill="#fbf7ef"/><rect x="318" y="443" width="16" height="24" fill="#e6dcc8"/><rect x="160" y="438" width="26" height="34" fill="#c79a3b"/>
    <rect x="160" y="398" width="184" height="40" rx="7" fill="#3c8f88"/><rect x="160" y="404" width="16" height="28" fill="#fbf7ef"/><rect x="312" y="398" width="10" height="40" fill="#ebc566"/>
    <rect x="152" y="364" width="170" height="34" rx="7" fill="#7b5ea7"/><rect x="306" y="369" width="16" height="24" fill="#fbf7ef"/><rect x="172" y="364" width="10" height="34" fill="#fbf7ef" opacity=".55"/>
    <rect x="170" y="328" width="164" height="36" rx="7" fill="#ebc566"/><rect x="170" y="334" width="16" height="24" fill="#fbf7ef"/><rect x="300" y="328" width="12" height="36" fill="#c79a3b"/>
    <rect x="166" y="294" width="150" height="34" rx="7" fill="#e2725b"/><rect x="300" y="299" width="16" height="24" fill="#fbf7ef"/><rect x="186" y="294" width="10" height="34" fill="#fbf7ef" opacity=".55"/>
    <rect x="180" y="260" width="136" height="34" rx="7" fill="#3f6fb0"/><rect x="180" y="265" width="16" height="24" fill="#fbf7ef"/><rect x="284" y="260" width="10" height="34" fill="#ebc566"/>
  </g>

  <!-- the room on top -->
  <rect x="204" y="190" width="88" height="70" rx="6" fill="#fbf7ef"/>
  <path d="M190 194l58-64 58 64z" fill="#c79a3b"/>
  <path d="M248 130V104" stroke="#fbf7ef" stroke-width="3" stroke-linecap="round"/>
  <path d="M250 104h26l-7 8 7 8h-26z" fill="#e2725b"/>
  <path d="M232 248v-26a16 16 0 0 1 32 0v26z" fill="url(#win)"/>
  <path d="M248 206v42M232 228h32" stroke="#c79a3b" stroke-width="2.400"/>
</svg>`;
