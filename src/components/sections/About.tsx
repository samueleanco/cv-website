import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

const facts = [
  ["Based in", profile.location],
  ["Studying", "BSc Computer Science, FHNW"],
  ["Working", "Backend Development Intern, KW Software AG"],
  ["Focus", profile.focus],
];

export function About() {
  const [lead, ...rest] = profile.about;
  return (
    <Section id="about" number="01" label="About" title="From the laboratory to software.">
      <p className="lead">{lead}</p>
      <div className="prose" style={{ marginTop: "1.5rem" }}>
        {rest.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <dl className="facts">
        {facts.map(([term, value]) => (
          <div key={term}>
            <dt className="mono">{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
