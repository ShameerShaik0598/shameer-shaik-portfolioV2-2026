import React from "react";
import { education, certifications } from "../data/experience";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

/* ─── Education cards ───────────────────────────────────────────────────── */
const Education: React.FC = () => {
  return (
    <section id="education">
      <div className="container">

        {/* Education */}
        <SectionHeader label="Academic" title="Education" />
        <FadeIn delay={100}>
          <div style={eduGridStyle}>
            {education.map((edu) => (
              <div
                key={edu.degree}
                style={eduCardStyle}
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

        {/* Certifications */}
        <div style={{ marginTop: "64px" }}>
          <FadeIn>
            <div style={{ marginBottom: "32px" }}>
              <p className="section-label">Credentials</p>
              <h2 className="section-title">Certifications</h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={certsWrapStyle}>
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  style={certItemStyle}
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
        </div>

      </div>
    </section>
  );
};

export default Education;

/* ─── Icons ─────────────────────────────────────────────────────────────── */
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