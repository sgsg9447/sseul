import type { ReactNode } from 'react';

type SectionIntroProps = {
  count: string;
  label: string;
  title: ReactNode;
  body: ReactNode;
};

export function SectionIntro({ count, label, title, body }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <p className="eyebrow">
        <span />
        {count} / {label}
      </p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
