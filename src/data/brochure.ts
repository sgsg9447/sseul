// 콜드메일용 웹사이트 리뉴얼 브로셔 (/brochure)
// resume·포트폴리오 PDF와 같은 A4 인쇄 인프라를 재사용해, 그대로 PDF로 저장해 메일에 첨부할 수 있는 한 부의 소개서.
// 대상은 /work(freelance.ts)와 같은 '사장님'이되, 가격·운영 플랜까지 담은 영업용 한 장으로 정리한다.
// 연락처는 freelance.ts를 단일 출처로 재사용한다.

import { CONTACT_EMAIL, PHONE, TEL_HREF } from './freelance';

export { CONTACT_EMAIL, PHONE, TEL_HREF };

export const SITE = 'sseul.me';
export const SITE_HREF = 'https://sseul.me/';
// 브로셔에서 "자세히 보기"가 향하는 풀 랜딩.
export const WORK_HREF = '/work';

// 정적 사이트라 백엔드 없이, mailto 본문을 미리 채워 콜드메일 회신이 '바로 견적 가능한' 형태로 도착하게 한다.
const SUBJECT = '웹사이트 리뉴얼 문의';
const INQUIRY_BODY = [
  '안녕하세요, 웹사이트 리뉴얼(또는 제작) 문의드립니다.',
  '',
  '■ 지금 사이트 (또는 인스타·매장) 링크:',
  '■ 업종 · 하는 일:',
  '■ 가장 바꾸고 싶은 점:',
  '■ 희망 일정 / 예산 (있는 대로):',
  '',
  '연락처:',
].join('\n');

