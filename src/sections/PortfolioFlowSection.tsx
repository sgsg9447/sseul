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
          title="3개의 프로젝트는 하나의 제작 흐름으로 연결됩니다."
          body="0to100이 아이디어를 실제 제작 가능한 명세로 변환하고, 오늘뭐먹었지?가 그 명세를 실제 서비스로 검증하며, EnrollOps가 같은 구조화 방식을 운영 자동화로 확장합니다."
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
