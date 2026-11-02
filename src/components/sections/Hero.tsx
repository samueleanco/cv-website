import { ArrowLink } from "@/components/ui/ArrowLink";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";

// When a CV PDF is added (e.g. public/cv.pdf), set this to "/cv.pdf" and the
// secondary hero button becomes "Download CV".
const CV_URL: string | null = null;

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <p className="mono eyebrow">COMPUTER SCIENCE · FHNW · SWITZERLAND</p>
        <h1 id="hero-title">
          {profile.name}
        </h1>
        <p className="position">{profile.role}</p>
        <p className="intro">{profile.heroIntro}</p>
        <div className="actions">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          {CV_URL ? (
            <a className="btn" href={CV_URL} download>
              Download CV
            </a>
          ) : (
            <a className="btn" href="#contact">
              Get in Touch
            </a>
          )}
        </div>
        <ul className="socials" aria-label="Profiles">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <ArrowLink href={link.href} external={link.external}>
                {link.label}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
