import type { Approach, CaseStep, Problem, Project, SkillRow } from '../types/portfolio';

export const problems: Problem[] = [
  {
    project: 'EnrollOps',
    title: '다시 정리해야 하는 수강신청서',
    body: '수강신청서는 종이로 작성된 뒤 다시 스캔해 온라인에 저장해야 했고, 파일명 정리와 보관 과정이 담당자의 수작업에 의존하고 있었습니다.',
  },
  {
    project: 'Waitroom',
    title: '방문 전 확인하기 어려운 웨이팅 현황',
    body: '매장 웨이팅 현황은 직접 방문해야 알 수 있다고 여겨졌고, 지점별 웨이팅 확인 경로도 사용자에게 한곳에 정리되어 있지 않았습니다.',
  },
  {
    project: 'ZERO100',
    title: '시작되지 못하는 아이디어',
    body: '서비스 아이디어가 있어도 문제 정의, 화면 흐름, 기능 우선순위, 개발 TODO로 나뉘지 않으면 실제 제작으로 이어지기 어려웠습니다.',
  },
];

export const approaches: Approach[] = [
  {
    icon: 'fileCheck',
    project: 'EnrollOps',
    title: '온라인화하다',
    body: '종이 수강신청서를 온라인 접수 → PDF 저장 → 관리자 확인 흐름으로 바꿨습니다.',
  },
  {
    icon: 'mapPinned',
    project: 'Waitroom',
    title: '확인 가능하게 하다',
    body: '방문 전 알기 어려웠던 웨이팅 현황을 지점별 확인 경로로 정리했습니다.',
  },
  {
    icon: 'listChecks',
    project: 'ZERO100',
    title: '실행 단위로 나누다',
    body: '막연한 아이디어를 문제정의, 화면흐름, 우선순위, 개발 TODO로 쪼갰습니다.',
  },
];

export const projects: Project[] = [
  {
    step: '01',
    name: 'EnrollOps',
    label: 'Operations workflow',
    title: '종이 수강신청서를 온라인 접수와 PDF 저장 흐름으로 전환한 운영 개선 프로젝트',
    summary:
      '종이로 작성된 수강신청서를 다시 스캔하고 저장해야 하는 반복 업무를 발견했습니다.',
    role:
      'EnrollOps는 온라인 접수, 관리자 확인, PDF 저장까지 이어지는 흐름으로 전환해 신청 정보를 처음부터 관리 가능한 데이터로 남기도록 설계했습니다.',
    url: 'https://enrollops.vercel.app/',
    features: ['업무 흐름 분석', '온라인 접수', 'PDF 저장', '관리자 확인', '운영 개선', 'B2B SaaS'],
    board: [
      { label: 'Before', value: '종이 작성 · 스캔 · 파일 저장' },
      { label: 'Flow', value: '온라인 접수 · 관리자 확인 · PDF 저장' },
      { label: 'Impact', value: '수작업 정리 감소 · 보관 용이' },
    ],
    visual: 'ops',
  },
  {
    step: '02',
    name: 'Waitroom',
    label: 'Wait visibility',
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
  {
    step: '03',
    name: 'ZERO100',
    label: 'Execution structure',
    title: '막연한 아이디어를 체크리스트와 개발 TODO로 구조화한 실행 설계 도구',
    summary:
      '서비스 아이디어가 있어도 문제 정의, 화면 흐름, 기능 우선순위, 개발 TODO로 나뉘지 않으면 실제 제작으로 이어지기 어려웠습니다.',
    role:
      'ZERO100은 막연한 아이디어를 문제 정의, 화면 흐름, 기능 우선순위, 개발 TODO로 쪼개 실제 제작 가능한 단위로 정리했습니다.',
    url: 'https://zero100-mu.vercel.app/',
    features: ['문제 정의', '화면 흐름', '기능 우선순위', '개발 TODO', '체크리스트'],
    board: [
      { label: 'Before', value: '막연한 서비스 아이디어' },
      { label: 'Flow', value: '문제정의 · 화면흐름 · 우선순위' },
      { label: 'Impact', value: '실행 가능한 체크리스트와 개발 TODO' },
    ],
    visual: 'spec',
  },
];

export const caseSteps: CaseStep[] = [
  {
    step: 'Step 1',
    title: '문제 확인',
    body: '종이 수강신청서를 다시 스캔하고 저장하는 반복 업무를 발견했습니다.',
  },
  {
    step: 'Step 2',
    title: '흐름 분해',
    body: '작성, 수거, 스캔, 파일명 정리, 온라인 저장 과정을 단계별로 나눴습니다.',
  },
  {
    step: 'Step 3',
    title: '접수 설계',
    body: '온라인 입력, PDF 저장, 관리자 확인이 이어지는 구조로 바꿨습니다.',
  },
  {
    step: 'Step 4',
    title: '확장 검토',
    body: '학원 외 공방, 클래스, 스튜디오에도 적용 가능한 접수 흐름으로 정리했습니다.',
  },
];

export const skills: SkillRow[] = [
  {
    area: 'GenON',
    title: 'AI 기반 편집형 서비스의 핵심 흐름 설계와 구현',
    detail: [
      'AI가 생성한 결과물을 사용자가 직접 수정하고 보완할 수 있도록',
      '편집, 미리보기, 결과 반영이 이어지는 서비스 흐름을 설계하고 구현했습니다.',
    ],
  },
  {
    area: 'Sling',
    title: '콘텐츠 제작 백오피스와 운영 프로세스 개선',
    detail: [
      '문제 제작, 편집, 배포 업무의 병목을 줄이기 위해',
      '콘텐츠 제작 백오피스와 운영 도구를 구축했습니다.',
    ],
  },
  {
    area: 'Danggeun',
    title: '사용자 경험 개선과 데이터 기반 검증 경험',
    detail: [
      '검색 탭 전환 과정의 사용성 문제를 분석하고,',
      '관련검색어 UI와 A/B 테스트를 위한 데이터 로깅 작업에 참여했습니다.',
    ],
  },
  {
    area: 'KOSSA',
    title: '교육기획과 운영 프로세스 설계 경험',
    detail: [
      'SW·AI 교육 과정과 해커톤을 기획·운영하며',
      '교육 대상자, 공공기관, 운영진 사이의 요구사항을 조율했습니다.',
    ],
  },
];
