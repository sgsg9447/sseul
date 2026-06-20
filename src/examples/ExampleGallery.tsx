import { usePageTitle } from './shared';
import './examples.css';

const samples = [
  {
    n: 1,
    kind: '공방 · 소품샵',
    name: '온도 도자공방',
    desc: '부암동의 작은 도자 작업실. 그릇 소개 · 원데이 클래스 · 찾아오는 길을 한 페이지에.',
    art: 'is-craft',
    tag: 'Editorial · Warm',
  },
  {
    n: 2,
    kind: '1인 강사 · 코치',
    name: '또박또박 스피치',
    desc: '발표·면접 스피치 코치의 퍼스널 브랜드. 프로그램 · 후기 · 무료 진단 신청까지.',
    art: 'is-coach',
    tag: 'Bold · Personal',
  },
  {
    n: 3,
    kind: '동네 카페',
    name: '산책 로스터스',
    desc: '망원동 로스터리 카페. 메뉴 · 오늘의 원두 · 영업시간 · 지도를 친근하게.',
    art: 'is-cafe',
    tag: 'Friendly · Hand-drawn',
  },
];

export function ExampleGallery() {
  usePageTitle('제작 샘플 — 소개 한장 페이지 + PDF');
  return (
    <div className="ex ex-gallery">
      <header className="ex-gallery-head">
        <p className="ex-gallery-eyebrow">Landing Page Samples</p>
        <h1>
          명함 속 <em>QR</em> 하나로,
          <br />
          나를 소개하는 한 장.
        </h1>
        <p>
          이력서·포트폴리오·가게 소개 — 누구에게나 “나를 보여줄 한 페이지”가 필요합니다.
          가상의 자영업자 세 분을 위해 만든 실제 제작 예시입니다. 각각 소개 한장 페이지와,
          명함·전단에 붙일 한장 PDF가 함께 있어요.
        </p>
      </header>

      <div className="ex-gallery-grid">
        {samples.map((s) => (
          <article className="ex-card" key={s.n}>
            <a className={`ex-card-art ${s.art}`} href={`/example/${s.n}`} aria-label={`${s.name} 사이트 보기`}>
              <span>{s.tag}</span>
            </a>
            <div className="ex-card-body">
              <p className="ex-card-kind">{s.kind}</p>
              <h2>{s.name}</h2>
              <p>{s.desc}</p>
              <div className="ex-card-links">
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

      <p className="ex-gallery-note">
        세 페이지 모두 디자인·문구·구성을 보여드리기 위한 가상 예시입니다(상호·주소·연락처는 실제와 무관).
        실제 작업은 사장님의 사진·문구·메뉴로 채워 드립니다. 비슷한 한 장이 필요하시면{' '}
        <a href="/profile">제작 소개</a>를 참고하세요.
      </p>
    </div>
  );
}
