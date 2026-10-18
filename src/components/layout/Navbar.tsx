"use client";

import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Samuele Ancona, back to top">
          <span className="brand__mark">SA</span>
          <span className="brand__name">Samuele Ancona</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div
          id="navigation-menu"
          className={`nav-menu${isOpen ? " nav-menu--open" : ""}`}
        >
          <ol>
            {navigationItems.map((item, index) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </header>
  );
}
