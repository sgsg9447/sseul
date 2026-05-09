import { Camera, FileText } from 'lucide-react';
import type { ProjectVisualType } from '../../types/portfolio';

type ProjectVisualProps = {
  type: ProjectVisualType;
};

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === 'spec') {
    return (
      <div className="artifact-stack">
        <span className="artifact-label">Generated spec</span>
        <div className="mock mock-spec">
          <FileText size={22} />
          <strong>0to100 · Spec sheet</strong>
          <section>
            <p>Problem</p>
            <span />
            <span />
          </section>
          <section>
            <p>Screens</p>
            <span />
            <span />
          </section>
          <div>
            <i>FLOW</i>
            <i>TODO</i>
            <i>QA</i>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'meal') {
    return (
      <div className="artifact-stack">
        <span className="artifact-label">Story card preview</span>
        <div className="mock mock-meal">
          <strong>오늘뭐먹었지?</strong>
          <div className="meal-grid">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>11.07 · 하루 식사 카드</p>
        </div>
      </div>
    );
  }

  return (
    <div className="artifact-stack">
      <span className="artifact-label">Admin + PDF</span>
      <div className="mock mock-ops">
        <Camera size={20} />
        <strong>EnrollOps</strong>
        {['온라인 접수', 'DB 저장', 'PDF 생성', '리포트'].map((item) => (
          <div className="ops-row" key={item}>
            <span>{item}</span>
            <i />
          </div>
        ))}
      </div>
    </div>
  );
}
