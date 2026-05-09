import { SectionIntro } from '../components/common/SectionIntro';
import { caseSteps } from '../data/portfolio';

export function CaseStudySection() {
  return (
    <section className="section case" id="case">
      <div className="section-inner">
        <SectionIntro
          count="04"
          label="Case study"
          title="0to100은 FoodieCard 구현 과정에서 실제 사용 가능한 워크플로우로 검증했습니다."
          body="생성된 문제 정의, 화면 흐름, 기능 목록, 개발 TODO를 FoodieCard 구현에 적용하며 산출물의 실행 가능성과 보완 지점을 확인했습니다."
        />
        <div className="case-grid">
          {caseSteps.map((step) => (
            <article className="case-card" key={step.step}>
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
