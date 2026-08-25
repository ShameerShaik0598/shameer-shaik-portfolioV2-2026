import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";

/* ─── Contact link item definition ─────────────────────────────────────── */
interface ContactLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  primary?: boolean;
  external?: boolean;
  value?: string;
}

/* ─── Resume download definition ────────────────────────────────────────── */
interface ResumeLink {
  label: string;
  href: string;
  description: string;
}

const RESUMES: ResumeLink[] = [
  {
    label: "↓ Software Engineer Resume",
    // UPDATE: replace with hosted PDF URL
    href: "/previews/Shameer_Shaik_Software_Engineer.pdf",  
    description: "Software Engineer / Full-Stack",
  },
  // {
  //   label: "↓ Data Analyst Resume",
  //   // UPDATE: replace with hosted PDF URL
  //   href: "/previews/Shameer_Shaik_Data_Analyst.pdf",
  //   description: "Data Analyst / Data Scientist",
  // },
];

/* ─── Hoverable contact button ──────────────────────────────────────────── */
const ContactButton: React.FC<ContactLink> = ({
  label,
  href,
  icon,
  primary = false,
  external = false,
}) => {
  const [hovered, setHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 28px",
    borderRadius: "var(--radius)",
    fontSize: "0.9375rem",
    fontWeight: 500,
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s ease",
    border: "1px solid",
    letterSpacing: "0.01em",
    ...(primary
      ? {
          background: hovered ? "rgba(79,142,247,0.88)" : "var(--accent)",
          borderColor: "var(--accent)",
          color: "#fff",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered ? "0 8px 24px rgba(79,142,247,0.25)" : "none",
        }
      : {
          background: "transparent",
          borderColor: hovered ? "var(--accent-border)" : "var(--border-strong)",
          color: hovered ? "var(--accent)" : "var(--text-primary)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
        }),
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
      {label}
    </a>
  );
};

/* ─── Resume download card ──────────────────────────────────────────────── */
const ResumeCard: React.FC<ResumeLink> = ({ label, href, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...resumeCardStyle,
        borderColor: hovered ? "var(--accent-border)" : "var(--border)",
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-glass)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={resumeIconStyle}>
        <DownloadIcon />
      </div>
      <div>
        <p style={resumeLabelStyle}>{label}</p>
        <p style={resumeDescStyle}>{description}</p>
      </div>
    </a>
  );
};

/* ─── Main Contact Section ──────────────────────────────────────────────── */
const Contact: React.FC = () => {
  const contactLinks: ContactLink[] = [
    {
      label: "shameer.s.dev@gmail.com",
      href: "mailto:shameer.s.dev@gmail.com",
      icon: <EmailIcon />,
      primary: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shameersamuel/",
      icon: <LinkedinIcon />,
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/ShameerShaik0598",
      icon: <GithubIcon />,
      external: true,
    },
  ];

  return (
    <section id="contact" style={sectionStyle}>
      {/* Ambient glow */}
      <div style={glowStyle} aria-hidden />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeader
          label="Get In Touch"
          title="Let's Connect"
          subtitle="Open to full-time SDE, Full-Stack, and Data Analyst roles."
          centered
        />

        {/* ── Availability indicator ── */}
        <FadeIn delay={80}>
          <div style={availabilityStyle}>
            <span style={availDotStyle} />
            <span style={availTextStyle}>
              Available for new opportunities
            </span>
          </div>
        </FadeIn>

        {/* ── Contact buttons ── */}
        <FadeIn delay={140}>
          <div style={buttonsRowStyle}>
            {contactLinks.map((link) => (
              <ContactButton key={link.label} {...link} />
            ))}
          </div>
        </FadeIn>

        {/* ── Divider ── */}
        <FadeIn delay={180}>
          <div style={dividerStyle}>
            <div style={dividerLineStyle} />
            <span style={dividerLabelStyle}>Resume Downloads</span>
            <div style={dividerLineStyle} />
          </div>
        </FadeIn>

        {/* ── Resume cards ── */}
        <FadeIn delay={220}>
          <div style={resumeRowStyle}>
            {RESUMES.map((r) => (
              <ResumeCard key={r.label} {...r} />
            ))}
          </div>
        </FadeIn>

        {/* ── Direct email display ── */}
        <FadeIn delay={260}>
          <div style={emailDisplayStyle}>
            <a
              href="mailto:shameer.s.dev@gmail.com"
              style={emailLinkStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
              }}
            >
              shameer.s.dev@gmail.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;

/* ─── SVG Icons ─────────────────────────────────────────────────────────── */
const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.15v3.18c0 .31.21.67.8.56C20.22 21.43 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const sectionStyle: React.CSSProperties = {
  background: "var(--bg-primary)",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
};

const glowStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "-100px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "700px",
  height: "400px",
  background: "radial-gradient(ellipse, rgba(79,142,247,0.06) 0%, transparent 70%)",
  pointerEvents: "none",
};

const availabilityStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "var(--green-dim)",
  border: "1px solid rgba(52,211,153,0.2)",
  borderRadius: "999px",
  padding: "6px 16px",
  marginBottom: "40px",
};

const availDotStyle: React.CSSProperties = {
  width: "7px",
  height: "7px",
  borderRadius: "50%",
  background: "var(--green)",
  boxShadow: "0 0 6px var(--green)",
  animation: "pulse 2s ease infinite",
};

const availTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--green)",
  letterSpacing: "0.06em",
};

const buttonsRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: "48px",
};

const dividerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "24px",
  maxWidth: "480px",
  margin: "0 auto 24px",
};

const dividerLineStyle: React.CSSProperties = {
  flex: 1,
  height: "1px",
  background: "var(--border)",
};

const dividerLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  color: "var(--text-muted)",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const resumeRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "24px",
  marginBottom: "48px",
};

const resumeCardStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  background: "var(--bg-glass)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "18px 24px",
  textDecoration: "none",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  transition: "all 0.2s ease",
  minWidth: "220px",
};

const resumeIconStyle: React.CSSProperties = {
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  background: "var(--accent-dim)",
  border: "1px solid var(--accent-border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const resumeLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.875rem",
  color: "var(--text-primary)",
  fontWeight: 500,
  marginBottom: "2px",
};

const resumeDescStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "var(--text-secondary)",
};

const emailDisplayStyle: React.CSSProperties = {
  marginTop: "8px",
};

const emailLinkStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.8125rem",
  color: "var(--text-muted)",
  transition: "color 0.2s ease",
  letterSpacing: "0.04em",
};

/* Inject pulse keyframe once */
if (typeof document !== "undefined" && !document.getElementById("contact-kf")) {
  const style = document.createElement("style");
  style.id = "contact-kf";
  style.textContent = `@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`;
  document.head.appendChild(style);
}
