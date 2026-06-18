import type { Problem, Project, SkillRow } from '../types/portfolio';
import {
  csDeliverables,
  csIntro,
  csPrinciples,
  csRootCauses,
  csScreens,
  csSummary,
  csUserFlow,
} from './woodworking';

const summaryPoints = (points: string[]) => points.join(' · ');
const [problemSummary, , resultSummary] = csSummary;
const rootCauseSummary = csRootCauses.map((cause) => `${cause.code}. ${cause.title}`).join(' · ');
const principleSummary = csPrinciples.map((principle) => principle.title).join(' · ');
const userFlowSummary = csUserFlow
  .map((flow) => flow.step.replace(/\s+\(.+\)$/, ''))
  .join(' → ');

export const mainProjectSummaries: Problem[] = csSummary.map((item) => ({
  project: `MAIN PROJECT · ${item.tag}`,
  title: item.title,
  body: summaryPoints(item.points),
}));

// 대표(메인) 프로젝트 — 목공 직업훈련기관 리뉴얼. 홈에서는 케이스 스터디 섹션으로
// 다루므로 'OTHER PROJECTS' 목록(projects)에는 넣지 않고, 포트폴리오 PDF에서만 선두로 사용한다.
export const flagshipProject: Project = {
  step: '01',
  name: '목공 직업훈련기관',
  label: 'MAIN PROJECT',
  title: '국비지원 직업훈련기관 웹사이트 리뉴얼',
  summary: csIntro.titleLines.join(' '),
  role: csIntro.body,
  details: [
    `${summaryPoints(problemSummary.points)}에서 출발해 ${csRootCauses.length}개 근본 원인으로 정리했습니다.`,
    `${principleSummary} 원칙으로 과정을 데이터화하고, ${userFlowSummary}까지 끊기지 않는 전환 흐름으로 재설계했습니다.`,
  ],
  url: '/deliverables',
  linkLabel: '산출물 보기 ↗',
  features: [...csDeliverables.map((deliverable) => deliverable.title), '단독 진행'],
  board: [
    { label: 'Before', value: summaryPoints(problemSummary.points) },
    { label: 'Flow', value: `${rootCauseSummary} → ${principleSummary}` },
    { label: 'Impact', value: `${summaryPoints(resultSummary.points)} · 핵심 화면 ${csScreens.length}종 설계` },
  ],
  visual: 'spec',
};

export const projects: Project[] = [
  {
    step: '01',
    name: 'GenA',
    label: 'PROFESSIONAL PROJECT',
    company: '@Genon',
    title: 'AI Slide Editor',
    summary:
      'AI가 만든 결과물을 어디까지 편집 가능하게 할지와 저장 기준을 먼저 정하고,\n사용자가 직접 다듬어 완성하는 편집 경험을 설계·구현한 프로젝트',
    role:
      "핵심 판단은 '생성 결과를 보여주는 화면'이 아니라, 수정 대상·화면 상태·저장 기준을 분리한 '편집 흐름'으로 문제를 다시 정의한 것이었습니다.",
    details: [
      'AI 결과물은 다시 만질 수 있어야 실제 콘텐츠로 활용된다고 보고, 편집 가능 범위와 저장 기준을 먼저 정했습니다. 그 기준에 맞춰 편집에서 저장까지 이어지는 흐름을 정의하고 화면으로 구현했습니다.',
      '편집 대상과 화면 상태를 분리해 수정이 안정적으로 반영되도록 구조를 잡고,\n편집 화면 라우팅 · 수정 UI · 상태 반영 · 저장 API 연동까지 연결해 AI 결과물이 다시 활용 가능한 콘텐츠가 되도록 만들었습니다.',
    ],
    url: 'https://gena.kr/',
    linkLabel: '서비스 보기 ↗',
    features: ['편집 경험 설계', '편집 흐름 정의', '편집 상태 구조화', '기획 → 구현 연결', '프론트엔드 구현'],
    board: [
      { label: 'Before', value: '생성 이후, 사용자가 결과물을 다듬어 완성하는 편집 경험이 비어 있었음' },
      { label: 'Decision', value: '편집 대상·화면 상태·저장 기준을 분리해 예외와 반영 흐름을 먼저 정의' },
      { label: 'Impact', value: '단순 생성 결과를 사용자가 완성해가는 콘텐츠 경험으로 전환' },
    ],
    visual: 'gena',
  },
  {
    step: '02',
    name: 'Orzo',
    label: 'PROFESSIONAL PROJECT',
    company: '@Sling',
    title: 'Content Image Automation',
    summary:
      '앱별 화면 구현을 늘리는 대신, 웹 렌더링 결과를 이미지로 공통 공급하는 구조를 선택해 콘텐츠 반영 병목을 줄였습니다.',
    role:
      '핵심 판단은 같은 화면을 iOS·Android에 각각 만드는 대신, 웹에서 한 번 렌더링한 결과를 두 앱의 공통 자산으로 쓰는 구조로 전환한 것이었습니다.',
    details: [
      '시험 시즌에는 많은 학습 콘텐츠를 빠르게 반영해야 했지만, 앱별로 같은 화면을 각각 구현하면 출시 주기와 유지보수 비용이 계속 늘어나는 구조였습니다.',
      '화면을 각각 구현하던 방식 대신, 웹에서 한 번 렌더링한 결과를 이미지로 공통 사용하는 구조로 전환해 앱 릴리즈 의존도를 낮췄습니다.',
    ],
    features: ['프론트엔드 구현', '자동화 파이프라인', '콘텐츠 배포', '백오피스 도구'],
    board: [
      { label: 'Before', value: 'iOS와 Android에서 동일 콘텐츠를 각각 구현해야 하는 구조' },
      { label: 'Decision', value: '앱별 구현을 늘리지 않고 웹 렌더링 이미지를 공통 공급 자산으로 사용' },
      { label: 'Impact', value: '앱 스토어 심사·릴리즈 없이 콘텐츠 교체 — 시험 시즌 반영 병목 해소' },
    ],
    visual: 'pipeline',
  },
  {
    step: '03',
    name: 'Waitroom',
    label: 'PERSONAL PROJECT',
    title: '방문 전 알기 어려운 웨이팅 현황에 확인 경로를 만든 서비스',
    summary:
      '실시간 웨이팅 시스템을 새로 만들기보다, 공식 확인 경로를 한 화면에 모아 방문 전 판단 비용을 줄이는 MVP로 범위를 좁혔습니다.',
    role:
      '핵심 판단은 완성도 높은 예약 서비스를 만들기보다, 사용자가 이동 전에 비교·선택할 수 있는 최소 정보 구조를 먼저 검증하는 것이었습니다.',
    details: [
      '직접 겪은 불편에서 출발해, 문제를 크게 확장하기보다 “방문 전 어디를 확인해야 하는가”에 집중했습니다. 전국에 흩어진 까르띠에 부티크의 공식 웨이팅 경로를 한 화면에 모아 방문 전에 지점을 비교할 수 있게 했습니다.',
      '지점마다 따로 들어가야 했던 공식 진입 링크와 주소를 지역별로 구조화하고,\n사용자가 이동 전에 어디로 갈지 판단할 수 있는 흐름으로 정리했습니다.',
    ],
    url: 'https://waitroom.space/cartier',
    features: ['웨이팅 확인', '정보 구조화', '생활 서비스'],
    board: [
      { label: 'Before', value: '지점마다 흩어진 경로로 방문 전 비교 불가' },
      { label: 'Decision', value: '실시간 시스템 대신 공식 확인 경로를 모으는 링크 허브 MVP로 범위 축소' },
      { label: 'Impact', value: '전국 13개 지점을 한 화면에서 비교·이동 판단' },
    ],
    visual: 'meal',
  },
];

