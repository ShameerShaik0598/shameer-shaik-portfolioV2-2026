import React, { useState, useMemo } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";

/* ─── Filter tab definitions ────────────────────────────────────────────── */
type FilterKey = "all" | "engineering" | "data";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "engineering", label: "Engineering" },
  { key: "data", label: "Data & Analytics" },
];

/**
 * Determines whether a project should show given the active filter.
 * "both" projects appear under Engineering AND Data & Analytics tabs.
 */
const matchesFilter = (project: Project, filter: FilterKey): boolean => {
  if (filter === "all") return true;
  if (filter === "engineering") return project.category === "engineering" || project.category === "both";
  if (filter === "data") return project.category === "data" || project.category === "both";
  return true;
};

/* ─── Main Projects Section ─────────────────────────────────────────────── */
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p, activeFilter)),
    [activeFilter]
  );

  return (
    <section id="projects" style={sectionStyle}>
      <div className="container">
        <SectionHeader label="Work" title="Projects" />

        {/* ── Filter tabs ── */}
        <FadeIn delay={80}>
          <div style={tabsRowStyle} role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={isActive}
                  style={{
                    ...tabStyle,
                    background: isActive ? "var(--accent)" : "transparent",
                    borderColor: isActive ? "var(--accent)" : "var(--border-strong)",
                    color: isActive ? "#fff" : "var(--text-secondary)",
                  }}
                  onClick={() => setActiveFilter(f.key)}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent-border)";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-strong)";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                    }
                  }}
                >
                  {f.label}
                  {/* Count badge */}
                  <span style={{
                    ...countBadgeStyle,
                    background: isActive ? "rgba(255,255,255,0.2)" : "var(--accent-dim)",
                    color: isActive ? "#fff" : "var(--accent)",
                  }}>
                    {projects.filter((p) => matchesFilter(p, f.key)).length}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* ── Cards grid ── */}
        <div style={gridStyle}>
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 90}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {/* ── Empty state (shouldn't happen but safe fallback) ── */}
        {filtered.length === 0 && (
          <FadeIn>
            <div style={emptyStateStyle}>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}>
                No projects in this category yet.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default Projects;

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const sectionStyle: React.CSSProperties = {
  background: "var(--bg-secondary)",
};

const tabsRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  marginBottom: "40px",
  flexWrap: "wrap",
};

const tabStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius)",
  padding: "9px 20px",
  fontSize: "0.875rem",
  fontWeight: 500,
  fontFamily: "var(--font-body)",
  cursor: "pointer",
  transition: "all 0.2s ease",
  letterSpacing: "0.01em",
};

const countBadgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  borderRadius: "4px",
  padding: "1px 6px",
  fontWeight: 600,
  letterSpacing: "0.02em",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px",
};

const emptyStateStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "64px 0",
  border: "1px dashed var(--border)",
  borderRadius: "var(--radius-lg)",
};

/* ── Responsive: 1 column on mobile ── */
if (typeof document !== "undefined" && !document.getElementById("projects-responsive")) {
  const style = document.createElement("style");
  style.id = "projects-responsive";
  style.textContent = `
    @media (max-width: 768px) {
      #projects .container > div:last-of-type,
      #projects [style*="grid-template-columns: repeat(2"] {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(style);
}
