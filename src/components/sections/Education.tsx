import { Entry } from "@/components/ui/Entry";
import { Section } from "@/components/ui/Section";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education" number="04" label="Education" title="Science first, then software.">
      {education.map((item) => (
        <Entry
          key={item.institution}
          period={item.period}
          title={item.qualification}
          organization={item.institution}
          meta={item.focus}
          description={item.description}
          tags={item.topics}
          tagsLabel="Topics"
        />
      ))}
    </Section>
  );
}
