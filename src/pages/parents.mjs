import { getApp } from './parts.mjs';

export const parents = {
  path: '/parents/',
  title: 'For parents: what your child sees and what it costs',
  description:
    'A plain guide for parents. What Story Spire does, what your child sees, what the quizzes are for, what it costs and how to cancel the free trial.',
  crumbs: [['/parents/', 'For parents']],
  body: `
<section class="page-head">
  <div class="wrap narrow">
    <h1>For parents</h1>
    <p class="lead">Before you put an app in front of your child you want to know what it does. This page tells you, without the sales talk.</p>
  </div>
</section>
<section class="band">
  <div class="wrap narrow prose">
    <h2>What Story Spire does</h2>
    <p>Story Spire makes stories for children aged 4 to 10. You and your child make a character and choose the kind of story. The app then writes the story, adds pictures and can read it aloud.</p>

    <h2>What your child sees</h2>
    <p>A story with words, pictures and a button to hear it read aloud. Some stories end with a short quiz.</p>

    <h2>What you do</h2>
    <p>The app is made for the two of you to use together. You help make the character and you choose the kind of story:</p>
    <ul>
      <li><strong>A fun story</strong>, for nights when you only want to laugh.</li>
      <li><strong>A story with a lesson</strong>, when there is something you want to talk about.</li>
      <li><strong>A word story</strong>, to pick up a few new words.</li>
    </ul>
    <p>Then you read it, or you both listen.</p>

    <h2>The quizzes</h2>
    <p>Stories with a lesson and word stories finish with a few questions. They show you what your child took from the story. They are short. Treat them as something to chat about, not a test.</p>

    <h2>What it costs</h2>
    <p>The app is free to download. Premium features start with a 7-day free trial. You will see the current price in the App Store or Google Play before you agree to anything.</p>
    <p>If premium is not for you, cancel in your phone&rsquo;s subscription settings at least a day before the trial ends. <a href="/faq/">The steps are on the questions page.</a></p>

    <h2>A few things we suggest</h2>
    <ul>
      <li><strong>Sit together the first few times.</strong> Children get more from a story when someone they love is next to them.</li>
      <li><strong>Read a new story with your child.</strong> The stories are written by a computer. You know your child better than any app does, so stay close and skip anything that does not suit them.</li>
      <li><strong>One or two stories is plenty.</strong> Then lights out.</li>
      <li><strong>Keep the bookshelf.</strong> This is an extra way to enjoy stories. It is not meant to replace the books you already love.</li>
    </ul>
    <p>For more on evenings, see <a href="/guides/bedtime-story-routine/">a bedtime story routine that works</a>. If you are comparing apps, <a href="/guides/choosing-a-story-app/">how to choose a story app</a> lists what we would check, including in ours.</p>
  </div>
</section>
${getApp('See if your child likes it')}
`,
};
