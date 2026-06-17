import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type DeliverableSheetProps = {
  markdown: string;
  /** 모달 상단·접근성 라벨에 쓰일 문서명 */
  title?: string;
  /** 마크다운 내 이미지 파일명 → import된 에셋 URL 매핑. 매핑에 없는 이미지는 렌더하지 않음. */
  images?: Record<string, string>;
};

/** 마크다운을 A4 페이지로 렌더링하는 내부 본문 */
function DocBody({ markdown, images }: { markdown: string; images: Record<string, string> }) {
  return (
    <article className="doc-page">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={(url) => url}
        components={{
          img({ src, alt }) {
            const mapped = typeof src === 'string' ? images[src] : undefined;
            if (!mapped) return null;
            return <img className="doc-img" src={mapped} alt={alt ?? ''} loading="lazy" />;
          },
          table({ children }) {
            return (
              <div className="doc-table-wrap">
                <table>{children}</table>
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}

/** 앞부분만 미리보기로 보여주고, 클릭하면 전체 문서를 모달로 띄운다. */
export function DeliverableSheet({ markdown, title, images = {} }: DeliverableSheetProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div
        className="doc-sheet doc-sheet-preview is-collapsed"
        role="button"
        tabIndex={0}
        aria-label={`${title ?? '문서'} 전체 보기`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="doc-preview-clip" aria-hidden="true">
          <DocBody markdown={markdown} images={images} />
        </div>
        <span className="doc-toggle doc-toggle-expand">
          전체 보기
          <Maximize2 size={16} />
        </span>
      </div>

      {open ? (
        <div
          className="doc-modal"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? '문서'}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="doc-modal-panel">
            <div className="doc-modal-top">
              <span className="doc-modal-title">{title}</span>
              <button type="button" className="doc-modal-close" onClick={() => setOpen(false)} aria-label="닫기">
                <X size={18} />
              </button>
            </div>
            <div className="doc-modal-scroll">
              <DocBody markdown={markdown} images={images} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
