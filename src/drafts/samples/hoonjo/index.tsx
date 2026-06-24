import './styles.css';

/* hoonjo — client sample (served at /d/hoonjo-b9e634)
   ───────────────────────────────────────────────────────────────────────────
   Built on the hoonjo-design system (engineering-editorial). Self-contained:
   imports only ./styles.css (→ ./tokens.css) and local assets. Scoped under
   the .hoonjo root, so the whole folder lifts out cleanly for hand-off.

   This is a brand-wired placeholder — it confirms the design system renders
   (mono eyebrow + Pretendard display + tabular-mono metric + trust-blue CTA).
   Replace with the real screen + content. */
export default function Hoonjo() {
  return (
    <main className="hoonjo">
      <div className="hoonjo-scaffold">
        <p className="hoonjo-eyebrow">HOONJO · FRONTEND ENGINEER</p>
        <h1 className="hoonjo-display">
          남들이 멈춘 곳에서
          <br />
          구조를 찾습니다.
        </h1>
        <p className="hoonjo-lead">
          성능, 복잡한 상태, 까다로운 렌더링 — 측정 가능한 결과로 증명합니다.
        </p>

        <div className="hoonjo-metric">
          <span className="hoonjo-metric-label">PDF 첫 화면 렌더</span>
          <span className="hoonjo-metric-val">
            <b>639,000ms</b> → <b className="is-after">1,310ms</b>
          </span>
        </div>

        <div className="hoonjo-actions">
          <a className="hoonjo-btn" href="#">
            프로젝트 보기
          </a>
          <span className="hoonjo-slug">/d/hoonjo-b9e634</span>
        </div>

        <p className="hoonjo-note">
          디자인 시스템 연결됨 · 화면과 내용을 주면 여기에 채웁니다.
        </p>
      </div>
    </main>
  );
}
