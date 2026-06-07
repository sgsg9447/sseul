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
            <span>GenA에서는 AI 슬라이드 편집 흐름을 구현했고,</span>
            <span>Orzo에서는 반복되는 콘텐츠 배포를 자동화했으며,</span>
            <span>Waitroom에서는 흩어진 웨이팅 확인 경로를 한 화면에 모았습니다.</span>
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
            <a className="btn btn-inverse" href="#flow">
              프로젝트 보기
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <aside className="contact-card" aria-label="Contact details">
          <div>
            <span>ROLE FIT</span>
            <strong>Frontend Engineer</strong>
            <strong>Product-minded Frontend</strong>
            <strong>서비스기획 / 업무 개선</strong>
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
