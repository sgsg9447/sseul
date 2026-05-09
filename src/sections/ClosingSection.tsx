import { ArrowRight, Mail } from 'lucide-react';

const contactEmail = 'sgsg9447@gmail.com';
const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;

export function ClosingSection() {
  return (
    <section className="closing" id="contact">
      <div className="section-inner">
        <div className="closing-copy">
          <p className="eyebrow inverse">
            <span />
            06 / Contact
          </p>
          <h2>아이디어를 실행 가능한 제품과 운영 흐름으로 바꾸는 일을 이야기하고 싶습니다.</h2>
          <p>
            0to100으로 아이디어를 구현 가능한 명세로 구조화했고, FoodieCard로 그 명세가 실제 제품
            구현까지 이어질 수 있음을 검증했으며, EnrollOps로 반복 운영을 온라인 워크플로우로
            전환했습니다.
          </p>
          <p>
            복잡하거나 애매한 문제를 반복 가능한 절차로 바꾸고, 사람이 바로 실행할 수 있는 시스템으로
            설계하는 역할에 관심이 있습니다.
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
            <span>Open to</span>
            <strong>Frontend roles</strong>
            <strong>AX workflow projects</strong>
            <strong>Product automation</strong>
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
