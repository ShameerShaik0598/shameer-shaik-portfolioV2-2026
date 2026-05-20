import type { ExperienceItem, EducationItem, CertItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Engineer & Data Analyst",
    company: "Gwinnett County Department of Water Resources",
    period: "May 2024 – Present",
    location: "Georgia, USA",
    current: true,
    bullets: [
      "Delivered 3 React.js production applications and automated ETL pipelines processing thousand's of daily records — built the entire engineering and analytics function from scratch.",
      "Reduced executive reporting prep time by 75% via automated Power BI KPI dashboards; cut anomaly identification time by 80% via SQL-based real-time alerting.",
    ],
  },
  {
    id: 2,
    role: "Graduate Teaching Assistant & Primary CS Instructor",
    company: "Kennesaw State University",
    period: "Aug 2024 – May 2026",
    location: "Georgia, USA",
    current: false,
    bullets: [
      "Instructed 380+ students across 4 semesters in React.js, Node.js, SQL optimization, Python, and database design.",
      "Maintained a 4.5/5.0 teaching rating across all sections.",
    ],
  },
  {
    id: 3,
    role: "Full Stack Software Engineer",
    company: "Veltris Technologies",
    period: "Jan 2023 – Jun 2024",
    location: "India",
    bullets: [
      // "Reduced production bugs by 50% with 80%+ test coverage via Jest, Mocha, Supertest; cut release cycle time by 40% with GitHub Actions + Azure DevOps CI/CD.",
      "Developed and maintained full-stack applications across frontend and backend systems, implementing scalable features, secure encryption/decryption workflows, REST APIs, & database schema migrations to improve performance, maintainability & system reliability.",
      "Improved MySQL query performance by 30% across distributed systems serving 250K+ records; mentored 2 junior developers.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.S. Data Science and Analytics",
    school: "Kennesaw State University",
    period: "May 2026",
    location: "Georgia, USA",
  },
  {
    degree: "B.Tech Computer Science and Engineering",
    school: "RGUKT – IIIT",
    period: "2023",
    location: "India",
  },
];

export const certifications: CertItem[] = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    year: "2025",
  },
  {
    name: "MERN Stack Development Certification",
    year: "2023",
  },
];
