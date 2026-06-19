import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { beforeAfterIntro, beforeAfterPairs } from '../../data/freelance';
import asisMain from '../../assets/asis-main.png';
import asisSupport from '../../assets/asis-support.png';
import asisMobile from '../../assets/asis-mobile.png';
import screenHome from '../../assets/screen-home.png';
import screenSupport from '../../assets/screen-support.png';
import screenMHome from '../../assets/screen-m-home.png';

const beforeImages: Record<string, string> = {
  main: asisMain,
  support: asisSupport,
  mobile: asisMobile,
};

const afterImages: Record<string, string> = {
  main: screenHome,
  support: screenSupport,
  mobile: screenMHome,
};

type Zoom = { src: string; label: string; device: 'desktop' | 'mobile' };

export function BeforeAfter() {
  const [zoom, setZoom] = useState<Zoom | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [zoom]);

  return (
    <section className="work-section work-ba" id="before-after">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {beforeAfterIntro.eyebrow}
          </p>
          <h2>{beforeAfterIntro.title}</h2>
          <p className="work-intro-body">{beforeAfterIntro.body}</p>
        </div>

        <div className="work-ba-list">
          {beforeAfterPairs.map((pair) => (
            <article className="work-ba-pair" key={pair.key}>
              <span className="work-ba-screen">{pair.label}</span>
              <div className={`work-ba-shots work-ba-shots-${pair.device}`}>
                {(['before', 'after'] as const).map((side) => {
                  const src = side === 'before' ? beforeImages[pair.key] : afterImages[pair.key];
                  const tag = side === 'before' ? 'Before' : 'After';
                  return (
                    <figure className={`work-ba-col work-ba-${side}`} key={side}>
                      <span className={`work-ba-tag work-ba-tag-${side}`}>{tag}</span>
                      <button
                        type="button"
                        className={`work-shot work-shot-${pair.device}`}
                        onClick={() => setZoom({ src, label: `${pair.label} — ${tag}`, device: pair.device })}
                        aria-label={`${pair.label} ${tag} 화면 크게 보기`}
                      >
                        <img src={src} alt={`${pair.label} ${tag} 화면`} loading="lazy" />
                        <span className="work-shot-zoom" aria-hidden="true">
                          <Maximize2 size={13} />
                        </span>
                      </button>
                      <figcaption>{side === 'before' ? pair.problem : pair.solution}</figcaption>
                    </figure>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>

      {zoom ? (
        <div
          className="work-zoom"
          role="dialog"
          aria-modal="true"
          aria-label={`${zoom.label} 화면`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setZoom(null);
          }}
        >
          <div className={`work-zoom-panel${zoom.device === 'mobile' ? ' work-zoom-mobile' : ''}`}>
            <div className="work-zoom-top">
              <span>{zoom.label}</span>
              <button type="button" onClick={() => setZoom(null)} aria-label="닫기">
                <X size={18} />
              </button>
            </div>
            <div className="work-zoom-body">
              <img src={zoom.src} alt={`${zoom.label} 화면`} />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
