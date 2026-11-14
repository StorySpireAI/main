import { site } from '../../site.config.mjs';
import { getApp, icons } from './parts.mjs';

const steps = [
  {
    icon: 'character',
    name: 'Make a character',
    text: 'Start with who the story is about. It can be your child, the family dog, a favourite toy or someone you invent on the spot. Let your child lead here. The odder the idea, the better the story tends to be.',
  },
  {
    icon: 'book',
    name: 'Choose the kind of story',
    text: 'Pick a fun story when you just want to enjoy yourselves. Pick a story with a lesson when there is something you want to talk about, like sharing or being brave. Pick a word story to meet a few new words along the way.',
  },
  {
    icon: 'picture',
    name: 'Get your story',
    text: 'The app writes a story for your character and adds pictures to go with it. The words are written for children aged 4 to 10.',
  },
  {
    icon: 'voice',
    name: 'Read it or listen to it',
    text: 'Read the story aloud yourself, take turns, or tap to have it read to you both. Stop at the pictures and ask what your child can see.',
  },
  {
    icon: 'quiz',
    name: 'Try the quiz',
    text: 'Stories with a lesson and word stories finish with a short quiz. Treat it as a chat, not a test. A wrong answer is often the start of the best conversation.',
  },
];

export const how = {
  path: '/how-it-works/',
  title: 'How Story Spire works',
  description:
    'How to make a story in Story Spire: make a character, choose the kind of story, then read it or listen to it together. Five simple steps.',
  crumbs: [['/how-it-works/', 'How it works']],
  schema: [
    {
      '@type': 'HowTo',
      name: 'How to make a story with your child in Story Spire',
      description: 'Make a character, choose the kind of story, then read or listen together.',
      tool: { '@type': 'HowToTool', name: site.appName + ' app' },
      step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
    },
  ],
  body: `
<section class="page-head">
  <div class="wrap narrow">
    <h1>How Story Spire works</h1>
    <p class="lead">You and your child make a character and choose a story. The app writes it, reads it aloud and adds pictures. Here is each step.</p>
  </div>
</section>
<section class="band">
  <div class="wrap narrow">
    <ol class="steps-long">
      ${steps.map((s) => `<li>${icons[s.icon]}<div><h2>${s.name}</h2><p>${s.text}</p></div></li>`).join('\n      ')}
    </ol>
  </div>
</section>
<section class="band band-cream">
  <div class="wrap narrow prose">
    <h2>What you need</h2>
    <p>An iPhone or an Android phone, and a few quiet minutes. The app is free to download, and you can try the premium features free for 7 days.</p>
    <p>New to this? <a href="/guides/bedtime-story-routine/">Our bedtime routine guide</a> shows how an evening can go, and there are <a href="/guides/story-ideas-for-kids/">40 story ideas</a> for nights when nobody can think of one.</p>
  </div>
</section>
${getApp('Make your first story tonight')}
`,
};
