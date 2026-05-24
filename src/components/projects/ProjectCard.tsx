import { useEffect, useId, useState } from 'react';
import type { Project } from '../../types/portfolio';
import { getProjectScreenshot, ProjectVisual } from './ProjectVisual';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTitleId = useId();
  const screenshot = getProjectScreenshot(project.visual);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <article className="project-card">
        <div className={`project-visual ${project.visual}`}>
          <ProjectVisual type={project.visual} onOpen={() => setIsModalOpen(true)} />
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
            {project.board.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="tag-row">
            {project.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
            서비스 보기 ↗
          </a>
        </div>
      </article>

      {isModalOpen ? (
        <div
          className="screenshot-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className={`screenshot-modal-panel ${screenshot.frame}-modal`}>
            <div className="screenshot-modal-top">
              <div>
                <span>{project.step} / {project.label}</span>
                <h3 id={modalTitleId}>{project.name}</h3>
              </div>
              <button type="button" onClick={() => setIsModalOpen(false)} aria-label="스크린샷 닫기">
                닫기
              </button>
            </div>
            <div className="screenshot-modal-image">
              <img src={screenshot.src} alt={screenshot.alt} />
            </div>
            <a className="project-link modal-link" href={project.url} target="_blank" rel="noreferrer">
              서비스 보기 ↗
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
