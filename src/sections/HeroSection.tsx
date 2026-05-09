import { ArrowDown, ArrowRight } from 'lucide-react';
import logoMark from '../assets/logo-mark.svg';
import profile from '../assets/profile.jpg';

const keywords = ['Idea', 'Spec', 'Build', 'Validate', 'Automate'];

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span />
          sseul · AX workflow portfolio
        </p>
        <h1>아이디어를 실행 가능한 명세로 구조화하고, 실제 제품과 운영 워크플로우로 완성합니다.</h1>
        <p className="hero-lede">
          0to100으로 아이디어를 명세·화면 흐름·개발 TODO로 구조화하고, FoodieCard로 구현
          가능성을 검증했으며, EnrollOps로 오프라인 신청 운영을 온라인 접수·문서·리포트 자동화로
          전환했습니다.
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
          <strong>Idea → Spec → Validate</strong>
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
