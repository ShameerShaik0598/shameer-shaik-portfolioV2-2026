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
                lineHeight: 1.8,
                marginBottom: "12px",
                fontWeight: 300,
              }}>
                I'm a Full-Stack Engineer based in Georgia, finishing my MS in
                Data Science at Kennesaw State University in May 2026. I've
                spent the last three years building and shipping production
                systems — React frontends, Node/TypeScript APIs, PostgreSQL
                schemas, Docker deployments on AWS.
              </p>
              <p style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}>
                At Gwinnett County DWR, I built their entire analytics and
                engineering function from the ground up. At KSU, I teach the
                same stack to 380+ students every semester. I write code I'd
                be comfortable defending in a system design interview.
              </p>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                marginTop: "16px",
                letterSpacing: "0.03em",
              }}>
                Georgia, USA · Open to Relocation · H-1B Sponsorship Required
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