import { ArrowRight, ArrowUpRight, Check, Mail } from 'lucide-react';
import { ProfileHeader } from '../components/layout/ProfileHeader';
import profile from '../assets/profile.jpg';
import {
  CONTACT_EMAIL,
  MAIL_HREF,
  PHONE,
  PORTFOLIO_HREF,
  TEL_HREF,
  faqIntro,
  faqs,
  mailForTier,
  processIntro,
  processSteps,
  profileContact,
  profileHero,
  samples,
  samplesIntro,
  startSteps,
  tiers,
  tiersIntro,
} from '../data/profile';

function ProfileHero() {
  return (
    <section className="work-hero" id="top">
      <div className="work-hero-copy">
        <p className="eyebrow">
          <span />
          {profileHero.eyebrow}
        </p>
        <h1>
          {profileHero.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="work-hero-lede">
          {profileHero.ledeLines[0]}
          <br />
          {profileHero.ledeLines[1]}
        </p>
        <p className="work-hero-proof">{profileHero.proof}</p>
        <div className="work-hero-actions">
          <a className="btn btn-primary" href={MAIL_HREF}>
            이메일로 문의하기
            <Mail size={17} />
          </a>
          <a className="btn btn-secondary" href="#tiers">
            상품·가격 보기
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <aside className="work-hero-card" aria-label="제작 소개 요약">
        <div className="work-hero-card-top">
          <img className="work-hero-avatar" src={profile} alt="김슬기 프로필 사진" />
          <div className="work-hero-id">
            <strong>{profileHero.profileName}</strong>
            <span>{profileHero.card.topline}</span>
          </div>
        </div>
        <strong className="work-hero-card-title">{profileHero.card.title}</strong>
        <dl className="work-hero-card-grid">
          {profileHero.card.rows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <a className="work-hero-live" href={PORTFOLIO_HREF}>
          직접 만든 포트폴리오 보기
          <ArrowUpRight size={15} />
        </a>
      </aside>
    </section>
  );
}

function TiersSection() {
  return (
    <section className="work-section work-ba" id="tiers">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {tiersIntro.eyebrow}
          </p>
          <h2>{tiersIntro.title}</h2>
          <p className="work-intro-body">{tiersIntro.body}</p>
        </div>

        <p className="pf-launch">{tiersIntro.launch}</p>
        <div className="pf-tiers">
          {tiers.map((tier) => (
            <article
              className={`pf-tier${tier.featured ? ' is-featured' : ''}${tier.key === 'premium' ? ' is-premium' : ''}`}
              key={tier.key}
            >
              {tier.featured ? <span className="pf-tier-badge">가장 인기</span> : null}
              <div className="pf-tier-head">
                <span className="pf-tier-tag">{tier.tag}</span>
                <strong className="pf-tier-name">{tier.name}</strong>
              </div>
              <p className="pf-tier-lead">{tier.lead}</p>
              <div className="pf-tier-price">
                <strong>{tier.price}</strong>
                <span>{tier.unit}</span>
              </div>
              <p className="pf-tier-regular">
                <s>{tier.regular}</s>
              </p>
              <ul className="pf-tier-feats">
                {tier.features.map((feat) => (
                  <li key={feat}>
                    <Check size={16} />
                    {feat}
                  </li>
                ))}
              </ul>
              <a className={`btn ${tier.featured ? 'btn-primary' : 'btn-secondary'}`} href={mailForTier(tier.name)}>
                {tier.cta}
                <Mail size={16} />
              </a>
              <p className="pf-tier-note">{tier.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SamplesSection() {
  return (
    <section className="work-section" id="samples">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {samplesIntro.eyebrow}
          </p>
          <h2>{samplesIntro.title}</h2>
          <p className="work-intro-body">{samplesIntro.body}</p>
        </div>

        <div className="pf-samples">
          {samples.map((sample) => (
            <article className="pf-sample" key={sample.title}>
              <span className="pf-sample-tag">{sample.tag}</span>
              <strong>{sample.title}</strong>
              <p>{sample.desc}</p>
              <a className="work-deliver-link" href={sample.href}>
                {sample.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="work-section work-ba" id="process">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {processIntro.eyebrow}
          </p>
          <h2>{processIntro.title}</h2>
          <p className="work-intro-body">{processIntro.body}</p>
        </div>

        <ol className="pf-steps">
          {processSteps.map((step) => (
            <li className="pf-step" key={step.no}>
              <span className="pf-step-no">
                {step.no} · {step.sub}
              </span>
              <strong>{step.name}</strong>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="work-section" id="faq">
      <div className="work-section-inner">
        <div className="work-intro">
          <p className="eyebrow">
            <span />
            {faqIntro.eyebrow}
          </p>
          <h2>{faqIntro.title}</h2>
        </div>

        <div className="pf-faq">
          {faqs.map((item) => (
            <div className="pf-faq-item" key={item.q}>
              <p className="pf-faq-q">{item.q}</p>
              <p className="pf-faq-a">
                {item.a[0]}
                {item.a[1] ? (
                  <>
                    {' '}
                    <br className="br-mobile" />
                    {item.a[1]}
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="work-contact" id="contact">
      <div className="work-contact-inner">
        <div className="work-contact-copy">
          <p className="eyebrow inverse">
            <span />
            {profileContact.eyebrow}
          </p>
          <h2>
            {profileContact.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="work-contact-body">
            {profileContact.bodyLines[0]}
            <br />
            {profileContact.bodyLines[1]}
          </p>
          <div className="work-start">
            <span className="work-start-label">이렇게 시작해요</span>
            <ol className="work-start-steps">
              {startSteps.map((step, i) => (
                <li key={step}>
                  <span className="work-start-no">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="work-contact-actions">
            <a className="btn btn-primary" href={MAIL_HREF}>
              이메일로 문의하기
              <Mail size={17} />
            </a>
            <a className="btn btn-inverse" href="#tiers">
              상품·가격 보기
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
        <aside className="work-contact-card" aria-label="연락 정보">
          {profileContact.card.map((row) => (
            <div key={row.label}>
              <span>{row.label}</span>
              <strong>{row.value}</strong>
            </div>
          ))}
          <div>
            <span>Email</span>
            <a href={MAIL_HREF}>{CONTACT_EMAIL}</a>
          </div>
          <div>
            <span>전화</span>
            <a href={TEL_HREF}>{PHONE}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function ProfilePage() {
  return (
    <div className="work-page">
      <ProfileHeader />
      <main>
        <ProfileHero />
        <TiersSection />
        <SamplesSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
    </div>
  );
}
