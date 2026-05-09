import { problems } from '../data/portfolio';
import { SectionIntro } from '../components/common/SectionIntro';

export function ProblemSection() {
  return (
    <section className="section problem overview-section" id="problem">
      <div className="section-inner">
        <SectionIntro
          count="01"
          label="Problem"
          title="제가 반복해서 마주한 문제는 ‘만드는 일’ 이전에 있었습니다."
          body="서비스 아이디어는 많지만 실제로 만들려면 매번 같은 과정이 필요했습니다. 무엇을 먼저 만들어야 하는지 정리하고, 화면 흐름을 나누고, 개발 TODO와 QA 체크리스트를 만드는 일입니다."
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
