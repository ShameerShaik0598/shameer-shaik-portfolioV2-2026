import React, { useState } from "react";
import FadeIn from "./FadeIn";

/**
 * FeaturedProject — standalone showcase section for Legal Flow Tracker.
 * Sits between Experience/Education and Projects sections.
 *
 * To update:
 *   - Replace screenshotSrc with your actual screenshot path
 *   - Set liveUrl and githubUrl when ready
 *   - Flip showLive / showGithub to true to reveal buttons
 */

/* ─── Config — update these when ready ─────────────────────────────────── */
const PROJECT = {
  label: "Featured Project",
  title: "Legal Flow Tracker",
  tagline: "Full-stack case management platform with 4-role authentication.",
  impact: [
    { number: "4", label: "User Roles" },
    { number: "JWT", label: "Auth System" },
    { number: "AWS", label: "Deployed" },
    { number: "RBAC", label: "Row-Level Permissions" },
  ],
  description:
    "Full-stack legal case management platform with role-based access control across 4 distinct user types — Client, Lawyer, Paralegal, and Admin. Each role gets a fully scoped dashboard, permission set, and workflow. Built with React frontend, Node.js/Express REST API, PostgreSQL schema with row-level role enforcement, JWT authentication, and deployed on AWS.",
  architectureNote:
    "Designed the permission model around database-level role enforcement rather than just frontend route guards — each API endpoint validates the JWT role claim independently so no role can access another's data even with a manipulated token.",
  keyChallenge:
    "Managing 4 completely different UI experiences from a single codebase without duplicating logic — solved with a role-aware layout system that renders the correct dashboard, sidebar, and actions based on the decoded JWT role at the top level.",
  techStack: [
    "React.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Express.js",
    "JWT Auth",
    "AWS",
    "Role-Based Access Control",
  ],
  // UPDATE: flip to true and add URL when ready
  // showLive: false,
  // liveUrl: "#",
  // UPDATE: flip to true and add URL when ready
  // showGithub: false,
  // githubUrl: "#",
  // UPDATE: replace with actual screenshot path e.g. "/screenshots/legal-flow-tracker.png"

    // UPDATE: flip to true and add URL when ready
  showLive: true,
  liveUrl: "https://legalflow-tracker.netlify.app/login",

  showGithub: true,
  githubUrl: "https://github.com/ShameerShaik0598/LegalFlow-Tracker",
  // UPDATE: replace with actual screenshot path e.g. "/screenshots/legal-flow-tracker.png"
  screenshotSrc: "/previews/LegalFlow-Tracker.gif",
};

/* ─── Role badge list ───────────────────────────────────────────────────── */
const ROLES = ["Client", "Lawyer", "Paralegal", "Admin"];

