import { ArrowRight, Instagram } from 'lucide-react';
import { DemoBar, usePageTitle } from './shared';
import { CTA, PdfBar, PdfSheet, Sec, SiteFoot, SiteNav } from './siteui';
import './examples.css';

const classes = [
  { no: '01', t: '그룹 레슨', d: '최대 4명 소수 정예. 기구로 전신을 고르게.' },
  { no: '02', t: '1:1 개인 레슨', d: '내 몸 상태에 딱 맞춘 맞춤 프로그램.' },
  { no: '03', t: '듀엣 레슨', d: '친구·가족과 둘이서, 부담 없는 가격으로.' },
  { no: '04', t: '자세교정 · 재활', d: '거북목·골반·라운드숄더 집중 개선.' },
];

const schedule = [
  { day: '월 · 수 · 금', slots: ['07:00 모닝', '10:00 그룹', '13:00 개인', '19:00 그룹', '20:00 그룹'] },
  { day: '화 · 목', slots: ['10:00 그룹', '14:00 개인', '19:00 듀엣', '20:00 그룹'] },
  { day: '토', slots: ['09:00 그룹', '11:00 자세교정', '13:00 개인'] },
];

const plans = [
  { t: '체험 1회', price: '20,000원', unit: '1회 (50분)', feats: ['기구 사용법 안내', '간단 체형 분석'], pop: false },
  { t: '그룹 정기권', price: '180,000원', unit: '월 8회', feats: ['주 2회 추천', '예약제 운영', '운동복·양말 대여'], pop: true },
  { t: '개인 레슨', price: '450,000원', unit: '10회', feats: ['1:1 맞춤 설계', '자세 교정 집중', '수업 외 홈케어 가이드'], pop: false },
];

export function LessonSite() {
  usePageTitle('무브먼트 필라테스 — 그룹·개인 레슨');
  return (
    <div className="ex exsite t-lesson" id="top">
      <DemoBar pdfHref="/example/5/pdf" label="예약형 스튜디오·레슨 — 무브먼트 필라테스" />
      <SiteNav
        logo="M"
        brand="무브먼트 필라테스"
        links={[
          { label: '수업', href: '#classes' },
          { label: '시간표', href: '#sched' },
          { label: '멤버십', href: '#plans' },
        ]}
        ctaLabel="무료 체험 예약"
      />

      <header className="xs-hero is-split">
        <div className="xs-hero-inner">
          <div>
            <p className="xs-eyebrow">그룹 · 개인 · 자세교정 필라테스</p>
            <h1 className="xs-title">
              몸이 기억하는
              <br />
              <em>바른 움직임.</em>
            </h1>
            <p className="xs-lede">
              무리한 다이어트가 아니라, 오래 쓰는 몸을 위한 운동. 처음이라 망설여진다면 무료
              체험으로 먼저 느껴 보세요.
            </p>
            <div className="xs-actions">
              <a className="xs-btn is-primary" href="#contact">
                무료 체험 예약 <ArrowRight size={17} />
              </a>
              <a className="xs-btn is-ghost" href="#sched">
                수업 시간표
              </a>
            </div>
          </div>
          <aside className="xs-card-id">
            <div className="xs-id-top">MOVEMENT PILATES</div>
            <strong>작고 단단한 스튜디오</strong>
            <dl>
              <dt>정원</dt>
              <dd>그룹 최대 4명</dd>
              <dt>기구</dt>
              <dd>리포머·캐딜락 구비</dd>
              <dt>강사</dt>
              <dd>경력 9년 · 자격 보유</dd>
              <dt>위치</dt>
              <dd>합정역 도보 5분</dd>
            </dl>
          </aside>
        </div>
      </header>

      <Sec id="classes" eyebrow="Classes" title="이런 수업이 있어요">
        <div className="xs-cards cols-2">
          {classes.map((c) => (
            <article className="xs-card" key={c.t}>
              <span className="xs-card-no">{c.no}</span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="sched" variant="is-alt" eyebrow="Timetable" title="수업 시간표" lede="모든 수업은 예약제입니다. 인원이 적어 원하는 시간에 운동하기 좋아요.">
        <div className="xs-sched">
          {schedule.map((row) => (
            <div className="xs-sched-row" key={row.day}>
              <div className="day">{row.day}</div>
              <div className="slots">
                {row.slots.map((s) => (
                  <span className="xs-slot" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Sec>

      <Sec id="plans" eyebrow="Membership" title="멤버십 안내">
        <div className="xs-plans">
          {plans.map((p) => (
            <article className={`xs-plan${p.pop ? ' is-pop' : ''}`} key={p.t}>
              {p.pop ? <span className="tag">가장 인기</span> : null}
              <h3>{p.t}</h3>
              <p className="price">
                {p.price} <small>/ {p.unit}</small>
              </p>
              <ul className="xs-list">
                {p.feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="xs-note">※ 등록 전 1회 무료 체험으로 기구와 분위기를 먼저 확인하실 수 있어요.</p>
      </Sec>

      <CTA
        title="첫 수업은 부담 없이, 무료 체험으로."
        body="원하는 시간만 남겨 주세요. 예약 가능한 자리로 안내해 드립니다."
        btnLabel="무료 체험 예약"
      />

      <SiteFoot
        brand="무브먼트 필라테스"
        right={
          <span>
            <Instagram size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            @movement.pilates · 서울 마포구 합정 · 예약제
          </span>
        }
      />
    </div>
  );
}

export function LessonPdf() {
  usePageTitle('무브먼트 필라테스 — 소개 한장');
  return (
    <div className="ex ex-pdf">
      <PdfBar title="무브먼트 필라테스 · 소개 한장 (A4)" siteHref="/example/5" />
      <PdfSheet
        theme="is-lesson"
        kicker="MOVEMENT PILATES · 합정"
        name="무브먼트 필라테스"
        tagline="몸이 기억하는 바른 움직임. 그룹·개인·자세교정 필라테스, 모두 예약제 소수 정예로 운영합니다."
        blocks={[
          {
            h4: '멤버십',
            items: [
              { nm: '체험 1회', ds: '기구 안내 · 체형 분석', val: '20,000원' },
              { nm: '그룹 정기권', ds: '주 2회 추천', val: '월 8회 180,000원' },
              { nm: '개인 레슨', ds: '1:1 맞춤 설계', val: '10회 450,000원' },
            ],
          },
          {
            h4: '수업 안내',
            text: '그룹 최대 4명 소수 정예 · 리포머·캐딜락 구비 · 경력 9년 강사. 등록 전 1회 무료 체험 가능.',
          },
        ]}
        qrSeed={55}
        qrNote="스캔하면 수업 시간표와 무료 체험 예약으로 이어집니다."
        contact={[
          { dt: '체험', dd: '1회 무료' },
          { dt: '인스타', dd: '@movement.pilates' },
          { dt: '위치', dd: '합정역 도보 5분' },
          { dt: '예약', dd: 'DM · 예약 폼' },
        ]}
        footLeft="서울 마포구 합정 · 예약제"
        footRight="movement-pilates.example.kr"
      />
    </div>
  );
}
