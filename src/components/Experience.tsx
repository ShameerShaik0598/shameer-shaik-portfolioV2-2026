import React, { useState } from "react";
import { experiences } from "../data/experience";
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
const Experience: React.FC = () => (
  <section id="experience">
    <div className="container">
      <SectionHeader label="Career" title="Experience" />
      <div style={timelineWrapStyle}>
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.id} item={exp} delay={i * 100} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;


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
