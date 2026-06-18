import { useEffect, useId, useState } from 'react';
import type { Project } from '../../types/portfolio';
import { getProjectScreenshot, ProjectVisual } from './ProjectVisual';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTitleId = useId();
  const canOpenScreenshot = project.visual !== 'pipeline';
  const screenshot = canOpenScreenshot ? getProjectScreenshot(project.visual) : null;
  const detailParagraphs = project.details ?? [project.role];
  const linkLabel = project.linkLabel ?? '서비스 보기 ↗';
  const isExternalUrl = project.url ? /^https?:\/\//.test(project.url) : false;
  const linkProps = isExternalUrl ? { target: '_blank', rel: 'noreferrer' } : {};

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
      <article className={`project-card project-card-${project.visual}`}>
        <div className={`project-visual ${project.visual}`}>
          <ProjectVisual type={project.visual} onOpen={() => canOpenScreenshot && setIsModalOpen(true)} />
        </div>
        <div className="project-body">
          <div className="project-kicker">
            <span>{project.step}</span>
            {project.label}
            {project.company ? <small className="project-company">{project.company}</small> : null}
          </div>
          <h3>{project.name}</h3>
          <p className="project-title">{project.title}</p>
          <p>{project.summary}</p>
          {detailParagraphs.map((detail, index) => (
            <p className={index === 0 ? 'project-role' : undefined} key={detail}>
              {detail}
            </p>
          ))}
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
          {project.url ? (
            <a className="project-link" href={project.url} {...linkProps}>
              {linkLabel}
            </a>
          ) : null}
        </div>
      </article>

      {isModalOpen && screenshot ? (
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
          <div
            className={`screenshot-modal-panel ${screenshot.frame}-modal${
              screenshot.secondarySrc ? ' wide-modal image-heavy-modal' : ''
            }`}
          >
            <div className="screenshot-modal-top">
              <div>
                <span>
                  {project.step} / {project.label}
                  {project.company ? ` · ${project.company}` : ''}
                </span>
                <h3 id={modalTitleId}>{project.name}</h3>
              </div>
              <button type="button" onClick={() => setIsModalOpen(false)} aria-label="스크린샷 닫기">
                닫기
              </button>
            </div>
            <div className="screenshot-modal-image">
              {screenshot.secondarySrc ? (
                <div className="screenshot-modal-pair screenshot-modal-spread">
                  <img src={screenshot.src} alt={screenshot.alt} />
                  <img src={screenshot.secondarySrc} alt={screenshot.secondaryAlt ?? screenshot.alt} />
                </div>
              ) : (
                <img src={screenshot.src} alt={screenshot.alt} />
              )}
            </div>
            <a className="project-link modal-link" href={project.url} {...linkProps}>
              {linkLabel}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
