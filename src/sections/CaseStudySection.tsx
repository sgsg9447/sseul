import { SectionIntro } from '../components/common/SectionIntro';
import { caseSteps } from '../data/portfolio';

export function CaseStudySection() {
  return (
    <section className="section case" id="case">
      <div className="section-inner">
        <SectionIntro
          count="04"
          label="Featured project"
          title={
            <>
              <span className="featured-title-line">EnrollOps는</span>
              <span className="featured-title-line">신청서 접수와 PDF 저장을</span>
              <span className="featured-title-line">하나의 운영 흐름으로</span>
              <span className="featured-title-line">정리했습니다.</span>
            </>
          }
          body={
            <span className="featured-lines">
              <span>기존에는 수강신청서를 받은 뒤 다시 스캔하고,</span>
              <span>파일명을 정리해 온라인에 저장해야 했습니다.</span>
              <span>신청 입력부터 PDF 저장, 관리자 확인까지 이어지도록 바꿔</span>
              <span>신청 정보를 처음부터 관리 가능한 형태로 남기도록 설계했습니다.</span>
            </span>
          }
        />
        <div className="case-grid">
          {caseSteps.map((step) => (
            <article className="case-card" key={step.step}>
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <p className="featured-note">
          <span>단순히 종이 신청서를 웹 폼으로 옮긴 것이 아니라,</span>
          <span>접수부터 보관까지 이어지는 운영 흐름을 다시 설계했습니다.</span>
        </p>
      </div>
    </section>
  );
}
