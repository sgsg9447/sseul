import { Fragment, type ReactNode } from 'react';
import { FauxQR } from './shared';

/* Shared building blocks for the .xs-* themed sample sites. Each site supplies
   its own copy and a signature module; these handle the repeated chrome. */

export function SiteNav({
  logo,
  brand,
  sub,
  links,
  ctaHref = '#contact',
  ctaLabel,
}: {
  logo?: ReactNode;
  brand: string;
  sub?: string;
  links?: { label: string; href: string }[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <nav className="xs-nav">
      <div className="xs-nav-inner">
        <a className="xs-brand" href="#top">
          {logo ? <span className="xs-logo">{logo}</span> : null}
          <span>
            {brand}
            {sub ? <small> {sub}</small> : null}
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {links && links.length > 0 ? (
            <div className="xs-nav-links">
              {links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
          {ctaLabel ? (
            <a className="xs-nav-cta" href={ctaHref}>
              {ctaLabel}
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export function Sec({
  id,
  variant,
  eyebrow,
  title,
  lede,
  children,
}: {
  id?: string;
  variant?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={`xs-sec${variant ? ' ' + variant : ''}`} id={id}>
      <div className="xs-sec-inner">
        {eyebrow || title || lede ? (
          <div className="xs-sec-head">
            {eyebrow ? <p className="xs-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="xs-h2">{title}</h2> : null}
            {lede ? <p className="xs-sec-lede">{lede}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CTA({
  title,
  body,
  btnHref = '#contact',
  btnLabel,
  variant,
}: {
  title: ReactNode;
  body: ReactNode;
  btnHref?: string;
  btnLabel: string;
  variant?: string;
}) {
  return (
    <section className={`xs-cta${variant ? ' ' + variant : ''}`} id="contact">
      <div className="xs-cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <a className="xs-btn is-onacc" href={btnHref}>
          {btnLabel}
        </a>
      </div>
    </section>
  );
}

export function SiteFoot({ brand, right }: { brand: string; right: ReactNode }) {
  return (
    <footer className="xs-foot">
      <div className="xs-foot-inner">
        <b>{brand}</b>
        <span>{right}</span>
      </div>
    </footer>
  );
}

export function PdfBar({ title, siteHref }: { title: string; siteHref: string }) {
  return (
    <div className="ex-pdfbar">
      <span className="ex-pdfbar-title">{title}</span>
      <a href={siteHref}>← 사이트로</a>
      <button className="print" type="button" onClick={() => window.print()}>
        PDF로 저장 / 인쇄
      </button>
    </div>
  );
}

export interface PdfBlock {
  h4: string;
  items?: { nm: ReactNode; ds?: string; val?: string }[];
  text?: ReactNode;
}

export function PdfSheet({
  theme,
  kicker,
  name,
  tagline,
  blocks,
  qrSeed,
  qrNote,
  contact,
  footLeft,
  footRight,
}: {
  theme: string;
  kicker: ReactNode;
  name: ReactNode;
  tagline: ReactNode;
  blocks: PdfBlock[];
  qrSeed: number;
  qrNote: ReactNode;
  contact: { dt: ReactNode; dd: ReactNode }[];
  footLeft: ReactNode;
  footRight: ReactNode;
}) {
  return (
    <div className="ex-sheet-wrap">
      <article className={`ex-sheet ${theme}`}>
        <div className="ex-sheet-band" />
        <div className="ex-sheet-pad">
          <div className="ex-sheet-top">
            <div>
              <p className="ex-sheet-kicker">{kicker}</p>
              <h1 className="ex-sheet-name">{name}</h1>
              <p className="ex-sheet-tagline">{tagline}</p>
            </div>
          </div>

          <div className="ex-sheet-divider" />

          <div className="ex-sheet-grid">
            <div>
              {blocks.map((b, i) => (
                <div className="ex-sheet-block" key={i}>
                  <h4>{b.h4}</h4>
                  {b.items ? (
                    <div className="ex-sheet-list">
                      {b.items.map((it, j) => (
                        <div className="ex-sheet-li" key={j}>
                          <span>
                            <span className="nm">{it.nm}</span>
                            {it.ds ? (
                              <>
                                <br />
                                <span className="ds">{it.ds}</span>
                              </>
                            ) : null}
                          </span>
                          {it.val ? <span className="nm">{it.val}</span> : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="ds" style={{ fontSize: 13.5, lineHeight: 1.7 }}>
                      {b.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <aside className="ex-sheet-aside">
              <div className="ex-qr-card">
                <span className="ex-qr-frame">
                  <FauxQR seed={qrSeed} />
                </span>
                <p>{qrNote}</p>
              </div>
              <div className="ex-contact-card">
                <dl>
                  {contact.map((c, i) => (
                    <Fragment key={i}>
                      <dt>{c.dt}</dt>
                      <dd>{c.dd}</dd>
                    </Fragment>
                  ))}
                </dl>
              </div>
            </aside>
          </div>

          <div className="ex-sheet-foot">
            <span>{footLeft}</span>
            <span>{footRight}</span>
          </div>
        </div>
      </article>
    </div>
  );
}
