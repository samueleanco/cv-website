import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";
import { socialLinks } from "@/data/socialLinks";

export function Contact() {
  return (
    <Section id="contact" number="07" label="Contact" title="Let's connect.">
      <p className="prose">
        I&apos;m happy to talk about software development, infrastructure, security, and
        professional opportunities.
      </p>
      <ul className="contact-links">
        {socialLinks
          .filter((link) => link.external)
          .map((link) => (
            <li key={link.label}>
              <ArrowLink href={link.href} external>
                {link.label}
              </ArrowLink>
            </li>
          ))}
      </ul>
    </Section>
  );
}
