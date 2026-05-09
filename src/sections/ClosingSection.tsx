import { ArrowRight, Mail } from 'lucide-react';

export function ClosingSection() {
  return (
    <section className="closing" id="contact">
      <div className="section-inner">
        <p className="eyebrow inverse">
          <span />
          06 / Closing
        </p>
        <h2>제가 만들고 싶은 것은 단순한 AI 기능이 아니라, 반복 가능한 워크플로우입니다.</h2>
        <p>
          이 포트폴리오는 아이디어, 생활 기록, 오프라인 운영처럼 서로 다른 문제를 다루지만
          공통적으로 하나의 방향을 가집니다. 흩어진 입력을 구조화하고, 사용자가 바로 실행할 수
          있는 결과물로 바꾸고, 반복되는 과정을 자동화하는 것.
        </p>
        <p>
          저는 프론트엔드 개발 경험을 바탕으로 사용자의 실제 흐름을 이해하고, 이를 실행 가능한
          AX 워크플로우로 설계하는 개발자가 되고자 합니다.
        </p>
        <div className="closing-actions">
          <a className="btn btn-primary" href="mailto:hi@sseul.studio">
            이메일 보내기
            <Mail size={17} />
          </a>
          <a className="btn btn-inverse" href="#top">
            처음으로 돌아가기
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
