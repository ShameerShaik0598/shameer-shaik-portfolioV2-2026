import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Education from "../components/Education";

/**
 * Home page — single-page layout.
 * All sections are composed here in order.
 * Navbar is fixed; all other sections stack vertically.
 *
 * Section IDs (used by scroll-spy + nav links):
 *   #hero · #about (skills) · #skills · #projects · #experience · #contact
 */
const Home: React.FC = () => {
  // Inject global responsive breakpoint rules once on mount
  useEffect(() => {
    if (document.getElementById("global-responsive")) return;

    const style = document.createElement("style");
    style.id = "global-responsive";
    style.textContent = `
      /* ── Navbar: hide desktop links / show hamburger on mobile ── */
      nav ul  { display: flex !important; }
      nav button[aria-label="Open menu"],
      nav button[aria-label="Close menu"] { display: none !important; }

      @media (max-width: 768px) {
        nav ul  { display: none !important; }
        nav button[aria-label="Open menu"],
        nav button[aria-label="Close menu"] { display: flex !important; }
        /* Hide "Hire Me" CTA in nav on mobile — shown in overlay */
        nav > div > div:last-child > a { display: none !important; }
      }

      /* ── Projects grid: 2-col → 1-col ── */
      @media (max-width: 768px) {
        #projects [style*="repeat(2, 1fr)"] {
          grid-template-columns: 1fr !important;
        }
      }

      /* ── Education grid: auto → 1-col on small screens ── */
      @media (max-width: 480px) {
        #experience [style*="auto-fit"] {
          grid-template-columns: 1fr !important;
        }
      }

      /* ── Skills grid: auto-fill → 1-col on mobile ── */
      @media (max-width: 480px) {
        #skills [style*="auto-fill"] {
          grid-template-columns: 1fr !important;
        }
      }

      /* ── Hero name: tighten on small screens ── */
      @media (max-width: 480px) {
        #hero h1 { font-size: 3rem !important; }
        #hero [style*="gap: 20px"] { gap: 12px !important; }
      }

      /* ── Contact buttons: full-width on mobile ── */
      @media (max-width: 520px) {
        #contact [style*="justify-content: center"] a,
        #contact [style*="justify-content: center"] button {
          width: 100%;
          justify-content: center;
        }
        #contact [style*="minWidth: 220px"] {
          min-width: unset !important;
          width: 100%;
        }
      }

      /* ── Footer nav: wrap on mobile ── */
      @media (max-width: 600px) {
        footer [style*="justify-content: space-between"] {
          flex-direction: column;
          align-items: flex-start !important;
        }
      }

      /* ── Section padding: reduce on mobile ── */
      @media (max-width: 768px) {
        section { padding: 72px 0 !important; }
      }
      @media (max-width: 480px) {
        section { padding: 56px 0 !important; }
        .container { padding: 0 16px !important; }
      }

      /* ── Stats bar: wrap gracefully ── */
      @media (max-width: 600px) {
        #skills [style*="justify-content: space-between"] {
          justify-content: center !important;
        }
        #skills [style*="height: 40px"] {
          display: none !important;
        }
      }

      /* ── Timeline row: tighten on mobile ── */
      @media (max-width: 480px) {
        #experience [style*="grid-template-columns: 28px"] {
          grid-template-columns: 18px 1fr !important;
          gap: 12px !important;
        }
      }

      /* ── Resume cards row: stack on mobile ── */
      @media (max-width: 480px) {
        #contact [style*="minWidth: 220px"] {
          flex-direction: column !important;
          align-items: stretch !important;
        }
      }

      /* ── Smooth hover on social links ── */
      .social-link:hover { color: var(--text-primary) !important; }

      /* ── Focus ring for accessibility ── */
      *:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 3px;
        border-radius: 4px;
      }

      /* ── Reduced motion support ── */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      {/* Fixed navigation — sits above everything */}
      <Navbar />

      {/* ── Main content ── */}
      <main>
        {/* Hero — full viewport height */}
        <Hero />

        {/* About — Proffesional Summary */}
        <About />

        {/* Projects — filter tabs + card grid */}
        <Projects />

        {/* Experience — timeline + education + certs */}
        <Experience />

        {/*
          About / Skills — combined under id="skills" so the nav
          "Skills" link scrolls here. The stats summary acts as "About".
        */}
        <Skills />

        {/* Education — education + certs */}
        <Education />

        {/* Contact — email, socials, resume downloads */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
