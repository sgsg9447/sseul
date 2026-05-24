import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/portfolio';
import { SectionIntro } from '../components/common/SectionIntro';

export function PortfolioFlowSection() {
  return (
    <section className="section portfolio" id="flow">
      <div className="section-inner">
        <SectionIntro
          count="03"
          label="Selected projects"
          title={
            <>
              반복되던 운영 문제에서 시작해,
              <br />
              확인과 실행의 흐름을
              <br />
              서비스로 바꿨습니다.
            </>
          }
          body={
            <span className="project-lines">
              <span>EnrollOps는 종이 수강신청서를 온라인 접수와 PDF 저장 흐름으로 전환했고,</span>
              <span>Waitroom은 방문 전 확인하기 어려웠던 웨이팅 현황에 접근 경로를 만들었으며,</span>
              <span>ZERO100은 막연한 아이디어를 실행 체크리스트와 개발 TODO로 구조화했습니다.</span>
            </span>
          }
        />
        <div className="project-flow" id="projects">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