export const skills: SkillRow[] = [
  {
    area: '구현을 고려한 기획',
    title:
      '기획 단계에서 화면 흐름, 상태 변화,\n예외 상황과 구현 가능성을 함께 검토합니다.',
    detail: [],
    evidenceHref: '#projects',
    evidenceLabel: '프로젝트에서 보기',
  },
  {
    area: '요구사항 기준화',
    title: '모호한 요구사항을 화면 상태와 예외까지 정의된 동작 기준으로 정리합니다.',
    detail: [],
    evidenceHref: '/deliverables',
    evidenceLabel: '산출물에서 보기',
  },
  {
    area: '흐름 구조화',
    title: '요구사항을 기능, 데이터, 상태,\n사용자 흐름으로 나누어 정리합니다.',
    detail: [],
    evidenceHref: '#case-study',
    evidenceLabel: '케이스 스터디에서 보기',
  },
  {
    area: '반복 작업 자동화',
    title: '반복되는 작업을 발견하고,\n다시 사용할 수 있는 도구와 흐름으로 바꿉니다.',
    detail: [],
    evidenceHref: '#projects',
    evidenceLabel: '프로젝트에서 보기',
  },
];

export const workExperiences: SkillRow[] = [
  {
    area: 'Genon',
    title: 'AI 슬라이드 편집기 프론트엔드 개발',
    tags: ['frontend'],
    detail: [
      '편집 화면과 미리보기 영역의 역할을 나누고,',
      '사용자의 편집 동작이 상태와 결과 화면까지 이어지는 편집 흐름을 설계했습니다.',
    ],
  },
  {
    area: 'Sling',
    title: '콘텐츠 제작 도구와 이미지 자동화 파이프라인',
    tags: ['frontend'],
    detail: [
      '문제 제작·편집·배포 흐름을 백오피스로 통합하고,',
      'JSON 데이터를 이미지로 변환하는 자동화 구조를 만들었습니다.',
    ],
  },
  {
    area: 'Daangn',
    title: '검색 경험 개선과 A/B 테스트 구현',
    tags: ['frontend'],
    detail: [
      '검색 탭 전환 성능을 개선하고,',
      '연관검색어 UI와 데이터 로깅을 구현했습니다.',
    ],
  },
  {
    area: 'KOSSA',
    title: '교육기획과 운영 프로세스 설계',
    tags: ['교육기획', '서비스기획'],
    detail: [
      '국방 SW·AI 교육 과정과 해커톤을 기획하고,',
      '기관·참여자·운영진 사이의 요구사항을 조율했습니다.',
    ],
  },
];
