import { ArrowDown, ArrowRight } from 'lucide-react';
import logoMark from '../assets/logo-mark.svg';
import profile from '../assets/profile.jpg';

const keywords = ['Problem', 'Structure', 'Build', 'Improve'];

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span />
          SSEUL · FRONTEND & PRODUCT PORTFOLIO
        </p>
        <h1>
          <span>그냥 지나칠 수 있는 불편에서</span>
          <span>서비스의 시작점을 찾습니다.</span>
        </h1>
        <p className="hero-lede">
          복잡한 요구를 구조로 정리하고,
          <br />
          사용자 경험과 운영 효율을 함께 고려해 실제 동작하는 화면으로 만듭니다.
        </p>
        <p className="hero-proof">
          GenA, Orzo, Waitroom을 통해
          <br />
          편집 경험을 구현하고, 반복 업무를 자동화하고, 작은 불편을 서비스로 만들었습니다.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            대표 프로젝트 보기
            <ArrowDown size={17} />
          </a>
          <a className="btn btn-secondary" href="#experience">
            경력 요약 보기
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
          <strong>Frontend Engineer · Product Planning</strong>
          <span>Focus</span>
          <strong>Problem → Structure → Build</strong>
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
