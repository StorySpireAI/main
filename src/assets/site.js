// Menu button on small screens.
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
  });
}

// The "start a story" box on the home page.
const box = document.querySelector('[data-starter]');
if (box) {
  const who = {
    pip: { name: 'Pip the fox', he: 'he', his: 'his', him: 'him' },
    nora: { name: 'Nora', he: 'she', his: 'her', him: 'her' },
    ember: { name: 'Ember the dragon', he: 'she', his: 'her', him: 'her' },
  };
  const where = {
    moon: 'on the moon',
    sea: 'at the bottom of the sea',
    garden: 'in Grandma’s garden',
  };
  const what = {
    key: (w) => `Next to ${w.his} foot lay a small gold key. It did not fit any door ${w.he} knew.`,
    teapot: () => 'Somewhere close by, a teapot was singing. It only knew one song, and it sang it badly.',
    cake: (w) => `In front of ${w.him} stood a cake as tall as a house, with one slice already missing.`,
  };
  const text = box.querySelector('[data-starter-text]');
  const pick = (name) => box.querySelector(`input[name="${name}"]:checked`).value;
  const write = () => {
    const w = who[pick('who')];
    text.textContent =
      `${w.name} woke up ${where[pick('where')]}, which was odd, because ${w.he} had gone to sleep at home. ` +
      what[pick('what')](w);
  };
  box.addEventListener('change', write);
}
