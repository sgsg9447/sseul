import { ArrowRight, Instagram } from 'lucide-react';
import { DemoBar, usePageTitle } from './shared';
import { CTA, PdfBar, PdfSheet, Sec, SiteFoot, SiteNav } from './siteui';
import './examples.css';

const gallery = [
  { label: '메인 홀', cls: 'wide' },
  { label: '자연광 존', cls: '' },
  { label: '키친 · 다이닝', cls: '' },
  { label: '루프탑', cls: '' },
  { label: '소품 · 가구', cls: '' },
];

const steps = [
  { n: '01', t: '문의', d: '원하는 날짜와 인원을 남겨 주세요.' },
  { n: '02', t: '일정 확인', d: '예약 가능 여부를 바로 확인해 드립니다.' },
  { n: '03', t: '예약금', d: '간단한 계약과 예약금으로 일정 확정.' },
  { n: '04', t: '이용', d: '당일 안내 후 자유롭게 이용하세요.' },
];

export function VenueSite() {
  usePageTitle('레이어 — 촬영·모임 공간 대여');
  return (
    <div className="ex exsite t-venue" id="top">
      <DemoBar pdfHref="/example/6/pdf" label="이벤트·공간 — 레이어 스튜디오" />
      <SiteNav
        logo="L"
        brand="LAYER"
        sub="레이어"
        links={[
          { label: '공간', href: '#space' },
          { label: '이용 안내', href: '#info' },
          { label: '요금', href: '#rate' },
        ]}
        ctaLabel="예약 문의"
      />

      <header className="xs-hero is-split">
        <div className="xs-hero-inner">
          <div>
            <p className="xs-eyebrow">촬영 · 모임 · 파티 공간 대여</p>
            <h1 className="xs-title">
              비워 두었습니다,
              <br />
              당신의 <em>장면</em>을 위해.
            </h1>
            <p className="xs-lede">
              하루를 통째로 쓰는 단독 공간. 화보 촬영, 브라이덜 샤워, 소규모 모임 — 사진이
              예쁘게 나오는 자연광 스튜디오입니다.
            </p>
            <div className="xs-actions">
              <a className="xs-btn is-primary" href="#contact">
                예약 문의 <ArrowRight size={17} />
              </a>
              <a className="xs-btn is-ghost" href="#space">
                공간 둘러보기
              </a>
            </div>
          </div>
          <aside className="xs-card-id">
            <div className="xs-id-top">LAYER · SEONGSU</div>
            <strong>단독 대여 스튜디오</strong>
            <dl>
              <dt>면적</dt>
              <dd>33평 (단층)</dd>
              <dt>수용</dt>
              <dd>최대 20명</dd>
              <dt>채광</dt>
              <dd>남향 통창 자연광</dd>
              <dt>주차</dt>
              <dd>건물 주차 2대</dd>
            </dl>
          </aside>
        </div>
      </header>

      <Sec id="space" eyebrow="Space" title="공간 둘러보기">
        <div className="xs-gallery">
          {gallery.map((g) => (
            <div className={`xs-tile ${g.cls}`} key={g.label} aria-hidden="true">
              <span>{g.label}</span>
            </div>
          ))}
        </div>
      </Sec>

      <Sec id="info" variant="is-alt" eyebrow="Info" title="이용 안내">
        <div className="xs-spec">
          <div>
            <p className="l">수용 인원</p>
            <p className="v">최대 20명</p>
          </div>
          <div>
            <p className="l">면적</p>
            <p className="v">33평 단층</p>
          </div>
          <div>
            <p className="l">기본 제공</p>
            <p className="v">빔·사운드·주방</p>
          </div>
          <div>
            <p className="l">예약</p>
            <p className="v">시간 단위 / 종일</p>
          </div>
        </div>
        <ul className="xs-list" style={{ marginTop: 30, maxWidth: 640 }}>
          <li>테이블·체어·소품·식기 구비 — 몸만 오셔도 됩니다.</li>
          <li>촬영용 조명과 반사판, 행거·전신거울도 무료로 사용하세요.</li>
          <li>퇴실 시 간단한 정리만, 청소는 저희가 합니다.</li>
        </ul>
      </Sec>

      <Sec id="rate" eyebrow="Rate" title="이용 요금" lede="부가세 별도. 성수기·주말은 요금이 다를 수 있어 문의 시 정확히 안내드립니다.">
        <div className="xs-fee">
          <div className="xs-fee-row">
            <div className="k">
              <strong>시간 대여 (평일)</strong>
              <p>최소 2시간부터</p>
            </div>
            <div className="v">시간당 30,000원</div>
          </div>
          <div className="xs-fee-row">
            <div className="k">
              <strong>4시간 패키지</strong>
              <p>모임·파티에 적당한 구성</p>
            </div>
            <div className="v">110,000원</div>
          </div>
          <div className="xs-fee-row">
            <div className="k">
              <strong>촬영 종일권 (8시간)</strong>
              <p>화보·룩북 촬영에</p>
            </div>
            <div className="v">200,000원</div>
          </div>
        </div>
      </Sec>

      <Sec eyebrow="How" title="예약 방법">
        <div className="xs-steps">
          {steps.map((s) => (
            <div className="xs-step" key={s.n}>
              <span className="n">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </Sec>

      <CTA
        title="원하는 날짜, 비어 있는지 먼저 확인해 보세요."
        body="날짜와 인원, 용도만 알려 주시면 예약 가능 여부를 바로 회신드립니다."
        btnLabel="예약 문의하기"
      />

      <SiteFoot
        brand="LAYER 레이어"
        right={
          <span>
            <Instagram size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            @layer.space · 서울 성수동 · 단독 대여
          </span>
        }
      />
    </div>
  );
}

export function VenuePdf() {
  usePageTitle('레이어 — 소개 한장');
  return (
    <div className="ex ex-pdf">
      <PdfBar title="레이어 · 소개 한장 (A4)" siteHref="/example/6" />
      <PdfSheet
        theme="is-venue"
        kicker="LAYER · 성수 단독 스튜디오"
        name={
          <>
            <em>LAYER</em> 레이어
          </>
        }
        tagline="비워 두었습니다, 당신의 장면을 위해. 촬영·모임·파티를 위한 자연광 단독 대여 공간입니다."
        blocks={[
          {
            h4: '이용 요금 (부가세 별도)',
            items: [
              { nm: '시간 대여 (평일)', ds: '최소 2시간부터', val: '시간당 30,000원' },
              { nm: '4시간 패키지', ds: '모임·파티에 적당', val: '110,000원' },
              { nm: '촬영 종일권', ds: '8시간 · 화보·룩북', val: '200,000원' },
            ],
          },
          {
            h4: '공간 안내',
            text: '33평 단층 · 최대 20명 · 남향 통창 자연광 · 빔·사운드·주방·소품 기본 제공 · 건물 주차 2대.',
          },
        ]}
        qrSeed={66}
        qrNote="스캔하면 공간 사진과 예약 가능 일정으로 이어집니다."
        contact={[
          { dt: '인스타', dd: '@layer.space' },
          { dt: '위치', dd: '서울 성수동' },
          { dt: '수용', dd: '최대 20명' },
          { dt: '예약', dd: 'DM · 예약 폼' },
        ]}
        footLeft="서울 성수동 · 단독 대여"
        footRight="layer-space.example.kr"
      />
    </div>
  );
}
