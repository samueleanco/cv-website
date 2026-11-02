import { Entry } from "@/components/ui/Entry";
import { Section } from "@/components/ui/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" number="02" label="Experience" title="Practical backend experience.">
      {experience.map((item) => (
        <Entry
          key={`${item.organization}-${item.period}`}
          period={item.period}
          title={item.role}
          organization={item.organization}
          meta={item.employmentLevel}
          description={item.description}
          tags={item.technologies}
          tagsLabel="Technologies"
        />
      ))}
    </Section>
  );
}
