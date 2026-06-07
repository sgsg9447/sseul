import { problems } from "../data/portfolio";
import { SectionIntro } from "../components/common/SectionIntro";

export function ProblemSection() {
  return (
    <section className="section problem overview-section" id="starting-points">
      <span id="problem" aria-hidden="true" />
      <div className="section-inner">
        <SectionIntro
          count="01"
          label="STARTING POINTS"
          title={
            <>
              편집되지 않고,
              <br />
              반복되고,
              <br />
              흩어진 문제에서 시작했습니다.
            </>
          }
        />
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <article className="problem-card" key={problem.title}>
              <div className="problem-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{problem.project}</small>
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
