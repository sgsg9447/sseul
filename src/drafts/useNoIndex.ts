import { useEffect } from 'react';

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
