import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button, Tag, Badge, Eyebrow, MetricTable } from './components';
import { ZoomImage } from './Lightbox';
import { posts, postBySlug } from './posts';

type Nav = (to: string) => void;

/* Local title hook — kept inside the folder so the sample stays self-contained. */
function usePageTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => { document.title = prev; };
  }, [title]);
}

const CONTAINER = { maxWidth: '880px', margin: '0 auto', padding: '0 24px' } as const;

/* Shared sticky top bar for the Works pages. */
function WorksBar({ navigate, label }: { navigate: Nav; label: string }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(250,250,251,0.86)', WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/d/hoonjo-b9e634" onClick={(e) => { e.preventDefault(); navigate(''); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
          <span aria-hidden style={{ width: 9, height: 9, background: 'var(--blue)', transform: 'rotate(45deg)', borderRadius: 1 }} />
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 600, color: 'var(--text)' }}>Hoonjo</span>
        </a>
        <a href="/d/hoonjo-b9e634" onClick={(e) => { e.preventDefault(); navigate(''); }} style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)', letterSpacing: '0.04em', textDecoration: 'none' }}>{label}</a>
      </div>
    </header>
  );
}

/* ── Works list ──────────────────────────────────────────────────────────── */
export function WorksList({ navigate }: { navigate: Nav }) {
  usePageTitle('Works — Hoonjo');
  return (
    <div style={{ minHeight: '100vh', background: 'var(--canvas)' }}>
      <WorksBar navigate={navigate} label="← 포트폴리오" />
      <main style={{ ...CONTAINER, padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <Eyebrow tone="blue">WORKS · 작업 기록</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(34px, 5vw, 50px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.08, color: 'var(--text)', margin: '18px 0 0' }}>
          문제 하나에 글 하나.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '16px 0 0', maxWidth: '52ch' }}>
          각 프로젝트에서 무엇이 어려웠고, 어떻게 풀었고, 무엇을 배웠는지 — 문제 → 구조 → 결과 → 회고 순으로 적었습니다.
        </p>

        <ol style={{ listStyle: 'none', margin: '48px 0 0', padding: 0 }}>
          {posts.map((p, i) => (
            <li key={p.slug}>
              <a
                href={`/d/hoonjo-b9e634/works/${p.slug}`}
                onClick={(e) => { e.preventDefault(); navigate(`/works/${p.slug}`); }}
                className="hoonjo-work-row"
                style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: 20, alignItems: 'start', padding: '26px 0', borderTop: '1px solid var(--line)', textDecoration: 'none', transition: 'background 150ms ease' }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)', paddingTop: 4 }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <Badge variant="outline">{p.company}</Badge>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>{p.period}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.2vw, 24px)', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.25, color: 'var(--text)', margin: '12px 0 0' }}>{p.title}</h2>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '8px 0 0', maxWidth: '60ch' }}>{p.summary}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 14 }}>
                    {p.tags.slice(0, 5).map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
                <span className="hoonjo-work-arrow" style={{ fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--blue)', paddingTop: 2, transition: 'transform 150ms ease' }}>→</span>
              </a>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}

/* ── Work detail ─────────────────────────────────────────────────────────── */
export function WorkDetail({ slug, navigate }: { slug: string; navigate: Nav }) {
  const post = postBySlug(slug);
  usePageTitle(post ? `${post.title} — Hoonjo` : 'Works — Hoonjo');

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--canvas)' }}>
        <WorksBar navigate={navigate} label="← 포트폴리오" />
        <main style={{ ...CONTAINER, padding: '96px 24px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>글을 찾을 수 없습니다.</p>
          <div style={{ marginTop: 20 }}><Button variant="outline" as="a" href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('/works'); }}>전체 작업</Button></div>
        </main>
      </div>
    );
  }

  const idx = posts.findIndex((p) => p.slug === slug);
  const next = posts[(idx + 1) % posts.length];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--canvas)' }}>
      <WorksBar navigate={navigate} label="← 전체 작업" />
      <article style={{ ...CONTAINER, padding: 'clamp(40px, 7vw, 72px) 24px 0' }}>
        <a href="/d/hoonjo-b9e634/works" onClick={(e) => { e.preventDefault(); navigate('/works'); }} style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)', textDecoration: 'none' }}>← 전체 작업</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginTop: 22 }}>
          <Badge variant="outline">{post.company}</Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{post.period}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>· {post.role}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 4.4vw, 46px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.12, color: 'var(--text)', margin: '16px 0 0', textWrap: 'balance' }}>{post.title}</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.6, color: 'var(--text-secondary)', margin: '18px 0 0', maxWidth: '58ch' }}>{post.summary}</p>

        {post.hero && (
          <figure style={{ margin: '36px 0 0' }}>
            <ZoomImage src={post.hero.src} alt={post.hero.alt} style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-soft)' }} />
            <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginTop: 10 }}>실제 화면 · 클릭하면 확대됩니다</figcaption>
          </figure>
        )}

        {post.metrics && (
          <div style={{ margin: '36px 0 0' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>측정된 결과</div>
            <MetricTable stats={post.metrics} />
          </div>
        )}

        <div className="hoonjo-md" style={{ marginTop: 12 }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        {post.repo && (
          <div style={{ marginTop: 16 }}>
            <Button variant="outline" as="a" href={post.repo.href} target="_blank" rel="noreferrer" iconRight="→">{post.repo.label}</Button>
          </div>
        )}

        {/* next */}
        <a
          href={`/d/hoonjo-b9e634/works/${next.slug}`}
          onClick={(e) => { e.preventDefault(); navigate(`/works/${next.slug}`); }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, margin: '64px 0', padding: '28px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>다음 작업</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, color: 'var(--text)', marginTop: 6 }}>{next.title}</div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 20, color: 'var(--blue)' }}>→</span>
        </a>
      </article>
    </div>
  );
}
