import { ArrowRight, Phone } from 'lucide-react';
import { DemoBar, usePageTitle } from './shared';
import { CTA, PdfBar, PdfSheet, Sec, SiteFoot, SiteNav } from './siteui';
import './examples.css';

const fields = [
  { no: '01', t: '종합소득세 신고', d: '프리랜서·임대·사업소득까지, 빠진 공제 없이 정확하게.' },
  { no: '02', t: '양도·상속·증여', d: '미리 설계하면 세금이 줄어듭니다. 처분 전에 먼저 상담하세요.' },
  { no: '03', t: '법인·개인 기장', d: '매달 장부와 4대보험까지, 사장님은 본업에만 집중하시도록.' },
  { no: '04', t: '세무조사 대응', d: '소명자료 준비부터 입회까지, 혼자 받지 않으셔도 됩니다.' },
];

const steps = [
  { n: '01', t: '문의', d: '전화·카톡으로 상황을 간단히 남겨 주세요.' },
  { n: '02', t: '자료 확인', d: '필요한 자료를 안내드리고 함께 정리합니다.' },
  { n: '03', t: '상담·진단', d: '예상 세액과 절세 포인트를 먼저 알려드립니다.' },
  { n: '04', t: '진행·신고', d: '위임 후 신고·납부까지 책임지고 마무리합니다.' },
];

