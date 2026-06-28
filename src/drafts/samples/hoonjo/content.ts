import type { Metric } from './components';
import mojImg from './assets/moj-portal.png';
import moj2 from './assets/moj-2.jpg';
import moj3 from './assets/moj-3.png';
import kistiImg from './assets/kisti-ml.png';
import kisti2 from './assets/kisti-2.jpg';
import kisti3 from './assets/kisti-3.png';
import colpager1 from './assets/colpager-1.jpg';
import colpager2 from './assets/colpager-2.jpg';

/* The real site each "전체 글 읽기" links out to (per-project URLs can override
   via WorkCase.postUrl). */
export const SITE_URL = 'https://h8njo.vercel.app';
export type ProjImage = { src: string; alt: string };

/* All copy + data for the Hoonjo portfolio, grounded in his real résumé and
   his own project write-ups. Numbers are his actual figures — no invented
   metrics. Company convention: "@회사" marks the employer; the product/client
   (솔북, ORZO, 법무부…) is named in prose so the two never blur. */

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

/* Hero featured-impact strip — the strongest real before→after pairs. */
export const impact = {
  lead: '대표 작업을 관통하는 한 가지 — 흩어진 복잡함을 한 곳으로 모아, 화면을 구조로 바꾼 기록입니다.',
  stats: [
    { k: '같은 모양 화면 59개', before: '화면마다 코딩', after: '정의 하나로' },
    { k: '페이지네이션 엔진', before: '사내 전용', after: 'npm 공개' },
    { k: '탐지 모델 학습', before: '직접 코딩', after: 'GUI 5단계' },
  ] as { k: string; before: string; after: string }[],
};

/* ── Flagship: the column-pager story (own dedicated section) ───────────── */
export const flagship = {
  id: 'work-column-pager',
  eyebrow: 'FLAGSHIP · OPEN SOURCE',
  company: '@Bookips',
  badge: 'npm 배포 · MIT',
  title: '사내 페이지네이션 엔진을 독립 오픈소스로',
  oneLiner:
    '어떤 React 화면이든 인쇄물처럼 “고정 크기 페이지”로 자동 분할하는 엔진. 솔북(Solvook) 시험지 제작 도구에 박혀 있던 것을 떼어내 npm 패키지로 공개.',
  problem:
    '교육 콘텐츠 편집기에서 문제들을 A4 두 칸(2단) 레이아웃으로 배치해야 했는데, 기존 구현은 한 칸 높이를 넘는 긴 카드(긴 본문)를 처리하지 못했다. 만든 문제지는 인쇄돼 학생에게 가는 거라, 문장이 중간에 잘리면 그대로 불량품 — 주력 서비스에서 2년 가까이 환불 문의가 이어졌다. 여러 명이 붙었지만 다들 같은 벽에서 멈췄다.',
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
    ['v1', '솔북 문제 에디터', '다섯 번을 거쳐, 도메인에 박힌 채 동작한 원형'],
    ['v2', '솔북 다른 제품', '임의 콘텐츠로 일반화. 핵심 훅이 210줄까지 비대'],
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
  images: [
    { src: colpager1, alt: 'column-pager 결과 — 본문분석 PDF 자동 조판' },
    { src: colpager2, alt: 'column-pager 결과 — 변형문제 PDF 자동 조판' },
  ] as ProjImage[],
  postUrl: 'https://h8njo.vercel.app/work/column-count-layout',
  link: { label: 'GitHub · H8njo/column-pager', href: 'https://github.com/H8njo/column-pager' },
};

export type WorkCase = {
  id: string;
  eyebrow: string;
  company?: string;
  badge?: { variant: 'positive' | 'blue' | 'ink'; label: string };
  title: string;
  problem: string[];
  structure: string[];
  tags: string[];
  metrics: Metric[];
  metricsNote?: string;
  images?: ProjImage[];
  code?: { caption: string; lines: string };
  postUrl?: string;
  link?: { label: string; href: string };
};

