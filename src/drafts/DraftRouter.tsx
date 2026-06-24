import { useNoIndex } from './useNoIndex';
import { usePageTitle } from '../examples/shared';
import { drafts } from './registry';
import './drafts.css';

/* Routes /d/<slug> to a hidden sample page. Every path under /d is noindexed,
   including unknown slugs, so a wrong guess never leaks that anything exists
   at a nearby slug — it just looks like a dead link. */
export function DraftRouter({ path }: { path: string }) {
  useNoIndex();

  const slug = path.replace(/^\/d\/?/, '').replace(/\/.*$/, '');
  const entry = drafts[slug];

  if (!entry) {
    return <DraftNotFound />;
  }

  const { title, Page } = entry;
  return <DraftFrame title={title} Page={Page} />;
}

function DraftFrame({ title, Page }: { title: string; Page: React.ComponentType }) {
  usePageTitle(title);
  return <Page />;
}

function DraftNotFound() {
  usePageTitle('페이지를 찾을 수 없습니다');
  return (
    <main className="draft-404">
      <div className="draft-404-inner">
        <p className="draft-404-code">404</p>
        <h1>페이지를 찾을 수 없습니다</h1>
        <p className="draft-404-desc">
          링크가 만료되었거나 주소가 정확하지 않습니다.
        </p>
        <a className="draft-404-home" href="/">
          홈으로
        </a>
      </div>
    </main>
  );
}
