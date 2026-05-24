import { ArrowRight, Mail } from 'lucide-react';

const contactEmail = 'sgsg9447@gmail.com';
const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;

export function ClosingSection() {
  return (
    <section className="closing" id="contact">
      <div className="section-inner">
        <div className="closing-heading">
          <p className="eyebrow inverse">
            <span />
            06 / Contact
          </p>
          <h2>
            <span className="closing-title-line">문제를 발견하는 데서 멈추지 않고,</span>
            <span className="closing-title-line">실행 가능한 서비스 흐름으로</span>
            <span className="closing-title-line">연결하는 일을 하고 싶습니다.</span>
          </h2>
        </div>

        <div className="closing-copy">
          <p className="closing-lines">
            <span>EnrollOps로 종이 수강신청서를 온라인 접수와 PDF 저장 흐름으로 전환했고,</span>
            <span>Waitroom으로 방문 전 확인하기 어려웠던 웨이팅 현황의 접근 경로를 만들었으며,</span>
            <span>Z100으로 막연한 아이디어를 실행 가능한 작업 단위로 정리했습니다.</span>
          </p>
          <p className="closing-lines">
            <span>반복되는 확인과 정리 과정을 줄이고,</span>
            <span>사용자가 바로 행동할 수 있는 서비스 흐름을 설계하는 역할에 관심이 있습니다.</span>
          </p>
          <div className="closing-actions">
            <a className="btn btn-primary" href={contactHref} target="_blank" rel="noreferrer">
              메일 보내기
              <Mail size={17} />
            </a>
            <a className="btn btn-inverse" href="#flow">
              프로젝트 다시 보기
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <aside className="contact-card" aria-label="Contact details">
          <div>
            <span>ROLE FIT</span>
            <strong>서비스기획</strong>
            <strong>AX 기획 / 업무 개선</strong>
            <strong>주니어 PO</strong>
            <strong>B2B SaaS · 백오피스</strong>
          </div>
          <div>
            <span>Contact</span>
            <a href={contactHref} target="_blank" rel="noreferrer">
              {contactEmail}
            </a>
          </div>
          <div>
            <span>Base</span>
            <strong>Seoul, Korea</strong>
          </div>
        </aside>
        </div>
    </section>
  );
}
