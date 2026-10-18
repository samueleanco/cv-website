import { otherInterests, personalPursuits } from "@/data/beyondCode";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tags } from "@/components/ui/Tags";

export function BeyondCode() {
  return (
    <section className="section shell" id="beyond-code" aria-labelledby="beyond-code-title">
      <SectionHeading
        number="07"
        eyebrow="Beyond code"
        title="Discipline outside software."
        description="Martial arts have been a long-term practice in precision, resilience, and staying composed under pressure."
      />

      <div className="pursuits-grid">
        {personalPursuits.map((pursuit, index) => (
          <article className="pursuit-card" key={pursuit.title}>
            <div className="pursuit-card__header">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{pursuit.meta}</p>
            </div>
            <h3>{pursuit.title}</h3>
            <p>{pursuit.description}</p>
            <ul>
              {pursuit.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="interests-row">
        <p>Other interests</p>
        <Tags items={otherInterests} subtle />
      </div>
    </section>
  );
}
