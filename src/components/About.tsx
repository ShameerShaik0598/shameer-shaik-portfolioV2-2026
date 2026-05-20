import React from "react";
import { stats } from "../data/skills";
import FadeIn from "./FadeIn";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <FadeIn>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "stretch",
          }}>
            {/* About Me text */}
            <div style={{
              background: "var(--bg-glass)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "28px 32px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--accent)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}>
                Background
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.025em",
                marginBottom: "20px",
              }}>
                About Me
              </h2>

            <p style={{
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              textAlign: "justify",
              lineHeight: 1.85,
              fontWeight: 300,
              marginBottom: "12px",
            }}>
              Full-Stack Engineer with 3+ years shipping production systems —
              React, Node.js, TypeScript, PostgreSQL, AWS and Azure. Including 2 years
              leading engineering decisions end-to-end.

            </p>

            <p style={{
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              textAlign: "justify",
              lineHeight: 1.85,
              fontWeight: 300,
            }}>
              Built Gwinnett County DWR's entire survey engineering stack from scratch.
              M.S. Data Science, KSU, GA · Teaching 380+ students the same stack at KSU.
            </p>

            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              marginTop: "14px",
              letterSpacing: "0.04em",
            }}>
              Georgia, USA · Open to Relocation
            </p>
            </div>

            {/* Stats grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px 20px",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-border)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "2.25rem",
                    color: "var(--accent)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}>
                    {s.number}
                  </span>
                  <span style={{
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.4,
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #about .container > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;