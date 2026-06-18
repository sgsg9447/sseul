import { SectionIntro } from '../components/common/SectionIntro';
import { workExperiences } from '../data/portfolio';

export function WorkExperienceSection() {
  return (
    <section className="section skills-section work-experience-section" id="experience">
      <div className="section-inner">
        <SectionIntro
          count="04"
          label="WORK EXPERIENCE"
          title={
            <>
              <span className="intro-title-line">맡은 자리마다</span>
              <span className="intro-title-line">요구사항을 동작하는 결과물까지</span>
              <span className="intro-title-line">끌고 갔습니다.</span>
            </>
          }
        />
        <div className="skills-table">
          {workExperiences.map((skill, index) => (
            <div className="skill-row" key={skill.area}>
              <div className="skill-head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{skill.area}</strong>
                {skill.tags && skill.tags.length > 0 && (
                  <div className="skill-tags">
                    {skill.tags.map((tag) => (
                      <span className="skill-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="skill-copy">
                <h3>{skill.title}</h3>
                <p className="skill-detail-lines">
                  {skill.detail.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
