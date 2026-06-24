import type { Metric } from './components';

/* All copy + data for the Hoonjo portfolio, grounded in his real résumé and
   project notes (Obsidian vault). Numbers are his actual measured figures —
   no invented metrics. Edit here to tweak content without touching layout. */

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
  lead: '사내에 묶여 있던 페이지네이션 엔진을, 검증 수학만 이식하고 구조를 재설계해 독립 OSS로 공개했습니다.',
  stats: [
    { k: '재배치 · 100장', before: '전체 재측정', after: '55–66ms' },
    { k: '화면 양산 · 정부 포털', before: '화면마다 페이지', after: '컬럼 정의 1벌' },
    { k: '타일맵 최적화', before: '268MB', after: '10.7MB' },
  ] as { k: string; before: string; after: string }[],
};

export type WorkCase = {
  eyebrow: string;
  badge?: { variant: 'positive' | 'blue' | 'ink'; label: string };
  title: string;
  problem: string;
  structure: string;
  tags: string[];
  metrics: Metric[];
  metricsNote?: string;
  link?: { label: string; href: string };
};

export const flagship: WorkCase = {
  eyebrow: 'FLAGSHIP · OPEN SOURCE',
  badge: { variant: 'positive', label: 'npm 배포 · MIT' },
  title: '사내 페이지네이션 엔진을 독립 오픈소스로',
  problem:
    '시험지 제작 도구에는 “긴 콘텐츠를 A4 페이지로 자동으로 나누는” 로직이 한 훅에 210줄까지 비대해진 채 도메인 코드와 뒤엉켜 있었다. 같은 문제를 제품마다 처음부터 다시 풀고 있었다.',
  structure:
    '검증된 측정·분할 계산은 그대로 가져오고, 구조만 새로 설계했다. “순수 계산 / DOM 측정 / React 렌더” 세 층으로 분리하고, 측정부를 갈아끼울 수 있게 만들어 브라우저 없이도 테스트가 되게 했다. 위험을 줄이려 전체를 새로 쓰는 대신 검증된 로직만 옮겼고, main에 머지하면 버전·배포가 자동으로 나간다.',
  tags: ['TypeScript', 'React 18/19', 'Vite', 'Vitest', 'semantic-release'],
  metrics: [
    { label: '100장 순서 재배치', after: '55–66', unit: 'ms', gain: '변경 없는 항목은 재측정 생략' },
    { label: '편집 1건 반영', after: '11–16', unit: 'ms', gain: '동기 측정으로 즉시 반영' },
    { label: '결정적 테스트', after: '49', unit: '개', gain: '측정부를 교체 가능하게 추상화' },
  ],
  metricsNote: '같은 문제를 세 번 풀며 도달한 3세대 엔진 — 사내 결합 → 범용화 → 독립 OSS. 단독 개발.',
  link: { label: 'GitHub · H8njo/column-pager', href: 'https://github.com/H8njo/column-pager' },
};

export const cases: WorkCase[] = [
  {
    eyebrow: 'PLATFORM ENGINEERING',
    title: '컬럼 정의 1벌로 59개 화면을 찍어내다',
    problem:
      '정부 보안관제 포털은 “테이블 + 검색 + 페이징 + CRUD”가 같은 모양으로 수십 개. 화면마다 손으로 짜면 소수 인원으로는 유지보수가 불가능했다.',
    structure:
      '컬럼 메타데이터(정의)와 렌더링(엔진)을 분리했다. Table 컴포넌트 하나가 메타에서 목록·검색·정렬·엑셀·폼·권한을 전부 생성하고, 라우트 정의 1벌에서 메뉴·권한트리·체크키를 동시 파생(RBAC). 정형 CRUD는 GraphQL, 통계·레거시 보안 데이터는 knex raw SQL로 — 한 ORM에 가두지 않았다.',
    tags: ['React', 'GraphQL', 'Strapi', 'knex', 'RBAC'],
    metrics: [
      { label: '화면 양산 · 1벌 정의', after: '59', unit: '개', gain: '중복 페이지 0' },
      { label: '권한 게이트', after: '4', unit: '층', gain: '메뉴·라우트·fetch·API' },
      { label: '내 커밋 · 프론트 주저자', after: '696', unit: '/1,299', gain: '법무부 · 약 2년' },
    ],
    metricsNote: '법무부 보안관제 포털 (2021–2023). 본 DB + 레거시 보안 DB 이중 데이터소스.',
  },
  {
    eyebrow: 'RENDERING · PERFORMANCE',
    title: '화면 미리보기와 서버 PDF를 픽셀 단위로 일치',
    problem:
      '문제를 골라 편집하면 A4 2단으로 자동 페이징해 서버 PDF로 출력하는 시험지 스튜디오. 측정용 DOM과 표시용 DOM이 1px만 어긋나도 페이징이 무너지고, 미리보기와 실제 PDF가 달랐다.',
    structure:
      '“측정용 화면과 실제 표시 화면이 1px도 어긋나면 안 된다”는 규칙을 세우고, A4를 888×1256 고정 픽셀로 박은 뒤 화면 크기에 맞춰 비율만 조정했다. 개발·운영 환경의 CSS 차이는 스타일시트를 직접 훑어 흡수했고, 대용량 교재 PDF는 보이는 만큼만 그리고 쓰고 나면 메모리에서 바로 비워 OOM(메모리 초과) 없이 처리했다.',
    tags: ['Next.js', 'Canvas 2D', 'PDF', '가상화', 'TanStack Query'],
    metrics: [
      { label: '미리보기 ↔ 서버 PDF', after: '픽셀 일치', gain: '888×1256 고정 + scale' },
      { label: '대용량 PDF 렌더', after: 'OOM 0', gain: '청크 + page.cleanup()' },
      { label: 'A4 자동 페이징', after: '2단', unit: '+ 문제 분할', gain: 'ColumnPager V1' },
    ],
    metricsNote: 'Solvook 시험지 제작 스튜디오 (2024–2025). 이 엔진이 column-pager OSS로 이어진다.',
  },
];

/* Black-hole side project — ink panel with a real live WebGL render. */
export const blackHole = {
  eyebrow: 'SIDE PROJECT · GRAPHICS',
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
      '튜터용 수업 관리 웹앱. 대용량 교재 PDF를 브라우저에서 OOM 없이 렌더하는 메모리 최적화(청크·온디맨드·cleanup)를 맡았다.',
    tags: ['Next.js', 'SWR', 'PDF', '메모리 최적화'],
  },
  {
    period: '2020 — 2023',
    role: 'Frontend 주저자 / Fullstack',
    org: 'Zipida',
    description:
      '법무부·문체부·KISTI·현대오토에버 등 정부·기업 보안관제 포털. 컬럼 메타데이터로 화면을 양산하는 추상화, GraphQL + 레거시 보안 DB 이중 데이터소스, NestJS BFF를 설계했다.',
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
  { label: 'Platform · Fullstack', items: ['TypeScript', 'NestJS BFF', 'GraphQL / Prisma / knex', '디자인 시스템', 'semantic-release', 'React Native / Expo'] },
];

export const oss = {
  repo: 'H8njo/column-pager',
  desc:
    '임의의 React 콘텐츠를 고정 높이 멀티컬럼 페이지로 결정적으로 나누는 측정-우선 레이아웃 렌더러. 문서 변환은 소비자 몫으로 밀어내 레이아웃 계산만 책임진다.',
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
