import type { Metric } from './components';

/* All copy + data for the Hoonjo portfolio, grounded in his real résumé and
   project notes (Obsidian vault) + his own write-up of the column-pager story.
   Numbers are his actual figures — no invented metrics. Edit here to tweak
   content without touching layout. */

export const profile = {
  name: 'Hoonjo',
  nameKo: '조영훈',
  role: '7년차 프론트엔드 엔지니어',
  since: '2019',
  email: 'jaiem9@gmail.com',
  github: 'https://github.com/H8njo',
  githubHandle: 'github.com/H8njo',
  tagline: ['남들이 멈춘 곳에서', '구조를 찾습니다.'],
  lead: '성능, 복잡한 상태, 까다로운 렌더링 — 측정 가능한 결과로 어려운 프론트엔드 문제를 풉니다.',
  heroTags: ['성능 최적화', '대용량 렌더링', '복잡한 상태', 'Canvas / WebGL'],
};

/* Hero featured-impact strip — real headline figures. */
export const impact = {
  lead: '사내에 묶여 있던 페이지네이션 엔진을, 검증된 계산만 옮기고 구조를 새로 짜 독립 오픈소스로 공개했습니다.',
  stats: [
    { k: '재배치 · 100장', before: '전체 재측정', after: '55–66ms' },
    { k: '화면 양산 · 정부 포털', before: '화면마다 페이지', after: '컬럼 정의 1벌' },
    { k: '타일맵 최적화', before: '268MB', after: '10.7MB' },
  ] as { k: string; before: string; after: string }[],
};

/* ── Flagship: the column-pager story (own dedicated section) ───────────── */
export const flagship = {
  eyebrow: 'FLAGSHIP · OPEN SOURCE',
  company: 'Bookips · Solvook',
  badge: 'npm 배포 · MIT',
  role: 'Frontend · 단독 설계/개발',
  title: '사내 페이지네이션 엔진을 독립 오픈소스로',
  oneLiner:
    '긴 글이든 카드든 — 어떤 React 화면이든 인쇄물처럼 “고정 크기 페이지”로 자동으로 나눠주는 엔진입니다. 사내 시험지 제작 도구에 박혀 있던 것을 떼어내 npm 패키지로 공개했습니다.',
  problem:
    '교육 콘텐츠 편집기에서 문제를 A4 2단으로 조판해야 했는데, 기존 구현은 한 단보다 긴 카드(긴 지문)를 처리하지 못했다. 문제지는 인쇄돼 학생에게 가는 거라, 문장이 중간에 잘리면 그대로 불량품 — 2년 가까이 환불 문의가 이어졌다. 여러 명이 붙었지만 다들 같은 벽에서 멈췄다.',
  attempts: [
    { n: '01', head: '긴 카드를 이미지로 캡처해 잘라내기', miss: '픽셀 단위로 자르니 글자가 중간에 깨졌다. 줄 간격을 감지하려니 이미지 연산이 너무 무거웠다.' },
    { n: '02', head: 'CSS column-count에 통째로 맡기기', miss: '다음 페이지로 넘길 방법이 없어 페이지마다 전체를 렌더 → 카드 1,000개 × 10p = 1만 개 렌더로 화면이 멈췄다.' },
    { n: '03', head: '높이 측정 + 잘린 지점 직접 탐지', miss: '이진 탐색으로도 연산이 무거웠고, 카드 여백 탓에 “진짜 마지막 글자”를 정확히 못 짚었다.' },
    { n: '04', head: '1번의 줄 자르기를 2번으로 메우기', miss: '긴 카드가 있는 페이지에만 column-count. 짧은 카드까지 다음 페이지에 복제해야 해, 페이지가 늘수록 비효율적이었다.' },
    { n: '05', head: '카드마다 column-count:1 + 클립 + 복제', miss: '정답. 잘린 조각만 다음 열에 복제하고 translateX로 이어 붙였다. 짧은 카드는 그대로 둔다.', win: true },
  ],
  insight:
    '새로 발명한 게 아니라, 망한 시도를 버리지 않고 각도만 바꿔 합쳤다 — 1번이 실패한 “자연스러운 줄 자르기”를 2번의 column-count가 공짜로 해준다는 걸, 카드 단위 크롭 도구로만 끌어 썼다.',
  generations: [
    ['v1', '사내 문제 에디터', '다섯 번을 거쳐, 도메인에 박힌 채 동작한 원형'],
    ['v2', '사내 다른 제품', '임의 콘텐츠로 일반화. 핵심 훅이 210줄까지 비대'],
    ['v3', 'npm · column-pager', '앱에서 분리 → 순수 코어 / 측정 / 렌더 3계층 재설계'],
  ] as [string, string, string][],
  results: [
    { label: '환불 문의', after: '대폭 감소', gain: '2년 이어지던 불량 환불' },
    { label: '100장 재배치', after: '55–66', unit: 'ms', gain: '변경 없는 항목은 재측정 생략' },
    { label: '결정적 테스트', after: '49', unit: '개', gain: '측정부를 교체 가능하게 추상화' },
  ] as Metric[],
  resultNote:
    '재사용성을 확보한 덕에 후속 저작 도구, 나아가 AI 문제 생성 서비스(현재 메인 매출의 한 축)로 이어졌다 — 그즈음 매출이 전년의 약 150%가 됐다.',
  honesty:
    '표처럼 중간에서 쪼개면 안 되는 요소, 페이지를 넘는 카드 이동의 미세한 끊김은 아직 못 푼 한계로 문서에 그대로 적어뒀다. 못 푼 걸 안 푼 척하지 않는 게 라이브러리 쓰는 사람한테 정직한 거라고 본다.',
  link: { label: 'GitHub · H8njo/column-pager', href: 'https://github.com/H8njo/column-pager' },
};

