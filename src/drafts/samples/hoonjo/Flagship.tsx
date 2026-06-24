import { Button, Tag, Badge, Eyebrow, MetricTable } from './components';
import { PagedDoc } from './PagedDoc';
import { flagship as f } from './content';

/* The column-pager case study — the centerpiece. Tells the real story:
   problem → five attempts → the insight → generational evolution → results.
   Distilled from Hoonjo's own write-up. */
export function Flagship() {
  return (
    <article id={f.id} style={{ marginTop: 24, scrollMarginTop: 84, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-soft)', overflow: 'hidden' }}>
      {/* header band */}
      <div style={{ padding: 'clamp(24px, 4vw, 40px)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <Eyebrow tone="blue">{f.eyebrow}</Eyebrow>
          <Badge variant="outline">{f.company}</Badge>
          <Badge variant="positive" dot>{f.badge}</Badge>
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.12, color: 'var(--text)', margin: '16px 0 0', textWrap: 'balance' }}>{f.title}</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.65, color: 'var(--text-secondary)', margin: '14px 0 0', maxWidth: '62ch' }}>{f.oneLiner}</p>
      </div>

      {/* problem + the visual it produces */}
      <div className="hoonjo-fl-top" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: 'clamp(24px, 4vw, 40px)', borderRight: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>Problem</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, maxWidth: '46ch' }}>{f.problem}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
            {['긴 지문 분할', '화면 ↔ PDF 일치', '대용량 렌더', '반응형'].map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
        <div style={{ padding: 'clamp(24px, 4vw, 40px)', background: 'var(--cloud)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <PagedDoc />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-muted)', marginTop: 14, textAlign: 'center' }}>
            긴 카드가 열·페이지를 넘어 이어진다 — 이 사이트도 같은 패키지로 렌더됩니다.
          </p>
        </div>
      </div>

      {/* five attempts */}
      <div style={{ padding: 'clamp(24px, 4vw, 40px)', borderTop: '1px solid var(--line)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>다섯 번의 시도</div>
        <div style={{ marginTop: 6 }}>
          {f.attempts.map((a) => (
            <div key={a.n} className="hoonjo-attempt" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, padding: '16px 0', borderTop: '1px solid var(--line)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: a.win ? 'var(--blue)' : 'var(--text-faint)', paddingTop: 2 }}>{a.n}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, fontWeight: 600, color: 'var(--text)' }}>{a.head}</span>
                  {a.win && <Badge variant="positive" dot>해결</Badge>}
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '6px 0 0', maxWidth: '64ch' }}>{a.miss}</p>
              </div>
            </div>
          ))}
        </div>

        {/* insight callout */}
        <div style={{ marginTop: 26, padding: '20px 22px', background: 'var(--blue-soft)', border: '1px solid var(--blue-line)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue-deep)' }}>핵심 — 실패를 버리지 않고 합치다</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.65, color: 'var(--text)', margin: '10px 0 0', maxWidth: '70ch' }}>{f.insight}</p>
        </div>
      </div>

      {/* generations + results */}
      <div className="hoonjo-fl-bottom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: 'clamp(24px, 4vw, 40px)', borderRight: '1px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>세 세대에 걸쳐</div>
          <div style={{ marginTop: 6 }}>
            {f.generations.map(([v, where, desc]) => (
              <div key={v} style={{ display: 'grid', gridTemplateColumns: '46px 1fr', gap: 14, padding: '14px 0', borderTop: '1px solid var(--line)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--blue)', paddingTop: 2 }}>{v}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>{where}</div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '4px 0 0' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.6, color: 'var(--text-muted)', margin: '18px 0 0', paddingTop: 16, borderTop: '1px solid var(--line)' }}>{f.honesty}</p>
        </div>
        <div style={{ padding: 'clamp(24px, 4vw, 40px)', background: 'var(--cloud)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>Result · 측정된 결과</div>
          <MetricTable columns={1} stats={f.results} />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '16px 0 0' }}>{f.resultNote}</p>
          <div style={{ marginTop: 24 }}>
            <Button variant="outline" as="a" href={f.link.href} target="_blank" rel="noreferrer" iconRight="→">{f.link.label}</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
