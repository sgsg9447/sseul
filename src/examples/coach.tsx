import { ArrowRight, Calendar, Instagram } from 'lucide-react';
import { DemoBar, FauxQR, usePageTitle } from './shared';
import './examples.css';

const pains = [
  '머릿속은 정리됐는데, 입 밖으론 잘 안 나온다',
  '발표만 하면 목소리가 떨리고 자꾸 빨라진다',
  '면접에서 준비한 답이 결정적인 순간에 막힌다',
  '보고가 늘 장황해진다는 말을 자주 듣는다',
];

const programs = [
  {
    name: '1:1 스피치 클리닉',
    forWho: '발표·면접이 코앞인 분께',
    price: '70,000원',
    unit: '회 (50분)',
    pop: true,
    feats: ['녹화 영상으로 객관적 피드백', '호흡·시선·속도 즉석 교정', '다음 자리를 위한 맞춤 과제'],
  },
  {
    name: '4주 자신감 코칭',
    forWho: '말하기 습관 자체를 바꾸고 싶은 분께',
    price: '260,000원',
    unit: '주 1회 × 4주',
    pop: false,
    feats: ['주차별 실전 미션', '매주 녹화 리뷰', '카톡으로 원고 첨삭'],
  },
  {
    name: '기업·팀 강의',
    forWho: '발표 문화를 바꾸려는 팀께',
    price: '별도 견적',
    unit: '2~3시간 워크숍',
    pop: false,
    feats: ['실습 중심 구성', '팀 상황 맞춤 사례', '현장 1:1 코칭 포함'],
  },
];

const reviews = [
  {
    text: '면접 3일 전 급하게 신청했는데, 늘 막히던 자기소개가 술술 나왔어요. 결국 최종 합격했습니다.',
    by: '취업 준비생 김O연',
  },
  {
    text: '팀 발표 때마다 도망치고 싶었는데, 지금은 제가 먼저 손을 들어요. 말이 정리되니 일도 편해졌습니다.',
    by: '6년차 직장인 이O준',
  },
  {
    text: '원고를 외우는 게 아니라 “말하는 법”을 배운 느낌이에요. 4주가 짧게 느껴졌습니다.',
    by: '대학원생 박O은',
  },
];

