import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Hero() {
  return (
    <section className="hero shell" id="top" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__status">
          <span aria-hidden="true" /> Switzerland · Student & developer
        </p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__focus">{profile.focus}</p>
        <p className="hero__intro">{profile.introduction}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View my work <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--secondary" href="#contact">
            Contact me
          </a>
        </div>
        <div className="hero__socials" aria-label="Social links">
          {socialLinks.slice(0, 2).map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <SocialIcon name={link.icon} />
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero__index" aria-hidden="true">
        <span>01</span>
        <span>/</span>
        <span>08</span>
      </div>
    </section>
  );
}
