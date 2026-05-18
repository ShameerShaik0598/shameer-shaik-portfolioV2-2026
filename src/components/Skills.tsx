import React from "react";
import { skillGroups, stats } from "../data/skills";
import type { SkillGroup, SkillItem } from "../types";
import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";

/* ─── Devicons CDN base ─────────────────────────────────────────────────── */
const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

/* ─── Single skill row ──────────────────────────────────────────────────── */
const SkillRow: React.FC<{ item: SkillItem; accentColor: string }> = ({
  item,
  accentColor,
}) => (
  <div style={skillRowStyle}>
    {/* Icon or fallback abbreviation pill */}
    {item.icon ? (
      <img
        src={`${DEVICON_BASE}${item.icon}.svg`}
        alt={item.name}
        width={20}
        height={20}
        style={{ objectFit: "contain", flexShrink: 0 }}
        onError={(e) => {
          // Hide broken image; show fallback sibling
          (e.currentTarget as HTMLImageElement).style.display = "none";
          const sibling = e.currentTarget.nextElementSibling as HTMLElement;
          if (sibling) sibling.style.display = "flex";
        }}
      />
    ) : null}
    <span
      style={{
        ...abbrStyle,
        background: `${accentColor}18`,
        color: accentColor,
        display: item.icon ? "none" : "flex",
      }}
    >
      {item.abbr}
    </span>
    <span style={skillNameStyle}>{item.name}</span>
  </div>
);

/* ─── Skill group card ──────────────────────────────────────────────────── */
const SkillGroupCard: React.FC<{ group: SkillGroup; delay: number }> = ({
  group,
  delay,
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
<FadeIn delay={delay} style={{ height: "100%" }}>
      <div
        style={{
          ...cardStyle,
          borderColor: hovered ? `${group.color}44` : "var(--border)",
          background: hovered ? "var(--bg-card-hover)" : "var(--bg-glass-projects)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Category label */}
        <div style={{ ...categoryLabelStyle, color: group.color }}>
          {group.category}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: `${group.color}22`,
            marginBottom: "20px",
          }}
        />

        {/* Skills list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {group.items.map((item) => (
            <SkillRow key={item.name} item={item} accentColor={group.color} />
          ))}
        </div>
      </div>
    </FadeIn>
  );
};


/* ─── Main Skills Section ───────────────────────────────────────────────── */
// FIND the entire Skills return and REPLACE with:
const Skills: React.FC = () => {
  return (
    <section id="skills" style={sectionBgStyle}>
      <div className="container">
        <SectionHeader label="Capabilities" title="Tech Stack" />

        {/* Skill group cards grid */}
        <div style={gridStyle}>
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  ); 
};

export default Skills;

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const sectionBgStyle: React.CSSProperties = {
  background: "var(--bg-secondary)",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  marginTop: "48px",
  alignItems: "stretch",   // ← add this
};

const cardStyle: React.CSSProperties = {
  background: "var(--bg-glass)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "24px",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease",
  height: "100%",    // ← add this
};

const categoryLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontWeight: 500,
  marginBottom: "14px",
};

const skillRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const abbrStyle: React.CSSProperties = {
  width: "22px",
  height: "22px",
  borderRadius: "5px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.5625rem",
  fontFamily: "var(--font-mono)",
  fontWeight: 600,
  flexShrink: 0,
  letterSpacing: "0.02em",
};

const skillNameStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--text-primary)",
  fontWeight: 400,
};


// PASTE this at the very bottom of Skills.tsx, after all the const styles:

if (typeof document !== "undefined" && !document.getElementById("about-responsive")) {
  const style = document.createElement("style");
  style.id = "about-responsive";
  style.textContent = `
    @media (max-width: 768px) {
      #skills [style*="grid-template-columns: 1fr 1fr"] {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(style);
}