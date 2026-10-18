import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tags } from "@/components/ui/Tags";

export function Education() {
  return (
    <section className="section shell" id="education" aria-labelledby="education-title">
      <SectionHeading
        number="04"
        eyebrow="Education"
        title="A technical foundation, then a software focus."
      />

      <div className="education-list">
        {education.map((item, index) => (
          <article className="education-card" key={item.institution}>
            <div className="education-card__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="education-card__meta">
              <time>{item.period}</time>
              <p>{item.institution}</p>
            </div>
            <div className="education-card__content">
              <h3>{item.qualification}</h3>
              {item.focus ? <p className="education-card__focus">{item.focus}</p> : null}
              <p>{item.description}</p>
              {item.topics ? <Tags items={item.topics} subtle /> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
