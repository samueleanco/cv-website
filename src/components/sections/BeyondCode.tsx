import { Section } from "@/components/ui/Section";
import { personalPursuits } from "@/data/beyondCode";

export function BeyondCode() {
  return (
    <Section id="beyond-code" number="06" label="Beyond Code" title="Discipline outside the screen.">
      <div className="pursuits">
        {personalPursuits.map((item) => (
          <article className="pursuit" key={item.title}>
            <p className="mono">{item.meta}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
