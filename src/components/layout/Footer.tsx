import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container mono">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a className="link" href="#top">
          Back to top <span className="arrow" aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
