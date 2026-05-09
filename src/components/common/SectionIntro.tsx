type SectionIntroProps = {
  count: string;
  label: string;
  title: string;
  body: string;
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
