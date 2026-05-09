import type { Approach, CaseStep, Problem, Project, SkillRow } from '../types/portfolio';

export const problems: Problem[] = [
  {
    title: '아이디어의 비구조화',
    body: '만들고 싶은 서비스는 있지만 명세, 화면, 작업 단위로 정리되지 않습니다.',
  },
  {
    title: '개인 데이터의 방치',
    body: '음식 사진처럼 기록은 쌓이지만 다시 보기 어렵고 활용 가능한 형태로 남지 않습니다.',
  },
  {
    title: '오프라인 운영의 반복',
    body: '종이 신청서 기반 업무는 수기 입력, 보관, 집계, 리포트 작성이 계속 반복됩니다.',
  },
];

export const approaches: Approach[] = [
  {
    icon: 'blocks',
    title: '구조화한다',
    body: '흩어진 아이디어와 데이터를 일정한 형식으로 정리합니다.',
  },
  {
    icon: 'clipboardCheck',
    title: '실행 가능하게 바꾼다',
    body: '정리된 내용을 화면, 기능, TODO, 체크리스트로 변환합니다.',
  },
  {
    icon: 'workflow',
    title: '자동화한다',
    body: '반복되는 생성, 공유, 문서화 과정을 시스템으로 만듭니다.',
  },
];

export const projects: Project[] = [
  {
    step: '01',
    name: '0to100',
    label: 'Spec engine',
    title: '아이디어를 실행 가능한 서비스 명세로 바꾸는 AI 워크플로우',
    summary:
      '서비스 아이디어를 입력하면 문제 정의, 타깃 사용자, 핵심 기능, 화면 흐름, 개발 TODO, QA 체크리스트로 자동 변환합니다.',
    role: '서비스 제작 전 반복되는 기획 정리 과정을 자동화하기 위해 만든 도구입니다.',
    features: ['아이디어 입력', '문제 정의', '화면 흐름', '개발 TODO', 'QA 체크리스트'],
    board: {
      input: '서비스 아이디어 한 문장',
      output: '문제 정의, 화면 흐름, 개발 TODO',
      automation: '명세 생성과 QA 체크리스트 자동화',
    },
    visual: 'spec',
  },
  {
    step: '02',
    name: '오늘뭐먹었지?',
    label: 'Personal archive',
    title: '0to100으로 생성한 명세를 바탕으로 구현한 음식 사진 하루 카드 서비스',
    summary:
      '오늘 먹은 음식 사진 여러 장을 날짜별로 묶고, 음식 이름과 짧은 메모를 더해 한 장의 스토리 카드로 생성합니다.',
    role: '사진첩에 흩어진 음식 사진을 날짜별 기록과 공유 가능한 카드 이미지로 전환합니다.',
    features: ['사진 업로드', '날짜 묶기', '메모 입력', '9:16 카드', '저장과 공유'],
    board: {
      input: '날짜가 섞인 음식 사진 여러 장',
      output: '하루 단위 9:16 스토리 카드',
      automation: '날짜 묶기, 레이아웃 구성, 이미지 저장',
    },
    visual: 'meal',
  },
  {
    step: '03',
    name: 'EnrollOps',
    label: 'Ops automation',
    title: '종이 신청서 기반 운영을 온라인 접수·문서·리포트 자동화로 전환',
    summary:
      '오프라인 신청서를 온라인 접수, 관리자 관리, 문서 생성, 운영 리포트까지 이어지는 자동화 시스템으로 전환합니다.',
    role: '입력, 관리, 문서화, 리포트 생성까지 이어지는 반복 업무를 자동화합니다.',
    features: ['온라인 폼', 'DB 저장', '관리자 대시보드', 'PDF 자동 생성', '운영 리포트'],
    board: {
      input: '종이 신청서와 반복 집계 업무',
      output: '관리자 대시보드, 신청서 PDF, 운영 리포트',
      automation: '접수, 상태 관리, 문서 생성 흐름 자동화',
    },
    visual: 'ops',
  },
];

export const caseSteps: CaseStep[] = [
  {
    step: 'Step 1',
    title: '아이디어 입력',
    body: '음식 사진은 계속 찍지만 사진첩에 쌓이기만 하고, 그날 무엇을 먹었는지 다시 보기 어렵다.',
  },
  {
    step: 'Step 2',
    title: '0to100 결과 생성',
    body: '문제 정의, 핵심 사용자, MVP 기능, 화면 목록, 사용자 플로우, 개발 TODO, QA 체크리스트.',
  },
  {
    step: 'Step 3',
    title: '실제 구현',
    body: '사진 업로드 화면, 음식 정보 입력 화면, 카드 미리보기 화면, 이미지 저장 화면, 기록 아카이브 화면.',
  },
  {
    step: 'Step 4',
    title: '결과',
    body: '아이디어가 단순 메모에서 실제 구현 가능한 서비스 명세로 바뀌었고, 그 명세를 기반으로 MVP를 구현했습니다.',
  },
];

export const skills: SkillRow[] = [
  {
    area: 'Frontend',
    detail: 'React, Vite, TypeScript 기반으로 단계형 화면과 상태 흐름을 설계합니다.',
  },
  {
    area: 'AI Workflow',
    detail: '아이디어 입력값을 문제 정의, 기능 목록, 작업 단위 같은 구조화된 산출물로 변환합니다.',
  },
  {
    area: 'File · Image',
    detail: '음식 사진 업로드와 카드 이미지 생성을 통해 개인 기록을 다시 사용할 수 있게 만듭니다.',
  },
  {
    area: 'Data Modeling',
    detail: '아이디어, 명세, 식사 기록, 신청서 데이터를 도메인별로 구조화합니다.',
  },
  {
    area: 'Export',
    detail: '카드 이미지, 신청서 PDF, 운영 리포트처럼 공유 가능한 결과물을 생성합니다.',
  },
  {
    area: 'UX',
    detail: '생성 전 검토, 수정 가능한 자동화, 단계별 입력 흐름을 설계합니다.',
  },
];
