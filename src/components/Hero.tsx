import React, { useState, useEffect, useRef } from "react";

/* ── Typewriter phrases ─────────────────────────────────────────────────── */
const PHRASES = [
  "I build production-grade full-stack systems.",
  "I ship clean, tested, deployed code.",
  "I turn data into decisions.",
  "I teach React and SQL to 380+ students.",
];

/* ── Resume dropdown options ────────────────────────────────────────────── */
const RESUME_OPTIONS = [
  {
    label: "↓ SDE Resume",
    // UPDATE: replace with hosted PDF URL
    href: "Shameer_Shaik_SDE_Resume.pdf",
  },
  {
    label: "↓ Data Analyst Resume",
    // UPDATE: replace with hosted PDF URL
    href: "Shameer_Shaik_DA_Resume.pdf",
  },
];

const Hero: React.FC = () => {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Typewriter logic ─────────────────────────────────────────────── */
  useEffect(() => {
    const phrase = PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 48);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length - 1)), 28);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx]);

  /* ── Close dropdown on outside click ─────────────────────────────── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={sectionStyle}>
      {/* Subtle dot-grid background */}
      <div style={gridBgStyle} aria-hidden />

      {/* Radial accent glow */}
      <div style={glowStyle} aria-hidden />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={contentStyle}>

          {/* Eyebrow */}
          <div style={eyebrowStyle}>
            <span style={eyebrowDotStyle} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.12em", color: "var(--accent)" }}>
              FULL-STACK SOFTWARE ENGINEER
            </span>
          </div>

          {/* Name */}
          <h1 style={nameStyle}>
            Shameer<br />
            <span style={nameAccentStyle}>Shaik</span>
          </h1>

          {/* Stack subtitle */}
          <p style={subtitleStyle}>
            React · Node.js · TypeScript · PostgreSQL · Azure · AWS
          </p>

          {/* Typewriter */}
          <div style={typewriterWrapStyle}>
            <span style={typewriterTextStyle}>{displayed}</span>
            <span style={cursorStyle} aria-hidden />
          </div>

          {/* CTAs */}
          <div style={ctaRowStyle}>
            <a href="#projects" onClick={scrollToProjects} style={primaryBtnStyle}>
              View My Work
            </a>

            {/* Resume dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                style={secondaryBtnStyle}
                onClick={() => setDropdownOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                Download Resume
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ transform: dropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {dropdownOpen && (
                <div style={dropdownStyle} role="listbox">
                  {RESUME_OPTIONS.map((opt) => (
                    <a
                      key={opt.label}
                      href={opt.href}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)";
                        (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                      }}
                    >
                      {opt.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Social links */}
          <div style={socialsRowStyle}>
            {/* UPDATE: replace # with GitHub URL */}
            <a href="https://github.com/ShameerShaik0598" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <GithubIcon /> GitHub
            </a>
            {/* UPDATE: replace # with LinkedIn URL */}
            <a href="https://www.linkedin.com/in/shameersamuel/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <LinkedinIcon /> LinkedIn
            </a>
            {/* <a href="mailto:itsshameersamuel@gmail.com" style={socialLinkStyle}>
              <EmailIcon /> Email
            </a>  */}
             <a href="mailto:itsshameersamuel@gmail.com" style={socialLinkStyle}>
              <EmailIcon /> itsshameersamuel@gmail.com
            </a>
            {/* <a 
              href="tel:+11234567890"
              style={socialLinkStyle}
            >
               +1 (123) 456-7890
            </a> */}
            <a
              href="https://shameershaik-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
            >
              <GlobeIcon /> Portfolio
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={scrollIndicatorStyle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* ─── Inline SVG Icons ──────────────────────────────────────────────────── */
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.15v3.18c0 .31.21.67.8.56C20.22 21.43 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

/* ─── Styles ────────────────────────────────────────────────────────────── */
const sectionStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: "64px",
  position: "relative",
  overflow: "hidden",
};

const gridBgStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
  pointerEvents: "none",
};

const glowStyle: React.CSSProperties = {
  position: "absolute",
  top: "20%",
  left: "-10%",
  width: "600px",
  height: "600px",
  background:
    "radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 70%)",
  pointerEvents: "none",
  borderRadius: "50%",
};

const contentStyle: React.CSSProperties = {
  maxWidth: "720px",
  paddingTop: "32px",
  paddingBottom: "80px",
};

const eyebrowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "24px",
};

const eyebrowDotStyle: React.CSSProperties = {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "var(--accent)",
  boxShadow: "0 0 8px var(--accent)",
  flexShrink: 0,
};

const nameStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(3rem, 8vw, 5.5rem)",
  letterSpacing: "-0.04em",
  lineHeight: 1.0,
  marginBottom: "16px",
  color: "var(--text-primary)",
};

const nameAccentStyle: React.CSSProperties = {
  color: "var(--accent)",
};

const subtitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.9rem",
  color: "var(--text-secondary)",
  letterSpacing: "0.05em",
  marginBottom: "24px",
};

const typewriterWrapStyle: React.CSSProperties = {
  minHeight: "2rem",
  marginBottom: "40px",
  display: "flex",
  alignItems: "center",
  gap: "2px",
};

const typewriterTextStyle: React.CSSProperties = {
  fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
  fontWeight: 300,
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
};

const cursorStyle: React.CSSProperties = {
  display: "inline-block",
  width: "2px",
  height: "1.2em",
  background: "var(--accent)",
  marginLeft: "2px",
  verticalAlign: "text-bottom",
  animation: "blink 1s step-end infinite",
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  alignItems: "center",
  marginBottom: "40px",
};

const primaryBtnStyle: React.CSSProperties = {
  background: "var(--accent)",
  color: "#fff",
  border: "1px solid var(--accent)",
  borderRadius: "var(--radius)",
  padding: "12px 28px",
  fontWeight: 600,
  fontSize: "0.9375rem",
  cursor: "pointer",
  fontFamily: "var(--font-body)",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  letterSpacing: "0.01em",
};

const secondaryBtnStyle: React.CSSProperties = {
  background: "transparent",
  color: "var(--text-primary)",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius)",
  padding: "12px 24px",
  fontWeight: 500,
  fontSize: "0.9375rem",
  cursor: "pointer",
  fontFamily: "var(--font-body)",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "border-color 0.2s ease, color 0.2s ease",
};

const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  background: "var(--bg-card)",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius)",
  overflow: "hidden",
  minWidth: "220px",
  boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
  zIndex: 50,
};

const dropdownItemStyle: React.CSSProperties = {
  display: "block",
  padding: "13px 20px",
  fontSize: "0.875rem",
  color: "var(--text-primary)",
  fontFamily: "var(--font-mono)",
  borderBottom: "1px solid var(--border)",
  transition: "background 0.15s ease, color 0.15s ease",
  cursor: "pointer",
};

const socialsRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  alignItems: "center",
};

const socialLinkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "0.8125rem",
  color: "var(--text-secondary)",
  transition: "color 0.2s ease",
  fontFamily: "var(--font-body)",
  cursor: "pointer",
};

const scrollIndicatorStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "32px",
  left: "50%",
  transform: "translateX(-50%)",
  color: "var(--text-muted)",
  animation: "bounceY 2.5s ease infinite",
};

/* Inject keyframes once */
if (typeof document !== "undefined" && !document.getElementById("hero-keyframes")) {
  const style = document.createElement("style");
  style.id = "hero-keyframes";
  style.textContent = `
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes bounceY { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
  `;
  document.head.appendChild(style);
}
