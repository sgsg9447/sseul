# Hoonjo 포트폴리오 — 작업 기록 & 결정 로그

> 조영훈(Hoonjo) 시니어 프론트엔드 포트폴리오. 라우트 `/d/hoonjo-b9e634` (숨김 샘플·noindex).
> 기반: `hoonjo-design` 디자인 시스템 + 그가 직접 쓴 옵시디언 볼트/이력서/프로젝트 회고.
> 성격: **이 페이지는 쇼케이스**다. 프로젝트가 주연, 자세한 글은 조연 — "전체 글 읽기"는 훈조의 진짜 사이트(`h8njo.vercel.app`)로 링크한다.

이 문서는 **무엇을 만들었고, 왜 그렇게 판단했는지**를 남긴 결정 로그다.

---

## 관통하는 5가지 원칙

1. **진짜 숫자만.** 디자인 시스템 예시에 박혀 있던 그럴듯한 가짜 숫자(`@hoonjo/typeset`, `hello@hoonjo.dev` 등)는 전부 버리고, 그가 실제로 측정한 값만 썼다. 검증 안 되는 숫자는 시니어 면접에서 독이다.
2. **무자비한 큐레이션.** 다 넣으면 그게 기존 사이트가 망한 이유(블로그 더미)다. **대표 5개**만 골랐다.
3. **정직함.** 안 만든 것(velto)·못 푼 한계(표 분할, reparenting 끊김)는 숨기지 않고 그대로 적었다. 매칭 안 되는 자료(디자인 시스템 제품 스크린샷)는 빼고 내용과 맞는 코드 패널로 대체.
4. **도메인 몰라도 읽히게.** 타깃은 "교육/보안 도메인을 모르는 **프론트엔드 엔지니어**". 기술 깊이는 유지하되 도메인 포장지(조판·지문·보안관제·관제사)만 투명하게 글로싱.
5. **자급식 폴더.** 이 폴더 하나가 통째로 떨어져 나가게(추출 계약). 외부 import 0, `.hoonjo`로 스코프, lazy 청크.

---

## 주요 결정

### 1. 쇼케이스 + 외부 링크 — 프로젝트가 주연, 글이 조연
한때 내부 `/works` 아카이브(리스트+상세 마크다운)를 만들었다가, **글은 훈조 진짜 사이트에 있고 여기선 링크만** 하는 게 맞다는 피드백으로 걷어냈다. 지금 각 "전체 글 읽기 ↗"는 새 탭으로 실제 글로 연결:
`/work/column-count-layout` · `/work/security-portal` · `/work/design-system` · `/work/security-ai` · `/work/webgl-blackhole`. URL은 `content.ts`의 `postUrl`만 갈아끼우면 된다.

### 2. 메트릭 진실성 — "Numbers do the bragging"을 진짜 숫자로
브랜드 룰이 "숫자로 증명"이라 볼트 실측값만 썼고, 약한 세로 블록 대신 **가로 한 줄 스트립 + 큰 볼드 숫자**(`MetricRow`)로 눈에 들어오게 했다.
- column-pager: 100장 재배치 **55–66ms**, 편집 1건 **11–16ms**, 결정적 테스트 **49개**
- 법무부 포털: 컬럼 정의 1벌 → **59개 화면**, 696/1,299 커밋
- ML 마법사: 코드 없이 **5단계 GUI**로 모델 학습, ES `should→must` 버그

### 3. 큐레이션 기준과 선정 (대표 5)
**기준:** ① 범위 > 중복 ② 임팩트/측정값 ③ 시니어 시그널(트레이드오프·정직한 한계·오너십) ④ 최신성

| 작업 | 증명 역량 | 회사 | 시각자료 |
|---|---|---|---|
| column-pager (flagship) | 렌더링/측정 + OSS | @Bookips | 실제 PDF 출력 2컷 |
| 59화면 포털 | 시스템 설계/추상화 | @Zipida·법무부 | 포털 스크린샷 3컷 |
| 디자인 시스템 자동화 | 라이브러리/DX | @Bookips | 코드 패널(Select API·코드젠) |
| ML 학습 마법사 | 복잡한 상태/풀스택 | @Zipida·KISTI | 관제 화면 3컷 |
| 블랙홀 | 그래픽스 (라이브) | 개인 | 실시간 WebGL 렌더 |

