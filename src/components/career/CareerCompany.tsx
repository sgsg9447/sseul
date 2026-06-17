import type { CareerCompany as CareerCompanyType } from '../../data/careerHistory';

type CareerCompanyProps = {
  company: CareerCompanyType;
};

export function CareerCompany({ company }: CareerCompanyProps) {
  return (
    <section className="career-company">
      <div className="career-co-head">
        <span className="career-co-name">{company.name}</span>
        <span className="career-co-meta">{company.meta}</span>
      </div>

      {company.projects.map((project) => (
        <div className="career-proj" key={project.title}>
          <p className="career-proj-title">
            <span className="career-proj-n">{project.n}</span>
            {project.title}
          </p>
          <p className="career-proj-keys">{project.keys}</p>

          {project.rows.map((row) => (
            <div
              className={row.decision ? 'career-row career-row-decision' : 'career-row'}
              key={row.label}
            >
              <div className="career-row-lab">{row.label}</div>
              <div className="career-row-val">{row.value}</div>
            </div>
          ))}

          {project.flow ? (
            <ol className="career-flow" aria-label="운영 흐름">
              {project.flow.map((step, index) => (
                <li className="career-flow-step" key={index}>
                  {step}
                </li>
              ))}
            </ol>
          ) : null}
        </div>
      ))}
    </section>
  );
}
