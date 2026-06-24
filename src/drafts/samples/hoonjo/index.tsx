import './styles.css';
import { Nav, Hero, Work, Career, Expertise, OpenSource, Contact } from './sections';

/* hoonjo — senior frontend engineer portfolio (served at /d/hoonjo-b9e634)
   ───────────────────────────────────────────────────────────────────────────
   Built on the hoonjo-design system (engineering-editorial). Self-contained:
   everything imports only from within this folder (./sections → ./components,
   ./content; ./styles.css → ./tokens.css), scoped under the .hoonjo root, so
   the whole folder lifts out cleanly for hand-off.

   Content is Hoonjo's real résumé + project notes; metrics are his measured
   figures. Copy/data live in ./content.ts. */
export default function Hoonjo() {
  return (
    <div className="hoonjo">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Career />
        <Expertise />
        <OpenSource />
      </main>
      <Contact />
    </div>
  );
}
