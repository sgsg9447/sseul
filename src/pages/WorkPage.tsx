import { ArrowRight, ArrowUpRight, Check, Mail } from 'lucide-react';
import { WorkHeader } from '../components/layout/WorkHeader';
import { BeforeAfter } from '../sections/work/BeforeAfter';
import screenHome from '../assets/screen-home.png';
import profile from '../assets/profile.jpg';
import {
  CASE_STUDY_HREF,
  CONTACT_EMAIL,
  DELIVERABLES_HREF,
  LIVE_SITE_URL,
  MAIL_HREF,
  PHONE,
  TEL_HREF,
  caseIntro,
  casePoints,
  caseStats,
  caseStatsNote,
  deliverColumns,
  deliverIntro,
  feedbackIntro,
  feedbackRows,
  feedbackTypes,
  notionBoard,
  processIntro,
  processSteps,
  scopeIntro,
  scopeItems,
  startSteps,
  workContact,
  workHero,
} from '../data/freelance';

function WorkHero() {
  return (
    <section className="work-hero" id="top">
      <div className="work-hero-copy">
        <p className="eyebrow">
          <span />
          {workHero.eyebrow}
        </p>
        <h1>
          {workHero.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="work-hero-lede">
          {workHero.ledeLines[0]}
          <br />
          {workHero.ledeLines[1]}
        </p>
        <p className="work-hero-proof">{workHero.proof}</p>
        <div className="work-hero-actions">
          <a className="btn btn-primary" href={MAIL_HREF}>
            이메일로 문의하기
            <Mail size={17} />
          </a>
          <a className="btn btn-secondary" href="#before-after">
            작업 사례 보기
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <aside className="work-hero-card" aria-label="작업 소개 요약">
        <div className="work-hero-card-top">
          <img className="work-hero-avatar" src={profile} alt="김슬기 프로필 사진" />
          <div className="work-hero-id">
            <strong>{workHero.profileName}</strong>
            <span>{workHero.card.topline}</span>
          </div>
        </div>
        <strong className="work-hero-card-title">{workHero.card.title}</strong>
        <dl className="work-hero-card-grid">
          {workHero.card.rows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <a className="work-hero-live" href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
          최근 작업 · 라이브 사이트 보기
          <ArrowUpRight size={15} />
        </a>
      </aside>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="work-section work-process" id="process">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {processIntro.eyebrow}
          </p>
          <h2>{processIntro.title}</h2>
          <p className="work-intro-body">{processIntro.body}</p>
        </div>

        <ol className="work-steps">
          {processSteps.map((step) => (
            <li className="work-step" key={step.no}>
              <span className="work-step-no">{step.no}</span>
              <strong>{step.name}</strong>
              <span className="work-step-sub">{step.sub}</span>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="work-board-wrap">
          <span className="work-board-cap">작업 내내 공유되는 진행 보드 — 지금 어느 단계인지 한눈에</span>
          <div className="work-board">
            {notionBoard.map((col) => (
              <div className={`work-board-col is-${col.tone}`} key={col.name}>
                <div className="work-board-head">
                  <span>{col.name}</span>
                  <span className="work-board-count">{col.items.length}</span>
                </div>
                <div className="work-board-cards">
                  {col.items.length ? (
                    col.items.map((item) => (
                      <span className="work-board-card" key={item}>
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="work-board-empty">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedbackSection() {
  return (
    <section className="work-section work-feedback" id="feedback">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {feedbackIntro.eyebrow}
          </p>
          <h2>{feedbackIntro.title}</h2>
          <p className="work-intro-body">
            {feedbackIntro.bodyLines[0]}{' '}
            <br className="br-mobile" />
            {feedbackIntro.bodyLines[1]}
          </p>
        </div>

        <div className="work-fb">
          <div className="work-fb-doc">
            <div className="work-fb-doc-top">
              <span className="work-fb-doc-tag">디자인 검수 피드백 요청서</span>
              <span className="work-fb-doc-hint">화면별로 의견을 남기면 됩니다</span>
            </div>
            <div className="work-fb-table-wrap">
              <table className="work-fb-table">
                <thead>
                  <tr>
                    <th>화면</th>
                    <th>요소</th>
                    <th>요청사항</th>
                    <th>유형</th>
                    <th>우선순위</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbackRows.map((row) => (
                    <tr key={`${row.screen}-${row.element}`}>
                      <td data-label="화면">
                        <span className="work-fb-screen">{row.screen}</span>
                      </td>
                      <td data-label="요소">{row.element}</td>
                      <td data-label="요청사항">{row.request}</td>
                      <td data-label="유형">
                        <span className={`work-fb-type type-${row.type}`}>{row.type}</span>
                      </td>
                      <td data-label="우선순위">
                        <span className={`work-fb-prio prio-${row.priority}`}>{row.priority}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ul className="work-fb-legend">
            <li>
              <span className="work-fb-legend-label">유형</span>
              <span className="work-fb-legend-items">
                {feedbackTypes.map((t) => (
                  <span className={`work-fb-type type-${t}`} key={t}>
                    {t}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <span className="work-fb-legend-label">우선순위</span>
              <span className="work-fb-legend-items">
                {['상', '중', '하'].map((p) => (
                  <span className={`work-fb-prio prio-${p}`} key={p}>
                    {p}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  return (
    <section className="work-section work-deliver" id="deliverables">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {deliverIntro.eyebrow}
          </p>
          <h2>{deliverIntro.title}</h2>
          <p className="work-intro-body">
            {deliverIntro.bodyLines[0]}{' '}
            <br className="br-mobile" />
            {deliverIntro.bodyLines[1]}
          </p>
        </div>

        <div className="work-deliver-grid">
          {deliverColumns.map((col) => (
            <article className="work-deliver-card" key={col.label}>
              <div className="work-deliver-card-head">
                <span className="work-deliver-tag">{col.tag}</span>
                <strong>{col.label}</strong>
              </div>
              <ul className="work-deliver-items">
                {col.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              {col.href ? (
                <a className="work-deliver-link" href={col.href}>
                  {col.linkLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseSection() {
  return (
    <section className="work-section work-case" id="case">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {caseIntro.eyebrow}
          </p>
          <h2>{caseIntro.title}</h2>
          <p className="work-intro-body">
            {caseIntro.bodyLines[0]}{' '}
            <br className="br-mobile" />
            {caseIntro.bodyLines[1]}
          </p>
        </div>

        <div className="work-case-stats">
          {caseStats.map((stat) => (
            <div className="work-case-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="work-case-note">{caseStatsNote}</p>

        <div className="work-case-body">
          <div className="work-case-visual">
            <img src={screenHome} alt="목공 직업훈련기관 리뉴얼 메인 화면" loading="lazy" />
          </div>
          <div className="work-case-points">
            {casePoints.map((point) => (
              <article className="work-case-point" key={point.tag}>
                <span className="work-case-tag">{point.tag}</span>
                <strong>{point.title}</strong>
                <p>{point.desc}</p>
              </article>
            ))}
            <div className="work-case-links">
              <a className="btn btn-secondary" href={CASE_STUDY_HREF}>
                케이스 자세히 보기
                <ArrowRight size={16} />
              </a>
              <a className="work-deliver-link" href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
                라이브 사이트 ↗
              </a>
              <a className="work-deliver-link" href={DELIVERABLES_HREF}>
                산출물 보기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScopeSection() {
  return (
    <section className="work-section work-scope" id="scope">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {scopeIntro.eyebrow}
          </p>
          <h2>{scopeIntro.title}</h2>
          <p className="work-intro-body">{scopeIntro.body}</p>
        </div>

        <div className="work-scope-grid">
          {scopeItems.map((item) => (
            <article className={`work-scope-card${item.tag === '메인' ? ' is-main' : ''}`} key={item.title}>
              <span className="work-scope-tag">
                {item.tag !== '메인' ? <Check size={12} aria-hidden="true" /> : null}
                {item.tag}
              </span>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="work-contact" id="contact">
      <div className="work-contact-inner">
        <div className="work-contact-copy">
          <p className="eyebrow inverse">
            <span />
            {workContact.eyebrow}
          </p>
          <h2>
            {workContact.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="work-contact-body">
            {workContact.bodyLines[0]}
            <br />
            {workContact.bodyLines[1]}
          </p>
          <div className="work-start">
            <span className="work-start-label">이렇게 시작해요</span>
            <ol className="work-start-steps">
              {startSteps.map((step, i) => (
                <li key={step}>
                  <span className="work-start-no">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <p className="work-rush">
            <strong>{workContact.rush.lead}</strong> {workContact.rush.body}
          </p>
          <div className="work-contact-actions">
            <a className="btn btn-primary" href={MAIL_HREF}>
              이메일로 문의하기
              <Mail size={17} />
            </a>
            <a className="btn btn-inverse" href={CASE_STUDY_HREF}>
              대표 사례 보기
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
        <aside className="work-contact-card" aria-label="연락 정보">
          {workContact.card.map((row) => (
            <div key={row.label}>
              <span>{row.label}</span>
              <strong>{row.value}</strong>
            </div>
          ))}
          <div>
            <span>Email</span>
            <a href={MAIL_HREF}>{CONTACT_EMAIL}</a>
          </div>
          <div>
            <span>전화</span>
            <a href={TEL_HREF}>{PHONE}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function WorkPage() {
  return (
    <div className="work-page">
      <WorkHeader />
      <main>
        <WorkHero />
        <BeforeAfter />
        <ProcessSection />
        <FeedbackSection />
        <DeliverablesSection />
        <CaseSection />
        <ScopeSection />
        <ContactSection />
      </main>
    </div>
  );
}
