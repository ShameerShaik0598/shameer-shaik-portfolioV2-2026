import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color: "#4f8ef7",
    items: [
      { name: "React.js", icon: "react/react-original", abbr: "Re" },
      { name: "TypeScript", icon: "typescript/typescript-original", abbr: "TS" },
      { name: "JavaScript", icon: "javascript/javascript-original", abbr: "JS" },
      { name: "HTML / CSS", icon: "html5/html5-original", abbr: "H5" },
      { name: "Redux", icon: "redux/redux-original", abbr: "Rx" },
    ],
  },
  {
    category: "Backend",
    color: "#34d399",
    items: [
      { name: "Node.js", icon: "nodejs/nodejs-original", abbr: "No" },
      { name: "Express.js", icon: "express/express-original", abbr: "Ex" },
      { name: "Python", icon: "python/python-original", abbr: "Py" },
      { name: "Flask", icon: "flask/flask-original", abbr: "Fl" },
      { name: "REST APIs", abbr: "API" },
    ],
  },
  {
    category: "Database",
    color: "#f59e0b",
    items: [
      { name: "PostgreSQL", icon: "postgresql/postgresql-original", abbr: "PG" },
      { name: "MySQL", icon: "mysql/mysql-original", abbr: "My" },
    ],
  },
  {
    category: "DevOps",
    color: "#a78bfa",
    items: [
      { name: "Docker", icon: "docker/docker-original", abbr: "Dk" },
      { name: "GitHub Actions", icon: "github/github-original", abbr: "GH" },
      { name: "AWS (EC2/S3/RDS)", icon: "amazonwebservices/amazonwebservices-original-wordmark", abbr: "AWS" },
      { name: "Azure DevOps", icon: "azure/azure-original", abbr: "Az" },
    ],
  },
  {
    category: "Data & ML",
    color: "#fb923c",
    items: [
      { name: "Power BI", abbr: "PBI" },
      { name: "Pandas", icon: "pandas/pandas-original", abbr: "Pd" },
      { name: "Scikit-learn", icon: "scikitlearn/scikitlearn-original", abbr: "SK" },
      { name: "SQL", abbr: "SQL" },
    ],
  },
];

// ─── Stats shown in the About section ────────────────────────────────────────
export const stats = [
  { number: "3+", label: "Years Production Experience" },
  { number: "380+", label: "Students Taught" },
  { number: "100+", label: "VoiceScribe Users" },
  { number: "3", label: "Live Production Systems" },
];
