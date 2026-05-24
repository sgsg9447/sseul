import { ArrowDown, ArrowRight } from 'lucide-react';
import logoMark from '../assets/logo-mark.svg';
import profile from '../assets/profile.jpg';

const keywords = ['Problem', 'Flow', 'MVP', 'Validate', 'Workflow'];

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span />
          SSEUL · PRODUCT & SERVICE PORTFOLIO
        </p>
        <h1>
          <span>그냥 지나칠 수 있는 불편에서</span>
          <span>서비스의 시작점을 찾습니다.</span>
        </h1>
        <p className="hero-lede">
          문제를 발견하는 데서 멈추지 않고,
          <br />
          기획과 구현을 오가며 작게 만들고 검증할 수 있는 흐름으로 구체화합니다.
        </p>
        <p className="hero-proof">
          ZERO100, Waitroom, EnrollOps를 통해
          <br />
          아이디어 구조화, MVP 검증, 운영 흐름 개선까지 직접 연결했습니다.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#flow">
            문제 해결 방식 보기
            <ArrowDown size={17} />
          </a>
          <a className="btn btn-secondary" href="#projects">
            대표 프로젝트 보기
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <aside className="profile-pass" aria-label="sseul profile card">
        <div className="pass-topline">
          <img src={logoMark} alt="" />
          <span>VOL.01 · SEOUL</span>
        </div>
        <figure>
          <img src={profile} alt="김슬기 프로필 사진" />
        </figure>
        <div className="pass-grid">
          <span>Name</span>
          <strong>Kim Seul Gi</strong>
          <span>Position</span>
          <strong>Product & Service Planner</strong>
          <span>Focus</span>
          <strong>Problem → MVP → Workflow</strong>
        </div>
      </aside>

      <div className="keyword-strip" aria-label="Portfolio workflow keywords">
        {keywords.map((item, index) => (
          <span key={item}>
            {item}
            {index < keywords.length - 1 ? <i>→</i> : null}
          </span>
        ))}
      </div>
    </section>
  );
}
