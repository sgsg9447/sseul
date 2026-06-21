import { usePageTitle } from './shared';
import './examples.css';

const samples = [
  {
    n: 1,
    g: 'g1',
    kind: '전문직 1인 사무소',
    name: '한결 세무회계',
    desc: '세무사·노무사·상담처럼 검색하고 신뢰로 상담을 결정하는 업종. 분야·절차·비용을 또렷하게.',
    tag: 'Navy · Trust',
  },
  {
    n: 2,
    g: 'g2',
    kind: '1인 강사 · 코치',
    name: '또박또박 스피치',
    desc: '스피치·취업·커리어 코칭. 프로그램 설명이 곧장 신청으로 이어지는 구성.',
    tag: 'Bold · Personal',
  },
  {
    n: 3,
    g: 'g3',
    kind: '견적형 서비스업',
    name: '여백 인테리어',
    desc: '리모델링·청소·시공처럼 랜딩이 곧 영업인 업종. 시공 전후 사진이 포트폴리오가 됩니다.',
    tag: 'Architectural',
  },
  {
    n: 4,
    g: 'g4',
    kind: '사진 · 영상 프리랜서',
    name: '스튜디오 휴',
    desc: '프로필·제품·웨딩 작가, 영상 편집. 포트폴리오 갤러리와 문의 동선이 핵심.',
    tag: 'Dark · Gallery',
  },
  {
    n: 5,
    g: 'g5',
    kind: '예약형 스튜디오 · 레슨',
    name: '무브먼트 필라테스',
    desc: 'PT·요가·음악·공부방 등 정기 수강형. 시간표와 멤버십으로 예약·상담 전환.',
    tag: 'Calm · Wellness',
  },
  {
    n: 6,
    g: 'g6',
    kind: '이벤트 · 공간',
    name: '레이어 (공간 대여)',
    desc: '파티룸·스튜디오·연습실 대여, 웨딩·케이터링. 둘러보고 예약하는 비주얼 중심.',
    tag: 'Editorial',
  },
  {
    n: 7,
    g: 'g7',
    kind: '소규모 기관 · 단체',
    name: '한울 직업전문학교',
    desc: '직업훈련기관·협동조합·평생교육원. 공공성과 정보 전달을 또렷하게 — 제가 가장 잘 아는 분야.',
    tag: 'Institutional',
  },
];

export function ExampleGallery() {
  usePageTitle('제작 샘플 — 소개 한장 페이지 + PDF');
  return (
    <div className="exg">
      <div className="exg-bar">
        <div className="exg-bar-inner">
          <b>sseul · 제작 샘플</b>
          <a href="/">← 포트폴리오 홈</a>
        </div>
      </div>

      <header className="exg-head">
        <p className="eyebrow">
          <span />
          LANDING PAGE SAMPLES
        </p>
        <h1>
          명함 속 <em>QR</em> 하나로,
          <br />
          나를 소개하는 한 장.
        </h1>
        <p>
          이력서·포트폴리오·가게 소개 — 누구에게나 “나를 보여줄 한 페이지”가 필요합니다.
          업종별 가상 자영업자를 위해 만든 실제 제작 예시입니다. 각각 소개 한장 페이지와,
          명함·전단에 붙일 한장 PDF가 함께 있어요.
        </p>
      </header>

      <div className="exg-grid">
        {samples.map((s) => (
          <article className="exg-card" key={s.n}>
            <a className={`exg-art ${s.g}`} href={`/example/${s.n}`} aria-label={`${s.name} 사이트 보기`}>
              <span>{s.tag}</span>
            </a>
            <div className="exg-body">
              <p className="exg-kind">{s.kind}</p>
              <h2>{s.name}</h2>
              <p>{s.desc}</p>
              <div className="exg-links">
                <a className="go" href={`/example/${s.n}`}>
                  사이트 보기
                </a>
                <a className="pdf" href={`/example/${s.n}/pdf`}>
                  한장 PDF
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="exg-note">
        모든 샘플은 디자인·문구·구성을 보여드리기 위한 가상 예시입니다(상호·주소·연락처는 실제와 무관).
        실제 작업은 사장님의 사진·문구·메뉴로 채워 드립니다. 비슷한 한 장이 필요하시면{' '}
        <a href="/profile">제작 소개</a>를 참고하세요.
      </p>
    </div>
  );
}
