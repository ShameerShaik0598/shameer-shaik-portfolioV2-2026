import React from "react";
import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  /** Optional subtitle shown below the title */
  subtitle?: string;
  /** Center-align the header — used in Contact */
  centered?: boolean;
}

/**
 * Reusable section header.
 * Renders the eyebrow label, h2 title, and optional subtitle
 * with a FadeIn animation.
 *
 * Usage:
 *   <SectionHeader label="Work" title="Projects" />
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <FadeIn className="section-header" style={{ textAlign: centered ? "center" : "left" }}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          style={{
            marginTop: "12px",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: centered ? "480px" : "none",
            margin: centered ? "12px auto 0" : "12px 0 0",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
};

export default SectionHeader;
