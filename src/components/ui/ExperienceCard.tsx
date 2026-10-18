import type { ExperienceItem } from "@/types/portfolio";
import { Tags } from "./Tags";

interface ExperienceCardProps {
  item: ExperienceItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="timeline-card">
      <div className="timeline-card__marker" aria-hidden="true" />
      <div className="timeline-card__meta">
        <time>{item.period}</time>
        {item.employmentLevel ? <span>{item.employmentLevel}</span> : null}
      </div>
      <div className="timeline-card__content">
        <p className="timeline-card__organization">{item.organization}</p>
        <h3>{item.role}</h3>
        <p>{item.description}</p>
        <Tags items={item.technologies} />
      </div>
    </article>
  );
}
