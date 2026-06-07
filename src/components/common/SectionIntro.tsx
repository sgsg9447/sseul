import type { ReactNode } from 'react';

type SectionIntroProps = {
  count: string;
  label: string;
  title: ReactNode;
  body?: ReactNode;
};

export function SectionIntro({ count, label, title, body }: SectionIntroProps) {
  return (
    <div className={body ? 'section-intro' : 'section-intro section-intro-compact'}>
      <p className="eyebrow">
        <span />
        {count} / {label}
      </p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
