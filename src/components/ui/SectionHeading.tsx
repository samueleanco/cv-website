interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  const headingId = `${eyebrow.toLowerCase().replaceAll(" ", "-")}-title`;

  return (
    <header className="section-heading">
      <div className="section-heading__meta">
        <span aria-hidden="true">{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__copy">
        <h2 id={headingId}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
