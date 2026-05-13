import React, { useState } from "react";
import { navLinks } from "../data/nav";

const Footer: React.FC = () => {
  const [backHovered, setBackHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        {/* Top row: logo + nav links */}
        <div style={topRowStyle}>
          {/* Logo */}
          <button onClick={scrollToTop} style={logoStyle} aria-label="Back to top">
            SS
          </button>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul style={navListStyle}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    style={navLinkStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--text-secondary)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            style={{
              ...backTopStyle,
              borderColor: backHovered
                ? "var(--accent-border)"
                : "var(--border)",
              color: backHovered ? "var(--accent)" : "var(--text-secondary)",
              transform: backHovered ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setBackHovered(true)}
            onMouseLeave={() => setBackHovered(false)}
            aria-label="Scroll back to top"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            Top
          </button>
        </div>

        {/* Divider */}
        <div style={dividerStyle} />

        {/* Bottom row: copyright + stack note */}
        <div style={bottomRowStyle}>
          <p style={copyrightStyle}>
            © {new Date().getFullYear()} Shameer Shaik · Georgia, USA
          </p>

          <p style={stackNoteStyle}>
            Built with{" "}
            <span style={stackChipStyle}>React</span>
            {" + "}
            <span style={stackChipStyle}>TypeScript</span>
            {" + "}
            <span style={stackChipStyle}>Vite</span>
            {" · Deployed on "}
            <span style={stackChipStyle}>Netlify</span>
          </p>

          <a
            href="mailto:itsshameersamuel@gmail.com"
            style={emailFooterStyle}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
            }}
          >
            itsshameersamuel@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const footerStyle: React.CSSProperties = {
  borderTop: "1px solid var(--border)",
  padding: "40px 0 32px",
  background: "var(--bg-primary)",
};

const topRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
  marginBottom: "32px",
};

const logoStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "1.25rem",
  color: "var(--accent)",
  letterSpacing: "-0.02em",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
};

const navListStyle: React.CSSProperties = {
  display: "flex",
  listStyle: "none",
  gap: "24px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const navLinkStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--text-secondary)",
  transition: "color 0.2s ease",
  fontFamily: "var(--font-body)",
  cursor: "pointer",
  letterSpacing: "0.01em",
};

const backTopStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  background: "transparent",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "7px 14px",
  fontSize: "0.8125rem",
  color: "var(--text-secondary)",
  fontFamily: "var(--font-mono)",
  cursor: "pointer",
  transition: "all 0.2s ease",
  letterSpacing: "0.04em",
};

const dividerStyle: React.CSSProperties = {
  height: "1px",
  background: "var(--border)",
  marginBottom: "28px",
};

const bottomRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "12px",
};

const copyrightStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--text-muted)",
  letterSpacing: "0.04em",
};

const stackNoteStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--text-muted)",
  letterSpacing: "0.02em",
};

const stackChipStyle: React.CSSProperties = {
  color: "var(--accent)",
  fontWeight: 500,
};

const emailFooterStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--text-muted)",
  transition: "color 0.2s ease",
  letterSpacing: "0.04em",
};
