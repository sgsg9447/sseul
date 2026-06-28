import './styles.css';
import { LightboxProvider } from './Lightbox';
import { MainPortfolio } from './sections';
import { Resume, PortfolioPdf } from './docs';
import { currentDoc } from './routes';

/* hoonjo — senior frontend engineer portfolio (served at /d/hoonjo-b9e634).
   Self-contained, scoped under .hoonjo. The slug router lands every
   /d/<slug>/* here, so we branch on the sub-path: /resume, /career and
   /portfolio-pdf render print-to-PDF documents; everything else is the
   main portfolio. Each project's "전체 글 읽기" links out to Hoonjo's real
   site; the lightbox lets any screenshot zoom to full size. */
export default function Hoonjo() {
  const doc = currentDoc();
  return (
    <div className="hoonjo">
      {doc === 'resume' ? (
        <Resume />
      ) : doc === 'portfolio-pdf' ? (
        <PortfolioPdf />
      ) : (
        <LightboxProvider>
          <MainPortfolio />
        </LightboxProvider>
      )}
    </div>
  );
}
