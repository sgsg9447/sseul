import { FileDown, FileText, Mail, ScrollText } from 'lucide-react';

const contactEmail = 'sgsg9447@gmail.com';
const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;
const contactPhone = '010-7705-9447';
const contactPhoneHref = `tel:${contactPhone.replace(/-/g, '')}`;

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
            <span className="closing-title-line">시작은 작은 질문에서,</span>
            <span className="closing-title-line">끝은 달라진 경험에서.</span>
          </h2>
        </div>

        <div className="closing-copy">
          <p className="closing-lines">
            흩어진 요구사항을 기능과 흐름으로 구조화하고, <br className="br-mobile" />그 흐름이 실제로 동작하는 화면이 되게 만듭니다.
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
            <strong>서비스기획 / 프로덕트 기획</strong>
            <strong>데이터·화면 설계</strong>
            <strong>프로덕트 운영·자동화</strong>
          </div>
          <div>
            <span>Contact</span>
            <a href={contactHref} target="_blank" rel="noreferrer">
              {contactEmail}
            </a>
            <a href={contactPhoneHref}>{contactPhone}</a>
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
