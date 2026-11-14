import { site } from '../../site.config.mjs';
import { getApp } from './parts.mjs';

// `a` is plain text, because the same words go into the page and into the
// data that search engines and AI assistants read. Keep the first sentence
// a complete answer on its own.
export const faqs = [
  {
    group: 'The basics',
    home: true,
    q: 'What is Story Spire?',
    a: 'Story Spire is an app where parents and children aged 4 to 10 make their own stories. You make a character and choose the kind of story. The app writes it, reads it aloud and adds pictures.',
  },
  {
    group: 'The basics',
    home: true,
    q: 'What age is Story Spire for?',
    a: 'Story Spire is for children aged 4 to 10. Younger children usually listen while the app reads aloud. Older ones often like to read the story themselves.',
  },
  {
    group: 'The basics',
    q: 'Which phones does it work on?',
    a: 'Story Spire works on iPhone and on Android phones. You can download it from the App Store or from Google Play.',
  },
  {
    group: 'The basics',
    q: 'Who makes Story Spire?',
    a: `Story Spire is made by ${site.company}.`,
  },
  {
    group: 'Stories',
    q: 'What kinds of stories can we make?',
    a: 'You can make fun stories, stories with a lesson, and stories that teach new words. In each one, the character is one you made yourselves.',
  },
  {
    group: 'Stories',
    q: 'Can my child be the main character?',
    a: 'Yes. You make the character together, so it can be your child, a pet, a favourite toy or someone completely made up.',
  },
  {
    group: 'Stories',
    q: 'Does the app read the story aloud?',
    a: 'Yes. Every story comes with a voice that reads it aloud, as well as the written words and pictures. You can also read it yourself.',
  },
  {
    group: 'Stories',
    q: 'What are the quizzes for?',
    a: 'Stories with a lesson and word stories end with a short quiz. It asks a few questions about the story, which is an easy way to see what your child understood and to talk about it.',
  },
  {
    group: 'For parents',
    home: true,
    q: 'Is Story Spire suitable for young children?',
    a: 'Stories in Story Spire are written for children aged 4 to 10. The app is designed for a parent and child to use together, and we suggest reading a new story with your child the first time.',
  },
  {
    group: 'For parents',
    q: 'Can my child use it alone?',
    a: 'Story Spire is made for a parent and child to use together, especially when choosing the character and the story. Once a story is made, your child can listen to it or read it again without you.',
  },
  {
    group: 'For parents',
    q: 'Does it replace reading books?',
    a: 'No. Story Spire is one more way to enjoy stories, next to the books on your shelf. You might use it on some nights and read a book on others.',
  },
  {
    group: 'Price',
    home: true,
    q: 'How much does Story Spire cost?',
    a: 'Story Spire is free to download. Premium features come with a 7-day free trial. The current price is shown in the App Store or Google Play before you pay anything.',
  },
  {
    group: 'Price',
    home: true,
    q: 'How do I cancel the free trial?',
    a: 'You cancel in your phone, not in the app. On iPhone, open Settings, tap your name, then Subscriptions. On Android, open Google Play, tap your picture, then Payments and subscriptions. Cancel at least a day before the trial ends and you will not be charged.',
  },
];

export const faqSchema = (list) => ({
  '@type': 'FAQPage',
  mainEntity: list.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const faqList = (list) => `
<div class="faq">
  ${list.map((f) => `<details><summary><h3>${f.q}</h3></summary><p>${f.a}</p></details>`).join('\n  ')}
</div>`;

const groups = [...new Set(faqs.map((f) => f.group))];

export const faq = {
  path: '/faq/',
  title: 'Questions and answers',
  description:
    'Short answers about Story Spire: what it is, what age it is for, what it costs, how the free trial works and how to cancel.',
  crumbs: [['/faq/', 'Questions']],
  schema: [faqSchema(faqs)],
  body: `
<section class="page-head">
  <div class="wrap narrow">
    <h1>Questions and answers</h1>
    <p class="lead">Short answers to the things parents ask us.</p>
  </div>
</section>
<section class="band">
  <div class="wrap narrow">
    ${groups
      .map((g) => `<h2 class="faq-group">${g}</h2>${faqList(faqs.filter((f) => f.group === g))}`)
      .join('\n    ')}
  </div>
</section>
${getApp('Ready to make the first one?')}
`,
};