export const MAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(
  INQUIRY_BODY,
)}`;

export const hero = {
  eyebrow: 'WEB RENEWAL · 웹사이트 리뉴얼 브로셔',
  // 핵심 어구만 주황으로 강조한다(브랜드 규칙: 주황은 아껴 쓴다).
  title: { line1: '안 되던 웹사이트를,', hl: '다시 일하게', rest: ' 만듭니다.' },
  lede: '사이트가 없어도, 오래됐어도 괜찮습니다. 소개 한 장부터 풀 리뉴얼까지 — 기획·구현·운영을 한 사람이 끝까지 맡습니다.',
  chips: ['착수 후 1~2일 첫 시안', '모바일·검색 최적화', '운영까지 한 번에'],
};

export const me = {
  name: '김슬기',
  role: '기획 · 프론트엔드 · 운영',
  tagline: '기획부터 개발·운영까지 한 사람이 책임집니다.',
  rows: [
    { label: '강점', value: '오래된·없는 사이트를 고객이 쓰는 사이트로' },
    { label: '방식', value: '구조·디자인·개발·운영 한 번에' },
    { label: '스택', value: '반응형 · 검색최적화 · 관리자' },
  ],
};

export const problemIntro = {
  eyebrow: '왜 바꿔야 할까',
  title: '오래됐거나 없는 사이트가 놓치는 것',
};

export const problems: { title: string; body: string }[] = [
  { title: '검색해도 안 나와요', body: '검색·공유 정보가 비어 있어 포털·지도에서 뒤로 밀립니다.' },
  { title: '폰에서 깨져 보여요', body: '방문자 대부분이 모바일인데, 화면이 무너져 신뢰를 잃습니다.' },
  { title: '봐도 연락이 안 와요', body: '전화·문의 버튼이 없어 관심이 행동으로 이어지지 않습니다.' },
  { title: '정작 중요한 게 안 보여요', body: '가격·일정·신청 방법이 슬라이드 뒤에 묻혀 있습니다.' },
];

// 히어로/문제 다음 — "왜 사이트를 고쳐야 하나"를 못박는 한 문장(/work와 동일한 인사이트).
export const insight = {
  lead: '광고비를 태워 사람을 데려와도, 동선이 불편하거나 볼 내용이 없으면 실제 전환으로 이어지지 않습니다.',
  emph: '필요한 건 더 많은 트래픽이 아니라, 전환되는 사이트입니다.',
};

export const beforeAfterIntro = {
  eyebrow: '실제 사례 · 직업훈련기관',
  title: '같은 곳, 이렇게 달라집니다',
  caption: '국비지원 목공 직업훈련기관 사이트 리뉴얼 — 이미지로만 떠 있던 화면을 비교·신청·운영까지 되는 사이트로.',
};

export const baRows: { k: string; before: string; after: string }[] = [
  { k: '핵심 정보', before: '슬라이더에 묻힌 안내', after: '금액·신청 절차를 첫 화면에 바로' },
  { k: '군더더기 기능', before: '안 쓰는 로그인·회원가입', after: '전화 한 통으로 문의 일원화' },
  { k: '검색 노출', before: '검색·공유 정보 비어 있음', after: '검색·공유 정보 완비' },
  { k: '모바일', before: '화면이 깨짐', after: '어떤 기기에서도 반듯하게' },
];

export const packageIntro = {
  eyebrow: '제작 패키지',
  title: '필요한 만큼, 작게 시작할 수 있어요',
  promo: '런칭 기념 · 초기 3팀 한정 50% 할인 — 포트폴리오 공개 동의 시 적용',
};

export type Pkg = {
  ribbon?: string;
  name: string;
  desc: string;
  was: string;
  now: string;
  unit: string;
  term: string;
  feats: string[];
  featured?: boolean;
};

export const packages: Pkg[] = [
  {
    featured: true,
    ribbon: '처음 시작 추천',
    name: '작은 한 장',
    desc: '소개 한 장 페이지. 사이트가 없는 1인 사업자·프리랜서에게 딱.',
    was: '100만',
    now: '50',
    unit: '만원',
    term: '시안 1~2일 · 오픈 1주 내',
    feats: ['한 장 반응형 페이지', '검색·공유 최적화', '전화·문의 연결'],
  },
  {
    name: '표준 리뉴얼',
    desc: '5~7페이지 반응형. 오래된 사이트를 가진 가게·기관에.',
    was: '300만',
    now: '150',
    unit: '만원',
    term: '시안 1주 내 · 오픈 2~3주',
    feats: ['여러 페이지 반응형', '검색최적화 · 문의 폼', '소스 코드 전달'],
  },
  {
    name: '풀 리뉴얼',
    desc: '기획·관리자·분기 로직까지. 직접 운영이 필요한 곳에.',
    was: '500만~',
    now: '250',
    unit: '만원~',
    term: '시안 2주 내 · 오픈 4~6주 · 별도 견적',
    feats: ['관리자 화면 · 구조 설계', '맞춤 기능 · 분기 로직', '구조 문서(IA) 제공'],
  },
];

export const processIntro = {
  eyebrow: '진행 방식',
  title: '지금 어떤 단계인지, 항상 보입니다',
};

export const steps: { no: string; name: string; desc: string }[] = [
  { no: '01', name: '킥오프', desc: '목표·콘텐츠 확인, 착수일 확정' },
  { no: '02', name: '설계', desc: '구조(IA)와 화면 흐름 합의' },
  { no: '03', name: '개발', desc: '반응형 구현, 검색·문의 연결' },
  { no: '04', name: '검토', desc: '함께 확인하고 다듬기 (수정 2회)' },
  { no: '05', name: '오픈', desc: '배포하고 운영으로 인계' },
];

export const deliverIntro = {
  eyebrow: '결과물 & 운영',
  title: '만들고 끝이 아니라, 계속 굴러가게',
};

export const deliverables: { text: string; note?: string }[] = [
  { text: '실제로 동작하는 사이트' },
  { text: '모든 기기 대응(반응형)' },
  { text: '검색·공유 최적화 (SEO·OG)' },
  { text: '문의 폼 연결' },
  { text: '소스 코드 전달' },
  { text: '관리자 화면 · 구조 문서', note: '풀 리뉴얼' },
];

export const ops: { name: string; desc: string; price: string; pick?: boolean }[] = [
  { name: '라이트', desc: '호스팅 유지 · 장애 대응 · 소소한 수정', price: '4' },
  { name: '스탠다드', pick: true, desc: '＋콘텐츠 수정 · 폼/DB 관리 · 모니터링', price: '7' },
  { name: '풀케어', desc: '＋관리자 지원 · 정기 업데이트 · 우선 대응', price: '18' },
];

export const terms: string[] = [
  '착수일은 콘텐츠를 전달받은 날부터 셉니다.',
  '무료 수정은 라운드 2회까지, 이후는 별도로 안내드립니다.',
  '도메인은 고객 명의로 두어, 사이트 소유권은 늘 고객에게 있습니다.',
];

export const cta = {
  eyebrow: 'START · 시작하기',
  body: '“우리도 될까요?” 한 줄이면 충분합니다. 지금 사이트(또는 인스타) 링크만 주시면 무엇을 바꿀 수 있을지 먼저 짚어드립니다.',
};

export const footNote = '웹사이트 리뉴얼 브로셔 · sseul.me · 모든 가격은 부가세 별도';
