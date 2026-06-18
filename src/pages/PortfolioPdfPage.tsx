import { useCallback, type ReactNode } from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { ResumeSheet } from '../components/resume/ResumeSheet';
import { PortfolioProject } from '../components/portfolio-pdf/PortfolioProject';
import { projects, skills, workExperiences } from '../data/portfolio';
import {
  csAdminFlow,
  csAsIsShots,
  csFunding,
  csGoals,
  csIntro,
  csMeta,
  csOutcome,
  csPrinciples,
  csRootCauses,
  csScope,
  csScreens,
  csSummary,
  csSymptoms,
  csTrustSignals,
  csUserFlow,
  csUsers,
} from '../data/woodworking';
import profile from '../assets/profile.jpg';
import asisMain from '../assets/asis-main.png';
import asisMobile from '../assets/asis-mobile.png';
import asisHistory from '../assets/asis-history.png';
import asisSupport from '../assets/asis-support.png';
import asisSchedule from '../assets/asis-schedule.png';
import asisInquiry from '../assets/asis-inquiry.png';
import asisIaDiagram from '../assets/asis-ia-notion.png';
import tobeIaDiagram from '../assets/tobe-ia-notion.png';
import studentFlowDiagram from '../assets/student-user-flow-notion.png';
import adminFlowDiagram from '../assets/admin-user-flow-notion.png';
import screenHome from '../assets/screen-home.png';
import screenCourses from '../assets/screen-courses.png';
import screenApply from '../assets/screen-apply.png';
import screenSupport from '../assets/screen-support.png';
import screenInquiry from '../assets/screen-inquiry.png';
import screenGallery from '../assets/screen-gallery.png';
import screenError from '../assets/screen-error.png';
import screenMHome from '../assets/screen-m-home.png';

const TOTAL_PAGES = 8;
const contactEmail = 'sgsg9447@gmail.com';
const contactPhone = '010-7705-9447';
const portfolioSite = 'sseul.me';
const portfolioSiteHref = 'https://sseul.me/';

const asisImages: Record<string, string> = {
  main: asisMain,
  mobile: asisMobile,
  history: asisHistory,
  support: asisSupport,
  schedule: asisSchedule,
  inquiry: asisInquiry,
};

const screenImages: Record<string, string> = {
  home: screenHome,
  courses: screenCourses,
  apply: screenApply,
  support: screenSupport,
  inquiry: screenInquiry,
  gallery: screenGallery,
  error: screenError,
};

// 다른 프로젝트(목공은 본문 케이스 스터디로 다루므로 제외) — 순번 재부여
const otherProjects = projects.map((project, index) => ({
  ...project,
  step: String(index + 1).padStart(2, '0'),
}));

function PdfChapter({ no, label, title }: { no: string; label: string; title: ReactNode }) {
  return (
    <header className="pf-cs-chap-head">
      <span className="pf-cs-chap-no">{no}</span>
      <div>
        <span className="pf-cs-chap-label">{label}</span>
        <h3 className="pf-cs-chap-title">{title}</h3>
      </div>
    </header>
  );
}

