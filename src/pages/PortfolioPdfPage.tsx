import { useCallback } from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { ResumeSheet } from '../components/resume/ResumeSheet';
import { PortfolioProject } from '../components/portfolio-pdf/PortfolioProject';
import { flagshipProject, mainProjectSummaries, projects, skills, workExperiences } from '../data/portfolio';
import profile from '../assets/profile.jpg';

const TOTAL_PAGES = 4;
const contactEmail = 'sgsg9447@gmail.com';
const portfolioSite = 'sseul.me';
const portfolioSiteHref = 'https://sseul.me/';

// 대표 프로젝트(목공)를 선두로, 나머지 프로젝트를 이어 붙이고 순번을 다시 매긴다.
const pdfProjects = [flagshipProject, ...projects].map((project, index) => ({
  ...project,
  step: String(index + 1).padStart(2, '0'),
}));

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
        {/* ── Page 1 · Cover + Starting Points + Capabilities ── */}
        <ResumeSheet id="pf-1" pageNumber={1} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <div className="pf-cover">
              <div className="pf-cover-meta">
                <p className="pf-eyebrow">
                  <span />
                  SSEUL · FRONTEND &amp; PRODUCT PORTFOLIO
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
                복잡한 요구를 구조로 정리하고, 사용자 경험과 운영 효율을 함께 고려해 실제 동작하는 화면으로 만듭니다.
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
                    <dd>서비스기획자 | PM | PO</dd>
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
                </dl>
              </div>
            </div>

            <section className="pf-section">
              <div className="pf-section-head">
                <h2 className="pf-section-title">
                  <span className="pf-num">01</span> Main Project
                </h2>
                <p className="pf-section-lede">{flagshipProject.role}</p>
              </div>
              <div className="pf-problems">
                {mainProjectSummaries.map((problem) => (
                  <div className="pf-problem" key={problem.title}>
                    <span className="pf-problem-tag">{problem.project}</span>
                    <h3>{problem.title}</h3>
                    <p>{problem.body}</p>
                  </div>
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

        {/* ── Page 2 · Selected Projects (01 목공 · 02 GenA) ──── */}
        <ResumeSheet id="pf-2" pageNumber={2} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <div className="pf-section-head">
                <h2 className="pf-section-title">
                  <span className="pf-num">02</span> Selected Projects
                </h2>
                <p className="pf-section-lede">
                  흩어진 사이트는 데이터와 동선으로, 편집은 다시 가능하게, 반복은 자동화하고, 흩어진 정보는 한곳에 모았습니다.
                </p>
              </div>
              <div className="pf-projects">
                {pdfProjects.slice(0, 2).map((project) => (
                  <PortfolioProject project={project} key={project.name} />
                ))}
              </div>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 3 · Projects 03 · 04 ──────────────────────── */}
        <ResumeSheet id="pf-3" pageNumber={3} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <div className="pf-projects">
                {pdfProjects.slice(2).map((project) => (
                  <PortfolioProject project={project} key={project.name} />
                ))}
              </div>
            </section>
          </div>
        </ResumeSheet>

        {/* ── Page 4 · Experience + Contact ──────────────────── */}
        <ResumeSheet id="pf-4" pageNumber={4} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />
          <div className="pf-main">
            <section className="pf-section">
              <div className="pf-section-head">
                <h2 className="pf-section-title">
                  <span className="pf-num">04</span> Experience
                </h2>
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
              <h2>
                복잡한 요구를 구조로 정리하고,
                <br />
                실제로 동작하는 화면으로
                <br />
                만드는 일을 하고 싶습니다.
              </h2>
              <p className="pf-contact-lines">
                프론트엔드 구현 경험을 바탕으로,
                <br />
                복잡한 요구를 구조로 정리하고 화면으로 만들어 왔습니다.
              </p>
              <p className="pf-contact-email">
                Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            </section>
          </div>
        </ResumeSheet>
      </main>
    </div>
  );
}
