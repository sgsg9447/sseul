import { Blocks, ClipboardCheck, Workflow } from 'lucide-react';
import { SectionIntro } from '../components/common/SectionIntro';
import { approaches } from '../data/portfolio';

const iconMap = {
  blocks: Blocks,
  clipboardCheck: ClipboardCheck,
  workflow: Workflow,
};

export function ApproachSection() {
  return (
    <section className="section overview-section approach-section" id="approach">
      <div className="section-inner">
        <SectionIntro
          count="02"
          label="Approach"
          title="저는 아이디어를 스펙, 제품, 운영 시스템으로 이어지는 흐름으로 설계했습니다."
          body="흩어진 입력을 구조화하고, 실제 구현으로 검증한 뒤, 같은 방식을 반복 업무 자동화에 적용했습니다."
        />
        <div className="approach-grid">
          {approaches.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <article className="approach-card" key={item.title}>
                <span className="icon-wrap">
                  <Icon size={22} />
                </span>
                <small>Step {String(index + 1).padStart(2, '0')}</small>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
        <div className="flow-line">아이디어 → 명세 → 제품 검증 → 운영 자동화</div>
      </div>
    </section>
  );
}
