import type { Problem, Project, SkillRow } from '../types/portfolio';

export const problems: Problem[] = [
  {
    project: 'AI SLIDE EDITOR',
    title: '편집 가능한 AI 슬라이드',
    body: 'AI가 생성한 슬라이드를 사용자가 직접 수정할 수 있도록, 편집 대상과 화면 상태를 분리한 안정적인 편집 흐름이 필요했습니다.',
  },
  {
    project: 'CONTENT IMAGE PIPELINE',
    title: '반복되는 콘텐츠 배포 병목',
    body: '시험 시즌마다 대량의 학습 콘텐츠를 빠르게 반영해야 했지만, 앱 릴리즈와 중복 구현 구조가 운영 속도를 늦추고 있었습니다.',
  },
  {
    project: 'WAITROOM',
    title: '흩어진 웨이팅 확인 경로',
    body: '매장별 웨이팅 현황은 각각 따로 확인해야 했고, 사용자가 방문 전 지점을 비교하기 어려웠습니다.',
  },
];

export const projects: Project[] = [
  {
    step: '01',
    name: 'GenA',
    label: 'PROFESSIONAL PROJECT',
    title: 'AI Slide Editor',
    summary:
      '슬라이드를 생성하는 단계에서 한 걸음 더 나아가, 사용자가 결과물을\n직접 다듬어 완성하는 편집 경험을 설계하고 구현으로 완성한 프로젝트',
    role:
      'AI가 생성한 슬라이드에서 무엇을 편집 가능하게 할지, 편집에서 저장까지 어떤 흐름으로 이어질지를 직접 정의하고 화면으로 옮겼습니다.',
    details: [
      'AI 결과물을 단순히 열람하는 데 그치지 않고, 사용자가 직접 편집해 완성할 수 있는 화면으로 만드는 것이 목표였습니다. 무엇을 편집 가능하게 할지, 수정한 내용이 저장까지 어떻게 이어질지 기준을 세워 정의하고 그 흐름을 화면으로 구현했습니다.',
      '편집 대상과 화면 상태를 분리해 수정이 안정적으로 반영되도록 구조를 잡고,\n편집 화면 라우팅 · 수정 UI · 상태 반영 · 저장 API 연동까지 연결해 AI 결과물이 다시 활용 가능한 콘텐츠가 되도록 만들었습니다.',
    ],
    url: 'https://gena.kr/',
    linkLabel: '서비스 보기 ↗',
    features: ['편집 경험 설계', '편집 흐름 정의', '편집 상태 구조화', '기획 → 구현 연결', '프론트엔드 구현'],
    board: [
      { label: 'Before', value: '생성 이후, 사용자가 결과물을 다듬어 완성하는 편집 경험이 비어 있었음' },
      { label: 'Flow', value: '편집 대상 정의 → 편집 흐름 설계 → 수정 UI 구현 → 저장 연동' },
      { label: 'Impact', value: '단순 생성 결과를 사용자가 완성해가는 콘텐츠 경험으로 전환' },
    ],
    visual: 'gena',
  },
  {
    step: '02',
    name: 'Orzo',
    label: 'PROFESSIONAL PROJECT',
    title: 'Content Image Automation',
    summary:
      '대량의 학습 콘텐츠를 빠르게 반영하기 위해, JSON 데이터를 웹에서 렌더링하고 이미지로 변환하는 자동화 파이프라인을 구축했습니다.',
    role:
      '시험 시즌마다 많은 학습 콘텐츠를 빠르게 앱에 반영해야 했지만, iOS와 Android에서 동일 데이터를 각각 구현하는 방식은 개발 리소스와 유지보수 부담이 컸습니다.',
    details: [
      '시험 시즌마다 많은 학습 콘텐츠를 빠르게 앱에 반영해야 했지만, iOS와 Android에서 동일 데이터를 각각 구현하는 방식은 개발 리소스와 유지보수 부담이 컸습니다.',
      '이를 해결하기 위해 JSON 데이터를 웹에서 렌더링한 뒤 이미지로 변환하고, 앱에서는 변환된 이미지를 공통 리소스로 활용할 수 있는 구조를 만들었습니다.',
    ],
    features: ['Frontend', 'Automation', 'Content Pipeline', 'Admin Tool'],
    board: [
      { label: 'Before', value: 'iOS와 Android에서 동일 콘텐츠를 각각 구현해야 하는 구조' },
      { label: 'Flow', value: 'JSON 업로드 → 웹 렌더링 → PNG 변환 → DB 저장 → 앱 반영' },
      { label: 'Impact', value: '앱 릴리즈 없이 콘텐츠 변경에 빠르게 대응' },
    ],
    visual: 'pipeline',
  },
  {
    step: '03',
    name: 'Waitroom',
    label: 'PERSONAL PROJECT',
    title: '방문 전 알기 어려운 웨이팅 현황에 확인 경로를 만든 서비스',
    summary:
      '매장 웨이팅 현황은 직접 방문해야 알 수 있다고 여겨졌고, 지점별 확인 경로도 사용자에게 한곳에 정리되어 있지 않았습니다.',
    role:
      'Waitroom은 방문 전에도 웨이팅 현황을 확인할 수 있도록 지점별 확인 경로를 모아 사용자가 이동 전 판단할 수 있는 흐름으로 정리했습니다.',
    url: 'https://waitroom.space/cartier',
    features: ['웨이팅 확인', '지점별 경로', '방문 전 판단', '정보 구조화', '생활 서비스'],
    board: [
      { label: 'Before', value: '직접 방문 후 대기 확인' },
      { label: 'Flow', value: '지점별 웨이팅 확인 경로 정리' },
      { label: 'Impact', value: '방문 전 비교와 이동 판단 지원' },
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
  },
  {
    area: '흐름 구조화',
    title: '요구사항을 기능, 데이터, 상태,\n사용자 흐름으로 나누어 정리합니다.',
    detail: [],
  },
  {
    area: '반복 작업 자동화',
    title: '반복되는 작업을 발견하고,\n다시 사용할 수 있는 도구와 흐름으로 바꿉니다.',
    detail: [],
  },
  {
    area: '협업 기준 정리',
    title: '기획·디자인·개발 사이의\n모호한 요구를 동작 기준으로 정리합니다.',
    detail: [],
  },
];

export const workExperiences: SkillRow[] = [
  {
    area: 'GENON',
    title: 'AI 슬라이드 편집기 프론트엔드 개발',
    tags: ['frontend'],
    detail: [
      '편집 화면과 미리보기 영역의 역할을 나누고,',
      '사용자의 편집 동작이 상태와 결과 화면까지 이어지는 편집 흐름을 설계했습니다.',
    ],
  },
  {
    area: 'SLING',
    title: '콘텐츠 제작 도구와 이미지 자동화 파이프라인',
    tags: ['frontend'],
    detail: [
      '문제 제작·편집·배포 흐름을 백오피스로 통합하고,',
      'JSON 데이터를 이미지로 변환하는 자동화 구조를 만들었습니다.',
    ],
  },
  {
    area: 'DAANGN',
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
