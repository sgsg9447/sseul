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
          title="저는 이 문제를 하나의 흐름으로 풀었습니다."
          body="흩어진 입력을 구조화하고, 사용자가 바로 실행할 수 있는 산출물로 바꾸고, 반복되는 과정을 자동화하는 흐름입니다."
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
        <div className="flow-line">흩어진 입력 → 구조화 → 실행 가능한 산출물 → 자동화된 워크플로우</div>
      </div>
    </section>
  );
}
