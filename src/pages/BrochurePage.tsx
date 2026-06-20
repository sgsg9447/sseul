import { useCallback, useEffect } from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { ResumeSheet } from '../components/resume/ResumeSheet';
import profile from '../assets/profile.jpg';
import asisMain from '../assets/asis-main.png';
import screenHome from '../assets/screen-home.png';
import {
  CONTACT_EMAIL,
  MAIL_HREF,
  PHONE,
  SITE,
  SITE_HREF,
  TEL_HREF,
  WORK_HREF,
  baRows,
  beforeAfterIntro,
  cta,
  deliverIntro,
  deliverables,
  footNote,
  hero,
  insight,
  me,
  ops,
  packageIntro,
  packages,
  problemIntro,
  problems,
  processIntro,
  steps,
  terms,
} from '../data/brochure';

const TOTAL_PAGES = 3;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="pf-eyebrow">
      <span />
      {children}
    </p>
  );
}

export function BrochurePage() {
  // PDF로 저장하면 document.title 이 기본 파일명이 된다 — 콜드메일 첨부용으로 의미 있는 이름을 준다.
  useEffect(() => {
    const prev = document.title;
    document.title = '웹사이트 리뉴얼 브로셔 — 김슬기(sseul)';
    return () => {
      document.title = prev;
    };
  }, []);

  const handlePrint = useCallback((sheetId?: string) => {
    const target = sheetId ? document.getElementById(sheetId) : null;

    if (target) {
      document.body.classList.add('is-printing-single');
      target.classList.add('is-print-target');
    }

    const cleanup = () => {
      document.body.classList.remove('is-printing-single');
      target?.classList.remove('is-print-target');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    window.print();
  }, []);

  return (
    <div className="resume-page brochure-page">
      <header className="resume-toolbar">
        <a className="resume-back" href={WORK_HREF}>
          <ArrowLeft size={16} />
          작업 소개로
        </a>
        <p className="resume-toolbar-title">Brochure</p>
        <button type="button" className="resume-print-all" onClick={() => handlePrint()}>
          <Printer size={16} />
          전체 PDF로 저장
        </button>
      </header>

      <main className="resume-doc">
        {/* ── Page 1 · 표지 + 문제 ──────────────────────────────── */}
        <ResumeSheet id="bro-1" pageNumber={1} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="bro-main">
            <header className="bro-cover">
              <div className="bro-cover-meta">
                <Eyebrow>{hero.eyebrow}</Eyebrow>
                <a className="bro-site" href={SITE_HREF}>
                  {SITE}
                </a>
              </div>
              <h1 className="bro-title">
                {hero.title.line1}
                <br />
                <span className="bro-hl">{hero.title.hl}</span>
                {hero.title.rest}
              </h1>
              <p className="bro-lede">{hero.lede}</p>
              <div className="bro-chips">
                {hero.chips.map((chip) => (
                  <span className="bro-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>

              <aside className="bro-mecard">
                <div className="bro-avatar">
                  <img src={profile} alt="김슬기 프로필 사진" />
                </div>
                <div className="bro-me">
                  <div className="bro-me-top">
                    <b>{me.name}</b>
                    <span>{me.role}</span>
                  </div>
                  <p className="bro-me-tagline">{me.tagline}</p>
                  <dl className="bro-me-rows">
                    {me.rows.map((row) => (
                      <div key={row.label}>
                        <dt>{row.label}</dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>
            </header>

            <section className="bro-section">
              <Eyebrow>{problemIntro.eyebrow}</Eyebrow>
              <h2 className="bro-h2">{problemIntro.title}</h2>
              <div className="bro-pgrid">
                {problems.map((problem) => (
                  <article className="bro-pcard" key={problem.title}>
                    <b>{problem.title}</b>
                    <p>{problem.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <aside className="bro-insight">
              <p>{insight.lead}</p>
              <p className="bro-insight-emph">{insight.emph}</p>
            </aside>
          </div>
        </ResumeSheet>

        {/* ── Page 2 · Before/After + 패키지 ────────────────────── */}
        <ResumeSheet id="bro-2" pageNumber={2} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="bro-main">
            <section className="bro-section">
              <Eyebrow>{beforeAfterIntro.eyebrow}</Eyebrow>
              <h2 className="bro-h2">{beforeAfterIntro.title}</h2>
              <div className="bro-ba">
                <figure className="bro-shot before">
                  <span className="bro-shot-tag">Before</span>
                  <img src={asisMain} alt="기존 사이트 메인 화면" />
                </figure>
                <div className="bro-arrow" aria-hidden="true">
                  →
                </div>
                <figure className="bro-shot after">
                  <span className="bro-shot-tag">After</span>
                  <img src={screenHome} alt="리뉴얼한 사이트 메인 화면" />
                </figure>
              </div>
              <p className="bro-ba-cap">{beforeAfterIntro.caption}</p>
              <table className="bro-table">
                <thead>
                  <tr>
                    <th>항목</th>
                    <th>기존</th>
                    <th>변경 후</th>
                  </tr>
                </thead>
                <tbody>
                  {baRows.map((row) => (
                    <tr key={row.k}>
                      <td className="k">{row.k}</td>
                      <td className="before">{row.before}</td>
                      <td className="after">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="bro-section">
              <Eyebrow>{packageIntro.eyebrow}</Eyebrow>
              <h2 className="bro-h2">{packageIntro.title}</h2>
              <div className="bro-promo">
                <span className="bro-fire" aria-hidden="true">
                  🔥
                </span>
                <span>{packageIntro.promo}</span>
              </div>
              <div className="bro-tiers">
                {packages.map((pkg) => (
                  <article className={`bro-tier${pkg.featured ? ' feat' : ''}`} key={pkg.name}>
                    {pkg.ribbon ? <span className="bro-ribbon">{pkg.ribbon}</span> : null}
                    <h3 className="bro-tier-name">{pkg.name}</h3>
                    <p className="bro-tier-desc">{pkg.desc}</p>
                    <div className="bro-price">
                      <span className="was">{pkg.was}</span>
                      <span className="now">{pkg.now}</span>
                      <span className="unit">{pkg.unit}</span>
                    </div>
                    <p className="bro-tier-term">{pkg.term}</p>
                    <ul className="bro-feats">
                      {pkg.feats.map((feat) => (
                        <li key={feat}>{feat}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 3 · 진행 + 받는 것/운영 + 시작 ───────────────── */}
        <ResumeSheet id="bro-3" pageNumber={3} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="bro-main">
            <section className="bro-section">
              <Eyebrow>{processIntro.eyebrow}</Eyebrow>
              <h2 className="bro-h2">{processIntro.title}</h2>
              <div className="bro-steps">
                {steps.map((step) => (
                  <div className="bro-step" key={step.no}>
                    <span className="bro-step-no">{step.no}</span>
                    <b>{step.name}</b>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bro-section">
              <Eyebrow>{deliverIntro.eyebrow}</Eyebrow>
              <h2 className="bro-h2">{deliverIntro.title}</h2>
              <div className="bro-two">
                <div className="bro-panel">
                  <h3 className="bro-panel-h">받는 것 · 산출물</h3>
                  <ul className="bro-deliv">
                    {deliverables.map((item) => (
                      <li key={item.text}>
                        {item.text}
                        {item.note ? <span className="bro-deliv-note">{item.note}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bro-panel">
                  <h3 className="bro-panel-h">운영 · 월 정액</h3>
                  <div className="bro-ops">
                    {ops.map((plan) => (
                      <div className="bro-op" key={plan.name}>
                        <div className="bro-op-l">
                          <b>
                            {plan.name}
                            {plan.pick ? <span className="bro-op-pick">추천</span> : null}
                          </b>
                          <p>{plan.desc}</p>
                        </div>
                        <div className="bro-op-pr">
                          {plan.price}
                          <small>만/월</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bro-terms">
                <ul>
                  {terms.map((term) => (
                    <li key={term}>{term}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="bro-cta">
              <div className="bro-cta-copy">
                <h2 className="bro-cta-title">
                  작은 질문부터
                  <br />
                  <span className="bro-cta-hl">편하게 시작</span>하세요
                </h2>
                <p>{cta.body}</p>
              </div>
              <div className="bro-contact">
                <a href={MAIL_HREF}>
                  <span className="bro-ic" aria-hidden="true">
                    @
                  </span>
                  <b>{CONTACT_EMAIL}</b>
                  <span className="bro-contact-tag">이메일</span>
                </a>
                <a href={TEL_HREF}>
                  <span className="bro-ic" aria-hidden="true">
                    ☎
                  </span>
                  <b>{PHONE}</b>
                  <span className="bro-contact-tag">전화</span>
                </a>
                <a href={SITE_HREF}>
                  <span className="bro-ic" aria-hidden="true">
                    ↗
                  </span>
                  <b>{SITE}</b>
                  <span className="bro-contact-tag">포트폴리오</span>
                </a>
              </div>
            </section>

            <p className="bro-foot">{footNote}</p>
          </div>
        </ResumeSheet>
      </main>
    </div>
  );
}
