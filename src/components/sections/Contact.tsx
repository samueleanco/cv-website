import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Contact() {
  return (
    <section className="section contact shell" id="contact" aria-labelledby="contact-title">
      <SectionHeading number="08" eyebrow="Contact" title="Let’s start a conversation." />
      <div className="contact-panel">
        <div className="contact-panel__copy">
          <p>
            I am interested in thoughtful conversations about backend development,
            secure software, platforms, DevOps, and opportunities to keep learning.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-links" aria-label="Contact links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <SocialIcon name={link.icon} />
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