export function CoachSite() {
  usePageTitle('또박또박 스피치 — 정유진 코치');
  return (
    <div className="ex ex-coach">
      <DemoBar pdfHref="/example/2/pdf" label="1인 강사·코치 — 또박또박 스피치" />

      <nav className="exh-nav">
        <div className="exh-nav-inner">
          <a className="exh-brand" href="/example/2">
            <i>또박</i>또박 스피치
          </a>
          <a className="exh-nav-cta" href="#cta">
            무료 진단 신청
          </a>
        </div>
      </nav>

      <header className="exh-hero">
        <span className="exh-hero-tag">발표 · 면접 · 보고 — 말하기 전문 코칭</span>
        <h1>
          떨려서 망치던 발표,
          <br />
          <mark>준비된 자신감</mark>으로
          <br />
          바꿔 드립니다.
        </h1>
        <p className="exh-hero-lede">
          원고만 외우는 연습은 그만. 호흡·시선·문장 구조까지, 실전에서 통하는 방식으로
          1:1로 다듬습니다. 타고나는 게 아니라, 설계할 수 있습니다.
        </p>
        <div className="exh-hero-actions">
          <a className="exh-btn dark" href="#cta">
            무료 15분 진단 신청 <ArrowRight size={17} />
          </a>
          <a className="exh-btn ghost" href="#programs">
            프로그램 보기
          </a>
        </div>
        <div className="exh-stats">
          <div>
            <b>
              <i>1,200</i>회+
            </b>
            <span>누적 1:1 코칭</span>
          </div>
          <div>
            <b>
              <i>87</i>%
            </b>
            <span>재신청·추천율</span>
          </div>
          <div>
            <b>
              <i>4.9</i>/5
            </b>
            <span>평균 만족도</span>
          </div>
        </div>
      </header>

      <section className="exh-pain">
        <div className="exh-pain-inner">
          <p className="exh-eyebrow">Why</p>
          <h2>이런 적, 한 번쯤 있으셨죠?</h2>
          <div className="exh-pain-grid">
            {pains.map((p, i) => (
              <div className="exh-pain-item" key={p}>
                <span>0{i + 1}</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="exh-sec" id="programs">
        <p className="exh-eyebrow">Programs</p>
        <h2>지금 상황에 맞춰 고르세요</h2>
        <p className="exh-sub">
          코앞에 닥친 한 번의 자리부터, 말하기 습관을 통째로 바꾸는 4주까지. 모두 1:1로 진행합니다.
        </p>
        <div className="exh-prog">
          {programs.map((prog) => (
            <article className={`exh-prog-card${prog.pop ? ' is-pop' : ''}`} key={prog.name}>
              {prog.pop && <span className="exh-prog-badge">가장 많이 찾는</span>}
              <h3>{prog.name}</h3>
              <p className="exh-for">{prog.forWho}</p>
              <p className="exh-prog-price">
                {prog.price} <small>/ {prog.unit}</small>
              </p>
              <ul>
                {prog.feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className={`exh-btn ${prog.pop ? 'primary' : 'ghost'} exh-prog-cta`} href="#cta">
                신청·문의 <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="exh-proof">
        <div className="exh-proof-inner">
          <p className="exh-eyebrow">Reviews</p>
          <h2>같은 떨림을 먼저 넘은 분들</h2>
          <div className="exh-reviews">
            {reviews.map((r) => (
              <article className="exh-review" key={r.by}>
                <div className="exh-review-stars">★★★★★</div>
                <p>“{r.text}”</p>
                <p className="exh-review-by">
                  <b>{r.by}</b>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="exh-sec exh-about">
        <div className="exh-about-art" aria-hidden="true">
          <b>YJ</b>
        </div>
        <div className="exh-about-body">
          <p className="exh-eyebrow">Coach</p>
          <h2>정유진 스피치 코치</h2>
          <p>
            아나운서 준비생 시절, 저도 카메라 앞에서 얼어붙곤 했습니다. 그때 깨달았어요.
            잘 말하는 사람은 타고난 게 아니라, 방법을 설계해 둔 사람이라는 걸요.
            그 설계를 함께 만들어 드립니다.
          </p>
          <ul className="exh-creds">
            <li>
              <b>’10</b> 방송 아카데미 스피치 과정 수료
            </li>
            <li>
              <b>5년</b> 기업 교육기관 스피치 전임 강사
            </li>
            <li>
              <b>1.2K</b> 1:1 코칭 누적 1,200회 이상
            </li>
            <li>
              <b>2.3K</b> 기업·대학 강의 수강생 2,300명
            </li>
          </ul>
        </div>
      </section>

      <section className="exh-cta" id="cta">
        <div className="exh-cta-inner">
          <div>
            <h2>다음 발표, 떨지 말고 끝내요.</h2>
            <p>무료 15분 진단으로 지금 말하기 상태부터 짚어 드립니다. 부담 없이 신청하세요.</p>
          </div>
          <a className="exh-btn on-blue" href="#cta">
            무료 진단 신청 <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="exh-foot">
        <div className="exh-foot-inner">
          <b>또박또박 스피치</b>
          <span>
            <Instagram size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            @todobak.speech &nbsp;·&nbsp; 온라인·서울 대면 진행
          </span>
        </div>
      </footer>
    </div>
  );
}

export function CoachPdf() {
  usePageTitle('또박또박 스피치 — 소개 한장');
  return (
    <div className="ex ex-pdf">
      <div className="ex-pdfbar">
        <span className="ex-pdfbar-title">또박또박 스피치 · 소개 한장 (A4)</span>
        <a href="/example/2">← 사이트로</a>
        <button className="print" onClick={() => window.print()} type="button">
          PDF로 저장 / 인쇄
        </button>
      </div>
      <div className="ex-sheet-wrap">
        <article className="ex-sheet is-coach">
          <div className="ex-sheet-band" />
          <div className="ex-sheet-pad">
            <div className="ex-sheet-top">
              <div>
                <p className="ex-sheet-kicker">TODOBAK SPEECH COACHING</p>
                <h1 className="ex-sheet-name">또박또박 스피치 — 정유진</h1>
                <p className="ex-sheet-tagline">
                  떨려서 망치던 발표를 준비된 자신감으로. 호흡·시선·문장 구조까지 1:1로 다듬습니다.
                </p>
              </div>
            </div>

            <div className="ex-sheet-divider" />

            <div className="ex-sheet-grid">
              <div>
                <div className="ex-sheet-block">
                  <h4>코칭 프로그램</h4>
                  <div className="ex-sheet-list">
                    {programs.map((p) => (
                      <div className="ex-sheet-li" key={p.name}>
                        <span>
                          <span className="nm">{p.name}</span>
                          <br />
                          <span className="ds">{p.forWho}</span>
                        </span>
                        <span className="nm">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ex-sheet-block">
                  <h4>이런 분께 권합니다</h4>
                  <p className="ds" style={{ fontSize: 13.5, lineHeight: 1.8 }}>
                    발표·면접이 코앞인 분 · 목소리가 떨리고 빨라지는 분 · 보고가 늘 장황해진다는
                    말을 듣는 분. 누적 1,200회 코칭, 평균 만족 4.9/5.
                  </p>
                </div>
              </div>

              <aside className="ex-sheet-aside">
                <div className="ex-qr-card">
                  <span className="ex-qr-frame">
                    <FauxQR seed={2} />
                  </span>
                  <p>스캔하면 무료 15분 진단 신청으로 바로 이어집니다.</p>
                </div>
                <div className="ex-contact-card">
                  <dl>
                    <dt>진단</dt>
                    <dd>무료 15분</dd>
                    <dt>방식</dt>
                    <dd>온라인 · 서울 대면</dd>
                    <dt>카톡</dt>
                    <dd>@todobak</dd>
                    <dt>인스타</dt>
                    <dd>@todobak.speech</dd>
                  </dl>
                </div>
              </aside>
            </div>

            <div className="ex-sheet-foot">
              <span>
                <Calendar size={11} style={{ verticalAlign: '-1px', marginRight: 4 }} />
                평일·주말 예약제 운영
              </span>
              <span>todobak-speech.example.kr</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
