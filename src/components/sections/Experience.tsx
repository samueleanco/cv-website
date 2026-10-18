import { experience } from "@/data/experience";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section className="section shell" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        number="03"
        eyebrow="Experience"
        title="Learning through real backend work."
        description="Current professional experience, presented without inflated titles or invented impact."
      />
      <div className="timeline">
        {experience.map((item) => (
          <ExperienceCard key={`${item.organization}-${item.role}`} item={item} />
        ))}
      </div>
    </section>
  );
}
