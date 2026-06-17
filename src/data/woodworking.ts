// 국비지원 목공 직업훈련기관 웹사이트 리뉴얼 — 케이스 스터디 데이터
// 출처: 케이스 개요 / 서비스 기획서 / 요구사항 정의서 / IA / 유저플로우 / 화면설계서

export type CsMeta = { label: string; value: string; href?: string };

export const csMeta: CsMeta[] = [
  { label: '프로젝트', value: '국비지원 목공 직업훈련기관\n웹사이트 리뉴얼' },
  { label: '성격', value: '실무형 프로젝트' },
  { label: '역할', value: '기획 · 설계 · 디자인 · 개발\n전 과정 단독 진행' },
  {
    label: '산출물',
    value: '기획서 · 요구사항 정의서 · IA\n유저플로우 · 화면설계서',
    href: '/deliverables',
  },
];

// 산출물 페이지(/deliverables) — 5종 문서
export const csDeliverables: { no: string; title: string; en: string; summary: string }[] = [
  {
    no: '01',
    title: '서비스 기획서',
    en: 'Service Planning',
    summary: '문제 정의 · 사용자 정의 · 목표 & 설계 원칙 · 범위 의사결정. AS-IS 휴리스틱 평가와 운영자 인터뷰에서 출발.',
  },
  {
    no: '02',
    title: '요구사항 정의서',
    en: 'Requirements Definition',
    summary: '기능 · 데이터 · 비기능 · 정책 요구사항을 MoSCoW로 정리하고, 근본 원인 → 요구사항 → 화면 추적 매트릭스로 연결.',
  },
  {
    no: '03',
    title: '정보구조도 (IA)',
    en: 'Information Architecture',
    summary: 'AS-IS / TO-BE 구조, 과정 데이터 모델, 지원 유형(fundingType) 기반 신청 분기와 공유 데이터 레이어.',
  },
  {
    no: '04',
    title: '유저플로우',
    en: 'User Flow',
    summary: '예비 수강생 전환 흐름(신뢰 신호 접점)과 운영자 워크플로우(접수→상담→등록확인)를 한 흐름으로 설계.',
  },
  {
    no: '05',
    title: '화면설계서',
    en: 'Screen Definition',
    summary: '화면별 구성 · 표시 데이터 · 상태(기본/로딩/빈/에러) · 인터랙션을 정의. 모바일 우선 반응형 기준.',
  },
];

// 한 장 요약 — 문제 → 결정 → 결과 (핵심만 불렛으로, 상세는 아래 챕터에서)
export const csSummary: { tag: string; title: string; points: string[] }[] = [
  {
    tag: '문제',
    title: '있는데, 제 역할을 못 하던 사이트',
    points: [
      '콘텐츠가 데이터가 아닌 이미지·게시글',
      '신청 동선·정보 위계가 미설계',
      '수강생 이탈 · 운영자 반복 수작업',
    ],
  },
  {
    tag: '핵심 결정',
    title: '데이터로 모델링하고, 동선으로 설계',
    points: [
      '과정·일정·신청·문의를 데이터로 분리',
      '탐색→판단→신청 흐름·피드백 설계',
      '취업률 대신 보유 자산으로 확신 구성',
    ],
  },
  {
    tag: '결과',
    title: '보여주기가 아니라 업무 도구',
    points: [
      '신청 데이터 → 운영 워크플로우',
      '사이트가 보여주기가 아니라 업무 도구로',
      '집계 가능한 지표만 "측정 설계"',
    ],
  },
];

// AS-IS 캡처 — 기존 사이트 화면 6장 (각 캡처가 보여주는 문제)
export const csAsIsShots: { key: string; label: string; note: string }[] = [
  { key: 'main', label: '메인 배너', note: '큰 이미지 배너뿐 — 다음 행동 위계 부재' },
  { key: 'mobile', label: '모바일 화면', note: '레이아웃이 깨지고 위젯이 화면을 가림' },
  { key: 'history', label: '학원소개 · 연혁', note: '연혁·소개가 이미지로만 — 스캔 불가' },
  { key: 'support', label: '국비지원', note: '제도 안내가 이미지 — 읽기·이해·수정 어려움' },
  { key: 'schedule', label: '개강일정', note: '게시판→게시글→이메일 접수, 모집 여부 불명확' },
  { key: 'inquiry', label: '상담문의 게시판', note: '게시판으로 받아 응답 시점·피드백이 없음' },
];

