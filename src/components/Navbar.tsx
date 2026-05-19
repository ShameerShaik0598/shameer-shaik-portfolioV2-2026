import React, { useState, useEffect } from "react";
import { navLinks } from "../data/nav";
import { useScrollSpy } from "../hooks/useScrollSpy";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the active section link while scrolling
  const activeId = useScrollSpy(["about", "featured", "projects", "experience", "skills", "education", "contact"]);

  // Add backdrop once user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Fixed top bar ── */}
      <nav style={navStyle(scrolled)}>
        <div style={innerStyle}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            style={logoStyle}
            aria-label="Back to top"
          >
            SS
          </a>

          {/* Desktop links */}
          <ul style={desktopLinksStyle}>
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={navLinkStyle(isActive)}
                  >
                    {link.label}
                    {isActive && <span style={activeDot} />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div style={actionsStyle}>
            <a
              href="mailto:itsshameersamuel@gmail.com"
              style={ctaStyle}
            >
              Hire Me
            </a>
            <button
              style={hamburgerStyle}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span style={barStyle(menuOpen, 0)} />
              <span style={barStyle(menuOpen, 1)} />
              <span style={barStyle(menuOpen, 2)} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <div style={overlayStyle(menuOpen)} aria-hidden={!menuOpen}>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            style={{
              ...mobileNavLinkStyle,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.35s ease ${i * 60}ms, transform 0.35s ease ${i * 60}ms`,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:itsshameersamuel@gmail.com"
          style={{
            ...mobileCTAStyle,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.35s ease ${navLinks.length * 60}ms, transform 0.35s ease ${navLinks.length * 60}ms`,
          }}
        >
          ✉ itsshameersamuel@gmail.com
        </a>
      </div>
    </>
  );
};

export default Navbar;

/* ─── Inline styles ── (keeps component self-contained) ──────────────────── */

const navStyle = (scrolled: boolean): React.CSSProperties => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 200,
  backdropFilter: scrolled ? "blur(20px)" : "none",
  WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
  backgroundColor: scrolled ? "rgba(10,10,15,0.88)" : "transparent",
  borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
  transition: "all 0.3s ease",
});

const innerStyle: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 32px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const logoStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "1.25rem",
  color: "var(--accent)",
  letterSpacing: "-0.02em",
  cursor: "pointer",
};

const desktopLinksStyle: React.CSSProperties = {
  display: "flex",
  listStyle: "none",
  gap: "32px",
  alignItems: "center",
};

const navLinkStyle = (active: boolean): React.CSSProperties => ({
  fontFamily: "var(--font-body)",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: active ? "var(--text-primary)" : "var(--text-secondary)",
  cursor: "pointer",
  position: "relative",
  paddingBottom: "2px",
  transition: "color 0.2s ease",
  letterSpacing: "0.01em",
});

const activeDot: React.CSSProperties = {
  position: "absolute",
  bottom: "-4px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "4px",
  height: "4px",
  borderRadius: "50%",
  background: "var(--accent)",
};

const actionsStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const ctaStyle: React.CSSProperties = {
  background: "var(--accent)",
  color: "#fff",
  border: "none",
  borderRadius: "var(--radius)",
  padding: "8px 20px",
  fontSize: "0.875rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  fontFamily: "var(--font-body)",
  letterSpacing: "0.01em",
};

const hamburgerStyle: React.CSSProperties = {
  display: "none",
  flexDirection: "column",
  gap: "5px",
  background: "none",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "var(--radius)",
  padding: "8px 10px",
  cursor: "pointer",
};

const barStyle = (open: boolean, index: number): React.CSSProperties => {
  const transforms: Record<number, string> = {
    0: open ? "translateY(6.5px) rotate(45deg)" : "none",
    1: open ? "scaleX(0)" : "none",
    2: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
  };
  return {
    display: "block",
    width: "20px",
    height: "1.5px",
    background: "var(--text-primary)",
    borderRadius: "2px",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: transforms[index] ?? "none",
    opacity: open && index === 1 ? 0 : 1,
  };
};

const overlayStyle = (open: boolean): React.CSSProperties => ({
  position: "fixed",
  inset: 0,
  zIndex: 199,
  background: "var(--bg-primary)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  pointerEvents: open ? "all" : "none",
  opacity: open ? 1 : 0,
  transition: "opacity 0.3s ease",
});

const mobileNavLinkStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "2.25rem",
  fontWeight: 700,
  color: "var(--text-primary)",
  letterSpacing: "-0.02em",
  cursor: "pointer",
};

const mobileCTAStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.875rem",
  color: "var(--accent)",
  letterSpacing: "0.04em",
  marginTop: "16px",
};

/* ── Responsive: hide desktop links, show hamburger on mobile ── */
const responsiveCSS = `
  @media (max-width: 768px) {
    nav ul { display: none !important; }
    nav button[aria-label] { display: flex !important; }
    nav a[href^="mailto"] { display: none !important; }
  }
`;

// Inject responsive rules once
if (typeof document !== "undefined") {
  const tag = document.createElement("style");
  tag.textContent = responsiveCSS;
  document.head.appendChild(tag);
}
