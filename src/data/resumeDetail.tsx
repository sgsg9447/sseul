import type { ReactNode } from 'react';

/** Metric — neutral emphasis (dark, semibold) */
const M = ({ children }: { children: ReactNode }) => <span className="resume-d-metric">{children}</span>;
/** Lit — accent emphasis (brand orange) */
const L = ({ children }: { children: ReactNode }) => <span className="resume-d-lit">{children}</span>;

export type DetailBlock = { label: string; items: ReactNode[] };
export type DetailProject = {
  title: string;
  keys?: string;
  blocks: DetailBlock[];
  flow?: ReactNode[];
  stack?: string;
};
export type DetailMeta = { label: string; value: ReactNode };
export type DetailPage = {
  id: string;
  kicker: string;
  company: string;
  sub: string;
  date: string;
  meta?: DetailMeta[];
  projects: DetailProject[];
};

export const resumeDetailPages: DetailPage[] = [
  {
    id: 'resume-detail-genon',
    kicker: 'Work Experience —',
    company: '제논',
    sub: '생성형 AI 서비스',
    date: '2025.05 - 재직중',
    projects: [
      {
        title: 'AI 슬라이드 편집 서비스 구조 설계',
        keys: '사용자 흐름 · 예외 정의 · B2C/B2B 확장',
        blocks: [
          {
            label: '배경',
            items: [
              'AI가 생성한 슬라이드를 사용자가 직접 편집·저장하는 신규 서비스로, 생성–편집–저장이 분절되지 않는 일관된 흐름 설계가 필요',
              '편집형 서비스 특성상 작은 동작 차이도 전체 경험에 큰 영향을 주어, 기획서 이면의 예외 상황 정의가 품질의 핵심',
            ],
          },
          {
            label: '주요 수행',
            items: [
              '생성–편집–저장으로 이어지는 사용자 흐름을 기능 단위로 나누어 설계하고, 화면 전환·상태 변화 기준 정리',
              '기획서에 명시되지 않은 예외 동작(선택·포맷·저장 충돌 등)을 선제적으로 도출해 동작 기준을 구체화하고 협업 주도',
              '편집 시스템을 특정 사업 형태에 종속되지 않는 모듈형 구조로 정의 → B2C뿐 아니라 B2B 환경에서도 동일 자산을 재활용할 수 있도록 구조화',
              <>
                <L>구현 가능성 검증</L> — React·TypeScript 기반으로 직접 구현하며 설계안의 실현 가능성을 함께 확인
              </>,
            ],
          },
          {
            label: '결과',
            items: [
              '편집–미리보기–반영 흐름을 하나의 과정으로 연결해 편집 경험의 일관성·안정성 확보',
              <>
                <M>B2C 서비스로 정식 출시</M>, 동일 구조를 B2B로 확장 가능한 자산으로 정리
              </>,
            ],
          },
        ],
      },
      {
        title: '디자인 에셋 운영 자동화 기획',
        keys: '병목 분석 · 자산화 · 협업 효율',
        blocks: [
          {
            label: '배경',
            items: [
              '아이콘 등 디자인 에셋을 수동 관리하며 추가 시마다 비용이 늘고 팀 단위 확장에 한계',
              '디자이너–개발자 간 에셋 전달·관리 기준이 분산되어 협업 비용 발생',
            ],
          },
          {
            label: '주요 수행',
            items: [
              '수동 관리 병목을 분석하고, 에셋을 코드 기반 자산으로 관리하는 자동화 체계로 전환하는 방향 기획',
              '디자이너·개발자 간 인터페이스를 단순화하는 관리 기준(이름 기반 접근, 색상·테마 대응 규칙) 정리',
            ],
          },
          {
            label: '결과',
            items: [
              <>
                에셋 추가·변경 비용 감소 (대상 아이콘 <M>200개</M>), 디자인 시스템 UI 일관성 확보
              </>,
              '테마 변경 시 개별 수정 없이 전역 대응 가능한 운영 구조 마련',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'resume-detail-sling',
    kicker: 'Work Experience —',
    company: '슬링',
    sub: "수험생 대상 태블릿 전용 교육 앱 '오르조'",
    date: '2023.11 - 2025.01',
    projects: [
      {
        title: '콘텐츠 운영 백오피스 기획·구조화',
        keys: '도메인 모델링 · 워크플로우 설계',
        blocks: [
          {
            label: '배경',
            items: [
              '매월 반복되는 문제 제작·편집·배포를 수작업으로 처리하며 생산성 저하',
              '과목/유형별 문제 분류 요구가 늘며 기존 방식으로 확장 한계 발생',
            ],
          },
          {
            label: '주요 수행',
            items: [
              '반복 업무의 병목을 분석해 제작–편집–배포를 하나의 운영 도구로 통합하는 백오피스 기획',
              '문제 데이터를 대/중/소단원 트리 구조로 모델링하고, 현업 실무자가 직관적으로 구성·재배치할 수 있는 운영 흐름 설계',
              "기존 문제집을 복사해 새 버전으로 배포하는 '에디션' 운영 기준 수립 (기존 자산 재활용)",
            ],
          },
          {
            label: '결과',
            items: [
              '파편화된 제작·편집·배포 흐름을 하나의 도구로 통합, 월 단위 콘텐츠 운영 효율 향상',
              '일회성 제작에서 벗어나 기존 문제 재활용이 가능한 콘텐츠 자산화 구조 마련',
            ],
          },
        ],
      },
      {
        title: '앱 릴리즈 없이 대량 콘텐츠를 공급하는 구조 설계',
        keys: '운영 병목 진단 · 공급 구조 전환',
        blocks: [
          {
            label: '배경',
            items: [
              '같은 콘텐츠를 iOS·Android에 각각 반영해야 해, 콘텐츠 하나를 바꾸는 데도 앱 릴리즈가 필요',
              <>
                시험 시즌에는 <M>약 10만 건</M>을 단기간에 반영해야 해, 기존 방식으로는 공급 속도가 따라가지 못함
              </>,
            ],
          },
          {
            label: '판단·설계',
            items: [
              <>
                화면을 각각 만드는 대신 <M>웹에서 한 번 만든 결과를 이미지로 공통 사용하는 구조로 전환</M>해, 앱 릴리즈
                의존을 끊는 것을 목표로 설정
              </>,
              '어드민 업로드 → 자동 변환 → 앱 반영까지 사람 개입이 없는 운영 흐름으로 설계',
              '대량 적재로 생길 성능·용량 문제를 미리 보고, 시즌 중심 보관·삭제 정책을 함께 정의',
            ],
          },
          {
            label: '결과',
            items: [
              '콘텐츠를 바꿔도 앱 출시가 불필요 → 출시 주기 단축·개발 리소스 절감',
              <>
                시즌 대량 콘텐츠를 적시 공급해 <M>월 구독 이용자 수 증가</M>에 기여
              </>,
            ],
          },
        ],
        flow: ['JSON 업로드', '웹 렌더링', '이미지 변환', '저장', 'iOS·Android 공통'],
        stack: 'html2canvas · Puppeteer',
      },
    ],
  },
  {
    id: 'resume-detail-daangn',
    kicker: 'Internship Project —',
    company: '당근',
    sub: "중고거래 플랫폼 '당근'",
    date: '2023.06 - 2023.08',
    projects: [
      {
        title: '연관검색어 기능 구현 · 데이터 검증 참여',
        keys: 'A/B 테스트 환경 · 데이터 로깅 · UI 구현',
        blocks: [
          {
            label: '배경',
            items: [
              '팀이 설정한 OKR(검색 결과에 연관검색어 제공)에 따라, 추가 탐색을 유도해 거래 효율을 높이기 위한 기능을 도입',
            ],
          },
          {
            label: '주요 수행',
            items: [
              '사용자 검색 결과에 연관검색어를 노출하는 UI와 5가지 시안을 직접 구현',
              'A/B 테스트용 데이터 로깅·QA에 참여해, 데이터로 최적안을 결정하는 제품 개선 과정을 실무에서 경험',
            ],
          },
          {
            label: '결과',
            items: [
              <M>검색 유저당 검색 전환율 상승에 기여</M>,
              '기능 구현에 그치지 않고 데이터 기반 의사결정 사이클을 가까이서 경험',
            ],
          },
        ],
      },
      {
        title: '검색 사용성 병목 분석 · 성능 개선',
        keys: '원인 분석 · 렌더링 개선',
        blocks: [
          {
            label: '배경',
            items: ['검색 탭 전환 시 버벅임으로 사용성이 저해되는 문제 발생'],
          },
          {
            label: '주요 수행',
            items: ['체감 문제를 정량 지표(프레임 지연)로 환원해 원인을 특정하고, 렌더링 성능 개선을 구현·검증'],
          },
          {
            label: '결과',
            items: [
              <>
                탭 전환 반응 속도 개선 (<M>13 Frame → 8 Frame</M>), 검색 화면 체감 사용성 향상
              </>,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'resume-detail-woodworking',
    kicker: 'Main Project —',
    company: '목공 직업훈련기관 리뉴얼',
    sub: '국비지원 목공 직업훈련기관 웹사이트 리뉴얼 (실무형 · 단독)',
    date: '기획 · 설계 · 디자인 · 개발 전 과정 단독 진행',
    meta: [
      { label: '대상', value: '실제 운영 중인 직업훈련기관 (사명 비공개)' },
      { label: '역할', value: '기획 · 설계 · 디자인 · 개발 (1인)' },
      { label: '분석', value: 'AS-IS 휴리스틱 평가 + 운영자 인터뷰' },
      {
        label: '산출물',
        value: <a href="/deliverables">기획서 · 요구사항 정의서 · IA · 유저플로우 · 화면설계서</a>,
      },
    ],
    projects: [
      {
        title: '이미지·게시판으로 흩어진 사이트를 데이터·동선으로 재설계',
        keys: '문제 정의 · 데이터 모델링 · 동선 설계',
        blocks: [
          {
            label: '배경',
            items: [
              '실제 운영 사이트와 운영자를 대상으로 한 분석에서 출발. 콘텐츠가 데이터가 아닌 이미지·게시글로만 존재하고, 탐색→판단→신청 동선과 정보 위계가 설계되지 않은 상태',
              <>
                메인→과정→국비지원→일정→신청까지 직접 사용하며 이탈 지점 <M>20개</M>를 기록하고{' '}
                <M>4개 근본 원인</M>으로 수렴
              </>,
            ],
          },
          {
            label: '주요 수행',
            items: [
              <>
                과정을 <L>데이터로 모델링</L>하고 지원 유형(경기도 무료·국비·자부담)을 속성으로 담아, 수강생은 과정명만으로 신청하면 절차가 자동으로 갈라지도록 정보구조 설계
              </>,
              '탐색→판단→신청으로 이어지는 전환 흐름과 신청 후 피드백(1영업일 내 전화)을 설계해, 확신이 형성되는 과정 상세 직후에 신청을 배치',
              '운영자 워크플로우를 접수→상담→등록확인으로 모델링해, 신청을 종이가 아니라 상태관리되는 데이터로 전환',
            ],
          },
          {
            label: '결과',
            items: [
              <>
                보여주기용 사이트를 <M>신청·운영까지 잇는 업무 도구</M>로 재정의
              </>,
              '문제 정의부터 정보구조·유저플로우·화면설계까지 산출물 5종으로 정리하고 모바일 우선 화면으로 구현',
            ],
          },
        ],
      },
      {
        title: "취업률 없이 '확신'을 만든 핵심 설계 판단",
        keys: '사용자 정의 · 신뢰 신호 설계 · 범위 의사결정',
        blocks: [
          {
            label: '배경',
            items: [
              '1순위 사용자 니즈는 "진짜 배워서 취업되나"였지만, 기관은 취업률을 집계하지 않아 가장 강력한 증거를 화면에 제시할 수 없는 상황',
            ],
          },
          {
            label: '판단·설계',
            items: [
              <>
                취업을 "보장"하지 않고, 사용자가 스스로 "할 수 있겠다"고 판단할 <L>근거를 제공</L>하는 방향으로 결정 — 없는 수치를 만들지 않고 보유 자산(회차별 커리큘럼·자격증 경로·현장 증거·기관 인증)으로 확신을 구성
              </>,
              '회원제·온라인 결제·실시간 채팅 등 흔한 기본값을 사용자 정의(1회성·디지털 장벽)에 근거해 의심하고 걷어냄',
            ],
          },
          {
            label: '결과',
            items: [
              '집계되지 않는 수치는 성과로 과장하지 않고 런칭 후 "측정 설계"로 분리해, 신뢰·윤리를 지키면서 전환 근거를 설계',
              '사용자 정의 → 목표 → 범위가 한 줄기로 이어지는, 판단의 근거를 문서로 남긴 기획',
            ],
          },
        ],
        stack: 'React · TypeScript',
      },
    ],
  },
  {
    id: 'resume-detail-waitroom',
    kicker: 'Side Project —',
    company: 'Waitroom',
    sub: '웨이팅 비교 링크 허브 MVP (개인)',
    date: 'Personal Project',
    meta: [
      { label: '기간', value: '2026.05.18 - 25' },
      { label: '역할', value: '기획 · 디자인 · 개발 (1인)' },
      { label: 'Stack', value: 'React · TypeScript · Supabase · Vercel' },
      {
        label: 'Link',
        value: (
          <a href="https://waitroom.space/cartier" target="_blank" rel="noreferrer">
            waitroom.space
          </a>
        ),
      },
    ],
    projects: [
      {
        title: '일상 속 불편을 서비스로 정의한 MVP',
        keys: '문제 발견 · 가설 · 검증',
        blocks: [
          {
            label: '배경',
            items: ['매장 방문 전, 지점별 웨이팅 정보를 각각 따로 확인해야 하는 불편을 직접 경험하고 문제로 인식'],
          },
          {
            label: '주요 수행',
            items: [
              '“방문 전 여러 지점의 웨이팅을 한눈에 비교할 수 없다”는 문제를 정의하고, 여러 매장의 웨이팅 확인 경로를 한 화면에 모은 링크 허브 MVP 설계',
              '사용자가 방문 전 선택지를 빠르게 좁힐 수 있는 최소 기능으로 빠르게 검증',
            ],
          },
          {
            label: '결과',
            items: [
              '일상 속 불편을 작은 서비스 단위로 빠르게 구체화·검증한 경험',
              '문제 정의부터 MVP 출시까지 스스로 주도한 제품 사이클',
            ],
          },
        ],
      },
      {
        title: '직접 구현·배포',
        keys: 'React · TypeScript · Supabase · Vercel',
        blocks: [
          {
            label: '주요 수행',
            items: [
              '링크 허브 UI를 React·TypeScript로 직접 구현하고, Supabase로 데이터·API를 구성',
              '여러 지점의 웨이팅 확인 경로를 한 화면에서 비교·이동하도록 모바일 우선으로 UI 설계',
              'Vercel로 배포해 별도 서버 없이 빠르게 사용자 검증',
            ],
          },
          {
            label: '결과',
            items: [
              <>
                기획 → 디자인 → 구현 → 배포를 혼자 끝까지 완주한 <M>풀사이클 경험</M>
              </>,
            ],
          },
        ],
      },
      {
        title: '회고 · 배운 점',
        blocks: [
          {
            label: '배운 점',
            items: [
              '완성도보다 “가설을 가장 빨리 검증할 최소 범위”를 먼저 정하는 것이 중요함을 체감',
              '내 불편을 문제로 정의하고 직접 서비스로 만들어 본 경험이, 제품을 기획하는 기준을 잡는 데 도움',
            ],
          },
        ],
      },
    ],
  },
];
