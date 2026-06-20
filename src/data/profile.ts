// 개인 이력서·포트폴리오 제작 외주 (/profile) — 의뢰인(구직자·프리랜서) 대상 랜딩 카피·데이터
// 디자인 시스템과 공용 스타일은 기존 포트폴리오에서 재사용한다.
// 홈(/)과 /work(사장님 대상 사이트 리뉴얼)은 건드리지 않고, 이 라우트만 독립 구성한다.

export const CONTACT_EMAIL = 'sgsg9447@gmail.com';
export const PHONE = '010-7705-9447';
export const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`;

// 본인이 만든 결과물 — "제가 만든 걸 직접 보세요"의 증거로 연결한다.
// ?anon=1 로 진입하면 회사명을 블러 처리한다(공개 샘플용 익명화). 홈 포트폴리오는 영향 없음.
export const RESUME_HREF = '/resume?anon=1';
export const PORTFOLIO_HREF = '/portfolio-pdf?anon=1';
export const CAREER_HREF = '/career?anon=1';

// 정적 사이트라 백엔드 없이, mailto 본문을 미리 채워 문의가 '바로 견적 가능한' 형태로 도착하게 한다.
const SUBJECT = '이력서·포트폴리오 제작 문의';
const INQUIRY_BODY = [
  '안녕하세요, 이력서·포트폴리오 제작 문의드립니다.',
  '',
  '■ 원하는 상품 (이력서 PDF / 이력서+포폴 / 개인 웹):',
  '■ 직무·분야:',
  '■ 희망 마감일:',
  '■ 가진 자료 (기존 이력서·경력 메모 등, 있는 대로):',
  '■ 참고할 만한 링크·스타일:',
  '',
  '연락처:',
].join('\n');

export const MAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(
  INQUIRY_BODY,
)}`;

// 티어별 CTA — 제목에 상품명을 박아, 어떤 상품 문의인지 바로 알 수 있게 한다.
export function mailForTier(tier: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${SUBJECT} — ${tier}`)}&body=${encodeURIComponent(
    INQUIRY_BODY,
  )}`;
}

export const profileHero = {
  eyebrow: 'RESUME & PORTFOLIO · 이력서·포트폴리오 제작',
  titleLines: ['개인 포폴의 시대,', '당신을 한 장으로 증명합니다.'],
  // 항상 2줄로 끊어 보여준다.
  ledeLines: [
    '이력서부터 포트폴리오, 개인 웹사이트까지 만들어 드립니다.',
    '내용은 당신 것, 보여주는 방식은 제가 설계합니다.',
  ],
  proof: '자료가 정리 안 돼 있어도 괜찮아요. 가진 것만 주시면 질문을 드리며 함께 정리합니다.',
  profileName: 'Kim Seul Gi',
  card: {
    topline: 'FREELANCE · SEOUL',
    title: '직접 만든 이력서·포폴로 증명합니다',
    rows: [
      { label: '만드는 것', value: '이력서 · 포트폴리오 · 개인 웹' },
      { label: '시작가', value: 'PDF 25,000원~ / 웹 250,000원~' },
      { label: '작업 기간', value: 'PDF 2~3일 · 웹 약 1주' },
      { label: '연락', value: '이메일 · 전화 문의' },
    ],
  },
};

export type Tier = {
  key: string;
  tag: string;
  name: string;
  lead: string;
  price: string;
  unit: string;
  regular: string;
  features: string[];
  cta: string;
  note: string;
  featured?: boolean;
};

export const tiersIntro = {
  eyebrow: 'PRICING · 상품 구성',
  title: '필요한 만큼만, 부담 없이 시작하세요',
  body: '문서 한 장부터 개인 웹사이트까지 세 가지로 나눴습니다. 무엇이 맞을지 모르겠으면 편하게 물어보세요.',
  launch: '🚀 런칭 기념 — 첫 의뢰 한정 특가',
};

// 상품 외 확장 — "이 세 가지만"이 아니라는 점을 알린다.
export const tiersNote = '이력서·포트폴리오 외 자기소개서·발표자료 등 다른 작업도 협의 후 맞춰 드립니다.';

