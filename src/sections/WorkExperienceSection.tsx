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
              <span className="intro-title-line">복잡한 요구를</span>
              <span className="intro-title-line">기능과 화면 흐름으로</span>
              <span className="intro-title-line">구체화해왔습니다.</span>
            </>
          }
        />
        <div className="skills-table">
          {workExperiences.map((skill, index) => (
            <div className="skill-row" key={skill.area}>
              <div className="skill-head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{skill.area}</strong>
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
