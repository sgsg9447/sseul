import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

/* The ONLY glue between the portfolio app and a sample.
   ───────────────────────────────────────────────────────────────────────────
   Each sample lives self-contained in ./samples/<name>/ and knows nothing about
   routing. Here we map an unguessable public slug → that sample, lazily. The
   slug and the folder name are decoupled on purpose: rotate a slug without
   touching the sample, and name the folder after the client/brand instead.

   Lazy import = each sample compiles to its own build chunk, so it ships only
   when its /d/<slug> is visited and lifts out cleanly later.

   Add a sample:    drop ./samples/<name>/, then add one line below.
   Hand off a sample: copy ./samples/<name>/ — it has no portfolio imports.
   Fresh slug:      openssl rand -hex 4   (→ e.g. a8f3k2c9) */

type DraftEntry = {
  title: string;
  Page: LazyExoticComponent<ComponentType>;
};

export const drafts: Record<string, DraftEntry> = {
  a8f3k2c9: {
    title: '시안 — 샘플',
    Page: lazy(() => import('./samples/sample-01')),
  },
};
