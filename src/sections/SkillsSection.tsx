import { SectionIntro } from '../components/common/SectionIntro';
import { skills } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <SectionIntro
          count="05"
          label="Work experience"
          title={
            <>
              <span className="intro-title-line">복잡한 요구를</span>
              <span className="intro-title-line">기능과 화면 흐름으로</span>
              <span className="intro-title-line">구체화해왔습니다.</span>
            </>
          }
          body={
            <span className="experience-lines">
              <span className="experience-group">
                <span>관리자 도구, 편집 기능, 콘텐츠 제작 백오피스처럼</span>
                <span>운영 흐름이 중요한 기능을 구현해왔습니다.</span>
              </span>
              <span className="experience-group">
                <span>모호한 요청을 사용자 행동, 화면 상태, 저장 기준으로 나누어</span>
                <span>실제로 사용할 수 있는 기능 흐름으로 정리했습니다.</span>
              </span>
            </span>
          }
        />
        <div className="skills-table">
          {skills.map((skill, index) => (
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
