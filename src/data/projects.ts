import type { Project } from "../types";

export const projects: Project[] = [

    {
    id: 1,
    title: "VoiceScribe",
    previewGif: "/previews/VoiceSrcibe.gif",
    badge: "TTS Tool",
    category: "engineering",
    impact: "100+ active users · 5 premium features · $0 infrastructure cost",
    description:
      "Browser-native text-to-speech application that matches paid tools like Natural Reader — built entirely on the Web Speech API with no backend. Features: speed and pitch control, multi-voice selection, real-time word highlighting, and cross-browser compatibility.",
    techStack: [
      "TypeScript",
      "React.js",
      "Web Speech API",
      "Event-Driven Architecture",
    ],
    architectureNote:
      "Chose the Web Speech API over Google Cloud TTS or AWS Polly to eliminate infrastructure costs entirely. Tradeoff: voice quality varies by browser. Solved the consistency problem with voice detection and fallback logic at load time.",
    keyChallenge:
      "Real-time word highlighting required precise sync between SpeechSynthesisUtterance boundary events and DOM updates — built a custom event-driven state machine to handle it.",
    liveCode: true,
    liveUrl: "https://shameershaik-portfolio.netlify.app/", // UPDATE: replace with VoiceScribe live URL
    github: false,    // UPDATE: set true and add githubUrl once repo is public
    featured: true,
  },

  {
    id: 2,
    title: "Project Pulse",
    badge: "Full-Stack",
    category: "engineering",
    impact: "Sub-100ms API · 85% test coverage · CI/CD on AWS EC2",
    description:
      "Full-stack project management tool built to production standards. JWT authentication with role-based access control, normalized PostgreSQL schema, REST API with 85% test coverage via Jest and Supertest, Dockerized and deployed through a GitHub Actions CI/CD pipeline to AWS EC2.",
    techStack: [
      "React.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
      "Jest",
      "Supertest",
    ],
    architectureNote:
      "Chose PostgreSQL over MongoDB for relational integrity across the projects/tasks/users data model. Added connection pooling to handle concurrent requests without spinning up new DB connections on every call.",
    keyChallenge:
      "Getting CI/CD to handle environment variable injection cleanly across Docker and EC2 without hardcoding credentials — solved with GitHub Actions secrets and a runtime config loader.",
    liveCode: false,  // UPDATE: set true and add liveUrl once deployed
    github: true,    // UPDATE: set true and add githubUrl once repo is public
    githubUrl: "https://github.com/ShameerShaik0598/PROJECT-PULSE",
    featured: true,
  },

  // {
  //   id: 3,
  //   title: "House Price Prediction Platform",
  //   badge: "ML Platform",
  //   category: "both",
  //   impact: "92% R² accuracy · sub-second queries · full-stack on AWS",
  //   description:
  //     "End-to-end ML platform with a React.js frontend, Flask REST API, and PostgreSQL database — all Dockerized and deployed on AWS. Feature engineering across 30+ variables, complete test suite, automated deployment pipeline.",
  //   techStack: [
  //     "React.js",
  //     "Flask",
  //     "Python",
  //     "PostgreSQL",
  //     "Docker",
  //     "AWS",
  //     "Scikit-learn",
  //     "Pandas",
  //   ],
  //   architectureNote:
  //     "Flask over FastAPI — the ML model serving was straightforward enough that FastAPI's async overhead wasn't justified. Kept the stack simple and testable.",
  //   keyChallenge:
  //     "Model accuracy dropped significantly with raw features. Spent most engineering time on feature engineering and outlier handling — that's what got R² from ~0.73 to 0.92.",
  //   liveCode: false,  // UPDATE: set true and add liveUrl
  //   github: false,    // UPDATE: set true and add githubUrl
  //   featured: true,
  // },
  {
    id: 3,
    title: "Child Welfare Analytics Platform",
    previewGif: "/previews/ChildWelfareproject.gif",
    badge: "ML + Analytics",
    category: "data",
    impact: "89% classification accuracy · risk reports for social workers",
    description:
      "ML classification system identifying high-risk cases — housing instability, dropout likelihood — across child welfare records. Random Forest and XGBoost ensemble. Power BI dashboards translate model outputs into plain-language priority reports for non-technical social workers.",
    techStack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "Pandas",
      "Power BI",
    ],
    architectureNote:
      "Used XGBoost over a single Random Forest after Random Forest plateaued at 84% accuracy. XGBoost's gradient boosting handled class imbalance significantly better.",
    keyChallenge:
      "The stakeholders were social workers, not data scientists. The challenge wasn't the model — it was designing Power BI dashboards that surfaced model confidence scores as human-readable risk levels without losing accuracy context.",
    liveCode: false,
    github: false,    // UPDATE: set true and add githubUrl
  },
  {
    id: 4,
    title: "DWR Community Survey Analytics",
    previewGif: "/previews/SurveyAnalysis.gif",
    badge: "Analytics",
    category: "data",
    impact: "1,200+ responses · 4 campaign waves · informed county strategy",
    description:
      "End-to-end analytics program for Gwinnett County DWR's 'Your Water Your Say' community survey initiative. Multi-wave trend analysis, trust score modeling, non-English respondent equity analysis, and executive reporting. Built the entire analytics function from scratch.",
    techStack: [
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "Pandas",
      "Statistical Analysis",
    ],
    architectureNote:
      "Structured the analysis pipeline so each campaign wave could be processed independently and then merged — made multi-wave trend comparison clean and repeatable without reprocessing historical data.",
    keyChallenge:
      "Non-English respondents showed disproportionately low trust scores. Surfacing that finding required segmented analysis outside the original scope — pushed for it anyway because it changed the executive recommendation.",
    
    liveCode: true,
    liveUrl: "https://csa-surveyanalysis-portfolio.netlify.app/", // UPDATE: replace with VoiceScribe live URL
    github: true, 
    githubUrl: "https://github.com/ShameerShaik0598/Survey_Analysis_for_Portfolio"
    
  },
];