export function ProSite() {
  usePageTitle('한결 세무회계 — 김도윤 세무사');
  return (
    <div className="ex exsite t-pro" id="top">
      <DemoBar pdfHref="/example/1/pdf" label="전문직 1인 사무소 — 한결 세무회계" />
      <SiteNav
        logo="韓"
        brand="한결 세무회계"
        links={[
          { label: '상담 분야', href: '#fields' },
          { label: '진행 방법', href: '#how' },
          { label: '세무사 소개', href: '#about' },
          { label: '비용', href: '#fee' },
        ]}
        ctaLabel="무료 상담 신청"
      />

      <header className="xs-hero is-dark is-split">
        <div className="xs-hero-inner">
          <div>
            <p className="xs-eyebrow">세무·회계 · 양도·상속 전문</p>
            <h1 className="xs-title">
              복잡한 세금,
              <br />
              믿고 맡기는 <em>한 사람.</em>
            </h1>
            <p className="xs-lede">
              검색만 하다 더 헷갈리셨다면, 통화 한 번이면 됩니다. 13년간 한 분야만 봐 온
              세무사가 직접 상담하고, 끝까지 직접 챙깁니다.
            </p>
            <div className="xs-actions">
              <a className="xs-btn is-primary" href="#contact">
                무료 상담 신청 <ArrowRight size={17} />
              </a>
              <a className="xs-btn is-onacc" href="#fields">
                상담 분야 보기
              </a>
            </div>
          </div>
          <aside className="xs-card-id">
            <div className="xs-id-top">CERTIFIED TAX ACCOUNTANT</div>
            <strong>김도윤 세무사</strong>
            <dl>
              <dt>등록</dt>
              <dd>한국세무사회 정회원</dd>
              <dt>경력</dt>
              <dd>13년 (전 회계법인)</dd>
              <dt>전문</dt>
              <dd>양도·상속·법인 기장</dd>
              <dt>응답</dt>
              <dd>평균 2시간 내</dd>
            </dl>
          </aside>
        </div>
      </header>

      <Sec id="fields" eyebrow="Practice" title="이런 일을 맡고 있습니다" lede="혼자 끙끙 앓다 더 키우는 일이 많습니다. 작은 질문이라도 먼저 물어보세요.">
        <div className="xs-cards cols-2">
          {fields.map((f) => (
            <article className="xs-card" key={f.t}>
              <span className="xs-card-no">{f.no}</span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="how" variant="is-alt" eyebrow="Process" title="상담은 이렇게 진행됩니다">
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

      <Sec id="about" eyebrow="Why us" title="숫자보다 사람을 먼저 봅니다">
        <div className="xs-trust">
          <div>
            <b>13년</b>
            <span>세무 실무 경력</span>
          </div>
          <div>
            <b>1,800+</b>
            <span>누적 상담 건수</span>
          </div>
          <div>
            <b>2시간</b>
            <span>평균 응답 시간</span>
          </div>
          <div>
            <b>92%</b>
            <span>재이용·소개율</span>
          </div>
        </div>
        <ul className="xs-list" style={{ marginTop: 30, maxWidth: 640 }}>
          <li>전화·카톡 상담은 비용 없이, 먼저 예상 세액부터 알려드립니다.</li>
          <li>어려운 세법 용어 대신, 사장님 상황에 맞는 말로 설명합니다.</li>
          <li>담당자가 바뀌지 않습니다 — 처음부터 끝까지 세무사가 직접 봅니다.</li>
        </ul>
      </Sec>

      <Sec id="fee" variant="is-alt" eyebrow="Fee" title="비용 안내" lede="아래는 기준 금액이며, 매출·업종·자료 상태에 따라 상담 후 정확히 안내드립니다.">
        <div className="xs-fee">
          <div className="xs-fee-row">
            <div className="k">
              <strong>종합소득세 신고</strong>
              <p>프리랜서·개인사업자 단건</p>
            </div>
            <div className="v">110,000원~</div>
          </div>
          <div className="xs-fee-row">
            <div className="k">
              <strong>월 기장 대리</strong>
              <p>장부·부가세·4대보험 포함</p>
            </div>
            <div className="v">월 100,000원~</div>
          </div>
          <div className="xs-fee-row">
            <div className="k">
              <strong>양도·상속·증여 상담</strong>
              <p>절세 설계 리포트 제공</p>
            </div>
            <div className="v">220,000원~</div>
          </div>
        </div>
        <p className="xs-note">※ 첫 전화 상담은 무료입니다. 자료가 없어도 괜찮습니다 — 무엇이 필요한지부터 알려드립니다.</p>
      </Sec>

      <CTA
        title="세금 고민, 통화 한 번이면 가벼워집니다."
        body="지금 상황만 알려 주시면, 무엇부터 챙겨야 할지 바로 짚어드립니다."
        btnLabel="무료 상담 신청"
      />

      <SiteFoot
        brand="한결 세무회계"
        right={
          <span>
            <Phone size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            02-555-7180 · 서울 강남구 테헤란로 · 평일 09–18시
          </span>
        }
      />
    </div>
  );
}

export function ProPdf() {
  usePageTitle('한결 세무회계 — 소개 한장');
  return (
    <div className="ex ex-pdf">
      <PdfBar title="한결 세무회계 · 소개 한장 (A4)" siteHref="/example/1" />
      <PdfSheet
        theme="is-pro"
        kicker="HANGYEOL TAX ACCOUNTING"
        name="한결 세무회계"
        tagline="복잡한 세금, 믿고 맡기는 한 사람. 양도·상속·법인 기장 전문, 김도윤 세무사가 직접 상담합니다."
        blocks={[
          {
            h4: '상담 분야',
            items: [
              { nm: '종합소득세 신고', ds: '프리랜서·임대·사업소득 정확하게', val: '110,000원~' },
              { nm: '월 기장 대리', ds: '장부·부가세·4대보험 포함', val: '월 100,000원~' },
              { nm: '양도·상속·증여', ds: '절세 설계 리포트 제공', val: '220,000원~' },
            ],
          },
          {
            h4: '믿고 맡기는 이유',
            text: '13년 실무 경력 · 누적 상담 1,800건 · 평균 응답 2시간. 담당자가 바뀌지 않고, 처음부터 끝까지 세무사가 직접 봅니다.',
          },
        ]}
        qrSeed={11}
        qrNote="스캔하면 무료 상담 신청으로 바로 이어집니다."
        contact={[
          { dt: '전화', dd: '02-555-7180' },
          { dt: '카톡', dd: '@hangyeoltax' },
          { dt: '사무실', dd: '강남구 테헤란로' },
          { dt: '상담', dd: '첫 전화 상담 무료' },
        ]}
        footLeft="서울 강남구 · 평일 09–18시"
        footRight="hangyeol-tax.example.kr"
      />
    </div>
  );
}
