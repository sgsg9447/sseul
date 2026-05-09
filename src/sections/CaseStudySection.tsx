import { SectionIntro } from '../components/common/SectionIntro';
import { caseSteps } from '../data/portfolio';

export function CaseStudySection() {
  return (
    <section className="section case" id="case">
      <div className="section-inner">
        <SectionIntro
          count="04"
          label="Case study"
          title="0to100은 실제 서비스를 만드는 과정에서 검증했습니다."
          body="오늘뭐먹었지?는 0to100으로 생성한 명세를 바탕으로 MVP까지 이어간 실사용 사례입니다."
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