export type WorkCase = {
  eyebrow: string;
  company?: string;
  badge?: { variant: 'positive' | 'blue' | 'ink'; label: string };
  title: string;
  problem: string;
  structure: string;
  tags: string[];
  metrics: Metric[];
  metricsNote?: string;
  link?: { label: string; href: string };
};

export const cases: WorkCase[] = [
  {
    eyebrow: 'PLATFORM ENGINEERING',
    company: 'Zipida · 법무부',
    title: '컬럼 정의 1벌로 59개 화면을 찍어내다',
    problem:
      '정부 보안관제 포털은 “테이블 + 검색 + 페이징 + CRUD”가 같은 모양으로 수십 개. 화면마다 손으로 짜면 소수 인원으로는 유지보수가 불가능했다.',
    structure:
      '컬럼 메타데이터(정의)와 렌더링(엔진)을 분리했다. Table 컴포넌트 하나가 메타에서 목록·검색·정렬·엑셀·폼·권한을 전부 생성하고, 라우트 정의 1벌에서 메뉴·권한·체크키를 동시에 만들어낸다(RBAC). 정형 CRUD는 GraphQL, 통계·레거시 보안 데이터는 직접 SQL로 — 한 ORM에 가두지 않았다.',
    tags: ['React', 'GraphQL', 'Strapi', 'RBAC', 'Fullstack'],
    metrics: [
      { label: '화면 양산 · 1벌 정의', after: '59', unit: '개', gain: '중복 페이지 0' },
      { label: '권한 게이트', after: '4', unit: '층', gain: '메뉴·라우트·fetch·API' },
      { label: '내 커밋 · 프론트 주저자', after: '696', unit: '/1,299', gain: '약 2년' },
    ],
    metricsNote: '본 DB(GraphQL) + 레거시 보안 DB를 함께 쓰는 이중 데이터소스 구조.',
  },
  {
    eyebrow: 'RENDERING · PERFORMANCE',
    company: 'Bookips · Solvook',
    title: '화면 미리보기와 서버 PDF를 픽셀 단위로 일치',
    problem:
      '문제를 골라 편집하면 A4 2단으로 자동 페이징해 서버 PDF로 출력하는 시험지 스튜디오. 측정용 화면과 표시용 화면이 1px만 어긋나도 페이징이 무너지고, 미리보기와 실제 PDF가 달랐다.',
    structure:
      '“측정용 화면과 표시용 화면이 1px도 어긋나면 안 된다”는 규칙을 세우고, A4를 888×1256 고정 픽셀로 박은 뒤 화면 크기에 맞춰 비율만 조정했다. 개발·운영 환경의 CSS 차이는 스타일시트를 직접 훑어 흡수했고, 대용량 교재 PDF는 보이는 만큼만 그리고 쓰고 나면 메모리에서 바로 비워 OOM(메모리 초과) 없이 처리했다.',
    tags: ['Next.js', 'Canvas 2D', 'PDF', '가상화', 'TanStack Query'],
    metrics: [
      { label: '미리보기 ↔ 서버 PDF', after: '픽셀 일치', gain: '888×1256 고정 + 비율 조정' },
      { label: '대용량 PDF 렌더', after: 'OOM 0', gain: '보이는 만큼만 그리고 즉시 해제' },
      { label: 'A4 자동 페이징', after: '2단', unit: '+ 문제 분할', gain: 'ColumnPager V1' },
    ],
    metricsNote: '여기서 출발한 페이징 엔진이 column-pager 오픈소스로 이어진다.',
  },
];

