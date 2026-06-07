import { SectionIntro } from '../components/common/SectionIntro';
import { skills } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section className="section overview-section capabilities-section" id="skills">
      <div className="section-inner">
        <SectionIntro
          count="03"
          label="CAPABILITIES"
          title={
            <>
              <span className="intro-title-line">요구사항을 구조로 정리하고,</span>
              <span className="intro-title-line">실제로 동작하는 화면으로 만듭니다.</span>
            </>
          }
        />
        <div className="capability-grid">
          {skills.map((skill, index) => (
            <article className="approach-card capability-card" key={skill.area}>
              <span className="icon-wrap">{String(index + 1).padStart(2, '0')}</span>
              <h3>{skill.area}</h3>
              <p>{skill.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
