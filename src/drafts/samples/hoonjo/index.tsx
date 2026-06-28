import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import { LightboxProvider } from './Lightbox';
import { MainPortfolio } from './sections';
import { WorksList, WorkDetail } from './Works';

/* hoonjo — senior frontend engineer portfolio (served at /d/hoonjo-b9e634).
   Self-contained, scoped under .hoonjo. Has its own small router so the
   project cards on the main page can link to long-form posts:
     /d/hoonjo-b9e634           → portfolio
     /d/hoonjo-b9e634/works     → works archive (list)
     /d/hoonjo-b9e634/works/x   → a post

   The DraftRouter mounts this for the whole slug; sub-paths are handled here
   off window.location, with pushState navigation + popstate sync. */

const BASE = '/d/hoonjo-b9e634';
const getSub = () => {
  const p = window.location.pathname;
  return p.startsWith(BASE) ? p.slice(BASE.length).replace(/\/+$/, '') : '';
};

export default function Hoonjo() {
  const [sub, setSub] = useState(getSub);

  useEffect(() => {
    const on = () => setSub(getSub());
    window.addEventListener('popstate', on);
    return () => window.removeEventListener('popstate', on);
  }, []);

  const navigate = useCallback((to: string) => {
    window.history.pushState({}, '', BASE + to);
    setSub(to.replace(/\/+$/, ''));
    window.scrollTo(0, 0);
  }, []);

  let view;
  if (sub === '/works') view = <WorksList navigate={navigate} />;
  else if (sub.startsWith('/works/')) view = <WorkDetail slug={sub.slice('/works/'.length)} navigate={navigate} />;
  else view = <MainPortfolio navigate={navigate} />;

  return (
    <div className="hoonjo">
      <LightboxProvider>{view}</LightboxProvider>
    </div>
  );
}
