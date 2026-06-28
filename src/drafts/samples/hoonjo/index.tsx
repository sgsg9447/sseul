import './styles.css';
import { LightboxProvider } from './Lightbox';
import { MainPortfolio } from './sections';

/* hoonjo — senior frontend engineer portfolio (served at /d/hoonjo-b9e634).
   Self-contained, scoped under .hoonjo. Each project's "전체 글 읽기" links out
   to Hoonjo's real site; the lightbox lets any screenshot zoom to full size. */
export default function Hoonjo() {
  return (
    <div className="hoonjo">
      <LightboxProvider>
        <MainPortfolio />
      </LightboxProvider>
    </div>
  );
}
