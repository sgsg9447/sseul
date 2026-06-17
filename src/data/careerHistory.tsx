import type { ReactNode } from 'react';

/** Neutral emphasis (dark, semibold) — used for .em and .metric */
const Em = ({ children }: { children: ReactNode }) => <span className="career-em">{children}</span>;
/** Accent emphasis (brand orange) — used for .lit */
const Lit = ({ children }: { children: ReactNode }) => <span className="career-lit">{children}</span>;

export type CareerRow = { label: string; value: ReactNode; decision?: boolean };
export type CareerProject = {
  n: string;
  title: string;
  keys: string;
  rows: CareerRow[];
  flow?: ReactNode[];
};
export type CareerCompany = { name: string; meta: string; projects: CareerProject[] };

export const careerSummary =
  '프론트엔드 개발 경험을 바탕으로, 구현 가능성까지 고려해 제품을 설계하는 기획자입니다. AI 편집 서비스 구조 설계, 콘텐츠 운영 백오피스 기획, 데이터 기반 UX 검증을 수행하며 모호한 요구를 구조로 정리하고 의사결정으로 연결하는 역량을 쌓았습니다.';

export const careerKeywords: ReactNode = (
  <>
    제품 구조 설계 · 데이터 기반 의사결정 · 이해관계자 조율 · 프로세스 자동화 · <b>구현 가능성 검증</b>
  </>
);

export const careerSkills =
  '제품 구조 설계 · 사용자 흐름 설계 · 데이터 기반 검증·의사결정 경험(A/B·OKR) · 도메인 모델링 · 프로세스 자동화 기획 · 이해관계자 조율 · 문서화 · 구현 가능성 검증(React·TypeScript)';

