import { ArrowLeft, ImageIcon } from 'lucide-react';
import { csDeliverables } from '../data/woodworking';
import { deliverableContent } from '../content/deliverables';
import { DeliverableSheet } from '../components/DeliverableSheet';

export function DeliverablesPage({ backHref = '/' }: { backHref?: string } = {}) {
  return (
    <div className="deliverables-page">
      <header className="resume-toolbar">
        <a className="resume-back" href={backHref}>
          <ArrowLeft size={16} />
          포트폴리오로
        </a>
        <p className="resume-toolbar-title">산출물</p>
      </header>

      <main className="dlv-doc">
        <div className="dlv-head">
          <p className="eyebrow">
            <span />
            DELIVERABLES · 목공 직업훈련기관 리뉴얼
          </p>
          <h1>문제에서 화면까지, 추적 가능하게 이어진 산출물</h1>
          <p className="dlv-docs-line">{csDeliverables.map((doc) => doc.title).join(', ')}</p>
        </div>

        <div className="dlv-list">
          {csDeliverables.map((doc) => {
            const content = deliverableContent[doc.no];
            return (
              <article className="dlv-item" key={doc.no}>
                <div className="dlv-item-head">
                  <span className="dlv-no">{doc.no}</span>
                  <div>
                    <h2>{doc.title}</h2>
                    <span className="dlv-en">{doc.en}</span>
                  </div>
                </div>
                <p className="dlv-summary">{doc.summary}</p>
                {content ? (
                  <DeliverableSheet markdown={content.markdown} images={content.images} title={doc.title} />
                ) : (
                  <figure className="cs-figure cs-figure-tall">
                    <span className="cs-figure-badge">
                      <ImageIcon size={14} />
                      문서 캡처
                    </span>
                    <div className="cs-figure-body">
                      <strong>{doc.title} 캡처</strong>
                      <p>{doc.title} 문서 캡처 이미지를 이 영역에 첨부하세요.</p>
                    </div>
                  </figure>
                )}
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
