"use client";

import { useState, useEffect } from "react";
import { useActiveSection, useTheme } from "@/lib/hooks";
import { I } from "@/lib/icons";

const links = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#services", label: "Service", id: "services" },
  { href: "#work", label: "Portfolio", id: "work" },
  { href: "#resume", label: "Resume", id: "resume" },
  { href: "#community", label: "Community", id: "community" },
  { href: "#why", label: "Why Me", id: "why" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const ids = ["home", "about", "services", "work", "resume", "community", "why", "contact"];
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="logo" href="#home">
          <div className="logo-mark"><span>KP</span></div>
          <span>kuber<span style={{ color: "var(--accent)" }}>.</span></span>
        </a>
        <nav>
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.id}>
                <a href={l.href} className={active === l.id ? "active" : ""}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="tt-track">
              <span className="tt-thumb">{theme === "dark" ? I.moon : I.sun}</span>
            </span>
          </button>
          <button className="menu-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {I.menu}
          </button>
        </div>
      </div>
      {open && (
        <div
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--line-soft)",
            padding: "20px 32px",
          }}
        >
          <ul className="nav-links" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {links.map((l) => (
              <li key={l.id}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