// 20개 증상 (직접 사용하며 기록한 이탈 지점) → 4개 근본 원인으로 수렴
export const csSymptoms: { no: number; area: string; problem: string; who: string; cause: string }[] = [
  { no: 1, area: '메인(PC)', problem: '큰 이미지 배너만 있고 다음에 무엇을 눌러야 할지 알 수 없음(행동 위계 부재)', who: '유저', cause: 'B' },
  { no: 2, area: '메인(모바일)', problem: 'CTA는 비교적 명확하나 실시간문의 위젯이 화면을 가림', who: '유저', cause: 'B' },
  { no: 3, area: '학원소개', problem: '연혁·소개가 이미지로만 — 유저는 스캔 불가, 운영자는 수정 시 재제작', who: '둘 다', cause: 'A' },
  { no: 4, area: '국비지원', problem: '제도 안내가 이미지 — 유저는 읽기·이해, 운영자는 수정이 어려움', who: '둘 다', cause: 'A' },
  { no: 5, area: '운영중인 과정', problem: '이미지로 제공 — 유저는 과정 비교가, 운영자는 추가·수정이 어려움', who: '둘 다', cause: 'A' },
  { no: 6, area: '과정 일정표', problem: '일정표가 이미지여서 수정 시 재제작·재업로드, 유저도 읽기 힘듦', who: '둘 다', cause: 'A' },
  { no: 7, area: '개강일정', problem: '모집 가능 여부 불명확, 클릭하면 게시글로 이동해 이메일 접수', who: '유저', cause: 'A·C' },
  { no: 8, area: '훈련사진', problem: '썸네일이 작고 상세에서도 확대 안 됨, 콘텐츠 가치 낮음', who: '유저', cause: 'A·C' },
  { no: 9, area: '상담문의', problem: '작성 후 언제·어떻게 연락 오는지 안내 없음(피드백 부재)', who: '유저', cause: 'B·C' },
  { no: 10, area: '수강신청', problem: '신청해도 즉시 처리 안 됨, 상담과 차이 없음(기대-실제 불일치)', who: '유저', cause: 'B' },
  { no: 11, area: '운영(오프라인)', problem: '면접 후 종이 신청서 → 스캔 → 과정별 수기 보관', who: '운영자', cause: 'A' },
  { no: 12, area: '메인', problem: '시각적 완성도·위계가 낮아 신뢰 기관인지 의심하게 만듦', who: '유저', cause: 'D' },
  { no: 13, area: '메인', problem: '배너·사진·영상이 전부, 과정 실질 정보가 메인에 없음', who: '유저', cause: 'D·A' },
  { no: 14, area: '학원소개', problem: '경영원칙·미션·비전이 큰 영역 차지, 핵심 정체성이 안 드러남', who: '유저', cause: 'D' },
  { no: 15, area: '개강일정(운영)', problem: '게시글에 표 삽입이 안 돼 매월 일정을 이미지로 다시 만들어 수정글로 올림', who: '운영자', cause: 'A·C' },
  { no: 16, area: '메인·과정(운영)', problem: '과정·모집마다 배너 이미지를 매번 직접 제작해야 함', who: '운영자', cause: 'A·D' },
  { no: 17, area: '전체(운영)', problem: '과정별 클릭·관심 데이터가 없어 무엇이 효과 있는지 측정 불가', who: '운영자', cause: 'A·C' },
  { no: 18, area: '공지사항', problem: '공지 탭이 없어 개강일정 게시판에 공지를 섞음 → 유저가 공지를 놓침', who: '둘 다', cause: 'C' },
  { no: 19, area: '개강일정', problem: "유저에게 '작성하기' 버튼이 노출돼 클릭하면 작성이 안 되고 얼럿만 뜸", who: '유저', cause: 'B·C' },
  { no: 20, area: '과정 상세', problem: '커리큘럼이 교육소개 페이지에 따로 있어 과정에서 바로 못 보고 찾아가야 함', who: '유저', cause: 'B·D' },
];

