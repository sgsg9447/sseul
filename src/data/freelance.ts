// 외주 포트폴리오 (/work) — 의뢰인 대상 랜딩 카피·데이터
// 디자인 시스템과 이미지 자산은 기존 포트폴리오(목공 케이스)에서 그대로 재사용한다.
// 홈(메인 페이지)은 건드리지 않고, 이 라우트만 독립적으로 구성한다.

// 문의는 이메일로 받고, 계약이 되면 작업 소통은 노션 채널에서 한다.
export const CONTACT_EMAIL = 'sgsg9447@gmail.com';
export const MAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('웹사이트 리뉴얼 문의')}`;
export const PHONE = '010-7705-9447';
export const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`;
export const CASE_STUDY_HREF = '/work/case';
export const DELIVERABLES_HREF = '/work/deliverables';
// 실제 배포된 결과물(목공학원 사이트) — 라이브 증거로 연결한다.
export const LIVE_SITE_URL = 'https://yoseph365.vercel.app/';

export const workHero = {
  eyebrow: 'WEB RENEWAL · 웹사이트 리뉴얼 외주',
  titleLines: ['안 되던 웹사이트를,', '다시 일하게 만듭니다.'],
  // 항상 2줄로 끊어 보여준다.
  ledeLines: [
    '오래된 사이트를 데이터와 동선으로 다시 설계합니다.',
    '보기 좋은 화면이 아니라, 실제로 문제를 푸는 사이트를 만듭니다.',
  ],
  proof: '랜딩페이지 한 장, 작은 예약·문의 도구 같은 작은 작업도 편하게 요청하세요.',
  profileName: 'Kim Seul Gi',
  card: {
    topline: 'FREELANCE · SEOUL',
    title: '기획부터 개발까지 한 사람이',
    rows: [
      { label: '이런 분께', value: '오래되고 불편한 사이트를 고치고 싶은 분' },
      { label: '작업 범위', value: '기획 · 디자인 · 개발 단독 진행' },
      { label: '진행 방식', value: '킥오프 → 시안 → 개발 → 검토 → 완료' },
      { label: '연락', value: '이메일 문의 · 작업은 편한 채널로' },
    ],
  },
};

export type BaPair = {
  key: string;
  device: 'desktop' | 'mobile';
  label: string;
  problem: string;
  solution: string;
};

export const beforeAfterIntro = {
  eyebrow: 'BEFORE / AFTER',
  title: '같은 화면, 이렇게 달라집니다',
  body: '국비지원 목공 직업훈련기관 사이트 리뉴얼. 이미지로만 떠 있던 화면을, 비교·신청·운영까지 되는 사이트로 다시 만들었습니다.',
};

// 같은 화면을 Before(기존)·After(리뉴얼)로 짝지어 보여준다.
export const beforeAfterPairs: BaPair[] = [
  {
    key: 'main',
    device: 'desktop',
    label: '메인 화면',
    problem: '큰 이미지 배너뿐 — 다음에 뭘 눌러야 할지 안 보임',
    solution: '신뢰 신호 → 모집 과정 → 신청까지 한 동선으로',
  },
  {
    key: 'support',
    device: 'desktop',
    label: '국비지원 안내',
    problem: '제도 안내가 통이미지 — 읽기 어렵고 수정도 불가',
    solution: '텍스트·표로 — 누구나 읽고, 운영자가 직접 수정',
  },
  {
    key: 'mobile',
    device: 'mobile',
    label: '모바일 메인',
    problem: '레이아웃이 깨지고 위젯이 화면을 가림',
    solution: '40~50대도 쓰기 쉽게 모바일 우선으로 재설계',
  },
];

export const processIntro = {
  eyebrow: 'HOW IT WORKS · 진행 방식',
  title: '맡기면 지금 어떤 단계인지, 항상 보입니다',
  body: '킥오프부터 완료까지 5단계로 진행하고, 모든 문서와 소통을 노션 한 곳에 모읍니다. “지금 뭐 하고 있지?” 궁금할 일이 없습니다.',
};

export const processSteps: { no: string; name: string; sub: string; desc: string }[] = [
  { no: '01', name: '킥오프 미팅', sub: '온라인 · 오프라인', desc: '문제·목표·참고 사이트와 일정, 작업 범위를 함께 정합니다.' },
  { no: '02', name: '디자인 시안', sub: 'Figma 시안', desc: '핵심 화면부터 시안으로 보여드리고 방향을 맞춥니다.' },
  { no: '03', name: '개발', sub: '직접 구현', desc: '시안을 실제로 동작하는 반응형 화면으로 만듭니다.' },
  { no: '04', name: '함께 검토', sub: '검수 요청서', desc: '화면별로 피드백을 받아 빠짐없이 반영합니다.' },
  { no: '05', name: '완료', sub: '결과물 + 산출물', desc: '라이브 사이트와 작업 문서를 함께 전달합니다.' },
];

// 작업 중 공유되는 노션 진행 보드(예시 상태) — 단계가 눈에 보인다는 점을 보여준다.
export const notionBoard: { name: string; tone: 'todo' | 'doing' | 'done'; items: string[] }[] = [
  { name: '완료', tone: 'done', items: ['문제 분석', '기획 (PRD·정책)'] },
  { name: '진행 중', tone: 'doing', items: ['구조 설계 (IA)'] },
  { name: 'To-do', tone: 'todo', items: ['명세·화면설계', '구현', '검증'] },
];

export const feedbackIntro = {
  eyebrow: 'FEEDBACK · 피드백 반영',
  title: '느낌으로 말 안 하셔도 됩니다',
  // 웹: 한 줄 / 모바일: 두 문장으로 끊어 보여준다.
  bodyLines: [
    '화면별로 요청사항·유형·우선순위를 정리하는 검수 요청서로 의견을 받습니다.',
    '어떤 의견도 묻히지 않고, 무엇부터 고칠지 함께 정합니다.',
  ],
};

