// ─── Project Types ───────────────────────────────────────────────────────────

export interface Project {
  id: number;
  title: string;
  badge: string;
  category: "engineering" | "data" | "both";
  impact: string;
  description: string;
  techStack: string[];
  architectureNote: string;
  previewGif?: string;
  keyChallenge: string;
  /** Set true to show the Live Demo button */
  liveCode?: boolean;
  liveUrl?: string;
  /** Set true to show the GitHub button */
  github?: boolean;
  githubUrl?: string;
  featured?: boolean;
}

// ─── Skill Types ─────────────────────────────────────────────────────────────

export interface SkillItem {
  name: string;
  /** Devicons CDN icon filename stem, e.g. "react/react-original" */
  icon?: string;
  /** Fallback 2-3 letter abbreviation shown if icon fails */
  abbr: string;
}

export interface SkillGroup {
  category: string;
  color: string; // CSS custom property name or hex
  items: SkillItem[];
}

// ─── Experience Types ─────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
}

// ─── Education Types ──────────────────────────────────────────────────────────

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
}

export interface CertItem {
  name: string;
  year: string;
}

// ─── Navigation Types ────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}