export const tiers: Tier[] = [
  {
    key: 'basic',
    tag: 'BASIC',
    name: '이력서 PDF',
    lead: '이력서 한 장, 깔끔하게',
    price: '25,000',
    unit: '원~',
    regular: '정상가 59,000원',
    features: ['A4 1페이지 이력서 PDF', '레이아웃·타이포 정리', '내용 구조화 도움', '1회 수정', '2~3일 내 전달'],
    cta: '이 구성으로 문의',
    note: '인쇄·제출용 PDF',
  },
  {
    key: 'standard',
    tag: 'STANDARD',
    name: '이력서 + 포트폴리오',
    lead: '이력서와 포폴을 한 세트로',
    price: '49,000',
    unit: '원~',
    regular: '정상가 99,000원',
    features: [
      '이력서 + 포트폴리오 PDF (1~2장)',
      '경력·프로젝트 구조화',
      '맞춤 섹션 구성',
      '2회 수정',
      '원본 파일 함께 전달',
    ],
    cta: '이 구성으로 문의',
    note: '가장 많이 찾는 구성',
    featured: true,
  },
  {
    key: 'premium',
    tag: 'PREMIUM',
    name: '개인 포폴 웹사이트',
    lead: 'URL 하나로 끝내는 포트폴리오',
    price: '250,000',
    unit: '원~',
    regular: '정상가 500,000원',
    features: ['1페이지 반응형 웹사이트', '직접 배포 · URL 전달', '모바일 최적화', 'PDF 버전 포함', '3회 수정', '약 1주 내 완성'],
    cta: '이 구성으로 문의',
    note: '링크로 공유하는 포트폴리오',
  },
];

export const samplesIntro = {
  eyebrow: 'PROOF · 직접 만든 작업물',
  title: '제가 만든 걸, 지금 바로 보세요',
  body: '말보다 결과물이 빠릅니다. 아래는 제가 직접 만들어 쓰고 있는 이력서·포트폴리오·경력기술서입니다.',
};

export const samples: { tag: string; title: string; desc: string; href: string; linkLabel: string }[] = [
  {
    tag: '이력서',
    title: '한 장 이력서',
    desc: '경력과 핵심 역량을 A4 한 장에 압축한 인쇄용 이력서.',
    href: RESUME_HREF,
    linkLabel: '이력서 보기 →',
  },
  {
    tag: '포트폴리오',
    title: '포트폴리오 PDF',
    desc: '프로젝트를 시각적으로 정리해 한눈에 보이는 포폴.',
    href: PORTFOLIO_HREF,
    linkLabel: '포트폴리오 보기 →',
  },
  {
    tag: '경력기술서',
    title: '경력기술서',
    desc: '직무 경험과 성과를 문서로 구조화한 경력기술서.',
    href: CAREER_HREF,
    linkLabel: '경력기술서 보기 →',
  },
];

export const processIntro = {
  eyebrow: 'HOW IT WORKS · 진행 방식',
  title: '복잡할 거 없습니다',
  body: '자료만 주시면 시안부터 보여드리고, 원하는 방향으로 맞춘 뒤 전달합니다.',
};

export const processSteps: { no: string; name: string; sub: string; desc: string }[] = [
  { no: '01', name: '자료 전달', sub: '편하게', desc: '이력 정보·기존 이력서·참고 링크를 가진 대로 주세요.' },
  { no: '02', name: '시안', sub: '먼저 확인', desc: '구성과 디자인 시안을 먼저 보여드리고 방향을 맞춥니다.' },
  { no: '03', name: '수정', sub: '톤·내용', desc: '원하는 톤과 내용으로 빠짐없이 다듬습니다.' },
  { no: '04', name: '전달', sub: 'PDF · URL', desc: 'PDF(또는 웹 URL)와 원본 파일을 함께 전달합니다.' },
];

export const faqIntro = {
  eyebrow: 'FAQ · 자주 묻는 질문',
  title: '이런 게 궁금하시죠',
};

// a는 줄 단위 — 두 줄이면 모바일에서 문장 단위로 끊어 보여준다(웹은 한 줄).
export const faqs: { q: string; a: string[] }[] = [
  { q: '자료가 정리 안 됐는데 괜찮나요?', a: ['네. 가진 자료만 주시면 질문을 드리며 함께 채워 정리해 드립니다.'] },
  { q: '어떤 직군이든 되나요?', a: ['개발·디자인·기획·일반 사무 등 직군과 무관하게 맞춰 구성합니다.'] },
  {
    q: '수정은 몇 번까지 되나요?',
    a: ['상품별 기본 수정 횟수가 있고,', '큰 방향 변경이 아니면 유연하게 반영합니다.'],
  },
  {
    q: '급한데 언제까지 되나요?',
    a: ['PDF는 보통 2~3일, 웹은 약 1주입니다.', '급한 일정은 미리 말씀해 주세요.'],
  },
];

export const profileContact = {
  eyebrow: 'START · 시작하기',
  titleLines: ['당신의 커리어,', '한 장으로 증명하세요.'],
  // 항상 2줄로 끊어 보여준다.
  bodyLines: [
    '원하는 상품과 가진 자료만 알려주시면 됩니다.',
    '이메일로 문의 주시면 빠르게 답하고, 바로 시작합니다.',
  ],
  card: [
    { label: '문의', value: '이메일 · 전화' },
    { label: '작업 기간', value: 'PDF 2~3일 · 웹 약 1주' },
    { label: 'Base', value: 'Seoul, Korea' },
  ],
};

// 문의 후 어떻게 진행되는지 — 의뢰인의 "그다음 뭐?" 불안을 없애는 단서.
export const startSteps: string[] = ['이메일·전화 문의', '상품·자료 확인', '시안 확인', '전달'];
