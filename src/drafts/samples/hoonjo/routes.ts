/* Slug-agnostic path helpers. The sample is mounted at /d/<slug> and the slug
   is rotatable, so we never hardcode it — we read it off the URL. Sub-routes
   (/resume, /career, /portfolio-pdf) are plain full-page links; the slug router
   already strips the sub-path and lands every /d/<slug>/* on this sample, so we
   just branch on the sub-path here. */
export type DocRoute = 'resume' | 'career' | 'portfolio-pdf';

const DOC_ROUTES: DocRoute[] = ['resume', 'career', 'portfolio-pdf'];

/** `/d/<slug>` for the current page (no trailing sub-path), or '' off-route. */
export function docBase(): string {
  return window.location.pathname.match(/^\/d\/[^/]+/)?.[0] ?? '';
}

/** The active document sub-route, or null for the main portfolio. */
export function currentDoc(): DocRoute | null {
  const sub = window.location.pathname.match(/^\/d\/[^/]+\/([^/?#]+)/)?.[1];
  return sub && (DOC_ROUTES as string[]).includes(sub) ? (sub as DocRoute) : null;
}
