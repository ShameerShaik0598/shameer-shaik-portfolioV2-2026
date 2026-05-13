import React, { useState } from "react";
import { experiences, education, certifications } from "../data/experience";
import type { ExperienceItem } from "../types";
import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";

/* ─── Single timeline card ──────────────────────────────────────────────── */
const TimelineItem: React.FC<{ item: ExperienceItem; delay: number }> = ({
  item,
  delay,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div style={timelineRowStyle}>
        {/* Left: dot + vertical line */}
        <div style={dotColStyle}>
          <div
            style={{
              ...dotStyle,
              background: item.current ? "var(--accent)" : "var(--text-muted)",
              boxShadow: item.current ? "0 0 10px var(--accent)" : "none",
            }}
          />
          <div style={lineStyle} />
        </div>

        {/* Right: card content */}
        <div
          style={{
            ...cardStyle,
            borderColor: hovered ? "var(--accent-border)" : "var(--border)",
            background: hovered ? "var(--bg-card-hover)" : "var(--bg-glass)",
            transform: hovered ? "translateY(-2px)" : "translateY(0)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Meta row */}
          <div style={metaRowStyle}>
            <span style={dateStyle}>{item.period}</span>
            <span style={locationStyle}>· {item.location}</span>
            {item.current && <span style={currentBadgeStyle}>Current</span>}
          </div>

          {/* Role */}
          <h3 style={roleStyle}>{item.role}</h3>

          {/* Company */}
          <p style={companyStyle}>{item.company}</p>

          {/* Bullet points */}
          <ul style={bulletsListStyle}>
            {item.bullets.map((bullet, i) => (
              <li key={i} style={bulletItemStyle}>
                <span style={bulletArrowStyle}>→</span>
                <span style={bulletTextStyle}>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
};

/* ─── Education cards ───────────────────────────────────────────────────── */
const EducationGrid: React.FC = () => (
  <FadeIn delay={100}>
    <div style={eduGridStyle}>
      {education.map((edu) => (
        <div key={edu.degree} style={eduCardStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-border)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          }}
        >
          <div style={eduIconStyle}>
            <GraduationIcon />
          </div>
          <div>
            <p style={eduDegreeStyle}>{edu.degree}</p>
            <p style={eduSchoolStyle}>{edu.school}</p>
            <p style={eduMetaStyle}>{edu.period} · {edu.location}</p>
          </div>
        </div>
      ))}
    </div>
  </FadeIn>
);

/* ─── Certifications row ────────────────────────────────────────────────── */
const CertsRow: React.FC = () => (
  <FadeIn delay={150}>
    <div style={certsWrapStyle}>
      {certifications.map((cert) => (
        <div key={cert.name} style={certItemStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-border)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
          }}
        >
          <div style={certIconWrapStyle}>
            <CertIcon />
          </div>
          <div>
            <p style={certNameStyle}>{cert.name}</p>
            <p style={certYearStyle}>{cert.year}</p>
          </div>
        </div>
      ))}
    </div>
  </FadeIn>
);

/* ─── Main Experience Section ───────────────────────────────────────────── */
const Experience: React.FC = () => (
  <section id="experience">
    <div className="container">
      {/* Work Experience */}
      <SectionHeader label="Career" title="Experience" />
      <div style={timelineWrapStyle}>
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.id} item={exp} delay={i * 100} />
        ))}
      </div>

      {/* Education */}
      <div style={subSectionStyle}>
        <FadeIn>
          <div style={{ marginBottom: "32px" }}>
            <p className="section-label">Academic</p>
            <h2 className="section-title">Education</h2>
          </div>
        </FadeIn>
        <EducationGrid />
      </div>

      {/* Certifications */}
      <div style={subSectionStyle}>
        <FadeIn>
          <div style={{ marginBottom: "32px" }}>
            <p className="section-label">Credentials</p>
            <h2 className="section-title">Certifications</h2>
          </div>
        </FadeIn>
        <CertsRow />
      </div>
    </div>
  </section>
);

export default Experience;

/* ─── Inline SVG Icons ──────────────────────────────────────────────────── */
const GraduationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const CertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const timelineWrapStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0",
};

const timelineRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "28px 1fr",
  gap: "20px",
  position: "relative",
};

const dotColStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "22px",
};

const dotStyle: React.CSSProperties = {
  width: "11px",
  height: "11px",
  borderRadius: "50%",
  flexShrink: 0,
  transition: "box-shadow 0.2s ease",
  zIndex: 1,
};

const lineStyle: React.CSSProperties = {
  width: "1px",
  flex: 1,
  background: "var(--border)",
  marginTop: "8px",
};

const cardStyle: React.CSSProperties = {
  background: "var(--bg-glass)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "28px",
  marginBottom: "20px",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease",
};

const metaRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  marginBottom: "8px",
};

const dateStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--accent)",
  letterSpacing: "0.04em",
};

const locationStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--text-muted)",
  letterSpacing: "0.03em",
};

const currentBadgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.625rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  background: "var(--green-dim)",
  color: "var(--green)",
  border: "1px solid rgba(52,211,153,0.25)",
  borderRadius: "4px",
  padding: "2px 8px",
};

const roleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: "1.1rem",
  letterSpacing: "-0.015em",
  color: "var(--text-primary)",
  marginBottom: "4px",
  lineHeight: 1.3,
};

const companyStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "var(--text-secondary)",
  marginBottom: "18px",
};

const bulletsListStyle: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const bulletItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
};

const bulletArrowStyle: React.CSSProperties = {
  color: "var(--accent)",
  fontSize: "0.8125rem",
  fontFamily: "var(--font-mono)",
  flexShrink: 0,
  marginTop: "3px",
};

const bulletTextStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "var(--text-secondary)",
  lineHeight: 1.7,
};

/* ── Education ── */
const subSectionStyle: React.CSSProperties = {
  marginTop: "72px",
};

const eduGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const eduCardStyle: React.CSSProperties = {
  background: "var(--bg-glass)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "28px",
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  transition: "border-color 0.2s ease, transform 0.2s ease",
  cursor: "default",
};

const eduIconStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  background: "var(--accent-dim)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  border: "1px solid var(--accent-border)",
};

const eduDegreeStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: "1rem",
  letterSpacing: "-0.01em",
  color: "var(--text-primary)",
  marginBottom: "4px",
  lineHeight: 1.3,
};

const eduSchoolStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "var(--text-secondary)",
  marginBottom: "6px",
};

const eduMetaStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--accent)",
  letterSpacing: "0.03em",
};

/* ── Certs ── */
const certsWrapStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const certItemStyle: React.CSSProperties = {
  background: "var(--bg-glass)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "18px 22px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  transition: "border-color 0.2s ease",
  cursor: "default",
};

const certIconWrapStyle: React.CSSProperties = {
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  background: "var(--accent-dim)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  border: "1px solid var(--accent-border)",
};

const certNameStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  fontWeight: 500,
  color: "var(--text-primary)",
  marginBottom: "3px",
};

const certYearStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--text-secondary)",
  letterSpacing: "0.04em",
};
