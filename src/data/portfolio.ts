import type { Approach, CaseStep, Problem, Project, SkillRow } from '../types/portfolio';

export const problems: Problem[] = [
  {
    title: '아이디어의 실행 단위화',
    body: '서비스 아이디어를 문제 정의, 화면 흐름, 기능 우선순위, 개발 TODO로 나누는 기준이 필요했습니다.',
  },
  {
    title: 'AI 산출물의 실효성 검증',
    body: 'AI가 생성한 명세가 문서에 머무르지 않고 실제 제품 구현까지 이어지는지 확인해야 했습니다.',
  },
  {
    title: '오프라인 운영의 데이터화',
    body: '종이 신청서 기반 업무를 접수, 상태 관리, 문서 생성, 리포트까지 이어지는 온라인 흐름으로 바꿔야 했습니다.',
  },
];

export const approaches: Approach[] = [
  {
    icon: 'blocks',
    title: '구조화한다',
    body: '아이디어와 운영 입력을 문제 정의, 사용자, 기능, 화면, 데이터 구조로 정리합니다.',
  },
  {
    icon: 'clipboardCheck',
    title: '검증한다',
    body: '생성된 명세를 실제 제품으로 구현하며 화면 흐름과 개발 TODO의 유효성을 확인합니다.',
  },
  {
    icon: 'workflow',
    title: '전환한다',
    body: '검증된 구조화 방식을 반복 운영 업무에 적용해 접수, 문서화, 리포트를 자동화합니다.',
  },
];

export const projects: Project[] = [
  {
    step: '01',
    name: '0to100',
    label: 'Spec engine',
    title: '아이디어를 개발 가능한 명세와 실행 체크리스트로 변환하는 AI 워크플로우',
    summary:
      '서비스 아이디어를 입력하면 문제 정의, 타깃 사용자, 핵심 기능, 화면 흐름, 개발 TODO, QA 체크리스트까지 한 번에 생성합니다.',
    role:
      '생성된 스펙은 FoodieCard 구현에 적용해 실제 개발 단계에서 화면 구성과 기능 우선순위를 정하는 기준으로 검증했습니다.',
    features: ['문제 정의', '타깃 사용자', 'MVP 범위', '화면 흐름', '개발 TODO', 'QA 체크리스트'],
    board: {
      input: '서비스 아이디어 한 문장',
      output: '구현 가능한 서비스 명세와 작업 단위',
      automation: '기획 정리, TODO, QA 체크리스트 생성 자동화',
    },
    visual: 'spec',
  },
  {
    step: '02',
    name: 'FoodieCard',
    label: 'Workflow validation',
    title: '0to100 산출물이 실제 제품 구현까지 이어짐을 증명한 검증 프로젝트',
    summary:
      '0to100이 만든 기능 정의, 화면 흐름, 개발 TODO를 기준으로 음식 사진 하루 카드 서비스를 구현해 산출물의 실행 가능성을 검증했습니다.',
    role:
      '식단 사진과 짧은 메모를 하루 기록 카드로 전환하는 제품을 완성하며, 생성된 스펙이 초기 화면 구성과 기능 우선순위 설정에 유효함을 확인했습니다.',
    features: ['스펙 기반 구현', '사진 업로드', '메모 입력', '카드 미리보기', '이미지 저장'],
    board: {
      input: '0to100이 생성한 서비스 명세',
      output: '하루 식사 카드 생성 제품',
      automation: '화면 흐름, 기능 정의, TODO의 구현 적합성 검증',
    },
    visual: 'meal',
  },
  {
    step: '03',
    name: 'EnrollOps',
    label: 'Ops automation',
    title: '종이 신청서 기반 운영을 데이터 중심 온라인 워크플로우로 전환',
    summary:
      '오프라인 신청서 운영을 온라인 접수, 관리자 상태 관리, 신청서 PDF 생성, 운영 리포트까지 이어지는 시스템으로 전환했습니다.',
    role:
      '반복 입력과 수기 집계를 줄이기 위해 접수, 데이터 저장, 상태 관리, 문서화, 리포트 생성을 하나의 운영 흐름으로 연결했습니다.',
    features: ['온라인 접수', '상태 관리', '신청서 PDF', '운영 리포트', '관리자 대시보드'],
    board: {
      input: '종이 신청서와 반복 집계 업무',
      output: '관리자 대시보드, 신청서 PDF, 운영 리포트',
      automation: '접수, 보관, 상태 관리, 문서 생성, 리포트 자동화',
    },
    visual: 'ops',
  },
];

export const caseSteps: CaseStep[] = [
  {
    step: 'Step 1',
    title: '검증 주제 선정',
    body: '음식 사진과 짧은 메모를 하루 기록 카드로 바꾸는 작은 서비스를 0to100 검증 대상으로 선정했습니다.',
  },
  {
    step: 'Step 2',
    title: '0to100 산출물 생성',
    body: '문제 정의, 핵심 사용자, MVP 기능, 화면 목록, 사용자 플로우, 개발 TODO, QA 체크리스트를 생성했습니다.',
  },
  {
    step: 'Step 3',
    title: 'FoodieCard 제품 구현',
    body: '사진 업로드, 음식 정보 입력, 카드 미리보기, 이미지 저장 흐름을 실제 제품 화면으로 구현했습니다.',
  },
  {
    step: 'Step 4',
    title: '검증 결과 반영',
    body: '초기 화면 구성과 기능 우선순위에는 생성 산출물이 유효했고, 이미지 저장과 예외 상태는 구현 과정에서 추가 정의가 필요함을 확인했습니다.',
  },
];

export const skills: SkillRow[] = [
  {
    area: 'Frontend',
    detail: 'React, Vite, TypeScript 기반으로 명세 생성, 카드 제작, 관리자 운영 화면의 상태 흐름을 구현했습니다.',
  },
  {
    area: 'AI Workflow',
    detail: '아이디어 입력값을 문제 정의, 기능 목록, 화면 흐름, 개발 TODO, QA 체크리스트로 변환하는 흐름을 설계했습니다.',
  },
  {
    area: 'File · Image',
    detail: 'FoodieCard에서 사진 업로드와 카드 미리보기를 구현하며 0to100 산출물의 실행 가능성을 검증했습니다.',
  },
  {
    area: 'Data Modeling',
    detail: '아이디어, 명세, 식사 기록, 신청서, 운영 상태 데이터를 도메인별로 구조화했습니다.',
  },
  {
    area: 'Export',
    detail: '카드 이미지, 신청서 PDF, 운영 리포트처럼 공유와 보관이 가능한 결과물을 생성했습니다.',
  },
  {
    area: 'UX',
    detail: '자동 생성 결과를 사용자가 검토하고 수정할 수 있도록 단계별 입력과 확인 흐름을 설계했습니다.',
  },
];