// 4개 근본 원인 (20개 증상 → 4개 원인)
export const csRootCauses: { code: string; title: string; body: string; symptoms: string }[] = [
  {
    code: 'A',
    title: '콘텐츠가 데이터가 아님',
    body: '과정·일정·소개·비용이 이미지/게시글로만 존재해 비교·수정·상태관리·검색이 불가능.',
    symptoms: '증상 3·4·5·6·7·8·11·13·15·16·17',
  },
  {
    code: 'B',
    title: '행동·전환 흐름 미설계',
    body: '탐색→판단→신청 동선·CTA 위계·신청 후 피드백이 모두 없음.',
    symptoms: '증상 1·2·9·10·19·20',
  },
  {
    code: 'C',
    title: '게시판 전용',
    body: '신청·문의·일정·공지에 목적이 다른 게시판을 억지로 사용, 계측도 안 됨.',
    symptoms: '증상 7·8·9·15·17·18·19',
  },
  {
    code: 'D',
    title: '정보 우선순위·시각 위계 실패',
    body: '핵심(과정·정체성·신뢰)은 작고 부차적 정보가 크게 노출 → 첫인상 신뢰 실패.',
    symptoms: '증상 12·13·14·20',
  },
];

// 두 사용자 (need = 핵심 니즈, needNote = 보충 한 줄 / pain = 막히는 점, painQuote = 인용)
export const csUsers: { kind: string; who: string; need: string; needNote: string; pain: string; painQuote?: string }[] = [
  {
    kind: '외부 사용자 (Primary)',
    who: '40~50대 중심 재취업·이직·구직자',
    need: '"진짜 배워서 취업할 수 있나?"',
    needNote: '취업 가능성에 대한 확신',
    pain: '과정·비용이 이미지 · 모집 여부 불명확 · 신뢰 미형성 · 신청 후 응답 불투명',
  },
  {
    kind: '내부 사용자 (Internal)',
    who: '소규모 운영자 (비개발자)',
    need: 'CMS로 직접 수정 · 신청자 상태를 한눈에',
    needNote: '사이트가 업무 도구여야 함',
    pain: '수강신청서를 종이로 받아 사이트가 무의미',
    painQuote: '"과정 하나 바꾸려고 이미지를 다시 만든다."',
  },
];

// 취업률 없이 확신 — 신뢰 신호
export const csTrustSignals: { signal: string; question: string; move: string }[] = [
  { signal: '회차별 커리큘럼', question: '"진짜 배우나?"', move: '이미지 → 데이터화' },
  { signal: '자격증 경로 (건축목공·도장 기능사)', question: '"검증 가능한 결과물 있나?"', move: '묻힘 → 전면화' },
  { signal: '현장 증거 (훈련사진·수강일지)', question: '"실제로 이렇게 배우나?"', move: '작게 → 크게·맥락 있게' },
  { signal: '수강생 인터뷰·뉴스 영상', question: '"내가 해도 될까?"', move: '맥락 보강' },
  { signal: '기관 인증 (우수훈련기관·이수자평가 A등급)', question: '"믿을 기관인가?"', move: '보유 (과장 안 함)' },
];

// 목표
export const csGoals: { no: string; title: string; body: string }[] = [
  {
    no: '01',
    title: '취업 가능성에 대한 확신을 만들어 신청으로 연결한다',
    body: '과정 실효성을 납득시켜 상담·신청까지 끊김 없이 연결.',
  },
  {
    no: '02',
    title: '웹사이트를 실제 운영 업무 도구로 만든다',
    body: '신청 → 데이터 → 상태관리(접수·상담·등록)로 운영 업무에 연결.',
  },
];

// 설계 원칙 (근본 원인을 뒤집음). detail의 \n은 강제 줄바꿈, causes는 뒤집은 원인 코드
export const csPrinciples: { meta: string; title: string; detail: string; causes: string[] }[] = [
  {
    meta: '메타 ①',
    title: '콘텐츠를 데이터로 모델링한다',
    detail: '과정·일정·신청·문의를 분리된 데이터로 관리하고,\n목적별 전용 기능으로 분리(게시판 탈피).',
    causes: ['A', 'C'],
  },
  {
    meta: '메타 ②',
    title: '사용자 동선으로 화면을 설계한다',
    detail: '탐색→판단→신청 전환 흐름과 신청 후 피드백을 설계하고,\n핵심(과정·정체성·신뢰)을 우선 노출하도록 정보 위계 재설계.',
    causes: ['B', 'D'],
  },
];

