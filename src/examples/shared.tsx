import { useEffect } from 'react';

/* Set the document title while a sample page is mounted, then restore it.
   When you "PDF로 저장" from the print sheet, this becomes the default filename. */
export function usePageTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [title]);
}

/* Slim ribbon shown only on the live samples so a viewer knows it's a demo and
   can jump to the printable one-pager or back to the gallery. Hidden in print. */
export function DemoBar({ pdfHref, label }: { pdfHref: string; label: string }) {
  return (
    <div className="ex-demobar">
      <div className="ex-demobar-inner">
        <span className="ex-demobar-tag">
          <i />
          데모 샘플
        </span>
        <span className="ex-demobar-desc">{label} · 실제 제작 예시입니다</span>
        <nav className="ex-demobar-links">
          <a href="/example">← 샘플 목록</a>
          <a className="is-key" href={pdfHref}>
            한장 PDF 보기
          </a>
        </nav>
      </div>
    </div>
  );
}

/* A deterministic, decorative QR-style block. It doesn't encode a URL — it's a
   visual stand-in for the "명함 QR → 사이트" idea on the printed one-pager.
   The three finder squares + a stable pseudo-random fill read as a real code. */
export function FauxQR({ seed }: { seed: number }) {
  const N = 21; // classic v1 QR module count
  const cells: { x: number; y: number }[] = [];
  let s = seed * 2654435761;
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };

  const inFinder = (x: number, y: number) => {
    const corner = (cx: number, cy: number) => x >= cx && x < cx + 7 && y >= cy && y < cy + 7;
    return corner(0, 0) || corner(N - 7, 0) || corner(0, N - 7);
  };

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (inFinder(x, y)) continue;
      if (rand() > 0.52) cells.push({ x, y });
    }
  }

  // finder eye = 7x7 outer ring + 3x3 center
  const finder = (ox: number, oy: number) =>
    Array.from({ length: 49 }, (_, i) => {
      const x = ox + (i % 7);
      const y = oy + Math.floor(i / 7);
      const ring = i % 7 === 0 || i % 7 === 6 || i < 7 || i >= 42;
      const center = x - ox >= 2 && x - ox <= 4 && y - oy >= 2 && y - oy <= 4;
      return ring || center ? { x, y } : null;
    }).filter(Boolean) as { x: number; y: number }[];

  const finders = [...finder(0, 0), ...finder(N - 7, 0), ...finder(0, N - 7)];

  return (
    <svg className="ex-qr" viewBox={`0 0 ${N} ${N}`} role="img" aria-label="홈페이지 QR 코드(샘플)">
      {[...cells, ...finders].map((c, i) => (
        <rect key={i} className="q" x={c.x} y={c.y} width="1" height="1" />
      ))}
    </svg>
  );
}
