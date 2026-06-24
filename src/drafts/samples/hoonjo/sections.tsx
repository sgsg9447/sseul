import { useState, type ReactNode } from 'react';
import {
  Button, Tag, Badge, Eyebrow, SectionHeader, BlueprintGrid, MetricTable, TimelineItem, StackList,
} from './components';
import type { WorkCase } from './content';
import { profile, impact, cases, blackHole, timeline, stacks, oss } from './content';
import { BlackHole } from './BlackHole';
import { Flagship } from './Flagship';

const CONTAINER = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' } as const;
/* section rhythm — 96px desktop, eases to 56px on small screens (no media query) */
const SECTION_Y = 'clamp(56px, 9vw, 96px)';

/* in-page anchor with smooth scroll (kept in JS so we don't leak a global
   `html { scroll-behavior }` rule out of the .hoonjo subtree) */
function scrollTo(e: React.MouseEvent, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---- Nav ---------------------------------------------------------------- */
const NAV_LINKS: [string, string][] = [['작업', 'work'], ['경력', 'career'], ['전문 영역', 'stack'], ['오픈소스', 'oss'], ['연락', 'contact']];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40, background: 'rgba(250,250,251,0.82)',
      backdropFilter: 'saturate(180%) blur(10px)', WebkitBackdropFilter: 'saturate(180%) blur(10px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ ...CONTAINER, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" onClick={(e) => scrollTo(e, 'top')} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
          <span aria-hidden style={{ width: 9, height: 9, background: 'var(--blue)', transform: 'rotate(45deg)', borderRadius: 1 }} />
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 21, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.01em' }}>{profile.name}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.06em', marginLeft: 2, marginTop: 2 }}>FE·7Y</span>
        </a>
        <nav className="hoonjo-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollTo(e, id)} style={{
              fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-secondary)', padding: '8px 12px',
              textDecoration: 'none', borderRadius: 'var(--radius-md)', transition: 'color 150ms ease, background 150ms ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--cloud)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
            >{label}</a>
          ))}
          <span style={{ width: 1, height: 22, background: 'var(--line)', margin: '0 10px' }} />
          <Button variant="primary" size="sm" as="a" href="#contact" onClick={(e: React.MouseEvent) => scrollTo(e, 'contact')}>연락하기</Button>
        </nav>
        <button className="hoonjo-nav-burger" aria-label="메뉴" onClick={() => setOpen((o) => !o)} style={{
          display: 'none', width: 44, height: 44, border: '1px solid var(--line)', background: 'var(--paper)',
          borderRadius: 'var(--radius-sm)', cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text)' }}>{open ? '✕' : '≡'}</span>
        </button>
      </div>
      {open && (
        <div style={{ borderTop: '1px solid var(--line)', background: 'var(--canvas)', padding: '12px 24px 20px' }}>
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { scrollTo(e, id); setOpen(false); }} style={{
              display: 'block', fontFamily: 'var(--font-sans)', fontSize: 18, color: 'var(--text)',
              padding: '12px 0', borderBottom: '1px solid var(--line)', textDecoration: 'none',
            }}>{label}</a>
          ))}
          <div style={{ marginTop: 16 }}>
            <Button variant="primary" as="a" href="#contact" onClick={(e: React.MouseEvent) => { scrollTo(e, 'contact'); setOpen(false); }} style={{ width: '100%' }}>연락하기</Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---- Hero --------------------------------------------------------------- */