export function PortfolioPdfPage() {
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
    <div className="resume-page portfolio-pdf-page">
      <header className="resume-toolbar">
        <a className="resume-back" href="/">
          <ArrowLeft size={16} />
          포트폴리오로
        </a>
        <p className="resume-toolbar-title">Portfolio</p>
        <button type="button" className="resume-print-all" onClick={() => handlePrint()}>
          <Printer size={16} />
          전체 PDF로 저장
        </button>
      </header>

      <main className="resume-doc">
        {/* ── Page 1 · Cover ─────────────────────────────────── */}
        <ResumeSheet id="pf-1" pageNumber={1} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <div className="pf-cover">
              <div className="pf-cover-meta">
                <p className="pf-eyebrow">
                  <span />
                  SSEUL · SERVICE PLANNING PORTFOLIO
                </p>
                <a className="pf-site-link" href={portfolioSiteHref}>
                  {portfolioSite}
                </a>
              </div>
              <h1 className="pf-cover-title">
                그냥 지나칠 수 있는 불편에서
                <br />
                서비스의 시작점을 찾습니다.
              </h1>
              <p className="pf-cover-lede">
                불편을 구조로 바꾸고, 그 구조가 화면에서 실제로 동작하게 만듭니다.
              </p>

              <div className="pf-cover-card">
                <div className="pf-avatar">
                  <img src={profile} alt="김슬기 프로필 사진" />
                </div>
                <dl className="pf-id">
                  <div>
                    <dt>Name</dt>
                    <dd>김슬기 · Kim Seul Gi</dd>
                  </div>
                  <div>
                    <dt>Role</dt>
                    <dd>구현을 아는 서비스기획자</dd>
                  </div>
                  <div>
                    <dt>Focus</dt>
                    <dd>Problem → Structure → Build</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>{contactEmail}</dd>
                  </div>
                  <div>
                    <dt>Website</dt>
                    <dd>
                      <a href={portfolioSiteHref}>{portfolioSite}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>{contactPhone}</dd>
                  </div>
                </dl>
              </div>

            </div>

            <section className="pf-section">
              <div className="pf-section-head">
                <h2 className="pf-section-title">Experience</h2>
              </div>
              <div className="pf-grid2">
                {workExperiences.map((work) => (
                  <div className="pf-exp" key={work.area}>
                    <span className="pf-exp-tag">{work.area}</span>
                    <h3>{work.title}</h3>
                    {work.detail.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            <section className="pf-contact">
              <h2>시작은 작은 질문에서, 끝은 달라진 경험에서.</h2>
              <p className="pf-contact-lines">
                흩어진 요구사항을 기능과 흐름으로 구조화하고, <br className="br-mobile" />그 흐름이 실제로 동작하는 화면이 되게 만듭니다.
              </p>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 2 · Main Project: 개요 + 문제 ──────────────── */}
        <ResumeSheet id="pf-2" pageNumber={2} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <div className="pf-section-head">
                <h2 className="pf-section-title">
                  <span className="pf-num">01</span> Main Project
                </h2>
                <p className="pf-section-lede">{csIntro.titleLines.join(' ')}</p>
              </div>

              <dl className="pf-cs-meta">
                {csMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="pf-cs-summary">
                {csSummary.map((item) => (
                  <article className="pf-cs-sum-card" key={item.tag}>
                    <span className="pf-cs-sum-tag">{item.tag}</span>
                    <h4>{item.title}</h4>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="pf-section">
              <PdfChapter no="01" label="PROBLEM" title="정보는 있지만, 제 역할을 못 하던 사이트" />
              <p className="pf-cs-lead">
                예비 수강생 입장에서 직접 써보며, 어디서 왜 막히는지 화면 단위로 기록했습니다.
              </p>
              <div className="pf-cs-shots">
                {csAsIsShots.map((shot) => (
                  <figure key={shot.key}>
                    <img src={asisImages[shot.key]} alt={`기존 사이트 ${shot.label} 화면`} />
                    <figcaption>
                      <strong>{shot.label}</strong>
                      <span>{shot.note}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 3 · 이탈 지점 20개 (PROBLEM 상세) ──────────── */}
        <ResumeSheet id="pf-symptoms" pageNumber={3} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <PdfChapter no="01" label="PROBLEM · DETAIL" title="직접 사용하며 기록한 이탈 지점 20개" />
              <p className="pf-cs-lead">
                메인→과정→국비지원→일정→신청까지 직접 써보며 기록한 20개 증상 — 4개 근본 원인(<b>A·B·C·D</b>)으로
                수렴합니다.
              </p>
              <table className="pf-cs-table pf-cs-table-symptoms">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>영역</th>
                    <th>발견한 문제</th>
                    <th>대상</th>
                    <th>원인</th>
                  </tr>
                </thead>
                <tbody>
                  {csSymptoms.map((s) => (
                    <tr key={s.no}>
                      <td>{s.no}</td>
                      <td>{s.area}</td>
                      <td>{s.problem}</td>
                      <td>{s.who}</td>
                      <td>
                        {s.cause.split('·').map((c) => (
                          <span className={`pf-cs-cause-chip cause-${c}`} key={c}>
                            {c}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="pf-cs-cause-intro">20개 증상은 4개 근본 원인으로 수렴합니다.</p>
              <div className="pf-cs-causes">
                {csRootCauses.map((cause) => (
                  <article className="pf-cs-cause" key={cause.code}>
                    <span className={`pf-cs-cause-code cause-${cause.code}`}>{cause.code}</span>
                    <div>
                      <h4>{cause.title}</h4>
                      <p>
                        {cause.body.includes(' → ') ? (
                          <>
                            {cause.body.split(' → ')[0]}
                            <br />→ {cause.body.split(' → ')[1]}
                          </>
                        ) : (
                          cause.body
                        )}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 4 · 사용자 + 목표·원칙 ────────────────────── */}
        <ResumeSheet id="pf-3" pageNumber={4} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <PdfChapter no="02" label="USERS" title="성격이 정반대인 두 사용자를 정의했습니다" />
              <div className="pf-cs-users">
                {csUsers.map((user) => (
                  <article className="pf-cs-user" key={user.kind}>
                    <span className="pf-cs-user-kind">{user.kind}</span>
                    <strong>{user.who}</strong>
                    <p className="pf-cs-user-need">{user.need}</p>
                    <p className="pf-cs-user-pain">{user.pain}</p>
                  </article>
                ))}
              </div>
              <div className="pf-cs-trust">
                <span className="pf-cs-mini-label">취업률 없이 확신을 만든다 — 보유 자산으로 신뢰 구성</span>
                <table className="pf-cs-table">
                  <thead>
                    <tr>
                      <th>신뢰 신호 (보유)</th>
                      <th>답하는 질문</th>
                    </tr>
                  </thead>
                  <tbody>
                    {csTrustSignals.map((row) => (
                      <tr key={row.signal}>
                        <td>{row.signal}</td>
                        <td>{row.question}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="pf-section">
              <PdfChapter no="03" label="GOALS & PRINCIPLES" title="근본 원인을 그대로 뒤집어 원칙으로 삼았습니다" />
              <div className="pf-cs-goals">
                {csGoals.map((goal) => (
                  <article className="pf-cs-goal" key={goal.no}>
                    <span className="pf-cs-goal-no">목표 {goal.no}</span>
                    <h4>{goal.title}</h4>
                    <p>{goal.body}</p>
                  </article>
                ))}
              </div>
              <div className="pf-cs-principles">
                {csPrinciples.map((principle) => (
                  <article className="pf-cs-principle" key={principle.meta}>
                    <span className="pf-cs-principle-meta">{principle.meta}</span>
                    <h4>{principle.title}</h4>
                    <p>{principle.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 5 · 정보구조(IA) + 유저플로우 ─────────────── */}
        <ResumeSheet id="pf-4" pageNumber={5} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <PdfChapter
                no="04"
                label="INFORMATION ARCHITECTURE"
                title="과정을 데이터로 만들고, 지원 유형을 속성으로 넣었습니다"
              />
              <p className="pf-cs-lead">
                과정을 이미지가 아니라 <b>데이터</b>로 만들고, 각 과정에{' '}
                <b>지원 유형(경기도 무료·국비·자부담)</b>을 담아
                <br />
                수강생은 과정명만 보고 신청하면 화면 뒤에서 절차가 자동으로 갈라집니다.
              </p>
              <div className="pf-cs-figs">
                <figure>
                  <span className="pf-cs-fig-label">AS-IS</span>
                  <img src={asisIaDiagram} alt="AS-IS 정보구조도" />
                </figure>
                <figure>
                  <span className="pf-cs-fig-label pf-cs-fig-tobe">TO-BE</span>
                  <img src={tobeIaDiagram} alt="TO-BE 정보구조도" />
                </figure>
              </div>
              <table className="pf-cs-table">
                <thead>
                  <tr>
                    <th>과정 (예시)</th>
                    <th>지원 유형</th>
                    <th>웹 이후 절차</th>
                  </tr>
                </thead>
                <tbody>
                  {csFunding.map((row) => (
                    <tr key={row.course}>
                      <td>{row.course}</td>
                      <td>{row.type}</td>
                      <td>{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="pf-section">
              <PdfChapter no="05" label="USER FLOW" title="확신이 형성되는 지점 직후에 신청을 배치했습니다" />
              <div className="pf-cs-flow-text">
                <div>
                  <span className="pf-cs-mini-label">예비 수강생 — 탐색 → 판단 → 신청</span>
                  <p>{csUserFlow.map((step) => step.step.replace(/\s*\(.+?\)/g, '')).join(' → ')}</p>
                </div>
                <div>
                  <span className="pf-cs-mini-label">운영자 — 접수 → 상태관리</span>
                  <p>{csAdminFlow.join(' → ')}</p>
                </div>
              </div>
              <div className="pf-cs-figs">
                <figure>
                  <span className="pf-cs-fig-label">예비 수강생 전환 흐름</span>
                  <img src={studentFlowDiagram} alt="예비 수강생 전환 흐름 다이어그램" />
                </figure>
                <figure>
                  <span className="pf-cs-fig-label pf-cs-fig-tobe">운영자 워크플로우</span>
                  <img src={adminFlowDiagram} alt="운영자 워크플로우 다이어그램" />
                </figure>
              </div>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 6 · 화면설계 + 범위 + 기대효과 ────────────── */}
        <ResumeSheet id="pf-5" pageNumber={6} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <PdfChapter no="06" label="SCREEN DESIGN" title="구현 가능성을 알고 정의한 화면" />
              <div className="pf-cs-screens">
                {csScreens.map((screen) => (
                  <figure key={screen.id}>
                    <img src={screenImages[screen.key]} alt={`${screen.name} 화면`} />
                    <figcaption>
                      <strong>{screen.name}</strong>
                      <span>{screen.note}</span>
                    </figcaption>
                  </figure>
                ))}
                <figure key="mobile">
                  <img src={screenMHome} alt="모바일 반응형 화면" />
                  <figcaption>
                    <strong>모바일</strong>
                    <span>같은 화면들의 모바일 반응형</span>
                  </figcaption>
                </figure>
              </div>
            </section>

            <section className="pf-section">
              <PdfChapter no="07" label="SCOPE" title="무엇을, 왜 만들지 않았는가" />
              <div className="pf-cs-scope">
                {csScope.map((row) => (
                  <div className="pf-cs-scope-row" key={row.decision}>
                    <div>
                      <strong>{row.decision}</strong>
                      <span className="pf-cs-scope-choice">{row.choice}</span>
                    </div>
                    <p>{row.reason}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="pf-section">
              <PdfChapter no="08" label="EXPECTED IMPACT" title="아직 오픈 전 — 설계로 의도한 변화" />
              <span className="pf-cs-status">{csOutcome.status}</span>
              <div className="pf-cs-outcome">
                {csOutcome.intended.map((row) => (
                  <article key={row.who}>
                    <span className="pf-cs-outcome-who">{row.who}</span>
                    <p>{row.change}</p>
                  </article>
                ))}
              </div>
              <p className="pf-cs-measure">
                <span className="pf-cs-mini-label">출시 후 측정 예정</span>
                {csOutcome.measure.map((m) => m.metric).join(' · ')}
              </p>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 7 · 다른 프로젝트 (GenA · Orzo) ───────────── */}
        <ResumeSheet id="pf-6" pageNumber={7} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <div className="pf-section-head">
                <h2 className="pf-section-title">
                  <span className="pf-num">02</span> Other Projects
                </h2>
                <p className="pf-section-lede">
                  편집은 다시 가능하게, 반복은 자동화하고, 흩어진 정보는 한곳에 모았습니다.
                </p>
              </div>
              <div className="pf-projects">
                {otherProjects.slice(0, 2).map((project) => (
                  <PortfolioProject project={project} key={project.name} />
                ))}
              </div>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 8 · 다른 프로젝트 (Waitroom) + Capabilities ── */}
        <ResumeSheet id="pf-7" pageNumber={8} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <div className="pf-projects">
                {otherProjects.slice(2).map((project) => (
                  <PortfolioProject project={project} key={project.name} />
                ))}
              </div>
            </section>

            <section className="pf-section">
              <div className="pf-section-head">
                <h2 className="pf-section-title">
                  <span className="pf-num">03</span> Capabilities
                </h2>
                <p className="pf-section-lede">요구사항을 구조로 정리하고, 실제로 동작하는 화면으로 만듭니다.</p>
              </div>
              <div className="pf-grid2">
                {skills.map((skill, index) => (
                  <div className="pf-cap" key={skill.area}>
                    <span className="pf-cap-index">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{skill.area}</h3>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </ResumeSheet>

      </main>
    </div>
  );
}
