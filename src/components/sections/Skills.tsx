import { Section } from "@/components/ui/Section";
import { Tags } from "@/components/ui/Tags";
import { languages, skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" number="05" label="Skills" title="Tools, with honest levels.">
      {skillGroups.map((group) => (
        <div className="skill-row" key={group.category}>
          <h3>{group.category}</h3>
          <div>
            {group.level !== undefined && (
              <div className="meter">
                <div
                  className="meter__track"
                  role="meter"
                  aria-label={`${group.category} overall level`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={group.level}
                >
                  <div className="meter__fill" style={{ width: `${group.level}%` }} />
                </div>
                <span className="mono">{group.level}%</span>
              </div>
            )}
            <Tags items={group.skills} label={group.category} />
            <p className="note">{group.description}</p>
          </div>
        </div>
      ))}

      <h3 className="mono subhead">Spoken languages</h3>
      <ul>
        {languages.map((item) => (
          <li className="lang-row" key={item.language}>
            <span>{item.language}</span>
            <span className="mono">{item.proficiency}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
