import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="footer shell">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <div className="footer__links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
