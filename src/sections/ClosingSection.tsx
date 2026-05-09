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
          <h2>흩어진 아이디어를 실행 가능한 흐름으로 바꾸는 일을 이야기하고 싶습니다.</h2>
          <p>
            서비스 아이디어를 구조화하는 도구, 생활 기록을 다시 사용할 수 있게 만드는 서비스,
            오프라인 운영을 온라인 워크플로우로 전환하는 프로젝트에 관심이 있습니다.
          </p>
          <p>
            함께 만들고 싶은 문제나 검토해보고 싶은 흐름이 있다면 편하게 연락해주세요.
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