export const careerCompanies: CareerCompany[] = [
  {
    name: 'GenON',
    meta: '생성형 AI 서비스 · 2025.05 ~ 재직중',
    projects: [
      {
        n: '01',
        title: 'AI 슬라이드 편집 서비스 구조 설계',
        keys: '사용자 흐름 · 예외 정의 · B2C/B2B 확장',
        rows: [
          {
            label: '담당 역할',
            value: '① 편집 사용자 흐름 설계 ② 예외 동작 기준 정의 ③ 사업 형태에 독립적인 자산 구조 제안',
          },
          {
            label: '문제·배경',
            value:
              '생성–편집–저장이 분절되면 편집 경험이 무너지고, 작은 동작 차이도 전체 경험에 영향. 동시에 서비스 방향(B2C/B2B)이 불확실한 상황',
          },
          {
            label: '접근·의사결정',
            decision: true,
            value: (
              <>
                편집을 단일 기능이 아니라 ‘흐름’으로 정의하고, 기획서에 없는 예외 상황(선택·포맷·저장 충돌)부터
                도출해 동작 기준을 먼저 확정. 사업 방향 불확실성에 대비해 시스템을{' '}
                <Em>특정 형태에 종속되지 않는 모듈형으로 설계 → B2C·B2B 양쪽 재활용 가능</Em>하도록 판단.
                <br />
                설계안은 <Lit>직접 구현하며 실현 가능성을 검증</Lit>
              </>
            ),
          },
          {
            label: '성과',
            value: (
              <>
                편집–미리보기–반영을 하나의 흐름으로 연결해 일관성·안정성 확보. <Em>B2C 정식 출시</Em>, 동일 구조를
                B2B로 확장 가능한 자산으로 정리
              </>
            ),
          },
        ],
      },
      {
        n: '02',
        title: '디자인 에셋 운영 자동화 기획',
        keys: '병목 분석 · 자산화 · 협업 효율',
        rows: [
          {
            label: '담당 역할',
            value: '① 관리 병목 분석 ② 자산화 운영 기준 수립 ③ 디자이너–개발자 협업 인터페이스 정리',
          },
          {
            label: '문제·배경',
            value:
              '아이콘 등 에셋을 수동 관리하며 추가 비용 증가·확장 한계, 협업 기준이 분산되어 커뮤니케이션 비용 발생',
          },
          {
            label: '접근·의사결정',
            decision: true,
            value:
              '단순 도구 도입이 아니라 ‘추가·변경·테마 대응’까지 한 번에 줄이는 운영 기준을 먼저 정의하고, 디자이너·개발자가 동일 규칙(이름 기반 접근, 색상·테마 처리)을 쓰도록 표준화',
          },
          {
            label: '성과',
            value: (
              <>
                에셋 추가·변경 비용 감소(대상 <Em>「개수 입력」</Em>), UI 일관성 확보, 테마 변경 시 개별 수정 없이
                전역 대응 가능
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    name: '슬링 (Sling)',
    meta: '에듀테크 · 태블릿 교육 앱 ‘오르조’ · 2023.11 ~ 2025.01',
    projects: [
      {
        n: '01',
        title: '콘텐츠 운영 백오피스 기획·구조화',
        keys: '도메인 모델링 · 워크플로우 설계',
        rows: [
          { label: '담당 역할', value: '① 운영 병목 분석 ② 문제 도메인 모델링 ③ 에디션 운영 기준 수립' },
          {
            label: '문제·배경',
            value:
              '매월 반복되는 제작·편집·배포를 수작업으로 처리해 생산성 저하, 과목/유형별 분류 요구 증가로 기존 방식 확장 한계',
          },
          {
            label: '접근·의사결정',
            decision: true,
            value: (
              <>
                도구를 먼저 만들기보다 <Em>문제 데이터를 대/중/소단원 트리로 모델링해 운영 구조를 정의</Em>하고, 현업
                실무자가 직관적으로 구성·재배치하도록 흐름 설계. 기존 문제집을 복사·버전화하는 ‘에디션’ 기준을 세워
                재활용 가능하도록 판단
              </>
            ),
          },
          {
            label: '성과',
            value:
              '제작–편집–배포를 하나의 도구로 통합해 월 운영 효율 향상, 일회성 제작에서 벗어나 콘텐츠 자산화 구조 마련',
          },
        ],
      },
      {
        n: '02',
        title: '앱 릴리즈 없이 대량 콘텐츠를 공급하는 구조 설계',
        keys: '운영 병목 진단 · 공급 구조 전환',
        rows: [
          { label: '담당 역할', value: '① 운영 병목 진단 ② 공급 구조 전환 설계 ③ 시즌 운영·데이터 정책 수립' },
          {
            label: '문제·배경',
            value: (
              <>
                같은 콘텐츠를 iOS·Android에 각각 반영해야 해 콘텐츠 하나를 바꾸는 데도 앱 릴리즈가 필요했고, 시험 시즌엔{' '}
                <Em>약 10만 건</Em>을 단기간에 반영해야 해 공급 속도가 한계
              </>
            ),
          },
          {
            label: '접근·의사결정',
            decision: true,
            value: (
              <>
                화면을 각각 만드는 대신 <Em>웹에서 한 번 만든 결과를 이미지로 공통 사용하는 구조로 전환</Em>해 앱 릴리즈
                의존을 끊는 것을 목표로 잡고, 대량 적재의 성능·용량 문제를 미리 보고 시즌 중심 운영·삭제 정책을 함께 설계
              </>
            ),
          },
          {
            label: '성과',
            value: (
              <>
                콘텐츠 변경에 앱 출시가 불필요해져 출시 주기 단축·리소스 절감, 시즌 대량 콘텐츠 적시 공급으로{' '}
                <Em>월 구독 이용자 수 증가</Em> 기여
              </>
            ),
          },
        ],
        flow: ['JSON 업로드', '웹 렌더링', '이미지 변환', '저장', 'iOS·Android 공통'],
      },
    ],
  },
  {
    name: '당근',
    meta: '중고거래 플랫폼 · Frontend Engineer Intern · 2023.06 ~ 2023.08',
    projects: [
      {
        n: '01',
        title: '연관검색어 기능 구현 · 데이터 검증 참여',
        keys: 'A/B 테스트 환경 · 데이터 로깅 · UI 구현',
        rows: [
          {
            label: '담당 역할',
            value: '① 연관검색어 UI 및 5개 시안 구현 ② A/B 테스트용 데이터 로깅·QA 참여',
          },
          {
            label: '문제·배경',
            value:
              '팀이 설정한 OKR(검색 결과에 연관검색어 제공)에 따라, 추가 탐색을 유도해 거래 효율을 높이기 위한 기능을 도입',
          },
          {
            label: '수행·기여',
            decision: true,
            value: (
              <>
                5개 UI 시안을 직접 구현하고 데이터 로깅·QA에 참여해,{' '}
                <Em>데이터로 최적안을 결정하는 제품 개선 과정을 실무에서 경험</Em>
              </>
            ),
          },
          {
            label: '성과',
            value: (
              <>
                <Em>검색 유저당 검색 전환율 상승에 기여</Em>, 데이터 기반 의사결정 사이클을 가까이서 경험
              </>
            ),
          },
        ],
      },
      {
        n: '02',
        title: '검색 사용성 병목 분석 · 성능 개선',
        keys: '원인 분석 · 렌더링 개선',
        rows: [
          { label: '담당 역할', value: '① 검색 탭 전환 버벅임 원인 분석 ② 렌더링 성능 개선 구현' },
          { label: '문제·배경', value: '검색 탭 전환 시 버벅임으로 사용성이 저해되는 문제 발생' },
          {
            label: '수행·기여',
            decision: true,
            value: (
              <>
                체감 문제를 <Em>정량 지표(프레임 지연)로 환원</Em>해 원인을 특정하고, 개선 효과를 수치로 검증
              </>
            ),
          },
          {
            label: '성과',
            value: (
              <>
                탭 전환 반응 속도 개선(<Em>13 Frame → 8 Frame</Em>), 검색 화면 체감 사용성 향상
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    name: 'Waitroom',
    meta: 'Side Project · 웨이팅 비교 링크 허브 MVP',
    projects: [
      {
        n: '01',
        title: '일상 속 불편을 서비스로 정의한 MVP',
        keys: '문제 발견 · 가설 · 검증',
        rows: [
          { label: '담당 역할', value: '① 문제 정의 ② MVP 설계 ③ 빠른 검증' },
          {
            label: '문제·배경',
            value: '매장 방문 전, 지점별 웨이팅 정보를 각각 따로 확인해야 하는 불편을 직접 경험·인식',
          },
          {
            label: '접근·의사결정',
            decision: true,
            value: (
              <>
                완성도보다 <Em>가설 검증을 우선</Em>해, 여러 지점의 웨이팅 확인 경로를 한 화면에 모은 최소 기능으로
                빠르게 출시
              </>
            ),
          },
          {
            label: '성과',
            value: '일상 불편을 서비스 단위로 구체화·검증, 문제 정의부터 MVP까지 스스로 주도한 제품 사이클',
          },
        ],
      },
    ],
  },
];
