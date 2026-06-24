import type { CSSProperties, ReactNode } from 'react';

/* A small recreation of what column-pager produces: an A4 page with header /
   footer chrome, a two-column body split by a hairline rule, numbered content
   cards, and a long card that overflows into the next column — the exact case
   the engine exists to solve. Themed with the .hoonjo tokens. Self-contained. */

const P = '#8a8f99'; // muted body line color (paragraph text)

function Para({ lines = 3 }: { lines?: number }) {
  const text = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  ];
  return (
    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 8.5, lineHeight: 1.7, color: P, margin: '0 0 7px' }}>
      {text[lines % 3]}
    </p>
  );
}

function Card({ n, title, children, style }: { n: string; title: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <div style={{ background: 'var(--cloud)', borderRadius: 6, padding: '11px 12px', ...style }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--blue)' }}>{n}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, color: 'var(--blue)', margin: '5px 0 7px', letterSpacing: '-0.01em' }}>{title}</div>
      {children}
    </div>
  );
}

export function PagedDoc() {
  return (
    <div className="hoonjo-doc" style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)', padding: '16px 18px', overflow: 'hidden' }}>
      {/* page header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 9, borderBottom: '1px solid var(--line)' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>Sample Document</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'var(--text-faint)' }}>Page 1</span>
      </div>

      {/* two-column body, split by a hairline rule */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 14, padding: '12px 0' }}>
        <div>
          <Card n="01" title="Lorem ipsum dolor" style={{ marginBottom: 10 }}>
            <Para lines={0} /><Para lines={1} />
          </Card>
          <Card n="09" title="Excepteur sint occaecat">
            <Para lines={0} /><Para lines={1} /><Para lines={2} />
          </Card>
        </div>
        <div style={{ background: 'var(--line)' }} aria-hidden />
        {/* long card overflowing into this column */}
        <div style={{ background: 'var(--cloud)', borderRadius: 6, padding: '11px 12px' }}>
          <Para lines={0} /><Para lines={1} /><Para lines={2} /><Para lines={0} /><Para lines={1} /><Para lines={2} />
        </div>
      </div>

      {/* page footer */}
      <div style={{ paddingTop: 9, borderTop: '1px solid var(--line)', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>— 1 —</span>
      </div>
    </div>
  );
}
