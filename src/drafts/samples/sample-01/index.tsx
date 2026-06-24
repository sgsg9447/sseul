import './styles.css';

/* sample-01 — first client sample (served at /d/a8f3k2c9)
   ───────────────────────────────────────────────────────────────────────────
   Self-contained: imports only ./styles.css and (later) ./assets/*. No imports
   from outside this folder, so the whole folder lifts out as-is when a client
   asks for the code. Everything is scoped under the .sample-01 root class.

   Replace this placeholder once the screen + content land. */
export default function Sample01() {
  return (
    <main className="sample-01">
      <section className="sample-01__placeholder">
        <p className="sample-01__slug">/d/a8f3k2c9</p>
        <h1>시안 준비됨</h1>
        <p className="sample-01__desc">화면과 내용을 주면 여기에 채웁니다.</p>
      </section>
    </main>
  );
}
