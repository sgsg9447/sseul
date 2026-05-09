import type { Project } from '../../types/portfolio';
import { ProjectVisual } from './ProjectVisual';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className={`project-visual ${project.visual}`}>
        <ProjectVisual type={project.visual} />
      </div>
      <div className="project-body">
        <div className="project-kicker">
          <span>{project.step}</span>
          {project.label}
        </div>
        <h3>{project.name}</h3>
        <p className="project-title">{project.title}</p>
        <p>{project.summary}</p>
        <p className="project-role">{project.role}</p>
        <dl className="project-board">
          <div>
            <dt>Input</dt>
            <dd>{project.board.input}</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>{project.board.output}</dd>
          </div>
          <div>
            <dt>Automation</dt>
            <dd>{project.board.automation}</dd>
          </div>
        </dl>
        <div className="tag-row">
          {project.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
