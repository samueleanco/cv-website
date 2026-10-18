import { languages, skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tags } from "@/components/ui/Tags";

export function Skills() {
  return (
    <section className="section shell" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        number="06"
        eyebrow="Skills"
        title="Current tools and developing areas."
        description="A factual snapshot of the technologies I use and the fields I am actively exploring."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.category}>
            <span className="skill-group__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{group.category}</h3>
            <p>{group.description}</p>
            <Tags items={group.skills} />
          </article>
        ))}
      </div>

      <div className="languages-block">
        <div>
          <p className="languages-block__eyebrow">Communication</p>
          <h3>Languages</h3>
        </div>
        <dl>
          {languages.map((language) => (
            <div key={language.language}>
              <dt>{language.language}</dt>
              <dd>{language.proficiency}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
