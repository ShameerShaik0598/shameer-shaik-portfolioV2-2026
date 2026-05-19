import React, { useState } from "react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  /** Staggered animation delay in ms */
  delay?: number;
}

/**
 * Reusable ProjectCard component.
 *
 * Conditional rendering logic:
 *   - "Live Demo" button renders ONLY if project.liveCode === true
 *   - "GitHub"    button renders ONLY if project.github   === true
 *   - If neither is true, the links row is hidden entirely
 *   - If only one is true, only that button shows — layout never breaks
 *
 * Expand/collapse reveals: full description, architecture note, key challenge.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);  // ← add this

  const hasLinks = project.liveCode || project.github;

  return (
    <div
      style={{
        ...cardStyle,
        borderColor: hovered ? "var(--accent-border)" : "var(--border)",
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-glass-projects)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        opacity: 1,
        transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease",
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Header row: title + badge ── */}
      <div style={headerRowStyle}>
        <h3 style={titleStyle}>{project.title}</h3>
        <span style={badgeStyle}>{project.badge}</span>
      </div>

      {/* ── Impact metric ── */}
      <div style={impactStyle}>
        <span style={impactBarStyle} />
        <span style={impactTextStyle}>{project.impact}</span>
      </div>

      {/* ── Tech stack chips ── */}
      <div style={chipsRowStyle}>
        {project.techStack.map((tech) => (
          <span key={tech} style={chipStyle}>
            {tech}
          </span>
        ))}
      </div>

      {project.previewGif && (
  <div>
    {/* Toggle button */}
    <button
      style={previewToggleStyle}
      onClick={() => setPreviewOpen((o) => !o)}
      aria-expanded={previewOpen}
    >
      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <PreviewIcon />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>
          {previewOpen ? "Hide Preview" : "Show Preview"}
        </span>
      </span>
      <svg
        width="13" height="13" viewBox="0 0 24 24"
        fill="none" stroke="var(--text-muted)" strokeWidth="2"
        style={{ transform: previewOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    {/* Collapsible preview panel */}
    <div style={{
      maxHeight: previewOpen ? "600px" : "0px",
      opacity: previewOpen ? 1 : 0,
      overflow: "hidden",
      transition: "max-height 0.4s ease, opacity 0.3s ease",
      borderRadius: previewOpen ? "var(--radius)" : "0",
      marginTop: previewOpen ? "10px" : "0px",
    }}>
      <img
        src={project.previewGif}
        alt={`${project.title} demo preview`}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
        }}
      />
    </div>
  </div>
)}


      {/* ── Conditional action buttons ── */}
      {hasLinks && (
        <div style={linksRowStyle}>
          {/* Live Demo — only shown if liveCode === true */}
          {project.liveCode && (
            <a
              href={project.liveUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={linkBtnStyle}
              onMouseEnter={(e) => applyHoverBtn(e, true)}
              onMouseLeave={(e) => applyHoverBtn(e, false)}
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}

          {/* GitHub — only shown if github === true */}
          {project.github && (
            <a
              href={project.githubUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={linkBtnStyle}
              onMouseEnter={(e) => applyHoverBtn(e, true)}
              onMouseLeave={(e) => applyHoverBtn(e, false)}
            >
              <GithubIcon />
              View Code
            </a>
          )}
        </div>
      )}

      {/* ── Expand / Collapse toggle ── */}
      <button
        style={expandToggleStyle}
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-label={expanded ? "Collapse details" : "Show details"}
      >
        <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
          {expanded ? "Hide details" : "Show details"}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          style={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* ── Expanded details panel ── */}
      <div
        style={{
          ...detailsPanelStyle,
          maxHeight: expanded ? "600px" : "0px",
          opacity: expanded ? 1 : 0,
          paddingTop: expanded ? "16px" : "0px",
        }}
      >
        <div style={detailBlockStyle}>
          <p style={detailLabelStyle}>Overview</p>
          <p style={detailTextStyle}>{project.description}</p>
        </div>

        <div style={detailBlockStyle}>
          <p style={detailLabelStyle}>Architecture Decision</p>
          <p style={detailTextStyle}>{project.architectureNote}</p>
        </div>

        <div style={{ ...detailBlockStyle, marginBottom: 0 }}>
          <p style={detailLabelStyle}>Key Challenge</p>
          <p style={detailTextStyle}>{project.keyChallenge}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

/* ─── Inline SVG icons ──────────────────────────────────────────────────── */
const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.15v3.18c0 .31.21.67.8.56C20.22 21.43 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

// ADD near the other SVG icon components:
const PreviewIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/* ─── Hover helper (avoids inline onMouseEnter duplication) ─────────────── */
const applyHoverBtn = (e: React.MouseEvent<HTMLAnchorElement>, on: boolean) => {
  const el = e.currentTarget;
  el.style.borderColor = on ? "var(--accent)" : "var(--border-strong)";
  el.style.color = on ? "var(--accent)" : "var(--text-secondary)";
};

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const cardStyle: React.CSSProperties = {
  background: "var(--bg-glass)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "28px",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  cursor: "default",
  height: "100%",   // ← add this
};

const headerRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: "1.1rem",
  letterSpacing: "-0.015em",
  color: "var(--text-primary)",
  lineHeight: 1.3,
};

const badgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  background: "var(--accent-dim)",
  color: "#f0eff8",
  border: "1px solid var(--accent-border)",
  borderRadius: "5px",
  padding: "3px 10px",
  whiteSpace: "nowrap",
  letterSpacing: "0.04em",
  flexShrink: 0,
};

const impactStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
};

const impactBarStyle: React.CSSProperties = {
  display: "inline-block",
  width: "2px",
  minHeight: "100%",
  alignSelf: "stretch",
  background: "var(--accent)",
  borderRadius: "2px",
  flexShrink: 0,
  marginTop: "2px",
};

const impactTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.8125rem",
  color: "var(--text-primary)",
  fontWeight: 500,
  lineHeight: 1.55,
  letterSpacing: "-0.01em",
};

const chipsRowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
};

const chipStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  padding: "3px 9px",
  borderRadius: "5px",
  border: "1px solid var(--border)",
  color: "var(--text-secondary)",
  background: "transparent",
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
};

const previewStyle: React.CSSProperties = {
  background: "var(--bg-secondary)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  overflow: "hidden",
  marginTop: "auto",
};

const previewLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--text-muted)",
  letterSpacing: "0.1em",
};

const linksRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const linkBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  background: "transparent",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius)",
  padding: "8px 16px",
  fontSize: "0.8125rem",
  color: "var(--text-secondary)",
  fontFamily: "var(--font-body)",
  transition: "border-color 0.2s ease, color 0.2s ease",
  cursor: "pointer",
  textDecoration: "none",
};

const expandToggleStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "4px 0",
  width: "fit-content",
};

const detailsPanelStyle: React.CSSProperties = {
  borderTop: "1px solid var(--border)",
  overflow: "hidden",
  transition: "max-height 0.4s ease, opacity 0.35s ease, padding-top 0.3s ease",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const detailBlockStyle: React.CSSProperties = {
  marginBottom: "4px",
};

const detailLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  color: "var(--accent)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "6px",
};

const detailTextStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--text-secondary)",
  lineHeight: 1.75,
};


// ADD these after your existing style objects:
const previewToggleStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  background: "var(--bg-secondary)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "9px 14px",
  cursor: "pointer",
  transition: "border-color 0.2s ease",
};