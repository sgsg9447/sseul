import { ArrowRight, Instagram } from 'lucide-react';
import { DemoBar, usePageTitle } from './shared';
import { CTA, PdfBar, PdfSheet, Sec, SiteFoot, SiteNav } from './siteui';
import './examples.css';

const gallery = [
  { label: '프로필 · 이력서', cls: '' },
  { label: '브랜드 · 제품', cls: 'wide' },
  { label: '웨딩 스냅', cls: '' },
  { label: '공간 · 인테리어', cls: '' },
  { label: '인물 · 화보', cls: '' },
  { label: '푸드 · 메뉴', cls: 'wide' },
];

const kinds = [
  { no: '01', t: '프로필 · 이력서 촬영', d: '취업·링크드인용 깔끔한 프로필. 헤어/메이크업 연계.', price: '90,000원~' },
  { no: '02', t: '브랜드 · 제품 촬영', d: '쇼핑몰·SNS용 제품컷과 연출컷. 누끼·보정 포함.', price: '150,000원~' },
  { no: '03', t: '웨딩 · 데이트 스냅', d: '꾸미지 않아도 자연스러운, 오래 보는 사진.', price: '300,000원~' },
  { no: '04', t: '영상 편집 · 유튜브', d: '촬영본 편집부터 썸네일까지. 외주 단건 가능.', price: '문의' },
];

const steps = [
  { n: '01', t: '문의', d: '용도와 분위기를 알려 주세요.' },
  { n: '02', t: '컨셉 협의', d: '레퍼런스로 톤을 맞춥니다.' },
  { n: '03', t: '촬영', d: '편하게, 자연스럽게 담습니다.' },
  { n: '04', t: '보정·전달', d: '셀렉 후 보정해 원본과 함께.' },
];

export function StudioSite() {
  usePageTitle('스튜디오 휴 — 프로필·제품·웨딩 사진');
  return (
    <div className="ex exsite t-studio" id="top">
      <DemoBar pdfHref="/example/4/pdf" label="사진·영상 프리랜서 — 스튜디오 휴" />
      <SiteNav
        logo="H"
        brand="STUDIO HUE"
        sub="스튜디오 휴"
        links={[
          { label: '포트폴리오', href: '#work' },
          { label: '촬영 종류', href: '#kinds' },
          { label: '진행', href: '#how' },
        ]}
        ctaLabel="촬영 문의"
      />

      <header className="xs-hero">
        <div className="xs-hero-inner" style={{ textAlign: 'center', maxWidth: 720, marginInline: 'auto' }}>
          <p className="xs-eyebrow" style={{ justifyContent: 'center' }}>
            프로필 · 제품 · 웨딩 사진
          </p>
          <h1 className="xs-title">
            한 장의 사진이,
            <br />
            오래 <em>남도록.</em>
          </h1>
          <p className="xs-lede" style={{ marginInline: 'auto' }}>
            과한 보정 대신 분위기를 담습니다. 어색한 분도 편하게 찍을 수 있도록, 천천히 함께
            만들어 가는 촬영이에요.
          </p>
          <div className="xs-actions" style={{ justifyContent: 'center' }}>
            <a className="xs-btn is-primary" href="#contact">
              촬영 문의하기 <ArrowRight size={17} />
            </a>
            <a className="xs-btn is-ghost" href="#work">
              포트폴리오 보기
            </a>
          </div>
        </div>
      </header>

      <Sec id="work" eyebrow="Portfolio" title="최근 작업">
        <div className="xs-gallery">
          {gallery.map((g) => (
            <div className={`xs-tile ${g.cls}`} key={g.label} aria-hidden="true">
              <span>{g.label}</span>
            </div>
          ))}
        </div>
      </Sec>

      <Sec id="kinds" variant="is-alt" eyebrow="Services" title="이런 촬영을 합니다">
        <div className="xs-cards cols-2">
          {kinds.map((k) => (
            <article className="xs-card" key={k.t}>
              <span className="xs-card-no">{k.no}</span>
              <h3>{k.t}</h3>
              <p>{k.d}</p>
              <p style={{ marginTop: 12, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: 'var(--accent)' }}>
                {k.price}
              </p>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="how" eyebrow="Process" title="이렇게 진행돼요">
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
        title="원하는 장면이 있다면, 사진으로 만들어 드립니다."
        body="용도와 날짜만 알려 주세요. 가능한 일정과 견적을 바로 보내드립니다."
        btnLabel="촬영 문의하기"
      />

      <SiteFoot
        brand="STUDIO HUE"
        right={
          <span>
            <Instagram size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            @studio.hue · 서울 성수 · 출장 촬영 가능
          </span>
        }
      />
    </div>
  );
}

export function StudioPdf() {
  usePageTitle('스튜디오 휴 — 소개 한장');
  return (
    <div className="ex ex-pdf">
      <PdfBar title="스튜디오 휴 · 소개 한장 (A4)" siteHref="/example/4" />
      <PdfSheet
        theme="is-studio"
        kicker="STUDIO HUE · PHOTOGRAPHY"
        name="스튜디오 휴"
        tagline="한 장의 사진이 오래 남도록. 프로필·제품·웨딩 촬영과 영상 편집. 서울 성수, 출장 촬영 가능."
        blocks={[
          {
            h4: '촬영 종류',
            items: [
              { nm: '프로필 · 이력서', ds: '취업·링크드인용 프로필', val: '90,000원~' },
              { nm: '브랜드 · 제품', ds: '쇼핑몰·SNS 제품컷', val: '150,000원~' },
              { nm: '웨딩 · 스냅', ds: '자연스러운 데이트 스냅', val: '300,000원~' },
              { nm: '영상 편집', ds: '유튜브·릴스 외주', val: '문의' },
            ],
          },
          {
            h4: '진행 방식',
            text: '문의 → 컨셉 협의 → 촬영 → 보정·전달. 어색한 분도 편하게 찍을 수 있도록 천천히 함께 만듭니다.',
          },
        ]}
        qrSeed={44}
        qrNote="스캔하면 전체 포트폴리오와 촬영 문의로 이어집니다."
        contact={[
          { dt: '인스타', dd: '@studio.hue' },
          { dt: '위치', dd: '서울 성수동' },
          { dt: '출장', dd: '수도권 가능' },
          { dt: '예약', dd: 'DM · 폼 신청' },
        ]}
        footLeft="서울 성수 · 출장 촬영 가능"
        footRight="studio-hue.example.kr"
      />
    </div>
  );
}
