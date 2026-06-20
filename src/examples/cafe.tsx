import { Coffee, Instagram, MapPin } from 'lucide-react';
import { DemoBar, FauxQR, usePageTitle } from './shared';
import './examples.css';

const menu = [
  { name: '산책 라떼', desc: '고소한 우유에 진한 샷. 시그니처.', price: '5,500', sig: true },
  { name: '핸드드립', desc: '그날 아침 볶은 싱글 오리진.', price: '6,000', sig: false },
  { name: '흑임자 크림 라떼', desc: '고소하고 달큰한 우리식 라떼.', price: '6,000', sig: false },
  { name: '아메리카노', desc: '산미 적은 데일리 블렌드.', price: '4,500', sig: false },
  { name: '제주 말차 라떼', desc: '덜 달게, 진하게.', price: '6,000', sig: false },
  { name: '레몬 차 (수제청)', desc: '직접 담근 청. 비 오는 날 추천.', price: '5,500', sig: false },
  { name: '오늘의 스콘', desc: '플레인 · 얼그레이, 매일 당일 분량.', price: '4,000', sig: false },
  { name: '바스크 치즈케이크', desc: '주말 한정.', price: '6,500', sig: false },
];

export function CafeSite() {
  usePageTitle('산책 로스터스 — 망원동 카페');
  return (
    <div className="ex ex-cafe">
      <DemoBar pdfHref="/example/3/pdf" label="동네 카페 — 산책 로스터스" />

      <nav className="exf-nav">
        <a className="exf-brand" href="/example/3">
          <span className="exf-seal">산</span>
          산책 로스터스
        </a>
        <div className="exf-nav-links">
          <a href="#menu">메뉴</a>
          <a href="#bean">오늘의 원두</a>
          <a href="#visit">찾아오는 길</a>
        </div>
      </nav>

      <header className="exf-hero">
        <div className="exf-hero-badges">
          <span className="exf-chip open">
            <i />
            지금 영업 중
          </span>
          <span className="exf-chip bean">오늘의 원두 · 에티오피아 예가체프</span>
        </div>
        <h1>
          동네 한 바퀴,
          <br />
          <em>산책</em> 끝엔 커피 한 잔.
        </h1>
        <p className="exf-hero-lede">
          망원동 골목 끝의 작은 로스터리. 매일 아침 직접 볶은 원두로, 한 잔씩 천천히 내립니다.
        </p>
        <div className="exf-hero-actions">
          <a className="exf-btn primary" href="#menu">
            <Coffee size={16} /> 메뉴 보기
          </a>
          <a className="exf-btn ghost" href="#visit">
            찾아오는 길
          </a>
        </div>
        <div className="exf-hero-art" aria-hidden="true">
          <span>오늘도 천천히, 산책하듯.</span>
        </div>
      </header>

      <section className="exf-sec" id="menu">
        <div className="exf-sec-head">
          <p className="exf-eyebrow">Menu</p>
          <h2>오늘의 메뉴</h2>
        </div>
        <div className="exf-menu">
          {menu.map((m) => (
            <div className="exf-menu-row" key={m.name}>
              <span className="exf-m-name">
                {m.name}
                {m.sig && <span className="exf-sig"> ★</span>}
              </span>
              <span className="exf-m-desc">{m.desc}</span>
              <span className="exf-m-price">{m.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="exf-sec" id="bean" style={{ paddingTop: 0 }}>
        <div className="exf-bean-note">
          <span className="exf-pin">오늘의 원두</span>
          <h3>에티오피아 예가체프 G1</h3>
          <p>
            꽃향과 홍차 같은 산뜻한 끝맛. 핸드드립으로 가장 맛있게 즐기실 수 있어요.
            마음에 드시면 원두 200g 봉투(15,000원)도 가져가실 수 있습니다.
          </p>
        </div>
      </section>

      <section className="exf-visit" id="visit">
        <div className="exf-visit-inner">
          <div className="exf-hours">
            <h3>영업 시간</h3>
            <dl>
              <dt className="exf-today">평일</dt>
              <dd className="exf-today">08:00 – 21:00</dd>
              <dt>주말</dt>
              <dd>10:00 – 22:00</dd>
              <dt>화요일</dt>
              <dd className="exf-off">휴무</dd>
              <dt>라스트오더</dt>
              <dd>영업 종료 30분 전</dd>
            </dl>
          </div>
          <div className="exf-find">
            <h3>찾아오는 길</h3>
            <p className="exf-addr">
              <b>산책 로스터스</b>
              서울 마포구 망원동 월드컵로 13길 24, 1층
              <br />
              망원역 2번 출구에서 도보 7분, 망리단길 안쪽 골목이에요.
            </p>
            <div className="exf-cafemap" aria-hidden="true">
              <i />
              <span>망원역 → 도보 7분</span>
            </div>
          </div>
        </div>
      </section>

      <section className="exf-owner">
        <p>
          “오시는 길에 햇볕이 좋으면, 천천히 걸어오셔도 좋아요.
          <br />
          커피는 그다음에 내릴게요.”
        </p>
        <p className="exf-by">— 산책 로스터스 드림</p>
      </section>

      <footer className="exf-foot">
        <div className="exf-foot-inner">
          <span className="exf-foot-brand">산책 로스터스</span>
          <span>
            <Instagram size={15} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            @sanchaek.coffee &nbsp;·&nbsp; 매일 갓 볶은 원두
          </span>
        </div>
      </footer>
    </div>
  );
}

export function CafePdf() {
  usePageTitle('산책 로스터스 — 소개 한장');
  const sheetMenu = menu.slice(0, 6);
  return (
    <div className="ex ex-pdf">
      <div className="ex-pdfbar">
        <span className="ex-pdfbar-title">산책 로스터스 · 소개 한장 (A4)</span>
        <a href="/example/3">← 사이트로</a>
        <button className="print" onClick={() => window.print()} type="button">
          PDF로 저장 / 인쇄
        </button>
      </div>
      <div className="ex-sheet-wrap">
        <article className="ex-sheet is-cafe">
          <div className="ex-sheet-band" />
          <div className="ex-sheet-pad">
            <div className="ex-sheet-top">
              <div>
                <p className="ex-sheet-kicker">SANCHAEK ROASTERS · 망원동</p>
                <h1 className="ex-sheet-name">
                  산책 <em>로스터스</em>
                </h1>
                <p className="ex-sheet-tagline">
                  동네 한 바퀴, 산책 끝엔 커피 한 잔. 매일 아침 직접 볶은 원두로 한 잔씩 내립니다.
                </p>
              </div>
            </div>

            <div className="ex-sheet-divider" />

            <div className="ex-sheet-grid">
              <div>
                <div className="ex-sheet-block">
                  <h4>오늘의 메뉴</h4>
                  <div className="ex-sheet-list">
                    {sheetMenu.map((m) => (
                      <div className="ex-sheet-li" key={m.name}>
                        <span>
                          <span className="nm">
                            {m.name}
                            {m.sig ? ' ★' : ''}
                          </span>
                          <br />
                          <span className="ds">{m.desc}</span>
                        </span>
                        <span className="nm">{m.price}원</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ex-sheet-block">
                  <h4>오늘의 원두</h4>
                  <p className="ds" style={{ fontSize: 13.5, lineHeight: 1.7 }}>
                    에티오피아 예가체프 G1 — 꽃향과 홍차 같은 산뜻한 끝맛. 원두 200g 봉투(15,000원)도
                    판매합니다.
                  </p>
                </div>
              </div>

              <aside className="ex-sheet-aside">
                <div className="ex-qr-card">
                  <span className="ex-qr-frame">
                    <FauxQR seed={3} />
                  </span>
                  <p>스캔하면 전체 메뉴와 찾아오는 길로 바로 이어집니다.</p>
                </div>
                <div className="ex-contact-card">
                  <dl>
                    <dt>영업</dt>
                    <dd>평일 08–21시</dd>
                    <dt> </dt>
                    <dd>주말 10–22시 (화 휴무)</dd>
                    <dt>주소</dt>
                    <dd>망원동 월드컵로13길 24</dd>
                    <dt>인스타</dt>
                    <dd>@sanchaek.coffee</dd>
                  </dl>
                </div>
              </aside>
            </div>

            <div className="ex-sheet-foot">
              <span>
                <MapPin size={11} style={{ verticalAlign: '-1px', marginRight: 4 }} />
                망원역 2번 출구 도보 7분
              </span>
              <span>sanchaek.example.kr</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
