import { site } from '../../site.config.mjs';
import { getApp } from './parts.mjs';

// Each guide opens with a short, direct answer. That first paragraph is what
// search engines and AI assistants tend to quote.
export const guides = [
  {
    path: '/guides/bedtime-story-routine/',
    kind: 'Bedtime',
    title: 'A bedtime story routine that works',
    teaser: 'Same time, same place, one story. A simple plan for calmer evenings.',
    description:
      'A simple bedtime story routine for children aged 4 to 10: same time each night, the same few steps, one or two stories, then lights out.',
    body: `
<p class="answer">A good bedtime story routine is short and the same every night: wash, pyjamas, one or two stories in the same spot, then lights out. Children settle faster when they know what comes next.</p>

<h2>The routine, step by step</h2>
<ol>
  <li><strong>Pick a time and keep it.</strong> It does not have to be early. It has to be the same.</li>
  <li><strong>Do the jobs first.</strong> Teeth, toilet, pyjamas, water. Stories come last so they are the reward, not the delay.</li>
  <li><strong>Choose the story together.</strong> Give two options, not twenty. &ldquo;The dragon one or the fox one?&rdquo;</li>
  <li><strong>Read in the same place.</strong> The bed, a chair, a corner with a lamp. The spot becomes part of the signal that the day is ending.</li>
  <li><strong>Say how many before you start.</strong> &ldquo;Two stories tonight.&rdquo; Then stick to two.</li>
  <li><strong>End the same way.</strong> A song, a hug, the same few words. Then leave.</li>
</ol>

<h2>How long should it take?</h2>
<p>About twenty to thirty minutes from bathroom to lights out. The story part is ten or fifteen of those. If it runs longer most nights, the routine has too many steps.</p>

<h2>When they ask for one more</h2>
<p>They will. Every child does. The answer that works is boring and kind: &ldquo;That was our two. We&rsquo;ll pick another tomorrow.&rdquo; Letting them choose tomorrow&rsquo;s story now often helps, because it gives them something to look forward to.</p>

<h2>What about screens?</h2>
<p>A calm story on a phone is not the same as a noisy game, but the phone still needs to leave the room afterwards. If you use a story app, turn the brightness down, sit together, and put the phone away yourself when the story ends.</p>

<h2>Books, made-up stories and apps</h2>
<p>You do not have to choose one. A week might look like this: library books on most nights, a story you make up in the dark on one, and a story you made together in <a href="/how-it-works/">Story Spire</a> on another. Variety keeps it fresh for you as much as for them.</p>

<h2>If tonight goes badly</h2>
<p>Some nights fall apart. Skip the story if you have to, keep the goodnight, and start again tomorrow. One bad evening does not undo a routine.</p>
`,
  },
  {
    path: '/guides/story-ideas-for-kids/',
    kind: 'Ideas',
    title: '40 story ideas for children aged 4 to 10',
    teaser: 'Stuck for a story? Forty starting points, sorted by age.',
    description:
      'Forty story ideas for children, sorted by age from 4 to 10. Use them for bedtime stories you make up yourself or as starting points in a story app.',
    body: `
<p class="answer">The best story ideas for children start with someone small who wants something. Here are forty, sorted by age. Change the names, swap the animals, and let your child decide the ending.</p>

<h2>Ages 4 and 5</h2>
<p>Keep it close to home. One character, one small problem, a happy ending.</p>
<ol>
  <li>A bear who cannot find his other sock.</li>
  <li>A puddle that is deeper than it looks.</li>
  <li>The day the family cat learned to open the fridge.</li>
  <li>A little cloud who is scared of thunder.</li>
  <li>A snail who wants to win one race.</li>
  <li>The teddy who stayed awake all night to see what happens.</li>
  <li>A duck who does not like water.</li>
  <li>A bus that takes a wrong turn and ends up at the beach.</li>
  <li>The smallest dinosaur at dinosaur school.</li>
  <li>A star that falls into the garden and needs help getting home.</li>
</ol>

<h2>Ages 6 and 7</h2>
<p>Now there can be a journey, a friend and a bit of trouble along the way.</p>
<ol start="11">
  <li>A girl who finds a door at the back of the school library.</li>
  <li>Two brothers who build a boat out of a bathtub.</li>
  <li>A dragon who is afraid of fire.</li>
  <li>The dog who could understand everything but could only say &ldquo;woof&rdquo;.</li>
  <li>A postman on the moon with one letter left to deliver.</li>
  <li>A boy who shrinks to the size of an ant for one afternoon.</li>
  <li>The winter the snowman did not melt.</li>
  <li>A shy mermaid who starts at a new school.</li>
  <li>A robot who wants to learn how to laugh.</li>
  <li>The night all the toys in the shop swapped places.</li>
</ol>

<h2>Ages 8 to 10</h2>
<p>Older children like a mystery, a hard choice, or a hero who gets it wrong first.</p>
<ol start="21">
  <li>A map that changes every time you fold it.</li>
  <li>A girl who can hear what trees are saying, and wishes she could not.</li>
  <li>The football team that has never won, one game from the final.</li>
  <li>A lighthouse keeper&rsquo;s son who sees a ship that is not on any chart.</li>
  <li>Twins who wake up in each other&rsquo;s lives.</li>
  <li>A boy who finds his grandfather&rsquo;s diary from when he was ten.</li>
  <li>The class pet that goes missing on the day of the school inspection.</li>
  <li>A young inventor whose machine works a little too well.</li>
  <li>A village where it has not rained for a year, and the girl who goes to find out why.</li>
  <li>The last dragon egg, and the three children who all want to keep it.</li>
</ol>

<h2>Stories with a lesson</h2>
<p>These help when there is something on your child&rsquo;s mind. Tell the story first. Talk about it afterwards.</p>
<ol start="31">
  <li><strong>Sharing:</strong> two squirrels and one very good acorn.</li>
  <li><strong>Being brave:</strong> a mouse who has to cross the kitchen floor at night.</li>
  <li><strong>Telling the truth:</strong> a fox who breaks the bird&rsquo;s nest and says the wind did it.</li>
  <li><strong>A new baby:</strong> a penguin who is not sure about the egg.</li>
  <li><strong>Starting school:</strong> a small owl&rsquo;s first night at night school.</li>
  <li><strong>Losing a game:</strong> a hare who has never come second before.</li>
  <li><strong>Saying sorry:</strong> two best friends, one broken kite.</li>
  <li><strong>Being different:</strong> a zebra with spots.</li>
  <li><strong>Trying again:</strong> a spider whose web keeps blowing away.</li>
  <li><strong>Being kind:</strong> the grumpy giant nobody has ever said hello to.</li>
</ol>

<h2>How to turn an idea into a story</h2>
<p>Ask three questions. Who is it about? What do they want? What gets in the way? Answer those and you have a story. If you would like pictures and a voice to go with it, you can <a href="/how-it-works/">make it in Story Spire</a> with a character of your own.</p>
`,
  },
  {
    path: '/guides/choosing-a-story-app/',
    kind: 'Advice',
    title: 'How to choose a story app for your child',
    teaser: 'Seven things to check before you download, in ours or anyone else&rsquo;s.',
    description:
      'How to choose a story app for a child aged 4 to 10. Seven checks covering age range, your role as a parent, read-aloud, price, privacy and how easy it is to cancel.',
    body: `
<p class="answer">To choose a story app for your child, check seven things: the age it is made for, whether you can take part, whether it reads aloud, what the stories are like, what it really costs, what it does with your child&rsquo;s details, and how easy it is to cancel.</p>

<h2>1. Is it made for your child&rsquo;s age?</h2>
<p>A four-year-old and a ten-year-old need very different stories. Look for an age range on the store page. If it says &ldquo;for everyone&rdquo;, it was probably written for no one in particular.</p>

<h2>2. Can you take part?</h2>
<p>The best story time is shared. Prefer apps that let you choose or shape the story together over ones that simply play the next thing.</p>

<h2>3. Does it read aloud?</h2>
<p>Children who cannot read yet need a voice. Listen to it yourself for a minute. If the voice annoys you on day one, it will not last a month of bedtimes.</p>

<h2>4. Read a story yourself first</h2>
<p>Make or open one story before your child sees the app. Is it kind? Does it make sense? Is the ending a real ending? Five minutes tells you most of what you need to know.</p>

<h2>5. What does it really cost?</h2>
<p>Many story apps are free to download and then charge monthly, or sell credits for each story. Check the price in the store before you start a trial, and check whether it is charged monthly or yearly.</p>

<h2>6. What does it do with your child&rsquo;s details?</h2>
<p>Read the privacy section on the store page. It lists what the app collects. Be careful with apps that ask for a photo of your child or a full name when a first name would do.</p>

<h2>7. Is it easy to cancel?</h2>
<p>Subscriptions bought through the App Store or Google Play can be cancelled in your phone&rsquo;s settings. Put a reminder in your calendar for the day before a trial ends.</p>

<h2>Where Story Spire fits</h2>
<p>We make a story app, so weigh our view with that in mind. Story Spire is made for ages 4 to 10. Parents and children make the character and choose the story together. Every story has words, pictures and a read-aloud voice. It is free to download and premium has a 7-day free trial. For the rest of the list, read our store page and judge for yourself. <a href="/parents/">Our page for parents</a> has more.</p>
`,
  },
];