export const cases: WorkCase[] = [
  {
    id: 'work-portal',
    eyebrow: 'SYSTEM DESIGN',
    company: '@Zipida · 법무부',
    title: '컬럼 정의 1벌로 59개 화면을 찍어내다',
    problem: [
      '정부 보안관제 관리자 포털',
      '목록·검색·페이징·CRUD 동일 패턴 100+ 화면',
      '화면별 수작업 → 2인 유지보수 불가',
      '같은 버그를 100곳에 복제하는 구조',
    ],
    structure: [
      '컬럼 메타데이터(정의)와 렌더링(엔진) 분리',
      'Table 1개가 목록·검색·정렬·엑셀·폼·권한 생성',
      '라우트 정의 1벌 → 메뉴·권한트리·체크키 동시 파생',
      '추상화 누수는 주석으로 드러내 관리',
    ],
    tags: ['React', 'GraphQL', '메타데이터 구동', 'RBAC', 'Fullstack'],
    metrics: [
      { label: '화면 양산 · 1벌 정의', after: '59', unit: '개', gain: '두 명이 도메인 100여 개' },
      { label: '신규 CRUD 화면', after: '정의 + 쿼리', gain: '버그도 한 곳에서 수정' },
      { label: '내 커밋 · 프론트 주저자', after: '696', unit: '/1,299', gain: '약 2년' },
    ],
    metricsNote: '이 Table 컴포넌트는 이후 다른 프로젝트에서도 컬럼 배열만 교체해 재사용.',
    images: [
      { src: mojImg, alt: '법무부 보안관제 포털 — 일간 보고서' },
      { src: moj2, alt: '법무부 보안관제 포털 — 근무·업무 일정' },
      { src: moj3, alt: '법무부 보안관제 포털 — 목록 화면' },
    ],
    postUrl: 'https://h8njo.vercel.app/work/security-portal',
  },
  {
    id: 'work-design-system',
    eyebrow: 'LIBRARY · DX',
    company: '@Bookips',
    title: '아이콘 드롭하면 타입까지, 디자인 시스템 자동화',
    problem: [
      '여러 제품이 공유할 UI·접근성 필요',
      '기존 Select — Radix 단일 위에 multi 흉내, 선택 상태·체크박스·aria 부재',
      '아이콘 160개 SVG를 손으로 컴포넌트 이관 (사고 대기)',
    ],
    structure: [
      'Select — API 1개, 내부 두 엔진 (single=Radix 래핑, multi=Popover 직접 구현)',
      'discriminated union — 오용 시 컴파일에서 차단',
      '아이콘 — 폴더에 SVG 드롭 → 코드젠으로 타입까지 자동 생성',
      'push 전 type-check + 빌드 강제 게이트',
    ],
    tags: ['Radix', 'Tailwind · CVA', '코드젠', 'Storybook', 'Rollup/Vite'],
    metrics: [
      { label: 'multi-select', after: '일급 모델', gain: '우회 → 체크박스·aria 정상' },
      { label: '아이콘 추가', after: '폴더 드롭', gain: '손으로 쓰던 export 0' },
      { label: '역할', after: '코드오너', gain: '모든 PR 리뷰·머지·릴리스' },
    ],
    metricsNote: '기본 컴포넌트에선 마법보다 예측 가능한 쪽이 거의 항상 맞다 — async onClick 자동 로딩을 controlled로 되돌린 결정.',
    code: {
      caption: 'API는 하나, 잘못 쓰면 컴파일에서 막힌다',
      lines: [
        '// Select — 하나의 API, 내부는 두 엔진',
        'type Single = { multiple?: false; value?: string }',
        'type Multi  = { multiple: true;  value: string[] }',
        'type SelectV2Props = Single | Multi',
        '',
        '// 아이콘: 폴더에 SVG 드롭 → 타입까지 자동 생성',
        '$ pnpm generate   // 160개 export, 손작업 0',
      ].join('\n'),
    },
    postUrl: 'https://h8njo.vercel.app/work/design-system',
  },
  {
    id: 'work-ml',
    eyebrow: 'COMPLEX STATE · FULLSTACK',
    company: '@Zipida · KISTI',
    title: '관제사가 코드 없이 탐지 모델을 학습시키는 마법사',
    problem: [
      '분석가가 코드 없이 탐지 ML 학습 — 5단계 마법사',
      '단계 왕복·새로고침·딥링크 사용',
      '앞 단계 변경 시 뒤 단계 무효화 필요',
      '수분~수시간 비동기 학습 — 진행 상태 표시',
    ],
    structure: [
      '현재 단계 — React state 아닌 URL 단일 소스 (새로고침·뒤로가기·딥링크 무료 동작)',
      '데이터 — useImmerReducer, 완료·무효화 규칙을 리듀서에 명시',
      '비동기 학습 5×4 상태를 progress로 추적',
      'Java/Python 이종 워커 큐 현황까지 한 화면',
    ],
    tags: ['상태머신', 'URL-as-state', 'immer', 'NestJS · Celery', 'Elasticsearch'],
    metrics: [
      { label: '모델 학습', after: '5단계 GUI', gain: '코드 없이 1건 학습·배포' },
      { label: '파이프라인 상태', after: '5×4', unit: '추적', gain: '멈춤/진행 구분' },
      { label: 'ES 기간 필터 버그', after: 'should→must', gain: '무시되던 필터 정상화' },
    ],
    metricsNote: '시작할 땐 ML 지식이 없어, 화면을 제대로 짜려고 crawl→feature→train 파이프라인을 어깨너머로 학습.',
    images: [
      { src: kistiImg, alt: 'KISTI AI 관제 — 학습 특징 설정' },
      { src: kisti2, alt: 'KISTI AI 관제 — 모델 테스트' },
      { src: kisti3, alt: 'KISTI AI 관제 — 페이로드 특징 추가' },
    ],
    postUrl: 'https://h8njo.vercel.app/work/security-ai',
  },
];

