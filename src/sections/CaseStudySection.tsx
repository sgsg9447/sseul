import { useEffect, useState } from 'react';
import { ChevronDown, ImageIcon, X } from 'lucide-react';
import { SectionIntro } from '../components/common/SectionIntro';
import asisMain from '../assets/asis-main.png';
import asisMobile from '../assets/asis-mobile.png';
import asisHistory from '../assets/asis-history.png';
import asisSupport from '../assets/asis-support.png';
import asisSchedule from '../assets/asis-schedule.png';
import asisInquiry from '../assets/asis-inquiry.png';
import asisIaDiagram from '../assets/asis-ia-notion.png';
import tobeIaDiagram from '../assets/tobe-ia-notion.png';
import {
  csAdminFlow,
  csAsIsShots,
  csFunding,
  csSymptoms,
  csGoals,
  csMeta,
  csPrinciples,
  csRootCauses,
  csScope,
  csScreens,
  csSummary,
  csTrustSignals,
  csUserFlow,
  csUsers,
} from '../data/woodworking';

const asisImages: Record<string, string> = {
  main: asisMain,
  mobile: asisMobile,
  history: asisHistory,
  support: asisSupport,
  schedule: asisSchedule,
  inquiry: asisInquiry,
};

type FigureProps = {
  badge: string;
  title: string;
  note: string;
  ratio?: 'wide' | 'tall' | 'square';
};

// 사진/문서 캡처를 붙일 자리. 첨부 전에는 무엇을 넣을지 안내가 보인다.
function FigurePlaceholder({ badge, title, note, ratio = 'wide' }: FigureProps) {
  return (
    <figure className={`cs-figure cs-figure-${ratio}`}>
      <span className="cs-figure-badge">
        <ImageIcon size={14} />
        {badge}
      </span>
      <div className="cs-figure-body">
        <strong>{title}</strong>
        <p>{note}</p>
      </div>
    </figure>
  );
}

function ChapterHead({ no, label, title }: { no: string; label: string; title: string }) {
  return (
    <header className="cs-chapter-head">
      <span className="cs-chapter-no">{no}</span>
      <div>
        <span className="cs-chapter-label">{label}</span>
        <h3>{title}</h3>
      </div>
    </header>
  );
}

