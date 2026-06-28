import type { ReactNode } from 'react';
import { Tag, MetricRow } from './components';
import { profile, timeline, capabilities, flagship, cases, oss } from './content';
import { docBase } from './routes';

/* Print-to-PDF document pages served at /d/<slug>/{resume,career,portfolio-pdf}.
   Same idea as the main site's résumé/career/portfolio routes: a clean on-screen
   doc with a toolbar that prints to PDF. All copy is reused from content.ts so
   the documents never drift from the portfolio. */

/* ---- shared shell ------------------------------------------------------- */
function DocShell({ tab, children }: { tab: string; children: ReactNode }) {
  return (
    <div className="hoonjo-doc">
      <header className="hoonjo-doc-bar">
        <a className="hoonjo-doc-back" href={docBase() || '/'}>
          <span aria-hidden style={{ fontFamily: 'var(--font-mono)' }}>←</span> 포트폴리오로
        </a>
        <span className="hoonjo-doc-tab">{tab}</span>
        <button type="button" className="hoonjo-doc-print" onClick={() => window.print()}>
          인쇄 · PDF 저장
        </button>
      </header>
      <article className="hoonjo-doc-sheet">{children}</article>
    </div>
  );
}

function DocHeader({ summary }: { summary?: string }) {
  return (
    <header style={{ paddingBottom: 26, borderBottom: '2px solid var(--text)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', margin: 0 }}>{profile.nameKo}</h1>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-muted)' }}>{profile.name}</span>
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-secondary)', marginTop: 8 }}>{profile.role}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 18px', marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)' }}>
        <a href={`mailto:${profile.email}`} style={{ color: 'var(--blue-deep)' }}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: 'var(--blue-deep)' }}>{profile.githubHandle}</a>
      </div>
      {summary && <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '16px 0 0', maxWidth: '60ch' }}>{summary}</p>}
    </header>
  );
}

function DocSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="hoonjo-doc-section" style={{ marginTop: 34 }}>
      <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 16px', paddingBottom: 8, borderBottom: '1px solid var(--line)' }}>{label}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: 'flex', gap: 9, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
          <span aria-hidden style={{ flex: 'none', width: 4, height: 4, marginTop: 8, borderRadius: 1, background: 'var(--steel)', transform: 'rotate(45deg)' }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const ALL_PROJECTS = [
  { title: flagship.title, company: flagship.company, problem: [flagship.problem], structure: ['앱에서 분리 → 순수 코어 / 측정 / 렌더 3계층으로 클린 재설계', '망한 시도를 버리지 않고 각도만 바꿔 합친 3세대 엔진'], metrics: flagship.results, tags: ['TypeScript', 'React 18/19', '측정-우선 레이아웃', 'semantic-release'] },
  ...cases.map((c) => ({ title: c.title, company: c.company, problem: c.problem, structure: c.structure, metrics: c.metrics, tags: c.tags })),
];

/* ---- 이력서 ------------------------------------------------------------- */
export function Resume() {
  return (
    <DocShell tab="이력서">
      <DocHeader summary={`${profile.role}. 성능·복잡한 상태·까다로운 렌더링을 측정 가능한 결과로 풀고, 반복되는 일을 재사용 가능한 구조로 바꾸는 데 강합니다.`} />

      <DocSection label="경력">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {timeline.map((t) => (
            <div key={t.org} className="hoonjo-doc-row" style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 20 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)', paddingTop: 2 }}>{t.period}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, fontWeight: 600, color: 'var(--text)' }}>{t.role}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-muted)' }}>· {t.org}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '6px 0 0', whiteSpace: 'pre-line' }}>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection label="전문 영역">
        <div className="hoonjo-doc-skills" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22 }}>
          {capabilities.map((c) => (
            <div key={c.label}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>{c.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                {c.skills.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection label="대표 프로젝트">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {ALL_PROJECTS.map((p) => (
            <div key={p.title} style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>{p.title}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{p.company}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--positive)' }}>
                {p.metrics[0].after}{p.metrics[0].unit ?? ''} · {p.metrics[0].label}
              </span>
            </div>
          ))}
        </div>
      </DocSection>
    </DocShell>
  );
}

/* ---- 경력기술서 --------------------------------------------------------- */
export function CareerDoc() {
  return (
    <DocShell tab="경력기술서">
      <DocHeader summary="문제 → 구조 → 측정된 결과. 대표 프로젝트별로 무엇이 막혀 있었고, 어떻게 구조화했고, 무엇이 얼마나 나아졌는지를 정리했습니다." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 34, marginTop: 30 }}>
        {ALL_PROJECTS.map((p) => (
          <section key={p.title} className="hoonjo-doc-section" style={{ paddingTop: 22, borderTop: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text)', margin: 0 }}>{p.title}</h2>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)' }}>{p.company}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 16 }} className="hoonjo-doc-ps">
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 9 }}>Problem</div>
                <Bullets items={p.problem} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 9 }}>Structure</div>
                <Bullets items={p.structure} />
              </div>
            </div>
            <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>Impact</div>
              <MetricRow stats={p.metrics} />
            </div>
          </section>
        ))}
      </div>
    </DocShell>
  );
}

/* ---- 포트폴리오 PDF ----------------------------------------------------- */
export function PortfolioPdf() {
  return (
    <DocShell tab="포트폴리오 PDF">
      <DocHeader summary={profile.lead.replace(/\n/g, ' ')} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}>
        {ALL_PROJECTS.map((p) => (
          <section key={p.title} className="hoonjo-doc-section" style={{ background: 'var(--cloud)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 600, color: 'var(--text)', margin: 0 }}>{p.title}</h2>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{p.company}</span>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-secondary)', margin: '10px 0 0', whiteSpace: 'pre-line' }}>{p.problem[0]}</p>
            <div style={{ marginTop: 16 }}><MetricRow stats={p.metrics} /></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
              {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </section>
        ))}
        <section className="hoonjo-doc-section" style={{ paddingTop: 18, borderTop: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>Open Source</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 500, color: 'var(--text)' }}>{oss.repo}</span>
            <a href={oss.href} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--blue-deep)' }}>github ↗</a>
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-secondary)', margin: '8px 0 0', whiteSpace: 'pre-line' }}>{oss.desc}</p>
        </section>
      </div>
    </DocShell>
  );
}