export function Hero() {
  return (
    <section id="top">
      <BlueprintGrid axes cell={56} label="x:0  y:0  // structure" intensity="soft" style={{ borderBottom: '1px solid var(--line)' }}>
        <div style={{ ...CONTAINER, padding: `${SECTION_Y} 24px 0`, position: 'relative' }}>
          <Eyebrow tone="blue">FRONTEND ENGINEER · SINCE {profile.since}</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(44px, 7vw, 76px)', lineHeight: 1.02, letterSpacing: '-0.035em', color: 'var(--text)', margin: '26px 0 0', maxWidth: '15ch' }}>
            {profile.tagline[0]}<br /><span style={{ fontWeight: 800 }}>구조</span>를 찾습니다.
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: 1.6, color: 'var(--text-secondary)', margin: '28px 0 0', maxWidth: '46ch' }}>
            {profile.role}. {profile.lead}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
            <Button variant="primary" as="a" href="#work" iconRight="→" onClick={(e: React.MouseEvent) => scrollTo(e, 'work')}>작업 보기</Button>
            <Button variant="outline-ink" as="a" href="#oss" onClick={(e: React.MouseEvent) => scrollTo(e, 'oss')}>오픈소스</Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 30 }}>
            {profile.heroTags.map((t) => <Tag key={t} variant="ghost">{t}</Tag>)}
          </div>
        </div>

        <div style={{ ...CONTAINER, margin: '64px auto 0', padding: '0 24px 64px' }}>
          <div className="hoonjo-impact-strip" style={{
            display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) repeat(3, minmax(0,1fr))',
            background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)', overflow: 'hidden',
          }}>
            <div style={{ padding: '22px 24px', borderRight: '1px solid var(--line)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)' }}>대표 임팩트</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.5 }}>{impact.lead}</div>
            </div>
            {impact.stats.map((s, i) => (
              <div key={s.k} style={{ padding: '22px 24px', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{s.k}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', textDecoration: 'line-through', textDecorationColor: 'var(--steel)', marginTop: 10 }}>{s.before}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', fontSize: 21, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.01em', marginTop: 3 }}>{s.after}</div>
              </div>
            ))}
          </div>
        </div>
      </BlueprintGrid>
    </section>
  );
}

/* ---- Work --------------------------------------------------------------- */
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ marginTop: 22 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>{label}</div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0, maxWidth: '46ch' }}>{children}</p>
    </div>
  );
}

