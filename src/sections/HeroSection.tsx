import { ArrowDown, ArrowRight } from 'lucide-react';
import logoMark from '../assets/logo-mark.svg';
import profile from '../assets/profile.jpg';

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span />
          SSEUL · SERVICE PLANNING PORTFOLIO
        </p>
        <h1>
          <span>그냥 지나칠 수 있는 불편에서</span>
          <span>서비스의 시작점을 찾습니다.</span>
        </h1>
        <p className="hero-lede">불편을 구조로 바꾸고, 그 구조가 화면에서 실제로 동작하게 만듭니다.</p>
        <p className="hero-proof">
          직업훈련기관 사이트를 문제 정의부터
          <br />
          데이터 구조·화면 설계·구현까지 단독으로 다시 설계했습니다.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#case-study">
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
          <strong>구현을 아는 서비스기획자</strong>
          <span>Focus</span>
          <strong>Problem → Structure → Build</strong>
        </div>
      </aside>
    </section>
  );
}