/* ─── Main Component ────────────────────────────────────────────────────── */
const FeaturedProject: React.FC = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="featured" style={sectionStyle}>
      <div className="container">

        {/* ── Section label ── */}
        <FadeIn>
          <div style={labelRowStyle}>
            <span style={sectionLabelStyle}>Featured Project</span>
            <div style={labelLineStyle} />
          </div>
        </FadeIn>

        {/* ── Main card ── */}
        <FadeIn delay={80}>
          <div style={cardStyle}>

            {/* ── Top row: title + badges ── */}
            <div style={topRowStyle}>
              <div>
                <div style={featuredPillStyle}>
                  <StarIcon />
                  Featured
                </div>
                <h2 style={titleStyle}>{PROJECT.title}</h2>
                <p style={taglineStyle}>{PROJECT.tagline}</p>
              </div>

              {/* Action buttons — conditional rendering */}
              <div style={btnGroupStyle}>
                {PROJECT.showLive && (
                  <a
                    href={PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={primaryBtnStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    }}
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}

                {PROJECT.showGithub && (
                  <a
                    href={PROJECT.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={secondaryBtnStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-border)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-strong)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                )}

                {/* Show placeholder buttons when not yet deployed */}
                {!PROJECT.showLive && !PROJECT.showGithub && (
                  <span style={comingSoonStyle}>
                    🔒 Private Repo · Demos available on request
                  </span>
                )}
              </div>
            </div>

    {/* ── Divider ── */}
            <div style={dividerStyle} />
 {/* ── Row 1: Full-width preview ── */}
<div style={screenshotWrapStyle}>
  {PROJECT.screenshotSrc && !imgError ? (
    <img
      src={PROJECT.screenshotSrc}
      alt="Legal Flow Tracker UI screenshot"
      style={screenshotImgStyle}
      onError={() => setImgError(true)}
    />
  ) : (
    <div style={screenshotPlaceholderStyle}>
      <MonitorIcon />
      <p style={placeholderTextStyle}>Screenshot coming soon</p>
      <p style={placeholderSubStyle}>Replace screenshotSrc in FeaturedProject.tsx</p>
    </div>
  )}
</div>

{/* ── Row 2: Stats left + Details right ── */}
<div style={bottomGridStyle}>

  {/* Left column: impact stats + role badges */}
  <div style={leftColStyle}>

    {/* Impact stats */}
    <div style={impactGridStyle}>
      {PROJECT.impact.map((item) => (
        <div key={item.label} style={impactItemStyle}>
          <span style={impactNumberStyle}>{item.number}</span>
          <span style={impactLabelStyle}>{item.label}</span>
        </div>
      ))}
    </div>

    {/* Role badges */}
    <div style={rolesWrapStyle}>
      <p style={rolesLabelStyle}>User Roles</p>
      <div style={rolesBadgeRowStyle}>
        {ROLES.map((role, i) => (
          <span key={role} style={{ ...roleBadgeStyle, ...roleColors[i] }}>
            {role}
          </span>
        ))}
      </div>
    </div>

  </div>

  {/* Right column: tech stack + description + expand */}
  <div style={rightColStyle}>

    {/* Tech stack chips */}
    <div>
      <p style={rolesLabelStyle}>Tech Stack</p>
      <div style={chipsRowStyle}>
        {PROJECT.techStack.map((tech) => (
          <span key={tech} style={chipStyle}>{tech}</span>
        ))}
      </div>
    </div>

    {/* Description */}
    <p style={descStyle}>{PROJECT.description}</p>

    {/* Expand: architecture + challenge */}
    <button
      style={expandBtnStyle}
      onClick={() => setDetailsOpen((o) => !o)}
      aria-expanded={detailsOpen}
    >
      <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
        {detailsOpen ? "Hide details" : "Architecture & challenges"}
      </span>
      <svg
        width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="var(--accent)" strokeWidth="2"
        style={{ transform: detailsOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease", flexShrink: 0 }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <div style={{
      ...expandPanelStyle,
      maxHeight: detailsOpen ? "400px" : "0px",
      opacity: detailsOpen ? 1 : 0,
      paddingTop: detailsOpen ? "16px" : "0px",
    }}>
      <div style={detailBlockStyle}>
        <p style={detailLabelStyle}>Architecture Decision</p>
        <p style={detailTextStyle}>{PROJECT.architectureNote}</p>
      </div>
      <div style={{ ...detailBlockStyle, marginBottom: 0 }}>
        <p style={detailLabelStyle}>Key Challenge</p>
        <p style={detailTextStyle}>{PROJECT.keyChallenge}</p>
      </div>
    </div>

  </div>
</div>
          
 
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedProject;

/* ─── Inline SVG Icons ──────────────────────────────────────────────────── */
const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.15v3.18c0 .31.21.67.8.56C20.22 21.43 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const MonitorIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

/* ─── Role badge colors ──────────────────────────────────────────────────── */
const roleColors: React.CSSProperties[] = [
  { background: "rgba(79,142,247,0.12)",  color: "#4f8ef7",  borderColor: "rgba(79,142,247,0.25)"  },
  { background: "rgba(52,211,153,0.12)",  color: "#34d399",  borderColor: "rgba(52,211,153,0.25)"  },
  { background: "rgba(167,139,250,0.12)", color: "#a78bfa",  borderColor: "rgba(167,139,250,0.25)" },
  { background: "rgba(251,146,60,0.12)",  color: "#fb923c",  borderColor: "rgba(251,146,60,0.25)"  },
];

/* ─── Styles ─────────────────────────────────────────────────────────────── */
const sectionStyle: React.CSSProperties = {
  background: "var(--bg-primary)",
};

const labelRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "32px",
};

const sectionLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--accent)",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const labelLineStyle: React.CSSProperties = {
  flex: 1,
  height: "1px",
  background: "var(--border)",
};

const cardStyle: React.CSSProperties = {
  background: "var(--bg-glass)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-xl)",
  padding: "36px",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
};

const topRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "24px",
  flexWrap: "wrap",
  marginBottom: "24px",
};

const featuredPillStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  background: "var(--accent-dim)",
  border: "1px solid var(--accent-border)",
  borderRadius: "999px",
  padding: "4px 12px",
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  color: "var(--accent)",
  letterSpacing: "0.08em",
  marginBottom: "12px",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
  letterSpacing: "-0.03em",
  color: "var(--text-primary)",
  lineHeight: 1.1,
  marginBottom: "8px",
};

const taglineStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "var(--text-secondary)",
  fontWeight: 300,
};

const btnGroupStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  flexWrap: "wrap",
  flexShrink: 0,
};

const primaryBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "var(--accent)",
  color: "#fff",
  border: "1px solid var(--accent)",
  borderRadius: "var(--radius)",
  padding: "10px 22px",
  fontSize: "0.9rem",
  fontWeight: 600,
  fontFamily: "var(--font-body)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "opacity 0.2s ease, transform 0.2s ease",
};

const secondaryBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "transparent",
  color: "var(--text-secondary)",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius)",
  padding: "10px 22px",
  fontSize: "0.9rem",
  fontWeight: 500,
  fontFamily: "var(--font-body)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "border-color 0.2s ease, color 0.2s ease",
};

const comingSoonStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--text-muted)",
  letterSpacing: "0.04em",
  alignSelf: "center",
};

const dividerStyle: React.CSSProperties = {
  height: "1px",
  background: "var(--border)",
  marginBottom: "28px",
};

// const contentGridStyle: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1.2fr 1fr",
//   gap: "32px",
//   alignItems: "start",
// };

/* Screenshot */
const screenshotWrapStyle: React.CSSProperties = {
  borderRadius: "var(--radius-lg)",
  overflow: "hidden",
  border: "1px solid var(--border)",
  background: "var(--bg-secondary)",
};

const screenshotImgStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
};

const screenshotPlaceholderStyle: React.CSSProperties = {
  minHeight: "280px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  padding: "40px",
};

const placeholderTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.8125rem",
  color: "var(--text-muted)",
  letterSpacing: "0.06em",
};

const placeholderSubStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  color: "var(--text-muted)",
  opacity: 0.6,
  textAlign: "center",
};

/* Right panel */
// const detailsPanelStyle: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "20px",
// };

const impactGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
};

const impactItemStyle: React.CSSProperties = {
  background: "var(--bg-secondary)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "14px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const impactNumberStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "1.375rem",
  color: "var(--accent)",
  letterSpacing: "-0.02em",
  lineHeight: 1,
};

const impactLabelStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  color: "var(--text-secondary)",
  letterSpacing: "0.02em",
};

const rolesWrapStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const rolesLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  color: "var(--text-muted)",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: "4px",
};

const rolesBadgeRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
};

const roleBadgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  padding: "4px 12px",
  borderRadius: "999px",
  border: "1px solid",
  fontWeight: 500,
  letterSpacing: "0.03em",
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
};

const descStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--text-secondary)",
  lineHeight: 1.75,
  fontWeight: 300,
};

const expandBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "4px 0",
  width: "fit-content",
};

const expandPanelStyle: React.CSSProperties = {
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

// ADD these new styles (alongside existing ones):

const bottomGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "32px",
  alignItems: "start",
  marginTop: "28px",
};

const leftColStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const rightColStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

/* Responsive */
// FIND and REPLACE the existing responsive inject:
if (typeof document !== "undefined" && !document.getElementById("featured-responsive")) {
  const style = document.createElement("style");
  style.id = "featured-responsive";
  style.textContent = `
    @media (max-width: 768px) {
      #featured [style*="grid-template-columns: 1fr 1fr"] {
        grid-template-columns: 1fr !important;
      }
      #featured [style*="justify-content: space-between"] {
        flex-direction: column !important;
      }
    }
  `;
  document.head.appendChild(style);
}