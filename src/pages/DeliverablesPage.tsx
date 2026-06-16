import { ArrowLeft, ArrowRight, ImageIcon } from 'lucide-react';
import { csDeliverables } from '../data/woodworking';

export function DeliverablesPage() {
  return (
    <div className="deliverables-page">
      <header className="resume-toolbar">
        <a className="resume-back" href="/">
          <ArrowLeft size={16} />
          포트폴리오로
        </a>
        <p className="resume-toolbar-title">산출물</p>
        <a className="dlv-toolbar-link" href="/#case-study">
          케이스 스터디
          <ArrowRight size={16} />
        </a>
      </header>

      <main className="dlv-doc">
        <div className="dlv-head">
          <p className="eyebrow">
            <span />
            DELIVERABLES · 목공 직업훈련기관 리뉴얼
          </p>
          <h1>문제에서 화면까지, 추적 가능하게 이어진 산출물</h1>
          <p className="dlv-lede">
            14개 증상 → 4개 근본 원인 → 설계 원칙 → 요구사항 → 화면이 한 줄로 이어지도록 작성한 기획·설계 문서
            5종입니다. 각 문서의 캡처를 함께 확인할 수 있습니다.
          </p>
        </div>

        <div className="dlv-list">
          {csDeliverables.map((doc) => (
            <article className="dlv-item" key={doc.no}>
              <div className="dlv-item-head">
                <span className="dlv-no">{doc.no}</span>
                <div>
                  <h2>{doc.title}</h2>
                  <span className="dlv-en">{doc.en}</span>
                </div>
              </div>
              <p className="dlv-summary">{doc.summary}</p>
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
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
