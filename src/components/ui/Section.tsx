interface SectionProps {
  id: string;
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, number, label, title, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container section__grid">
        <p className="mono section__label">
          <b>{number}</b>
          {label}
        </p>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          <div className="section__body">{children}</div>
        </div>
      </div>
    </section>
  );
}
