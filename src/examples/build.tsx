import { ArrowRight, Phone } from 'lucide-react';
import { DemoBar, usePageTitle } from './shared';
import { CTA, PdfBar, PdfSheet, Sec, SiteFoot, SiteNav } from './siteui';
import './examples.css';

const cases = [
  { t: '30평 아파트 전체', d: '오래된 구조를 터서 거실 중심으로. 12일 시공.' },
  { t: '주방 · 욕실 부분 시공', d: '낡은 타일·수전 교체와 수납 보강. 5일 시공.' },
  { t: '1층 상가 → 카페', d: '바닥·조명·간판까지 브랜드 톤으로. 18일 시공.' },
];

const scope = [
  { no: '01', t: '전체 리모델링', d: '아파트·주택·빌라 올수리. 철거부터 입주 청소까지.' },
  { no: '02', t: '부분 시공', d: '주방·욕실·도배·바닥 등 필요한 곳만 깔끔하게.' },
  { no: '03', t: '상업 공간', d: '카페·사무실·매장 인테리어. 영업 일정 맞춰서.' },
  { no: '04', t: '도장·필름·조명', d: '큰 공사 없이 분위기만 바꾸는 부분 개선.' },
];

const steps = [
  { n: '01', t: '현장 실측', d: '직접 방문해 상태를 보고 무료로 견적을 냅니다.' },
  { n: '02', t: '견적·디자인', d: '자재 등급과 금액을 항목별로 투명하게 제시합니다.' },
  { n: '03', t: '계약·시공', d: '일정과 범위를 문서로 정하고 공정을 공유합니다.' },
  { n: '04', t: '점검·A/S', d: '마감 점검 후 1년간 하자를 책임집니다.' },
];

export function BuildSite() {
  usePageTitle('여백 인테리어 — 아파트·상가 리모델링');
  return (
    <div className="ex exsite t-build" id="top">
      <DemoBar pdfHref="/example/3/pdf" label="견적형 서비스업 — 여백 인테리어" />
      <SiteNav
        logo="餘"
        brand="여백 인테리어"
        links={[
          { label: '시공 사례', href: '#cases' },
          { label: '시공 범위', href: '#scope' },
          { label: '진행 절차', href: '#how' },
        ]}
        ctaLabel="견적 문의"
      />

      <header className="xs-hero is-dark is-split">
        <div className="xs-hero-inner">
          <div>
            <p className="xs-eyebrow">아파트 · 주택 · 상가 리모델링</p>
            <h1 className="xs-title">
              30년 된 집도,
              <br />
              <em>살고 싶은 공간</em>으로.
            </h1>
            <p className="xs-lede">
              과한 인테리어는 권하지 않습니다. 꼭 필요한 곳에 제대로 쓰는 시공. 실측·견적은
              무료이고, 추가 비용은 반드시 먼저 상의합니다.
            </p>
            <div className="xs-actions">
              <a className="xs-btn is-primary" href="#contact">
                무료 견적 받기 <ArrowRight size={17} />
              </a>
              <a className="xs-btn is-onacc" href="#cases">
                시공 사례 보기
              </a>
            </div>
          </div>
          <aside className="xs-card-id">
            <div className="xs-id-top">SINCE 2012 · SEOUL</div>
            <strong>여백 인테리어</strong>
            <dl>
              <dt>시공</dt>
              <dd>누적 320곳+</dd>
              <dt>보증</dt>
              <dd>시공 후 1년 A/S</dd>
              <dt>견적</dt>
              <dd>실측·견적 무료</dd>
              <dt>방식</dt>
              <dd>자재 등급 공개</dd>
            </dl>
          </aside>
        </div>
      </header>

      <Sec id="cases" eyebrow="Portfolio" title="시공 전과 후" lede="저희 포트폴리오는 사진이 전부입니다. 바뀐 공간으로 직접 확인하세요.">
        <div className="xs-ba">
          {cases.map((c) => (
            <article className="xs-ba-card" key={c.t}>
              <div className="xs-ba-imgs">
                <div className="xs-ba-img">
                  <span className="tag">BEFORE</span>
                </div>
                <div className="xs-ba-img">
                  <span className="tag">AFTER</span>
                </div>
              </div>
              <div className="meta">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="scope" variant="is-alt" eyebrow="Scope" title="이런 시공을 합니다">
        <div className="xs-cards cols-2">
          {scope.map((s) => (
            <article className="xs-card" key={s.t}>
              <span className="xs-card-no">{s.no}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="how" eyebrow="Process" title="견적부터 A/S까지">
        <div className="xs-steps">
          {steps.map((s) => (
            <div className="xs-step" key={s.n}>
              <span className="n">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <ul className="xs-list" style={{ marginTop: 32, maxWidth: 640 }}>
          <li>실측·견적은 무료입니다. 시공 여부는 보고 결정하셔도 됩니다.</li>
          <li>견적서에 자재 등급과 수량을 적어, 나중에 말이 바뀌지 않게 합니다.</li>
          <li>추가 비용이 생기면 먼저 알리고 동의를 받은 뒤 진행합니다.</li>
        </ul>
      </Sec>

      <CTA
        title="견적은 무료입니다. 사진 몇 장만 보내주세요."
        body="카톡으로 공간 사진과 평수를 주시면, 대략 비용부터 알려드립니다."
        btnLabel="카톡으로 견적 문의"
      />

      <SiteFoot
        brand="여백 인테리어"
        right={
          <span>
            <Phone size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            010-3372-5540 · 서울·경기 전역 시공 · @yeobaek.interior
          </span>
        }
      />
    </div>
  );
}

export function BuildPdf() {
  usePageTitle('여백 인테리어 — 소개 한장');
  return (
    <div className="ex ex-pdf">
      <PdfBar title="여백 인테리어 · 소개 한장 (A4)" siteHref="/example/3" />
      <PdfSheet
        theme="is-build"
        kicker="YEOBAEK INTERIOR · SINCE 2012"
        name="여백 인테리어"
        tagline="30년 된 집도 살고 싶은 공간으로. 아파트·주택·상가 리모델링, 실측·견적은 무료입니다."
        blocks={[
          {
            h4: '시공 범위',
            items: [
              { nm: '전체 리모델링', ds: '아파트·주택·빌라 올수리' },
              { nm: '부분 시공', ds: '주방·욕실·도배·바닥' },
              { nm: '상업 공간', ds: '카페·사무실·매장 인테리어' },
              { nm: '도장·필름·조명', ds: '큰 공사 없이 분위기 개선' },
            ],
          },
          {
            h4: '약속',
            text: '실측·견적 무료 · 자재 등급 공개 · 추가비용 사전 합의 · 시공 후 1년 A/S. 누적 320곳 이상 시공.',
          },
        ]}
        qrSeed={33}
        qrNote="스캔하면 시공 사례(전후 사진)와 견적 문의로 이어집니다."
        contact={[
          { dt: '견적', dd: '실측·견적 무료' },
          { dt: '전화', dd: '010-3372-5540' },
          { dt: '인스타', dd: '@yeobaek.interior' },
          { dt: '지역', dd: '서울·경기 전역' },
        ]}
        footLeft="서울·경기 전역 시공"
        footRight="yeobaek-interior.example.kr"
      />
    </div>
  );
}