/* Black-hole side project — ink panel with a real live WebGL render. */
export const blackHole = {
  eyebrow: 'SIDE PROJECT · GRAPHICS',
  company: '개인 프로젝트',
  title: ['빛이 휘는 블랙홀을', '셰이더로 직접 그렸습니다'],
  body:
    '인터스텔라의 블랙홀처럼 중력이 빛을 휘게 만드는 효과를, 그래픽 라이브러리 없이 직접 구현했습니다. Canvas로 수천 개의 별을 그린 뒤 WebGL 셰이더가 화면을 픽셀 단위로 휘어, 빛이 굴절되는 모습을 만듭니다.',
  aside: '옆 화면은 지금 브라우저에서 실시간으로 도는 결과입니다 — 영상도, 이미지도 아닙니다.',
  tags: ['WebGL', 'GLSL 셰이더', 'Canvas 2D', '좌표 수학'],
  stats: [
    ['별 개수', '8,000+'],
    ['렌더', '실시간 · WebGL'],
    ['라이브러리', '없음 (raw)'],
  ] as [string, string][],
  repo: 'https://github.com/H8njo/webgl-black-hole',
};

export type Timeline = { period: string; role: string; org: string; description: string; tags: string[]; current?: boolean };

export const timeline: Timeline[] = [
  {
    period: '2024 — 현재',
    role: 'Frontend Engineer',
    org: 'Bookips · Solvook',
    description:
      '교육 콘텐츠 플랫폼. 시험지 제작 스튜디오의 A4 자동 페이징·서버 PDF 파이프라인을 맡고, 사내 페이지네이션 엔진을 독립 OSS(column-pager)로 분리·배포했다.',
    tags: ['Next.js', 'TypeScript', 'Canvas', 'OSS'],
    current: true,
  },
  {
    period: '2023 — 2024',
    role: 'Frontend Engineer',
    org: 'Sling · ORZO',
    description:
      '튜터용 수업 관리 웹앱. 대용량 교재 PDF를 브라우저에서 OOM 없이 렌더하는 메모리 최적화(보이는 만큼만 그리고 즉시 해제)를 맡았다.',
    tags: ['Next.js', 'SWR', 'PDF', '메모리 최적화'],
  },
  {
    period: '2020 — 2023',
    role: 'Frontend 주저자 / Fullstack',
    org: 'Zipida',
    description:
      '법무부·문체부·KISTI·현대오토에버 등 정부·기업 보안관제 포털. 컬럼 메타데이터로 화면을 양산하는 추상화, 본 DB + 레거시 보안 DB 이중 데이터소스, NestJS BFF를 설계했다.',
    tags: ['React', 'GraphQL', 'NestJS', 'RBAC'],
  },
  {
    period: '2019 — 2020',
    role: 'Frontend Engineer',
    org: '옐로오투오',
    description:
      '첫 직장. PHP 예약 시스템에서 시작해 React로 전환하며 컴포넌트 분리·반응형의 기반을 익혔다.',
    tags: ['React', 'PHP', '반응형'],
  },
];

export const stacks: { label: string; items: string[] }[] = [
  { label: 'Rendering · 성능', items: ['Canvas 2D', 'WebGL / GLSL', 'requestAnimationFrame', '대용량 가상화', '청크·온디맨드 렌더', '메모리 프로파일링'] },
  { label: 'State · 복잡도', items: ['React 18/19', 'Next.js', 'TanStack Query', 'Zustand / Redux', '측정-우선 레이아웃', '캐싱 전략'] },
  { label: 'Platform · Fullstack', items: ['TypeScript', 'NestJS BFF', 'GraphQL / Prisma', '디자인 시스템', 'semantic-release', 'React Native / Expo'] },
];

export const oss = {
  repo: 'H8njo/column-pager',
  desc:
    '긴 글이든 카드든, 어떤 React 화면이든 인쇄물처럼 “고정 크기 페이지”로 자동으로 나눠주는 도구입니다. 페이지 나누기(레이아웃 계산)만 책임지고, PDF 변환 같은 건 쓰는 쪽에 맡겨 가볍게 유지했습니다.',
  tags: ['TypeScript', 'React 18/19', 'Tree-shakeable'],
  install: 'npm i column-pager',
  importLine: "import { ColumnPager } from 'column-pager'",
  stats: [
    ['결정적 테스트', '49개'],
    ['릴리스', 'semantic-release'],
    ['라이선스', 'MIT'],
  ] as [string, string][],
  href: 'https://github.com/H8njo/column-pager',
};
