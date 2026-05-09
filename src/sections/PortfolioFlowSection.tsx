import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/portfolio';
import { SectionIntro } from '../components/common/SectionIntro';

export function PortfolioFlowSection() {
  return (
    <section className="section portfolio" id="flow">
      <div className="section-inner">
        <SectionIntro
          count="03"
          label="Portfolio flow"
          title="3개의 프로젝트는 하나의 AX 제작 흐름으로 연결됩니다."
          body="0to100은 아이디어를 개발 가능한 명세로 바꾸고, FoodieCard는 그 명세가 실제 제품 구현으로 이어짐을 검증했으며, EnrollOps는 같은 방식을 반복 운영 업무에 적용한 전환 사례입니다."
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
