import type { DetailPage } from '../../data/resumeDetail';

type ResumeDetailSheetProps = {
  page: DetailPage;
};

export function ResumeDetailSheet({ page }: ResumeDetailSheetProps) {
  return (
    <>
      <div className="resume-topbar" />

      <div className="resume-detail">
        <div className="resume-d-head">
          <h2 className="resume-d-title">
            <span className="resume-d-kicker">{page.kicker}</span> {page.company}
          </h2>
          <p className="resume-d-sub">{page.sub}</p>
        </div>
        <p className="resume-d-date">{page.date}</p>

        {page.meta ? (
          <dl className="resume-d-meta">
            {page.meta.map((entry) => (
              <div key={entry.label}>
                <dt>{entry.label}</dt>
                <dd>{entry.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {page.projects.map((project) => (
          <section className="resume-d-proj" key={project.title}>
            <h3 className="resume-d-proj-title">
              {project.title}
              {project.keys ? <span className="resume-d-keys">{project.keys}</span> : null}
            </h3>

            {project.blocks.map((block) => (
              <div className="resume-d-block" key={block.label}>
                <p className="resume-d-label">{block.label}</p>
                <ul className="resume-d-list">
                  {block.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