**제외:** 대용량 PDF(@Sling) — 소스 이미지 없고 사용자가 빼기로(경력 타임라인엔 남김). **보류:** 본문 에디터, prod/local PDF, CTF 채점, BFF, POD, 엑셀, combineLifecycles, corocoro, velto, gatsby.

### 4. 이미지 가득 + 라이트박스
"휑하다"는 피드백에 케이스를 **이미지 갤러리**(큰 대표 화면 + 썸네일)로 채웠다. zip에서 실제 화면을 더 뽑았고([assets/](./assets/)), 클릭하면 **풀스크린 확대**([Lightbox](./Lightbox.tsx)). flagship은 모형(PagedDoc) 대신 **진짜 column-pager PDF 출력**으로 교체.

### 5. 라이브 WebGL 블랙홀 (가짜 → 진짜)
원래 패널은 CSS 정지 그림이었다. 그래픽 프로젝트를 정지 그림으로 보여주는 건 거짓에 가까워서, 실제 기법(Canvas 별판 → WebGL 텍스처 → 셰이더 UV 왜곡)대로 **실시간 렌더**로 교체([BlackHole](./BlackHole.tsx)).
- 헤드리스 프리뷰는 WebGL 캡처를 못 해 흰 화면 → `readPixels`로 검증(9.8만 px·파란 고리 2,410px).
- **버그:** React StrictMode가 effect를 두 번 도는데 cleanup의 `loseContext()`가 컨텍스트를 죽여 리마운트 시 검은 화면 → cleanup에서 loseContext 제거, 리소스만 해제.

### 6. 회사 vs 서비스 — `@회사` 컨벤션
`Bookips · Solvook`이 헷갈려서 **`@회사`**로 통일(@Bookips/솔북, @Zipida·법무부). `@`=소속, 제품·고객은 글에서 풀어 씀.

### 7. Expertise = 역량 → 증거 지도
기술 나열이라 죽은 섹션을 **역량 → 그걸 증명한 작업**으로. 프로젝트명은 클릭하면 해당 작업으로 스크롤(앵커 `work-*` + `scroll-margin-top`).

### 8. 콜드 리더 패스
도메인 모르는 FE가 처음부터 막힘 없게: 도메인어 인라인 글로싱(조판→2단 레이아웃, 지문→본문, 보안관제→관리자 포털, CRUD→추가·수정·삭제), 떠다니는 히어로 메트릭 제거.

---

## 구조 (자급식 폴더)

```
src/drafts/samples/hoonjo/
├── index.tsx        # .hoonjo 루트 + 라이트박스 프로바이더 + MainPortfolio
├── sections.tsx     # Nav/Hero/Work(케이스 카드·코드 패널)/Career/Expertise/OpenSource/Contact
├── Flagship.tsx     # column-pager 카드 (실제 PDF 갤러리)
├── BlackHole.tsx    # 실시간 WebGL 중력렌즈 렌더
├── Lightbox.tsx     # 이미지 클릭 확대 + Gallery 컴포넌트
├── components.tsx   # 디자인 시스템 프리미티브 TS 포팅 (+ MetricRow)
├── content.ts       # 모든 카피·데이터·postUrl (여기만 고치면 내용 수정)
├── assets/          # 실제 제품 스크린샷 (법무부·KISTI·column-pager PDF)
├── tokens.css       # 디자인 토큰(.hoonjo 스코프) + 웹폰트
└── styles.css       # 레이아웃·반응형·마크다운(미사용 잔여 가능)
```

**검증:** 매 단계 `tsc` + `vite build` + DOM 점검(+가능하면 스크린샷), WebGL은 `readPixels`. 단, 메인이 길고 WebGL이 있어 헤드리스 스크린샷이 스크롤 아래를 못 뜨므로 실제 브라우저 확인이 필요.

---

## 남은 것 (사용자 확인 필요)

1. **연락처** — `jaiem9@gmail.com` / GitHub `H8njo`는 낡은 이력서 PDF 출처. 최신인지 Hoonjo 확인.
2. **회사 실명 노출** — 법무부·KISTI 실명 그대로. NDA면 "정부기관 보안관제 포털"로 가림.
3. **슬링 경력 처리** — 작업에선 뺐지만 경력 타임라인엔 남겨둠(2023–2024 공백 방지). 타임라인에서도 뺄지 결정 필요.
4. **글 본문** — 자세한 글은 훈조 진짜 사이트(`h8njo.vercel.app/work/*`)에 있다는 전제. 그 사이트 글이 준비됐는지 확인.
