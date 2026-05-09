import { SectionIntro } from '../components/common/SectionIntro';
import { skills } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <SectionIntro
          count="05"
          label="Skills"
          title="기술은 자동화 흐름을 완성하기 위해 선택했습니다."
          body="스택을 단순 나열하기보다, 어떤 반복을 줄이고 어떤 산출물을 만들었는지 기준으로 정리했습니다."
        />
        <div className="skills-table">
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill.area}>
              <div className="skill-head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{skill.area}</strong>
              </div>
              <p>{skill.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
