import type { ExperienceItem, EducationItem, CertItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Project Technical Lead & Software Engineer",
    company: "Gwinnett County Department of Water Resources",
    period: "May 2024 – Present",
    location: "Georgia, USA",
    current: true,
    bullets: [
    "Serve as the sole technical lead and project owner for a countywide survey initiative, leading requirements gathering, survey system design, technical development, automation, cross-team collaboration, and end-to-end delivery.",
    "Built a custom TypeScript-based automation and analysis system that streamlined survey data processing and result generation, replacing manual workflows and enabling teams to access, visualize, and collaborate on insights more efficiently.",
  ],
  },
   {
  id: 2,
  role: "Software Engineer",
  company: "Veltris Technologies",
  period: "Jan 2022 – July 2024",
  location: "India",
  bullets: [
    "Developed and maintained production full-stack applications, building scalable features across frontend interfaces, TypeScript/Node.js backend services, REST APIs, and database systems.",
    "Implemented secure encryption/decryption workflows and database schema migrations, improving system maintainability, reliability, and application performance.",
    "Improved MySQL query performance by 30% across distributed systems handling 250K+ records and mentored 2 junior developers.",
  ],
  },
  {
  id: 3,
  role: "Graduate Teaching Assistant | CS Instructor",
  company: "Kennesaw State University",
  period: "Aug 2024 – May 2026",
  location: "Georgia, USA",
  current: false,
  bullets: [
    "Instructed and led technical lab sessions for 380+ students across computing and engineering courses, including programming, computer networks, cybersecurity, and data communications.",
    "Built and supported technical learning resources and software-based lab environments while translating complex engineering concepts into practical, hands-on instruction.",
  ],
  },
  {
  id: 0,
  role: "Founder & Full-Stack Software Engineer",
  company: "Legal Flow",
  period: "2026 – Present",
  location: "Georgia, USA",
  current: true,
  bullets: [
    "Building a SaaS product end-to-end, owning product architecture, frontend development, backend APIs, database design, authentication, and deployment.",
    "Developing production features using React, TypeScript, Node.js, and PostgreSQL while taking the product from concept through implementation and iteration.",
  ],
},
];

// export const education: EducationItem[] = [
//   {
//     degree: "M.S. Data Science and Analytics",
//     school: "Kennesaw State University",
//     period: "May 2026",
//     location: "Georgia, USA",
//   },
//   {
//     degree: "B.Tech Computer Science and Engineering",
//     school: "RGUKT – IIIT",
//     period: "2023",
//     location: "India",
//   },
// ];

export const education: EducationItem[] = [
  {
    degree: "Master of Science (M.S.) in Data Science and Analytics",
    school: "Kennesaw State University",
    period: "May 2026",
    location: "Georgia, USA",
  },
  {
    degree: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
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
