import { problems } from '../data/portfolio';
import { SectionIntro } from '../components/common/SectionIntro';

export function ProblemSection() {
  return (
    <section className="section problem overview-section" id="problem">
      <div className="section-inner">
        <SectionIntro
          count="01"
          label="Problem"
          title={
            <>
              불편은 대부분,
              <br />
              다시 확인하고 다시 정리해야 하는 순간에서 시작됐습니다.
            </>
          }
          body={
            <span className="problem-lines">
              <span>종이로 받은 수강신청서는 다시 스캔해 온라인에 저장해야 했고,</span>
              <span>웨이팅 현황은 직접 방문하기 전에는 확인하기 어려웠으며,</span>
              <span>아이디어는 구체적인 실행 단위로 나뉘지 못해 시작이 늦어지고 있었습니다.</span>
            </span>
          }
        />
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <article className="problem-card" key={problem.title}>
              <div className="problem-card-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
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
