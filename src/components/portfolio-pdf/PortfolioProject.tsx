import type { Project } from '../../types/portfolio';

type PortfolioProjectProps = {
  project: Project;
};

export function PortfolioProject({ project }: PortfolioProjectProps) {
  const paragraphs = project.details ?? [project.role];

  return (
    <article className="pf-project">
      <div className="pf-project-top">
        <span className="pf-project-step">{project.step}</span>
        <span className="pf-project-label">{project.label}</span>
      </div>

      <div className="pf-project-headline">
        <h3 className="pf-project-name">{project.name}</h3>
        {project.url ? (
          <a className="pf-project-link" href={project.url} target="_blank" rel="noreferrer">
            {project.linkLabel ?? '바로가기 ↗'}
          </a>
        ) : null}
      </div>

      <p className="pf-project-title">{project.title}</p>
      <p className="pf-project-summary">{project.summary}</p>
      {paragraphs.map((paragraph, index) => (
        <p className="pf-project-detail" key={index}>
          {paragraph}
        </p>
      ))}

      <dl className="pf-board">
        {project.board.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="pf-tags">
        {project.features.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>
    </article>
  );
}
