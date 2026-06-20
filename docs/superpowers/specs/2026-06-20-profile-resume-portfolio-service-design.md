# `/profile` — 이력서·포트폴리오 제작 외주 랜딩

작성일: 2026-06-20 · 브랜치: `feat/work-freelance-landing`

## 목적

개인(구직자·프리랜서)을 대상으로 **이력서·포트폴리오·개인 포폴 웹사이트 제작**을 외주로 받기 위한
독립 랜딩 페이지. 크몽 등 마켓에 올려 "엄청 저렴하게" 시작해 첫 리뷰를 쌓는 게 1차 목표.

- 기존 `/work`(사장님 대상 웹사이트 리뉴얼)와 **다른 상품·다른 고객**. 형제 페이지로 분리한다.
- 홈(`/`, 입사지원용)과 `/work`는 건드리지 않는다. 새 라우트만 추가한다.

## 라우트

`App.tsx`(pathname switch SPA)에 `/profile` 한 줄 추가. 대안 후보 `/portfolio`는 `/portfolio-pdf`와
혼동되어 제외.

## 가격 전략 (2단계)

리뷰 0개 구간에서는 **런칭가로 후려치고**, 리뷰가 붙으면 정상가로 올린다.

| 티어 | 결과물 | 런칭가 | 정상가 |
|---|---|---|---|
| BASIC | 이력서 PDF 1장(A4), 1회 수정, 2~3일 | ₩25,000 | ₩59,000 |
| STANDARD ⭐ | 이력서+포트폴리오 PDF(1~2장), 2회 수정 | ₩49,000 | ₩99,000 |
| PREMIUM | 1페이지 개인 포폴 웹사이트 + 배포 + PDF | ₩149,000 | ₩350,000 |

가장 강한 신뢰 자산: **본인의 `/resume`·`/portfolio-pdf`·`/career`** 가 이미 print-ready로 존재 →
"제가 만든 걸 직접 보세요"로 리뷰 0개를 덮는다.

## 페이지 구성 (`ProfilePage.tsx`)

1. **Header** (`ProfileHeader`) — 브랜드→`/profile`, 앵커 내비, 이메일 CTA. `WorkHeader` 미러.
2. **Hero** — "개인 포폴의 시대" 훅 + 요약 카드(시작가·기간). `/portfolio-pdf` 링크.
3. **Tiers** ⭐핵심 — BASIC/STANDARD(featured)/PREMIUM 3카드. 런칭 특가 배지, 티어별 문의 CTA.
4. **Samples** — `/resume`·`/portfolio-pdf`·`/career`로 링크하는 "내 작업물" 3카드.
5. **Process** — 자료 전달 → 시안 → 수정 → 전달 (4단계).
6. **FAQ** — 자료 안 정리됨/직군 무관/수정 횟수/기간 등 의뢰인 불안 해소.
7. **Contact** — 이메일 우선(+전화), "이렇게 시작해요" 스텝. `/work` contact 패턴 재사용.

## 실제 외주 수주 동선

정적 SPA라 백엔드 없이 **mailto 구조화 템플릿**으로 실제 문의를 받는다:
`MAIL_HREF` 본문에 원하는 상품·직무·마감일·가진 자료·참고 링크 항목을 미리 채워, 문의 메일이
바로 견적 가능한 형태로 도착하게 한다. 티어별 CTA는 제목에 상품명을 박는다(`mailForTier`).

## 파일

- `src/data/profile.ts` — 카피·티어·샘플·프로세스·FAQ·연락 데이터 (`freelance.ts` 패턴).
- `src/pages/ProfilePage.tsx` — 페이지 구성.
- `src/components/layout/ProfileHeader.tsx` — 헤더.
- `src/styles.css` — 끝에 `.pf-*` 스코프 추가. 공용 프리미티브(`.btn`, `.eyebrow`,
  `.work-section/-inner/-intro`, `.work-hero*`, `.work-contact*`, `.work-deliver-link`)는 재사용.
- `src/App.tsx` — `/profile` 라우트.

## 검증

`npm run build`, `npx vitest run`, 프리뷰 스크린샷(데스크톱+모바일).