export function CaseStudySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + csAsIsShots.length) % csAsIsShots.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % csAsIsShots.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex]);

  const activeShot = lightboxIndex === null ? null : csAsIsShots[lightboxIndex];

  return (
    <section className="section case-study" id="case-study">
      <div className="section-inner">
        <SectionIntro
          count="01"
          label="MAIN PROJECT · 목공 직업훈련기관 리뉴얼"
          title={
            <>
              이미지·게시판으로 흩어진 직업훈련기관 사이트를,
              <br />
              데이터와 동선으로 다시 설계했습니다.
            </>
          }
          body="운영자를 인터뷰하고 예비 수강생 입장에서 직접 써보며 이탈 지점을 찾아, 문제 정의부터 구현까지 한 흐름으로 이었습니다."
        />

        {/* 메타 */}
        <dl className="cs-meta">
          {csMeta.map((item) => (
            <div key={item.label} className={item.href ? 'cs-meta-linked' : undefined}>
              <dt>{item.label}</dt>
              {item.href ? (
                <dd>
                  <a href={item.href} aria-label={`${item.label} 문서 보기`}>
                    {item.value}
                    <span className="cs-meta-hint" aria-hidden="true">→</span>
                  </a>
                </dd>
              ) : (
                <dd>{item.value}</dd>
              )}
            </div>
          ))}
        </dl>

        {/* 한 장 요약 */}
        <div className="cs-summary">
          {csSummary.map((item) => (
            <article className="cs-summary-card" key={item.tag}>
              <span className="cs-summary-tag">{item.tag}</span>
              <h4>{item.title}</h4>
              <ul className="cs-summary-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* ── 01 문제 정의 ── */}
        <div className="cs-chapter">
          <ChapterHead no="01" label="PROBLEM" title="정보는 있지만, 제 역할을 못 하던 사이트였습니다" />
          <p className="cs-prose cs-prose-lead">
            메인→과정→국비지원→일정→신청까지 직접 사용하며 <strong>이탈 지점 14개</strong>를 기록,{' '}
            <strong>4개 근본 원인</strong>으로 수렴했습니다.
          </p>

          <div className="cs-asis">
            <span className="cs-figure-badge">
              <ImageIcon size={14} />
              AS-IS 캡처 — 기존 사이트 화면 (Before)
            </span>
            <div className="cs-asis-grid">
              {csAsIsShots.map((shot, i) => (
                <button
                  type="button"
                  className="cs-asis-thumb"
                  key={shot.key}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`${shot.label} 화면 크게 보기`}
                >
                  <img src={asisImages[shot.key]} alt={`기존 사이트 ${shot.label} 화면`} loading="lazy" />
                  <span className="cs-asis-label">{shot.label}</span>
                </button>
              ))}
            </div>
          </div>

          <details className="cs-symptoms">
            <summary>
              <span>직접 사용하며 기록한 이탈 지점 14개</span>
              <span className="cs-symptoms-toggle">
                전체 보기
                <ChevronDown size={16} />
              </span>
            </summary>
            <div className="cs-table-wrap">
              <table className="cs-table cs-table-symptoms">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>영역</th>
                    <th>발견한 문제</th>
                    <th>불편한 사람</th>
                    <th>근본원인</th>
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
                        <span className="cs-cause-chips">
                          {s.cause.split('·').map((c) => (
                            <span className={`cs-cause-chip cause-${c}`} key={c}>
                              {c}
                            </span>
                          ))}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <p className="cs-cause-intro">14개 증상은 4개의 근본 원인으로 수렴합니다.</p>
          <div className="cs-cause-grid">
            {csRootCauses.map((cause) => (
              <article className="cs-cause-card" key={cause.code}>
                <span className={`cs-cause-code cause-${cause.code}`}>{cause.code}</span>
                <h4>{cause.title}</h4>
                <p>{cause.body}</p>
                <small>{cause.symptoms}</small>
              </article>
            ))}
          </div>

          <div className="cs-keyproblem">
            <span className="cs-keyproblem-label">핵심 문제</span>
            <p className="cs-keyproblem-want">
              예비 수강생은 <b>수강 가능 여부 · 개강 시기 · 비용 · 신청 방법</b>을 한 흐름으로 확인하고 싶다.
            </p>
            <div className="cs-keyproblem-causes">
              <span>
                <span className="cs-cause-chip cause-A">A</span>흩어진 정보
              </span>
              <span className="cs-keyproblem-sep">—</span>
              <span>
                <span className="cs-cause-chip cause-B">B</span>동선·피드백 부재
              </span>
              <span className="cs-keyproblem-sep">—</span>
              <span>
                <span className="cs-cause-chip cause-C">C</span>부적합한 게시판
              </span>
              <span className="cs-keyproblem-sep">—</span>
              <span>
                <span className="cs-cause-chip cause-D">D</span>잘못된 우선순위
              </span>
            </div>
            <p className="cs-keyproblem-result">
              사용자는 <strong>판단·실행에서 이탈</strong>, 운영자는 <strong>반복 수작업</strong>.
            </p>
          </div>
        </div>

        {/* ── 02 사용자 정의 ── */}
        <div className="cs-chapter">
          <ChapterHead no="02" label="USERS" title="성격이 정반대인 두 사용자를 정의했습니다" />
          <div className="cs-user-grid">
            {csUsers.map((user) => (
              <article className="cs-user-card" key={user.kind}>
                <span className="cs-user-kind">{user.kind}</span>
                <strong className="cs-user-who">{user.who}</strong>
                <p className="cs-user-need">{user.need}</p>
                <p className="cs-user-need-sub">{user.needNote}</p>
                <p className="cs-user-pain">{user.pain}</p>
                {user.painQuote ? <p className="cs-user-pain-quote">{user.painQuote}</p> : null}
              </article>
            ))}
          </div>

          <div className="cs-keyjudge">
            <span className="cs-chapter-label">핵심 설계 과제 — 취업률 없이 확신을 만든다</span>
            <ul className="cs-summary-points cs-keyjudge-points">
              <li>1순위 니즈는 "취업 가능성"이지만, 기관은 취업률 미집계</li>
              <li>취업을 "보장"하지 않고, 스스로 "할 수 있겠다" 판단할 근거를 제공</li>
              <li>없는 수치를 만들지 않고, 보유 자산으로 확신을 구성</li>
            </ul>
            <div className="cs-table-wrap">
              <table className="cs-table cs-table-trust">
                <thead>
                  <tr>
                    <th>신뢰 신호 (보유)</th>
                    <th>답하는 질문</th>
                    <th>현재 → 방향</th>
                  </tr>
                </thead>
                <tbody>
                  {csTrustSignals.map((row) => (
                    <tr key={row.signal}>
                      <td>{row.signal}</td>
                      <td>{row.question}</td>
                      <td>{row.move}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── 03 목표 & 설계 원칙 ── */}
        <div className="cs-chapter">
          <ChapterHead no="03" label="GOALS & PRINCIPLES" title="근본 원인을 그대로 뒤집어 원칙으로 삼았습니다" />
          <div className="cs-goal-grid">
            {csGoals.map((goal) => (
              <article className="cs-goal-card" key={goal.no}>
                <span className="cs-goal-no">목표 {goal.no}</span>
                <h4>{goal.title}</h4>
                <p>{goal.body}</p>
              </article>
            ))}
          </div>
          <div className="cs-principle-grid">
            {csPrinciples.map((p) => (
              <article className="cs-principle-card" key={p.meta}>
                <span className="cs-principle-meta">{p.meta}</span>
                <h4>{p.title}</h4>
                <p>{p.detail}</p>
                <small>
                  원인
                  <span className={`cs-cause-chip cause-${p.causes[0]}`}>{p.causes[0]}</span>
                  <span className={`cs-cause-chip cause-${p.causes[1]}`}>{p.causes[1]}</span>
                  를 뒤집음
                </small>
              </article>
            ))}
          </div>
        </div>

        {/* ── 04 정보구조 (IA) ── */}
        <div className="cs-chapter">
          <ChapterHead no="04" label="INFORMATION ARCHITECTURE" title="과정을 데이터로 만들고, 지원 유형을 속성으로 넣었습니다" />
          <p className="cs-prose cs-ia-prose">
            과정을 이미지가 아니라 <strong>데이터</strong>로 만들고,{' '}
            <br className="br-mobile" />
            각 과정에 <strong>"지원 유형"(경기도 무료·국비·자부담)</strong>을 데이터로 담았습니다.{' '}
            <br className="br-web" />
            수강생은 <strong>과정명만 보고 신청</strong>하면,{' '}
            <br className="br-mobile" />
            화면 뒤에서 지원 유형에 따라{' '}
            <br className="br-mobile" />
            신청 절차가 자동으로 갈라집니다.
          </p>

          <div className="cs-ia-diagrams">
            <figure className="cs-ia-fig">
              <span className="cs-ia-label">AS-IS</span>
              <img src={asisIaDiagram} alt="AS-IS 정보구조도 — 평면·이미지·게시판 의존" loading="lazy" />
            </figure>
            <figure className="cs-ia-fig">
              <span className="cs-ia-label cs-ia-label-tobe">TO-BE</span>
              <img src={tobeIaDiagram} alt="TO-BE 정보구조도 — 데이터 기반 재구조화" loading="lazy" />
            </figure>
          </div>

          <div className="cs-table-wrap">
            <table className="cs-table cs-table-funding">
              <thead>
                <tr>
                  <th>과정 (예시)</th>
                  <th>지원 유형</th>
                  <th>분기</th>
                  <th>웹 이후 절차</th>
                </tr>
              </thead>
              <tbody>
                {csFunding.map((row) => (
                  <tr key={row.course}>
                    <td>{row.course}</td>
                    <td>{row.type}</td>
                    <td>
                      <span className={`cs-branch cs-branch-${row.branch}`}>{row.branch}</span>
                    </td>
                    <td>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 05 유저플로우 ── */}
        <div className="cs-chapter">
          <ChapterHead no="05" label="USER FLOW" title="확신이 형성되는 지점 직후에 신청을 배치했습니다" />
          <div className="cs-flow-cols">
            <div className="cs-flow-block">
              <span className="cs-chapter-label">예비 수강생 — 탐색 → 판단 → 신청</span>
              <ol className="cs-flow-steps">
                {csUserFlow.map((s) => (
                  <li key={s.step} className={[s.trust && 'is-trust', s.cta && 'is-cta'].filter(Boolean).join(' ') || undefined}>
                    <span className="cs-flow-step">{s.step}</span>
                    {s.note ? <span className="cs-flow-note">{s.note}</span> : null}
                    {s.sub ? <span className="cs-flow-sub">*{s.sub}</span> : null}
                  </li>
                ))}
              </ol>
            </div>
            <div className="cs-flow-block">
              <span className="cs-chapter-label">운영자 — 접수 → 상태관리</span>
              <ol className="cs-flow-steps cs-flow-admin">
                {csAdminFlow.map((step) => (
                  <li key={step}>
                    <span className="cs-flow-step">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="cs-flow-impact">
                접수부터 상태관리까지 한 흐름으로
                <span className="cs-flow-sub">*목표②(사이트=업무 도구)가 플로우로 증명</span>
              </p>
            </div>
          </div>

          <FigurePlaceholder
            badge="유저플로우 다이어그램"
            title="전환 흐름 & 운영자 워크플로우"
            note="예비 수강생 전환 흐름(신뢰 접점 🔵 표기)과 신청 유형별 분기(A·B·C), 운영자 워크플로우 다이어그램 캡처"
          />
        </div>

        {/* ── 06 화면설계 ── */}
        <div className="cs-chapter">
          <ChapterHead no="06" label="SCREEN DESIGN" title="화면을 정의한 사람이 구현 가능성을 알고 정의했습니다" />
          <p className="cs-prose">
            모바일 우선 반응형으로, 40~50대 가독성을 위한 큰 글씨·명확한 터치 영역을 기준으로 했습니다. 모든 주요 영역에
            기본 / 로딩(스켈레톤) / 빈(Empty) / 에러 상태를 정의하고, 에러 상태에서도 전화 CTA를 유지해 전환 경로가 끊기지
            않게 했습니다.
          </p>
          <div className="cs-screen-grid">
            {csScreens.map((screen) => (
              <article className="cs-screen-card" key={screen.id}>
                <span className="cs-screen-id">{screen.id}</span>
                <strong>{screen.name}</strong>
                <p>{screen.note}</p>
                <div className="cs-screen-shot">
                  <ImageIcon size={16} />
                  <span>화면 캡처 영역</span>
                </div>
              </article>
            ))}
          </div>
          <p className="cs-callout cs-callout-muted">
            화면 캡처 영역에는 완성된 TO-BE 디자인 시안(또는 화면설계서 캡처)을 화면별로 붙여 주세요. 가장 임팩트가 큰
            HOME·과정 상세·수강신청(유형 분기) 화면을 우선 권장합니다.
          </p>
        </div>

        {/* ── 07 범위 의사결정 ── */}
        <div className="cs-chapter">
          <ChapterHead no="07" label="SCOPE" title="무엇을, 왜 만들지 않았는가" />
          <p className="cs-prose">
            모든 범위 결정은 사용자·목표 정의에서 도출됐고, 집계되지 않는 수치나 외부 시스템의 결과를 과장하지 않는 선에서
            그어졌습니다. "없어서 안 넣은 것"이 아니라 <strong>의심하고 걷어낸 것</strong>입니다.
          </p>
          <div className="cs-scope-list">
            {csScope.map((row) => (
              <div className="cs-scope-row" key={row.decision}>
                <div className="cs-scope-decision">
                  <strong>{row.decision}</strong>
                  <span className="cs-scope-choice">{row.choice}</span>
                </div>
                <p>{row.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeShot ? (
        <div
          className="cs-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeShot.label} 화면`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
        >
          <div className="cs-lightbox-panel">
            <div className="cs-lightbox-top">
              <div>
                <span className="cs-asis-label">{activeShot.label}</span>
                <p>{activeShot.note}</p>
              </div>
              <button type="button" onClick={() => setLightboxIndex(null)} aria-label="닫기">
                <X size={18} />
              </button>
            </div>
            <div className="cs-lightbox-image">
              <img src={asisImages[activeShot.key]} alt={`기존 사이트 ${activeShot.label} 화면`} />
            </div>
            <div className="cs-lightbox-nav">
              <button type="button" onClick={showPrev}>← 이전</button>
              <span>
                {(lightboxIndex ?? 0) + 1} / {csAsIsShots.length}
              </span>
              <button type="button" onClick={showNext}>다음 →</button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
