import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/portfolio';
import { SectionIntro } from '../components/common/SectionIntro';

export function PortfolioFlowSection() {
  return (
    <section className="section portfolio" id="flow">
      <div className="section-inner">
        <SectionIntro
          count="02"
          label="Selected projects"
          title={
            <>
              편집은 다시 가능하게,
              <br />
              반복은 자동화하고,
              <br />
              흩어진 정보는 한곳에 모았습니다.
            </>
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