export const feedbackTypes = ['오류', '개선', '취향', '질문'];
export const feedbackRows: { screen: string; element: string; request: string; type: string; priority: string }[] = [
  { screen: 'HOME', element: '메인 배너', request: '모집 중 과정이 먼저 보였으면', type: '개선', priority: '상' },
  { screen: 'COURSE', element: '과정 카드', request: '수강료를 더 크게 표시', type: '취향', priority: '중' },
  { screen: 'APPLY', element: '신청 버튼', request: '눌렀을 때 안내 문구가 필요', type: '오류', priority: '상' },
];

export const deliverIntro = {
  eyebrow: 'DELIVERABLES · 받는 것',
  title: '결과물과 산출물을 함께 드립니다',
  // 웹: 한 줄 / 모바일: 두 문장으로 끊어 보여준다.
  bodyLines: [
    '파일만 던지지 않습니다.',
    '동작하는 사이트와 함께, 왜 이렇게 만들었는지 따라갈 수 있는 작업 문서를 전달합니다.',
  ],
};

export const deliverColumns: { label: string; tag: string; items: string[]; href?: string; linkLabel?: string }[] = [
  {
    label: '결과물',
    tag: 'RESULT',
    items: ['실제 동작하는 라이브 웹사이트', '모바일·데스크톱 반응형', '소스 코드 전달'],
  },
  {
    label: '산출물',
    tag: 'DOCS',
    items: ['서비스 기획서', '요구사항 정의서', '정보구조도 (IA)', '유저플로우', '화면설계서'],
    href: DELIVERABLES_HREF,
    linkLabel: '실제 산출물 보기 →',
  },
];

export const caseIntro = {
  eyebrow: 'CASE STUDY · 대표 사례',
  title: '문제 정의부터 구현까지, 끝까지 해냅니다',
  // 웹: 한 줄 / 모바일: 두 줄로 끊어 보여준다.
  bodyLines: [
    '국비지원 목공 직업훈련기관 웹사이트 리뉴얼 — 운영자를 인터뷰하고 직접 써보며 이탈 지점을 찾아,',
    '기획·설계·디자인·개발을 단독으로 진행했습니다.',
  ],
};

// 강조 지표 — 일주일 이내 단독 완성 + 문제 분석의 밀도
export const caseStats: { value: string; label: string }[] = [
  { value: '1주 이내', label: '이 사례 기준 · 기획·디자인·개발 단독' },
  { value: '20개', label: '직접 쓰며 찾은 문제점' },
  { value: '4개', label: '근본 원인으로 압축' },
];

// 기간이 모든 프로젝트에 동일하다는 오해를 막는 한 줄.
export const caseStatsNote =
  '*작업 기간은 기능·페이지 수에 따라 달라집니다. 위 “1주 이내”는 이 예시 프로젝트(목공학원) 기준입니다.';

export const casePoints: { tag: string; title: string; desc: string }[] = [
  { tag: '문제', title: '있는데, 제 역할을 못 하던 사이트', desc: '과정·일정·비용이 전부 이미지·게시글. 비교도, 신청도, 운영도 막혀 있었습니다.' },
  { tag: '한 일', title: '데이터로 모델링하고, 동선으로 설계', desc: '과정·일정·신청·문의를 데이터로 분리하고, 탐색→판단→신청 흐름을 다시 짰습니다.' },
  { tag: '결과', title: '보여주기가 아니라 업무 도구로', desc: '신청 데이터가 운영 워크플로우로 이어지고, 집계 가능한 지표만 측정하도록 설계.' },
];

export const scopeIntro = {
  eyebrow: 'SCOPE · 이런 것도 됩니다',
  title: '큰 리뉴얼도, 작은 한 장도',
  body: '오래된 사이트 전체 리뉴얼이 메인이지만, 작은 작업도 환영합니다. 필요한 만큼만 요청하세요.',
};

export const scopeItems: { tag: string; title: string; desc: string }[] = [
  { tag: '메인', title: '오래된 사이트 전체 리뉴얼', desc: '정보구조부터 다시 설계해, 보여주기용 사이트를 업무 도구로 바꿉니다.' },
  { tag: '가능', title: '랜딩페이지 한 장', desc: '제품·행사·모집을 위한 단일 페이지 제작.' },
  { tag: '가능', title: '작은 예약·문의 도구', desc: '게시판 대신, 목적에 맞는 작은 기능을 만듭니다.' },
  { tag: '가능', title: '부분 개선', desc: '특정 화면이나 흐름만 손보는 작업도 좋습니다.' },
];

// 문의 후 어떻게 진행되는지 — 비개발자 의뢰인의 "그다음 뭐?" 불안을 없애는 단서.
export const startSteps: string[] = ['이메일로 문의', '상담 — 범위·일정', '견적·계약', '작업 시작'];

export const workContact = {
  eyebrow: 'START · 시작하기',
  titleLines: ['작은 질문부터', '편하게 시작하세요.'],
  // 항상 2줄로 끊어 보여준다.
  bodyLines: [
    '문의는 이메일이나 전화로 편하게 주세요.',
    '계약이 되면 노션·슬랙·카톡 등 편한 채널에서 문서와 소통을 한 곳에 모읍니다.',
  ],
  card: [
    { label: '문의', value: '이메일 · 전화' },
    { label: '작업 소통', value: '노션 · 슬랙 · 카톡 등' },
    { label: 'Base', value: 'Seoul, Korea' },
  ],
};
