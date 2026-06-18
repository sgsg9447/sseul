import { useCallback } from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { ResumeSheet } from '../components/resume/ResumeSheet';
import { ResumeDetailSheet } from '../components/resume/ResumeDetailSheet';
import { resumeDetailPages } from '../data/resumeDetail';
import profile from '../assets/profile.jpg';

const TOTAL_PAGES = 1 + resumeDetailPages.length;

export function ResumePage() {
  // Native print-to-PDF. Isolates a single sheet when an id is passed so each
  // A4 page can be exported on its own; otherwise prints the whole document.
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
    <div className="resume-page resume-view-page">
      <header className="resume-toolbar">
        <a className="resume-back" href="/">
          <ArrowLeft size={16} />
          포트폴리오로
        </a>
        <p className="resume-toolbar-title">Resume</p>
        <button type="button" className="resume-print-all" onClick={() => handlePrint()}>
          <Printer size={16} />
          전체 PDF로 저장
        </button>
      </header>

      <main className="resume-doc">
        <ResumeSheet id="resume-sheet-1" pageNumber={1} totalPages={TOTAL_PAGES} onPrint={handlePrint}>
          <div className="resume-topbar" />

          <div className="resume-main">
            {/* ── Identity header ─────────────────────────────── */}
            <header className="resume-header">
              <div className="resume-avatar">
                <img src={profile} alt="김슬기 프로필 사진" />
              </div>

              <div className="resume-id">
                <h1 className="resume-name">김슬기</h1>
                <p className="resume-title">서비스기획 / 프로덕트 기획</p>
                <p className="resume-intro">
                  프론트엔드 개발 경험을 바탕으로,
                  <br />
                  구현 가능성까지 고려해 제품을 설계하는 기획자입니다.
                </p>
                <p className="resume-keywords">
                  제품 구조 설계 · 데이터 기반 의사결정 · 이해관계자 조율 · 프로세스 자동화
                </p>
                <p className="resume-highlight">React·TypeScript 직접 구현 경험</p>
              </div>

              <ul className="resume-contact">
                <li>
                  <span>Email.</span>
                  <a href="mailto:sgsg9447@gmail.com">sgsg9447@gmail.com</a>
                </li>
                <li>
                  <span>GitHub.</span>
                  <a href="https://github.com/sgsg9447" target="_blank" rel="noreferrer">
                    github.com/sgsg9447
                  </a>
                </li>
                <li>
                  <span>Portfolio.</span>
                  <a href="https://sseul.me/" target="_blank" rel="noreferrer">
                    sseul.me
                  </a>
                </li>
                <li>
                  <span>SNS.</span>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </header>

            {/* ── Work Experience ─────────────────────────────── */}
            <section className="resume-section">
              <h2 className="resume-section-title">Work Experience</h2>

              {/* GenON — full width */}
              <article className="resume-job">
                <h3 className="resume-job-head">
                  <strong>GenON</strong>
                  <span className="resume-job-sep">/</span>
                  Frontend Engineer<span className="resume-job-focus"> · 제품 구조 설계</span>
                </h3>
                <p className="resume-period">2025.05 - 재직중</p>
                <ul className="resume-list">
                  <li className="is-lead">
                    AI 슬라이드 편집 서비스 구조 설계 — B2C 서비스 출시
                    <ul>
                      <li>
                        분절되던 생성–편집–저장 경험을 하나의 흐름으로 설계하고, 기획서에 없던 예외 동작 기준을 선제적으로 정의
                      </li>
                    </ul>
                  </li>
                  <li className="is-lead">
                    B2C·B2B 공용 모듈형 구조 설계
                    <ul>
                      <li>
                        편집 시스템을 특정 사업 형태에 종속되지 않는 모듈형으로 설계해, B2C뿐 아니라 B2B 환경에서도 동일 자산을 재활용할 수 있도록 구조화
                      </li>
                    </ul>
                  </li>
                  <li className="is-lead">
                    디자인 에셋 운영 자동화
                    <ul>
                      <li>수동 관리 병목을 분석해 코드 기반 자산화 체계로 전환, 팀 확장 비용 절감</li>
                    </ul>
                  </li>
                </ul>
              </article>

              {/* 슬링 + 당근 — two columns */}
              <div className="resume-two-col">
                <article className="resume-job">
                  <h3 className="resume-job-head">
                    <strong>슬링</strong>
                    <span className="resume-job-sep">/</span>
                    Frontend Engineer<span className="resume-job-focus"> · 운영 기획</span>
                  </h3>
                  <p className="resume-period">2023.11 - 2025.01</p>
                  <ul className="resume-list">
                    <li className="is-lead">
                      콘텐츠 운영 백오피스 기획·구조화
                      <ul>
                        <li>매월 반복되던 제작·편집·배포 병목을 분석해 통합 운영 도구로 기획</li>
                        <li>문제 데이터를 대/중/소단원 트리로 모델링, 에디션 운영 기준 수립</li>
                      </ul>
                    </li>
                    <li className="is-lead">
                      대량 콘텐츠 자동화 운영 설계
                      <ul>
                        <li>
                          앱 릴리즈 의존도를 낮춘 파이프라인 기획 → 시험 시즌 <strong>약 10만건</strong> 적시 공급, 월 구독자 증가 기여
                        </li>
                      </ul>
                    </li>
                  </ul>
                </article>

                <article className="resume-job">
                  <h3 className="resume-job-head">
                    <strong>당근</strong>
                    <span className="resume-job-sep">/</span>
                    FE Intern<span className="resume-job-focus"> · 구현·검증</span>
                  </h3>
                  <p className="resume-period">2023.06 - 2023.08 (체험형 인턴십)</p>
                  <ul className="resume-list">
                    <li className="is-lead">
                      연관검색어 기능 구현·데이터 검증 참여
                      <ul>
                        <li>연관검색어 UI·5개 시안을 직접 구현, A/B 데이터 로깅·QA에 참여</li>
                        <li>
                          결과: <strong>검색 유저당 검색 전환율</strong> 상승 기여
                        </li>
                      </ul>
                    </li>
                    <li className="is-lead">
                      검색 사용성 병목 분석·성능 개선
                      <ul>
                        <li>
                          탭 전환 버벅임 원인 분석 → 렌더링 개선 (<strong>13 → 8 Frame</strong>)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </article>
              </div>

              {/* KOSSA — full width */}
              <article className="resume-job">
                <h3 className="resume-job-head">
                  <strong>KOSSA</strong>
                  <span className="resume-job-sep">/</span>
                  Product Manager
                </h3>
                <p className="resume-period">2020.09 - 2021.10</p>
                <ul className="resume-list">
                  <li className="is-lead">
                    국방부 SW·AI 교육 기획 및 해커톤 운영 총괄
                    <ul>
                      <li>정부 요구사항 분석 → 교육 과정의 목적·커리큘럼·운영 방식 설계</li>
                      <li>대규모 해커톤 총괄: 참가자 모집·평가 기준 수립·멘토링 매칭 등 운영 프로세스 조율</li>
                    </ul>
                  </li>
                  <li className="is-lead">
                    공공기관·참여자·내부 실무진의 서로 다른 요구를 실행 가능한 운영 계획으로 조율하고 커뮤니케이션 리드
                  </li>
                </ul>
              </article>
            </section>

            {/* ── OpenSource + Education ───────────────────────── */}
            <div className="resume-two-col resume-bottom">
              <section className="resume-section">
                <h2 className="resume-section-title">OpenSource</h2>
                <article className="resume-job">
                  <h3 className="resume-job-head">
                    <strong>리액트 공식문서 한국어 번역</strong>
                  </h3>
                  <p className="resume-period">2023.04</p>
                  <ul className="resume-list">
                    <li>'Passing Props to a Component'</li>
                  </ul>
                </article>
              </section>

              <section className="resume-section">
                <h2 className="resume-section-title">Education</h2>
                <article className="resume-job">
                  <h3 className="resume-job-head">
                    <strong>상명대학교 경영공학과 졸업</strong>
                  </h3>
                  <p className="resume-period">2014.03 - 2019.02</p>
                </article>
              </section>
            </div>
          </div>
        </ResumeSheet>

        {/* ── Detail pages (one A4 per company) ───────────────────── */}
        {resumeDetailPages.map((page, index) => (
          <ResumeSheet
            key={page.id}
            id={page.id}
            pageNumber={index + 2}
            totalPages={TOTAL_PAGES}
            onPrint={handlePrint}
          >
            <ResumeDetailSheet page={page} />
          </ResumeSheet>
        ))}
      </main>
    </div>
  );
}
