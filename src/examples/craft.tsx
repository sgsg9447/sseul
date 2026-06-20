import { ArrowUpRight, Instagram, MapPin, Phone } from 'lucide-react';
import { DemoBar, FauxQR, usePageTitle } from './shared';
import './examples.css';

const products = [
  { name: '무던 사발', desc: '흰 유약 한 겹. 매일 손이 가는 밥공기.', price: '32,000원' },
  { name: '들풀 접시', desc: '청유 한 줄을 두른, 잎을 닮은 타원 접시.', price: '28,000원' },
  { name: '온도 머그', desc: '손에 감기는 곡선. 아침 커피용 한 잔.', price: '34,000원' },
];

export function CraftSite() {
  usePageTitle('온도 도자공방 — 부암동');
  return (
    <div className="ex ex-craft">
      <DemoBar pdfHref="/example/1/pdf" label="공방·소품샵 — 온도 도자공방" />

      <nav className="exc-nav">
        <a className="exc-brand" href="/example/1">
          <b>온도</b>
          <span>溫 度</span>
        </a>
        <div className="exc-nav-links">
          <a href="#about">소개</a>
          <a href="#products">그릇</a>
          <a href="#class">클래스</a>
          <a href="#visit">찾아오기</a>
        </div>
      </nav>

      <header className="exc-hero">
        <div className="exc-hero-text">
          <p className="exc-hero-kicker">부암동, 작은 가마 앞에서</p>
          <h1>
            손으로 빚어
            <br />
            불에 맡긴,
            <br />
            <b>매일의 그릇.</b>
          </h1>
          <p className="exc-hero-lede">
            화려하진 않아도 매일 손이 가는 그릇을 만듭니다. 한 점씩 물레로 빚어,
            좁은 가마에 며칠을 두고 천천히 굽습니다.
          </p>
          <div className="exc-hero-meta">
            <div>
              <span>작업 7년차</span>
              <b>2018 –</b>
            </div>
            <div>
              <span>작업실 겸 쇼룸</span>
              <b>부암동</b>
            </div>
            <div>
              <span>원데이 클래스</span>
              <b>주말 운영</b>
            </div>
          </div>
        </div>
        <div className="exc-hero-art" aria-hidden="true">
          <span className="exc-hero-cap">유약 시험 — No.214</span>
        </div>
      </header>

      <section className="exc-sec exc-about" id="about">
        <div className="exc-portrait" aria-hidden="true" />
        <div className="exc-about-body">
          <div className="exc-sec-head">
            <span className="exc-sec-no">01 — 만드는 사람</span>
          </div>
          <p>
            디자인 회사에 다니다 그릇이 좋아 흙을 만지기 시작했습니다. 처음 1년은
            거의 다 깨 먹었어요. 그래도 손에 남는 무게가 좋아서, 결국 작업실을 냈습니다.
          </p>
          <p>
            잘 팔리는 모양보다, 오래 쓰다 정드는 그릇을 만들려고 합니다. 이 빠지면
            금으로 메워 다시 쓰시는 분들 덕에 7년째 흙을 만지고 있습니다.
          </p>
          <p className="exc-sign">한도현 드림</p>
        </div>
      </section>

      <section className="exc-products" id="products">
        <div className="exc-sec">
          <div className="exc-sec-head">
            <span className="exc-sec-no">02</span>
            <h2>이번 가마에서 나온 그릇</h2>
          </div>
          <div className="exc-prod-grid">
            {products.map((p, i) => (
              <article className="exc-prod" key={p.name}>
                <div className="exc-prod-art" aria-hidden="true">
                  <b>0{i + 1}</b>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <p className="exc-price">{p.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="exc-class" id="class">
        <div className="exc-class-inner">
          <div>
            <div className="exc-sec-head">
              <span className="exc-sec-no">03</span>
            </div>
            <h2>물레 원데이 클래스</h2>
            <p>
              처음이어도 괜찮아요. 손에 흙을 묻히고, 두 점을 직접 빚습니다. 굽고
              유약을 입히는 건 제가 맡아, 3~4주 뒤 완성된 그릇으로 보내 드립니다.
            </p>
          </div>
          <aside className="exc-class-card">
            <dl>
              <dt>정원</dt>
              <dd>회당 4명 (소수정예)</dd>
              <dt>시간</dt>
              <dd>2시간 30분</dd>
              <dt>일정</dt>
              <dd>매주 토·일 11:00 / 15:00</dd>
              <dt>참가비</dt>
              <dd>35,000원 (그릇 2점)</dd>
            </dl>
            <a className="exc-btn" href="#visit">
              클래스 예약 문의 <ArrowUpRight size={16} />
            </a>
          </aside>
        </div>
      </section>

      <section className="exc-sec exc-visit" id="visit">
        <div className="exc-hours">
          <div className="exc-sec-head">
            <span className="exc-sec-no">04</span>
            <h2>영업 시간</h2>
          </div>
          <dl>
            <dt>화 – 금</dt>
            <dd>13:00 – 19:00</dd>
            <dt>토 · 일</dt>
            <dd>11:00 – 19:00</dd>
            <dt>월요일</dt>
            <dd className="exc-closed">휴무</dd>
          </dl>
        </div>
        <div>
          <div className="exc-sec-head">
            <span className="exc-sec-no">05</span>
            <h2>찾아오는 길</h2>
          </div>
          <p className="exc-addr">
            <b>온도 도자공방</b>
            서울 종로구 부암동 자하문로 41길 12, 1층
            <br />
            주차가 어려워 도보·버스를 권해드려요.
          </p>
          <div className="exc-map" aria-hidden="true">
            <i />
          </div>
        </div>
      </section>

      <footer className="exc-foot">
        <div className="exc-foot-inner">
          <b>온도 도자공방</b>
          <span>
            <Instagram size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            @ondo.ceramic &nbsp;·&nbsp;
            <Phone size={13} style={{ verticalAlign: '-2px', margin: '0 6px 0 0' }} />
            010-2480-7711
          </span>
        </div>
      </footer>
    </div>
  );
}

export function CraftPdf() {
  usePageTitle('온도 도자공방 — 소개 한장');
  return (
    <div className="ex ex-pdf">
      <div className="ex-pdfbar">
        <span className="ex-pdfbar-title">온도 도자공방 · 소개 한장 (A4)</span>
        <a href="/example/1">← 사이트로</a>
        <button className="print" onClick={() => window.print()} type="button">
          PDF로 저장 / 인쇄
        </button>
      </div>
      <div className="ex-sheet-wrap">
        <article className="ex-sheet is-craft">
          <div className="ex-sheet-band" />
          <div className="ex-sheet-pad">
            <div className="ex-sheet-top">
              <div>
                <p className="ex-sheet-kicker">ONDO CERAMIC STUDIO · SINCE 2018</p>
                <h1 className="ex-sheet-name">온도 도자공방</h1>
                <p className="ex-sheet-tagline">
                  손으로 빚어 불에 맡긴, 매일 쓰는 그릇. 부암동의 작은 작업실 겸 쇼룸입니다.
                </p>
              </div>
            </div>

            <div className="ex-sheet-divider" />

            <div className="ex-sheet-grid">
              <div>
                <div className="ex-sheet-block">
                  <h4>이번 가마에서 나온 그릇</h4>
                  <div className="ex-sheet-list">
                    {products.map((p) => (
                      <div className="ex-sheet-li" key={p.name}>
                        <span>
                          <span className="nm">{p.name}</span>
                          <br />
                          <span className="ds">{p.desc}</span>
                        </span>
                        <span className="nm">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ex-sheet-block">
                  <h4>물레 원데이 클래스</h4>
                  <p className="ds" style={{ fontSize: 13.5, lineHeight: 1.7 }}>
                    회당 4명 · 2시간 30분 · 35,000원(그릇 2점). 매주 토·일 11:00 / 15:00.
                    완성된 그릇은 3~4주 뒤 보내 드립니다.
                  </p>
                </div>
              </div>

              <aside className="ex-sheet-aside">
                <div className="ex-qr-card">
                  <span className="ex-qr-frame">
                    <FauxQR seed={1} />
                  </span>
                  <p>스캔하면 그릇 전체와 클래스 일정으로 바로 이어집니다.</p>
                </div>
                <div className="ex-contact-card">
                  <dl>
                    <dt>영업</dt>
                    <dd>화–금 13–19시</dd>
                    <dt> </dt>
                    <dd>토·일 11–19시</dd>
                    <dt>주소</dt>
                    <dd>부암동 자하문로 41길 12</dd>
                    <dt>인스타</dt>
                    <dd>@ondo.ceramic</dd>
                    <dt>전화</dt>
                    <dd>010-2480-7711</dd>
                  </dl>
                </div>
              </aside>
            </div>

            <div className="ex-sheet-foot">
              <span>
                <MapPin size={11} style={{ verticalAlign: '-1px', marginRight: 4 }} />
                서울 종로구 부암동
              </span>
              <span>ondo-ceramic.example.kr</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