/* Black-hole side project — ink panel with a real live WebGL render. */
export const blackHole = {
  id: 'work-blackhole',
  eyebrow: 'SIDE PROJECT · GRAPHICS',
  company: '개인 프로젝트',
  title: ['빛이 휘는 블랙홀을', '셰이더로 직접 그렸습니다'],
  body:
    '중력이 빛을 휘게 만드는 효과를 그래픽 라이브러리 없이 직접 구현. Canvas로 수천 개의 별을 그린 뒤 WebGL 셰이더가 화면을 픽셀 단위로 휘어 빛의 굴절을 표현.',
  aside: '옆 화면은 지금 브라우저에서 실시간으로 도는 결과 — 영상도 이미지도 아님.',
  tags: ['WebGL', 'GLSL 셰이더', 'Canvas 2D', '좌표 수학'],
  stats: [
    ['별 개수', '8,000+'],
    ['렌더', '실시간 · WebGL'],
    ['라이브러리', '없음 (raw)'],
  ] as [string, string][],
  repo: 'https://github.com/H8njo/webgl-black-hole',
  postUrl: 'https://h8njo.vercel.app/work/webgl-blackhole',
};

export type Timeline = { period: string; role: string; org: string; description: string; tags: string[]; current?: boolean };

export const timeline: Timeline[] = [
  {
    period: '2024 — 현재',
    role: 'Frontend Engineer',
    org: '@Bookips',
    description:
      '교육 콘텐츠 플랫폼 솔북(Solvook). 시험지 제작 스튜디오의 A4 자동 페이징·서버 PDF 파이프라인 담당, 사내 페이지네이션 엔진을 독립 OSS(column-pager)로 분리·배포. 디자인 시스템 코드오너.',
    tags: ['Next.js', 'TypeScript', 'Canvas', 'OSS'],
    current: true,
  },
  {
    period: '2023 — 2024',
    role: 'Frontend Engineer',
    org: '@Sling',
    description:
      '튜터용 수업 관리 앱 ORZO. 대용량 교재 PDF를 브라우저에서 OOM 없이 렌더하는 메모리·성능 최적화 담당 (첫 화면 10분 → 1초).',
    tags: ['Next.js', 'PDF', '성능', '메모리'],
  },
  {
    period: '2020 — 2023',
    role: 'Frontend Engineer / Fullstack',
    org: '@Zipida',
    description:
      '정부·기업 보안관제 SI. 법무부·KISTI·현대오토에버 포털 — 메타데이터 화면 양산 추상화, 코드 없는 ML 학습 마법사, 본 DB + 레거시 보안 DB 이중 데이터소스, NestJS BFF 설계.',
    tags: ['React', 'GraphQL', 'NestJS', 'RBAC'],
  },
  {
    period: '2019 — 2020',
    role: 'Frontend Engineer',
    org: '@옐로오투오',
    description:
      '첫 직장. PHP 예약 시스템에서 시작해 React로 전환, 컴포넌트 분리·반응형 기반 습득.',
    tags: ['React', 'PHP', '반응형'],
  },
];

/* Expertise — a capability map; each strength links to the work that proves it
   (proof items scroll to the matching work-* anchor). */
export type ProofLink = { label: string; target: string };
export const capabilities: { label: string; skills: string[]; proof: ProofLink[] }[] = [
  {
    label: '렌더링 · 성능',
    skills: ['Canvas 2D / WebGL', '측정-우선 레이아웃', '대용량 가상화', '메모리 바운드 처리'],
    proof: [
      { label: 'column-pager', target: 'work-column-pager' },
      { label: '블랙홀', target: 'work-blackhole' },
    ],
  },
  {
    label: '시스템 설계 · 추상화',
    skills: ['메타데이터 구동 UI', '디자인 시스템 / 라이브러리', 'RBAC', 'API 타입 설계'],
    proof: [
      { label: '59개 화면 포털', target: 'work-portal' },
      { label: '디자인 시스템 자동화', target: 'work-design-system' },
    ],
  },
  {
    label: '복잡한 상태 · 풀스택',
    skills: ['상태머신 / URL-as-state', 'NestJS BFF', 'GraphQL · 이중 데이터소스', '비동기 파이프라인'],
    proof: [
      { label: 'ML 학습 마법사', target: 'work-ml' },
      { label: '보안 포털', target: 'work-portal' },
    ],
  },
];

export const oss = {
  repo: 'H8njo/column-pager',
  desc:
    '어떤 React 화면이든 인쇄물처럼 “고정 크기 페이지”로 자동 분할하는 도구. 페이지 나누기(레이아웃 계산)만 책임지고 PDF 변환 등은 사용처에 위임해 가볍게 유지.',
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
