import { problems } from '../data/portfolio';
import { SectionIntro } from '../components/common/SectionIntro';

export function ProblemSection() {
  return (
    <section className="section problem overview-section" id="problem">
      <div className="section-inner">
        <SectionIntro
          count="01"
          label="Problem"
          title="제가 해결한 문제는 만드는 속도보다 먼저, 실행 가능한 흐름을 만드는 일이었습니다."
          body="아이디어는 명세로 정리되어야 하고, 명세는 실제 구현으로 검증되어야 하며, 반복 운영은 다시 사용할 수 있는 시스템으로 전환되어야 했습니다."
        />
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <article className="problem-card" key={problem.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