// 과정을 데이터로 — 지원 유형(fundingType)별 신청 분기
export const csFunding: { course: string; type: string; branch: string; after: string }[] = [
  { course: '인테리어목수 무료', type: '경기도 무료', branch: '1', after: '서식 다운 → 이메일/방문 접수 → 면접 → 선발' },
  { course: '주말목공 · 주말필름 · 집수리', type: '국비지원', branch: '2', after: '전화 등록확인 → 가등록 → 고용24 수강신청·결제' },
  { course: '도장기능사', type: '자부담', branch: '3', after: '전화 등록확인 → 등록 → 큐넷 시험접수' },
];

// 예비 수강생 전환 흐름 (확신이 형성되는 과정 상세 직후에 신청 CTA 배치)
export const csUserFlow: { step: string; trust?: boolean; cta?: boolean; note?: string; sub?: string }[] = [
  { step: '메인 진입', note: '인증·이수자평가 A등급·"수료 후 연계" 노출', sub: '첫인상 신뢰' },
  { step: '모집중 과정 / 과정 목록 (데이터 카드: 평일·주말·회차·태그)' },
  { step: '과정 상세', trust: true, note: 'NCS 회차별 커리큘럼 + 자격증 경로 + 훈련사진', sub: '취업 가능성 확신 형성 유도' },
  { step: '수강신청 (화면에선 과정명으로만 신청)', cta: true, note: '확신이 형성되는 과정 상세 바로 직후 신청 CTA 배치', sub: '지원 유형(데이터)에 따라 절차 자동 안내' },
  { step: '접수완료 → 1영업일 내 전화 (다음 행동·피드백 시점 명시)' },
];

// 운영자 워크플로우
export const csAdminFlow: string[] = [
  '사이트 신청/문의 접수 → 데이터로 저장',
  '대시보드: 신규 신청·문의·모집중 과정 한눈에',
  '신청 관리: 접수 → 전화상담 → (유형별 분기) → 등록확인',
  '문의 관리: 답변대기 → 답변완료 (Q&A)',
];

// 핵심 화면
export const csScreens: { id: string; key: string; name: string; note: string }[] = [
  { id: 'HOME', key: 'home', name: '홈', note: '신뢰 신호 → 모집중 과정 → 신청까지 한 동선' },
  { id: 'COURSE', key: 'courses', name: '과정 안내', note: '이미지가 아닌 데이터 카드로 과정 비교' },
  { id: 'APPLY', key: 'apply', name: '수강신청', note: '모집안내 → 작성 → 접수, 절차 자동 안내' },
  { id: 'SUPPORT', key: 'support', name: '국비지원', note: '제도 안내를 이미지가 아닌 텍스트·표로' },
  { id: 'INQUIRY', key: 'inquiry', name: '상담문의', note: '게시판 대신 목적 전용 Q&A·답변 상태' },
  { id: 'GALLERY', key: 'gallery', name: '훈련 사진', note: '라벨 그리드 + 확대 보기' },
  { id: 'ERROR', key: 'error', name: '에러 페이지', note: '홈으로 돌아가는 길을 남겨 경로 유지' },
];

// 범위 의사결정 — 무엇을, 왜 만들지 않았나
export const csScope: { decision: string; choice: string; reason: string }[] = [
  { decision: '회원제', choice: '미도입', reason: '1회성 사용자에게 로그인은 전환 장벽' },
  { decision: '경기도 무료 온라인 폼', choice: '미구현', reason: '자필 필수·연 1회 → 디지털화 가치 낮음' },
  { decision: '고용24·큐넷 연동', choice: '2차로 연기', reason: '결정적 단계가 외부 정부 시스템' },
  { decision: '취업률·잔여석 표시', choice: '미표시', reason: '집계 안 되는 수치는 만들지 않음' },
];

// 이미지/문서 캡처를 붙일 자리 — value가 비어 있으면 placeholder로 렌더
export type CsFigure = {
  badge: string;
  title: string;
  note: string;
};
