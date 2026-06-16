import { FileDown, FileText, Mail, ScrollText } from 'lucide-react';

const contactEmail = 'sgsg9447@gmail.com';
const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;

export function ClosingSection() {
  return (
    <section className="closing" id="contact">
      <div className="section-inner">
        <div className="closing-heading">
          <p className="eyebrow inverse">
            <span />
            05 / CONTACT
          </p>
          <h2>
            <span className="closing-title-line">복잡한 요구를 구조로 정리하고,</span>
            <span className="closing-title-line">실제로 동작하는 화면으로</span>
            <span className="closing-title-line">만드는 일을 하고 싶습니다.</span>
          </h2>
        </div>

        <div className="closing-copy">
          <p className="closing-lines">
            <span>목공 직업훈련기관 리뉴얼에서는 문제 정의부터 데이터 구조·화면 설계·구현까지 한 흐름으로 설계했고,</span>
            <span>GenA·Orzo·Waitroom에서는 편집 경험을 구현하고, 반복 업무를 자동화하고, 흩어진 정보를 한곳에 모았습니다.</span>
          </p>
          <p className="closing-lines">
            <span>프론트엔드 구현 경험을 바탕으로,</span>
            <span>사용자 경험과 운영 효율을 함께 고려하는 팀에서 일하고 싶습니다.</span>
          </p>
          <div className="closing-actions">
            <a className="btn btn-primary" href={contactHref} target="_blank" rel="noreferrer">
              메일 보내기
              <Mail size={17} />
            </a>
            <a className="btn btn-inverse" href="/resume">
              이력서
              <FileText size={17} />
            </a>
            <a className="btn btn-inverse" href="/career">
              경력기술서
              <ScrollText size={17} />
            </a>
            <a className="btn btn-inverse" href="/portfolio-pdf">
              포트폴리오 PDF
              <FileDown size={17} />
            </a>
          </div>
        </div>

        <aside className="contact-card" aria-label="Contact details">
          <div>
            <span>ROLE FIT</span>
            <strong>Frontend Engineer</strong>
            <strong>Product-minded Frontend</strong>
            <strong>서비스기획 / PM / PO</strong>
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
