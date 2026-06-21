import { ArrowRight, Phone } from 'lucide-react';
import { DemoBar, usePageTitle } from './shared';
import { CTA, PdfBar, PdfSheet, Sec, SiteFoot, SiteNav } from './siteui';
import './examples.css';

const courses = [
  { t: '가구·목공 제작', badge: '국비 100%', term: '5개월 (주 5일)', cap: '16명', fee: '자부담 0원' },
  { t: 'CAD·인테리어 설계', badge: '국비지원', term: '4개월 (주 5일)', cap: '20명', fee: '자부담 0원~' },
  { t: '용접·금속 가공', badge: '국비 100%', term: '3개월 (주 5일)', cap: '16명', fee: '자부담 0원' },
];

const notices = [
  { date: '2026.07.06', t: '하반기 가구·목공반 모집 시작 (선착순)' },
  { date: '2026.07.12', t: '직업훈련 설명회 — 토 14:00, 사전 신청제' },
  { date: '2026.07.20', t: 'CAD·인테리어반 야간 과정 신설 안내' },
];

export function AcademySite() {
  usePageTitle('한울 직업전문학교 — 국비지원 훈련과정');
  return (
    <div className="ex exsite t-academy" id="top">
      <DemoBar pdfHref="/example/7/pdf" label="소규모 기관·단체 — 한울 직업전문학교" />
      <SiteNav
        logo="한"
        brand="한울 직업전문학교"
        links={[
          { label: '모집 과정', href: '#courses' },
          { label: '국비지원', href: '#gov' },
          { label: '취업 지원', href: '#jobs' },
          { label: '공지', href: '#notice' },
        ]}
        ctaLabel="수강 신청"
      />

      <header className="xs-hero is-split">
        <div className="xs-hero-inner">
          <div>
            <p className="xs-eyebrow">국비지원 · 고용노동부 인증 훈련기관</p>
            <h1 className="xs-title">
              배워서,
              <br />
              <em>바로 일할 수 있게.</em>
            </h1>
            <p className="xs-lede">
              내일배움카드로 자부담 없이 시작하는 직업훈련. 손에 익는 실습 중심 수업과 취업
              연계까지, 처음 배우는 분도 끝까지 함께합니다.
            </p>
            <div className="xs-actions">
              <a className="xs-btn is-primary" href="#contact">
                수강 신청·상담 <ArrowRight size={17} />
              </a>
              <a className="xs-btn is-ghost" href="#gov">
                국비지원 안내
              </a>
            </div>
          </div>
          <aside className="xs-card-id">
            <div className="xs-id-top">고용노동부 인증 · 내일배움카드</div>
            <strong>지원 한눈에 보기</strong>
            <dl>
              <dt>대상</dt>
              <dd>재직·구직자 모두</dd>
              <dt>자부담</dt>
              <dd>과정별 0원~</dd>
              <dt>취업률</dt>
              <dd>82% (최근 수료)</dd>
              <dt>협약</dt>
              <dd>채용 연계 40곳</dd>
            </dl>
          </aside>
        </div>
      </header>

      <Sec id="courses" eyebrow="Courses" title="모집 중인 과정" lede="실습 비중 70% 이상. 자격증 취득과 포트폴리오까지 함께 준비합니다.">
        <div className="xs-courses">
          {courses.map((c) => (
            <article className="xs-course" key={c.t}>
              <div className="top" />
              <div className="body">
                <h3>{c.t}</h3>
                <span className="badge">{c.badge}</span>
                <dl>
                  <dt>기간</dt>
                  <dd>{c.term}</dd>
                  <dt>정원</dt>
                  <dd>{c.cap}</dd>
                  <dt>비용</dt>
                  <dd>{c.fee}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="gov" variant="is-alt" eyebrow="Support" title="국비지원, 이렇게 받습니다">
        <div className="xs-gov">
          <div className="lead">
            <h3>내일배움카드 한 장이면 됩니다</h3>
            <p>
              고용노동부 직업훈련 지원 제도로, 카드 발급 후 수강료의 대부분(과정에 따라 전액)을
              국가가 지원합니다. 발급 절차도 저희가 함께 도와드립니다.
            </p>
          </div>
          <div className="facts">
            <dl>
              <dt>지원 대상</dt>
              <dd>구직자·재직자·자영업자</dd>
              <dt>지원 금액</dt>
              <dd>최대 전액 (과정별)</dd>
              <dt>신청 방법</dt>
              <dd>카드 발급 → 상담 → 등록</dd>
              <dt>준비물</dt>
              <dd>신분증 · 카드 (안내)</dd>
            </dl>
          </div>
        </div>
      </Sec>

      <Sec id="jobs" eyebrow="Outcome" title="수료가 끝이 아닙니다">
        <div className="xs-stats">
          <div>
            <b>
              <i>82</i>%
            </b>
            <span>최근 수료생 취업률</span>
          </div>
          <div>
            <b>
              <i>1,200</i>명
            </b>
            <span>누적 수료생</span>
          </div>
          <div>
            <b>
              <i>40</i>곳
            </b>
            <span>채용 협약 기업</span>
          </div>
          <div>
            <b>
              <i>14</i>년
            </b>
            <span>훈련 운영 경력</span>
          </div>
        </div>
        <ul className="xs-list" style={{ marginTop: 30, maxWidth: 640 }}>
          <li>이력서·포트폴리오 작성과 모의 면접을 수업 안에서 함께 준비합니다.</li>
          <li>협약 기업 채용 정보를 우선 안내하고, 추천서도 지원합니다.</li>
          <li>수료 후에도 일정 기간 취업 상담을 이어갑니다.</li>
        </ul>
      </Sec>

      <Sec id="notice" variant="is-alt" eyebrow="Notice" title="공지 · 모집 일정">
        <div className="xs-notice">
          {notices.map((n) => (
            <div className="xs-notice-row" key={n.t}>
              <span className="date">{n.date}</span>
              <span>{n.t}</span>
            </div>
          ))}
        </div>
      </Sec>

      <CTA
        title="다음 기수, 지금 모집 중입니다."
        body="과정이 고민되시면 상담부터. 적성과 취업 방향에 맞는 과정을 함께 찾아드립니다."
        btnLabel="수강 신청·상담"
        variant="is-dark"
      />

      <SiteFoot
        brand="한울 직업전문학교"
        right={
          <span>
            <Phone size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            031-940-2200 · 경기 고양시 · 고용노동부 인증기관
          </span>
        }
      />
    </div>
  );
}

export function AcademyPdf() {
  usePageTitle('한울 직업전문학교 — 소개 한장');
  return (
    <div className="ex ex-pdf">
      <PdfBar title="한울 직업전문학교 · 소개 한장 (A4)" siteHref="/example/7" />
      <PdfSheet
        theme="is-academy"
        kicker="HANUL VOCATIONAL SCHOOL · 국비지원"
        name="한울 직업전문학교"
        tagline="배워서 바로 일할 수 있게. 내일배움카드로 자부담 없이 시작하는, 고용노동부 인증 직업훈련기관입니다."
        blocks={[
          {
            h4: '모집 과정',
            items: [
              { nm: '가구·목공 제작', ds: '5개월 · 정원 16명', val: '국비 100%' },
              { nm: 'CAD·인테리어 설계', ds: '4개월 · 정원 20명', val: '국비지원' },
              { nm: '용접·금속 가공', ds: '3개월 · 정원 16명', val: '국비 100%' },
            ],
          },
          {
            h4: '국비지원 · 취업',
            text: '내일배움카드 발급 후 수강료 대부분(과정별 전액) 국가 지원. 최근 수료생 취업률 82%, 채용 협약 40곳.',
          },
        ]}
        qrSeed={77}
        qrNote="스캔하면 과정 안내와 수강 신청으로 바로 이어집니다."
        contact={[
          { dt: '전화', dd: '031-940-2200' },
          { dt: '지원', dd: '내일배움카드' },
          { dt: '위치', dd: '경기 고양시' },
          { dt: '인증', dd: '고용노동부' },
        ]}
        footLeft="경기 고양시 · 고용노동부 인증기관"
        footRight="hanul-school.example.kr"
      />
    </div>
  );
}
