import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

const journey = [
  { label: "Foundation", value: "Physics laboratory apprenticeship" },
  { label: "Study", value: "BSc Computer Science at FHNW" },
  { label: "Practice", value: "Backend development at KW Software AG" },
  { label: "Direction", value: "Security, Platforms & DevOps" },
];

export function About() {
  return (
    <section className="section shell" id="about" aria-labelledby="about-title">
      <SectionHeading
        number="02"
        eyebrow="About"
        title="From precise experiments to dependable software."
      />

      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">
            My route into software started in a physics laboratory at ETH Zurich,
            where careful methods, technical precision, and clear documentation
            mattered every day.
          </p>
          <p>
            That foundation led me to Computer Science at FHNW and to practical
            backend development. I am now combining both: structured problem
            solving from the laboratory with a growing understanding of software,
            infrastructure, and security.
          </p>
          <p>
            I enjoy learning by working through difficult problems, testing my
            assumptions, and developing skills that hold up in practice. In
            cybersecurity, that currently means building experience honestly
            through hands-on labs and beginner TryHackMe rooms.
          </p>
        </div>

        <div className="journey" aria-label="Professional journey">
          {journey.map((step, index) => (
            <div className="journey__step" key={step.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{step.label}</p>
                <strong>{step.value}</strong>
              </div>
            </div>
          ))}
          <div className="journey__profile">
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
