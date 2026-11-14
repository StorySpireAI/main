import { home } from './home.mjs';
import { how } from './how.mjs';
import { parents } from './parents.mjs';
import { faq } from './faq.mjs';
import { guidePages } from './guides.mjs';

const notFound = {
  path: '/404.html',
  file: '404.html',
  noindex: true,
  title: 'Page not found',
  description: 'This page is not here.',
  body: `
<section class="page-head lost">
  <div class="wrap narrow">
    <h1>This page wandered off</h1>
    <p class="lead">We looked under the bed and behind the bookshelf. It is not here.</p>
    <p><a class="btn btn-gold" href="/">Back to the start</a></p>
  </div>
</section>`,
};

export const pages = [home, how, parents, faq, ...guidePages, notFound];
