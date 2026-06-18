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
            <span className="closing-title-line">기획에서 멈추지 않고,</span>
            <span className="closing-title-line">동작하는 화면까지 책임지는</span>
            <span className="closing-title-line">자리를 찾고 있습니다.</span>
          </h2>
        </div>

        <div className="closing-copy">
          <p className="closing-lines">
            <span>기획자와 개발자 사이에서 통역이 필요 없는 사람,</span>
            <span>요구사항을 동작하는 화면까지 직접 끌고 가는 사람을 지향합니다.</span>
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