const article = (g) => ({
  path: g.path,
  title: g.title,
  description: g.description,
  article: true,
  crumbs: [['/guides/', 'Guides'], [g.path, g.title]],
  schema: [
    {
      '@type': 'Article',
      headline: g.title,
      description: g.description,
      datePublished: site.updated,
      dateModified: site.updated,
      inLanguage: site.locale,
      mainEntityOfPage: site.url + g.path,
      image: site.url + '/assets/og.png',
      author: { '@id': site.url + '/#organization' },
      publisher: { '@id': site.url + '/#organization' },
    },
  ],
  body: `
<article>
  <header class="page-head">
    <div class="wrap narrow">
      <p class="eyebrow">${g.kind}</p>
      <h1>${g.title}</h1>
    </div>
  </header>
  <div class="band">
    <div class="wrap narrow prose">
      ${g.body}
      <aside class="also">
        <h2>More guides</h2>
        <ul>${guides.filter((o) => o !== g).map((o) => `<li><a href="${o.path}">${o.title}</a></li>`).join('')}</ul>
      </aside>
    </div>
  </div>
</article>
${getApp('Make a story of your own')}
`,
});

export const guidePages = [
  {
    path: '/guides/',
    title: 'Guides for story time',
    description: 'Short, practical guides for parents: a bedtime story routine, forty story ideas by age, and how to choose a story app.',
    crumbs: [['/guides/', 'Guides']],
    body: `
<section class="page-head">
  <div class="wrap narrow">
    <h1>Guides for story time</h1>
    <p class="lead">Short reads for parents. No app needed for most of them.</p>
  </div>
</section>
<section class="band">
  <div class="wrap">
    <ul class="guide-cards">
      ${guides.map((g) => `<li><a href="${g.path}"><span class="guide-kind">${g.kind}</span><h2>${g.title}</h2><p>${g.teaser}</p><span class="more">Read</span></a></li>`).join('\n      ')}
    </ul>
  </div>
</section>
${getApp()}
`,
  },
  ...guides.map(article),
];
