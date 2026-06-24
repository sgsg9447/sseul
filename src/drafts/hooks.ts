import { useEffect } from 'react';

/* Drafts-local hooks. Kept inside the drafts module on purpose: a sample (or
   the whole /d system) must not depend on src/examples, which is on its way
   out. Nothing here reaches outside the drafts folder. */

/* Keep draft/sample pages out of search engines while one is mounted.
   SPA routes can't rely on a static <meta> in index.html, so we inject a
   robots tag on mount and remove it on unmount. Crawlers that *do* run JS
   will see noindex,nofollow; crawlers that don't are handled by the
   `Disallow: /d/` rule in public/robots.txt. Belt and suspenders — the real
   privacy comes from the unguessable slug. */
export function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex,nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
}

/* Set the document title while a sample is mounted, then restore it. When a
   viewer does "PDF로 저장" from the print sheet, this becomes the default
   filename. Also resets scroll on route change. */
export function usePageTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [title]);
}
