import { ArrowDown, ArrowRight } from 'lucide-react';
import logoMark from '../assets/logo-mark.svg';
import profile from '../assets/profile.jpg';

const keywords = ['Idea', 'Spec', 'Build', 'Archive', 'Automate'];

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span />
          sseul · AX workflow portfolio
        </p>
        <h1>흩어진 아이디어와 반복 업무를 실행 가능한 AX 워크플로우로 바꿉니다.</h1>
        <p className="hero-lede">
          서비스 아이디어를 명세로 구조화하고, 그 명세를 바탕으로 실제 서비스를 구현하며,
          오프라인 운영 프로세스를 온라인 자동화 시스템으로 전환한 포트폴리오입니다.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#flow">
            프로젝트 흐름 보기
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
          <strong>sseul</strong>
          <span>Position</span>
          <strong>AX workflow builder</strong>
          <span>Focus</span>
          <strong>Idea → Spec → Build</strong>
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
