import { site } from '../../site.config.mjs';
import { getApp, icons, phone, spire, storeButtons } from './parts.mjs';
import { faqs, faqSchema, faqList } from './faq.mjs';
import { guides } from './guides.mjs';

const homeFaqs = faqs.filter((f) => f.home);

export const home = {
  path: '/',
  bodyClass: 'home',
  title: 'Story Spire: a story app for children aged 4 to 10',
  description:
    'Make a character with your child and choose a story. Story Spire writes it, reads it aloud and adds pictures. For ages 4 to 10. Free to download on iPhone and Android.',
  schema: [
    {
      '@type': 'MobileApplication',
      '@id': site.url + '/#app',
      name: site.appName,
      description:
        'An app for children aged 4 to 10 and their parents. Make a character and choose a story. The app writes it, reads it aloud and adds pictures.',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'EducationalApplication',
      audience: { '@type': 'PeopleAudience', suggestedMinAge: 4, suggestedMaxAge: 10 },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free to download. Premium features have a 7-day free trial.' },
      installUrl: [site.appStore, site.googlePlay],
      publisher: { '@id': site.url + '/#organization' },
    },
    faqSchema(homeFaqs),
  ],
  body: `
<section class="hero band-night">
  <div class="wrap hero-in">
    <div class="hero-copy">
      <p class="eyebrow">For children aged 4 to 10</p>
      <h1>Stories you make <em>together.</em></h1>
      <p class="lead">Make a character with your child and choose what the story is about. Story Spire writes it, reads it out loud and adds the pictures.</p>
      ${storeButtons('gold')}
      <p class="fine">Free to download. Premium is free for the first 7 days.</p>
    </div>
    <div class="hero-art">
      ${spire}
      ${phone}
    </div>
  </div>
</section>

<section class="facts" aria-label="Quick facts">
  <dl class="wrap facts-in">
    <div><dt>Ages</dt><dd>4 to 10</dd></div>
    <div><dt>Works on</dt><dd>iPhone and Android</dd></div>
    <div><dt>Price</dt><dd>Free to download</dd></div>
    <div><dt>Every story has</dt><dd>Words, a voice and pictures</dd></div>
  </dl>
</section>

<section class="band">
  <div class="wrap">
    <p class="eyebrow">How it works</p>
    <h2>Three steps, then story time</h2>
    <ol class="steps">
      <li>
        ${icons.character}
        <h3>Make a character</h3>
        <p>A brave rabbit. A shy robot. Your child, with a cape. You decide together who the story is about.</p>
      </li>
      <li>
        ${icons.book}
        <h3>Choose the story</h3>
        <p>Pick a fun story, a story with a lesson, or a story that teaches new words.</p>
      </li>
      <li>
        ${icons.voice}
        <h3>Listen and look</h3>
        <p>The story arrives with pictures. Read it yourself, or let the app read it aloud.</p>
      </li>
    </ol>
    <p><a class="more" href="/how-it-works/">See each step in detail</a></p>
  </div>
</section>

<section class="band band-cream" id="try">
  <div class="wrap starter">
    <div class="starter-copy">
      <p class="eyebrow">Have a go</p>
      <h2>Start a story right here</h2>
      <p>Choose one from each row. This is a small taste we wrote ourselves. In the app, the characters and the stories are your own.</p>
    </div>
    <div class="starter-box" data-starter>
      <fieldset>
        <legend>Who is it about?</legend>
        <div class="chips">
          <label><input type="radio" name="who" value="pip" checked><span>Pip the fox</span></label>
          <label><input type="radio" name="who" value="nora"><span>Nora in red boots</span></label>
          <label><input type="radio" name="who" value="ember"><span>Ember the dragon</span></label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Where are they?</legend>
        <div class="chips">
          <label><input type="radio" name="where" value="moon" checked><span>On the moon</span></label>
          <label><input type="radio" name="where" value="sea"><span>Under the sea</span></label>
          <label><input type="radio" name="where" value="garden"><span>Grandma&rsquo;s garden</span></label>
        </div>
      </fieldset>
      <fieldset>
        <legend>What do they find?</legend>
        <div class="chips">
          <label><input type="radio" name="what" value="key" checked><span>A gold key</span></label>
          <label><input type="radio" name="what" value="teapot"><span>A singing teapot</span></label>
          <label><input type="radio" name="what" value="cake"><span>A very big cake</span></label>
        </div>
      </fieldset>
      <div class="starter-page" aria-live="polite">
        <p class="starter-label">Once upon a time&hellip;</p>
        <p class="starter-text" data-starter-text>Pip the fox woke up on the moon, which was odd, because he had gone to sleep at home. Next to his foot lay a small gold key. It did not fit any door he knew.</p>
        <p class="starter-next">What happens next? That part is yours.</p>
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <p class="eyebrow">Inside every story</p>
    <h2>Something to read, hear and look at</h2>
    <ul class="cards">
      <li>${icons.book}<h3>The words</h3><p>Written for children aged 4 to 10, so the story fits your child and not a grown-up.</p></li>
      <li>${icons.voice}<h3>A voice</h3><p>Tap once and the story is read aloud. Good for children who can&rsquo;t read yet, and for tired parents.</p></li>
      <li>${icons.picture}<h3>Pictures</h3><p>Each story comes with its own pictures, so there is something to point at and talk about.</p></li>
      <li>${icons.quiz}<h3>A short quiz</h3><p>Stories with a lesson and word stories end with a few questions about what just happened.</p></li>
    </ul>
  </div>
</section>

<section class="band band-night parents-band">
  <div class="wrap split">
    <div>
      <p class="eyebrow">For parents</p>
      <h2>You are part of the story too</h2>
      <p>Story Spire is made to be used side by side. You help choose the character and the kind of story, and you can read along or just listen.</p>
      <p>We wrote one page that explains what your child sees, what the quizzes are for and what it costs.</p>
      <p><a class="btn btn-line" href="/parents/">Read the page for parents</a></p>
    </div>
    <ul class="ticks">
      <li>Stories are written for ages 4 to 10</li>
      <li>You choose the kind of story</li>
      <li>Try premium free for 7 days</li>
      <li>Cancel in your phone&rsquo;s settings at any time</li>
    </ul>
  </div>
</section>

<section class="band">
  <div class="wrap narrow">
    <p class="eyebrow">Questions</p>
    <h2>What parents ask us most</h2>
    ${faqList(homeFaqs)}
    <p><a class="more" href="/faq/">All questions and answers</a></p>
  </div>
</section>

<section class="band band-cream">
  <div class="wrap">
    <p class="eyebrow">Guides</p>
    <h2>Ideas for story time</h2>
    <ul class="guide-cards">
      ${guides
        .map(
          (g) => `<li><a href="${g.path}"><span class="guide-kind">${g.kind}</span><h3>${g.title}</h3><p>${g.teaser}</p><span class="more">Read</span></a></li>`
        )
        .join('\n      ')}
    </ul>
  </div>
</section>

${getApp()}
`,
};
