import type { ComponentType } from 'react';
import { SampleA8f3k2c9 } from './samples/sample-a8f3k2c9';

/* Hidden sample/draft pages, keyed by an unguessable slug.
   Reached only at /d/<slug> — never linked from the gallery, the home page,
   or a sitemap, and served with noindex (see useNoIndex). Hand a client the
   URL directly; anyone without the slug gets the not-found screen.

   To add one: drop a component in ./samples and register its slug below.
   Generate a fresh slug with:  openssl rand -hex 4  (e.g. a8f3k2c9) */
export const drafts: Record<string, { title: string; Page: ComponentType }> = {
  a8f3k2c9: { title: '시안 — 샘플', Page: SampleA8f3k2c9 },
};