function CaseCard({ c }: { c: WorkCase }) {
  return (
    <article style={{ marginTop: 24, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft)', overflow: 'hidden' }}>
      <div className="hoonjo-case-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr' }}>
        <div style={{ padding: 'clamp(24px, 4vw, 40px)', borderRight: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Eyebrow tone="blue">{c.eyebrow}</Eyebrow>
            {c.company && <Badge variant="outline">{c.company}</Badge>}
            {c.badge && <Badge variant={c.badge.variant} dot>{c.badge.label}</Badge>}
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(23px, 2.5vw, 30px)', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.12, color: 'var(--text)', margin: '16px 0 0' }}>{c.title}</h3>
          <Field label="Problem">{c.problem}</Field>
          <Field label="Structure">{c.structure}</Field>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 26 }}>
            {c.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
          {c.link && (
            <div style={{ marginTop: 28 }}>
              <Button variant="outline" as="a" href={c.link.href} target="_blank" rel="noreferrer" iconRight="→">{c.link.label}</Button>
            </div>
          )}
        </div>
        <div style={{ padding: 'clamp(24px, 4vw, 40px)', background: 'var(--cloud)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>Impact · 측정 결과</div>
          <MetricTable columns={1} stats={c.metrics} />
          {c.metricsNote && <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-muted)', marginTop: 16 }}>{c.metricsNote}</p>}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" style={{ ...CONTAINER, padding: `${SECTION_Y} 24px` }}>
      <SectionHeader index={1} eyebrow="SELECTED WORK" title="문제를 구조로, 구조를 숫자로" lead="각 작업은 문제 → 구조적 결정 → 측정된 결과 순서로 정리했습니다." />
      <Flagship />
      <div>
        {cases.map((c) => <CaseCard key={c.title} c={c} />)}
      </div>

      {/* Black-hole side project — live WebGL render */}
      <article className="hoonjo-bh-grid" style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 0.9fr', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft)', overflow: 'hidden' }}>
        <div style={{ padding: 'clamp(24px, 4vw, 40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Eyebrow tone="blue">{blackHole.eyebrow}</Eyebrow>
            <Badge variant="outline">{blackHole.company}</Badge>
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 2.6vw, 30px)', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.18, color: 'var(--text)', margin: '16px 0 0', textWrap: 'balance' }}>
            {blackHole.title[0]}<br className="hoonjo-br" /> {blackHole.title[1]}
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-secondary)', margin: '18px 0 0', maxWidth: '46ch' }}>{blackHole.body}</p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: '12px 0 0', maxWidth: '46ch' }}>{blackHole.aside}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
            {blackHole.tags.map((t) => <Tag key={t} variant="blue">{t}</Tag>)}
          </div>
          <div style={{ marginTop: 26 }}>
            <Button variant="outline" as="a" href={blackHole.repo} target="_blank" rel="noreferrer" iconRight="→">GitHub · H8njo/webgl-black-hole</Button>
          </div>
        </div>
        <div className="hoonjo-bh-stage" style={{ background: 'var(--ink-deep)', position: 'relative', minHeight: 'clamp(300px, 42vw, 380px)', overflow: 'hidden' }}>
          <BlackHole />
          <span style={{ position: 'absolute', top: 14, right: 14, display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--on-ink)', background: 'rgba(12,11,8,0.5)', border: '1px solid rgba(246,244,238,0.18)', borderRadius: 'var(--radius-pill)', padding: '5px 11px', WebkitBackdropFilter: 'blur(4px)', backdropFilter: 'blur(4px)' }}>
            <span className="hoonjo-live-dot" aria-hidden style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--blue-bright)' }} />
            실시간 렌더
          </span>
          <div style={{ position: 'absolute', insetInline: 0, bottom: 0, padding: 18, display: 'flex', gap: 18, justifyContent: 'space-between', borderTop: '1px solid rgba(246,244,238,0.12)', background: 'rgba(12,11,8,0.5)', WebkitBackdropFilter: 'blur(4px)', backdropFilter: 'blur(4px)' }}>
            {blackHole.stats.map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--on-ink-muted)', whiteSpace: 'nowrap' }}>{k}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--on-ink)', marginTop: 4, whiteSpace: 'nowrap' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

/* ---- Career ------------------------------------------------------------- */
export function Career() {
  return (
    <section id="career" style={{ background: 'var(--cloud)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ ...CONTAINER, padding: `${SECTION_Y} 24px` }}>
        <SectionHeader index={2} eyebrow="CAREER" title="7년, 네 곳을 거쳤습니다" lead="첫 직장의 PHP부터 정부 보안관제, 교육 플랫폼까지 — 맡은 화면을 동작하는 결과까지 끌고 갔습니다." />
        <div style={{ marginTop: 48, borderLeft: '1px solid var(--steel)', paddingLeft: 33, maxWidth: 820 }}>
          {timeline.map((t, i) => (
            <TimelineItem key={t.org} {...t} style={i === timeline.length - 1 ? { paddingBottom: 0 } : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Expertise ---------------------------------------------------------- */
export function Expertise() {
  return (
    <section id="stack" style={{ ...CONTAINER, padding: `${SECTION_Y} 24px` }}>
      <SectionHeader index={3} eyebrow="EXPERTISE" title="어디서 강한가" lead="성능과 렌더링을 중심으로, 복잡한 상태를 다루는 일에 깊습니다." />
      <div className="hoonjo-stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 48 }}>
        {stacks.map((s) => <StackList key={s.label} label={s.label} items={s.items} />)}
      </div>
    </section>
  );
}

/* ---- OpenSource --------------------------------------------------------- */
function InkStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-ink-muted)', whiteSpace: 'nowrap' }}>{k}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: 'var(--on-ink)', marginTop: 5, whiteSpace: 'nowrap' }}>{v}</div>
    </div>
  );
}

export function OpenSource() {
  return (
    <section id="oss" style={{ background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'linear-gradient(rgba(49,130,246,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(49,130,246,0.10) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div style={{ position: 'relative', ...CONTAINER, padding: `${SECTION_Y} 24px` }}>
        <SectionHeader index={4} eyebrow="OPEN SOURCE" onInk title="사내 도구를, 누구나 쓰게" lead="제품에 묶여 있던 페이지네이션 엔진을 검증 수학만 이식하고 클린 재설계해 npm에 공개했습니다." />
        <div style={{ marginTop: 48, background: 'var(--ink-soft)', border: '1px solid rgba(246,244,238,0.16)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          <div className="hoonjo-repo-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr' }}>
            <div style={{ padding: 'clamp(24px, 4vw, 36px)', borderRight: '1px solid rgba(246,244,238,0.12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 17, color: 'var(--on-ink)', fontWeight: 500 }}>
                  H8njo<span style={{ color: 'var(--on-ink-muted)' }}>/</span>column-pager
                </span>
                <Badge variant="ink" dot>MIT</Badge>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--on-ink-muted)', margin: '16px 0 0', maxWidth: '46ch' }}>{oss.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
                {oss.tags.map((t) => (
                  <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--on-ink-muted)', border: '1px solid rgba(246,244,238,0.18)', borderRadius: 'var(--radius-xs)', padding: '4px 9px', whiteSpace: 'nowrap' }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Button variant="primary" as="a" href={oss.href} target="_blank" rel="noreferrer" iconRight="→">GitHub에서 보기</Button>
              </div>
            </div>
            <div style={{ padding: 'clamp(24px, 4vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28 }}>
              <div className="hoonjo-code" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7, color: 'var(--on-ink)', background: 'var(--ink-deep)', border: '1px solid rgba(246,244,238,0.12)', borderRadius: 'var(--radius-md)', padding: '16px 18px', overflowX: 'auto' }}>
                <div style={{ color: 'var(--on-ink-muted)' }}><span style={{ color: 'var(--blue-bright)' }}>$</span> {oss.install}</div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ color: '#c792ea' }}>import</span> {'{ ColumnPager }'} <span style={{ color: '#c792ea' }}>from</span> <span style={{ color: '#a5d6a7' }}>'column-pager'</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                {oss.stats.map(([k, v]) => <InkStat key={k} k={k} v={v} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Contact ------------------------------------------------------------ */
export function Contact() {
  return (
    <footer id="contact" style={{ background: 'var(--ink)', borderTop: '1px solid rgba(246,244,238,0.16)' }}>
      <div style={{ ...CONTAINER, padding: `${SECTION_Y} 24px 0` }}>
        <Eyebrow tone="onInk">CONTACT</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.035em', color: 'var(--on-ink)', margin: '22px 0 0', maxWidth: '18ch' }}>
          어려운 화면이 있다면,<br /><span style={{ fontWeight: 800 }}>구조부터 같이 봅니다.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.6, color: 'var(--on-ink-muted)', margin: '24px 0 0', maxWidth: '44ch' }}>
          성능, 복잡한 상태, 까다로운 렌더링 — 측정 가능한 결과가 필요한 일에 연락 주세요.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
          <Button variant="primary" as="a" href={`mailto:${profile.email}`} iconRight="→">{profile.email}</Button>
          <Button variant="ink" as="a" href={profile.github} target="_blank" rel="noreferrer" style={{ border: '1px solid rgba(246,244,238,0.28)', background: 'transparent', color: 'var(--on-ink)' }}>GitHub</Button>
        </div>

        <div style={{ height: 1, background: 'rgba(246,244,238,0.14)', margin: '72px 0 0' }} />
        <div className="hoonjo-footer-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, padding: '28px 0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span aria-hidden style={{ width: 8, height: 8, background: 'var(--blue-bright)', transform: 'rotate(45deg)', borderRadius: 1 }} />
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, color: 'var(--on-ink)' }}>{profile.name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--on-ink-muted)', marginLeft: 6 }}>· {profile.nameKo} · © 2026</span>
          </div>
          <div style={{ display: 'flex', gap: 22 }}>
            {([['GitHub', profile.github], ['Email', `mailto:${profile.email}`]] as [string, string][]).map(([l, h]) => (
              <a key={l} href={h} target={l === 'GitHub' ? '_blank' : undefined} rel="noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--on-ink-muted)', textDecoration: 'none', letterSpacing: '0.02em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--on-ink)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--on-ink-muted)')}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
