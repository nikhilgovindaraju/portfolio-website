export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "jubilant",
    company: "Jubilant HollisterStier LLC",
    role: "Software Engineering Intern",
    period: "May 2025 – Aug 2025",
    location: "Spokane, WA",
    type: "Internship",
    bullets: [
      "Built a full-stack labor analytics platform (Next.js + React + PostgreSQL) on AWS Amplify for an FDA-regulated pharmaceutical manufacturing facility — replacing manual spreadsheet workflows and cutting reporting time by 50%.",
      "Architected a component-driven React dashboard with Recharts delivering real-time technician utilisation and shift planning visibility across production lines.",
      "Designed Prisma-backed REST APIs with Context API state management to streamline scheduling throughput for floor supervisors.",
      "Shipped 30+ zero-downtime releases using feature flags and staged deployments in a compliance-critical environment.",
      "Integrated GitHub Actions CI/CD with automated test suites, reducing rollback incidents by 20%.",
    ],
    tags: ["Next.js", "React", "TypeScript", "AWS Amplify", "PostgreSQL", "Prisma", "Recharts", "GitHub Actions"],
  },
  {
    id: "exinous",
    company: "Exinous Technologies",
    role: "Software Development Engineer",
    period: "Sep 2022 – Nov 2023",
    location: "Mysore, India",
    type: "Full-time",
    bullets: [
      "Led frontend performance overhaul of a healthcare kit management platform — code-splitting, lazy loading, and API batching cut load times by 25% and lifted booking conversions by 30%.",
      "Built and maintained a reusable Angular component library powering the client-facing ordering and inventory interface, improving cross-browser reliability across 3 supported browsers.",
      "Delivered ERP inventory modules in Vue + TypeScript for tracking healthcare kit stock levels, reducing frontend rework by 20%.",
      "Automated end-to-end order flow testing with Cypress, cutting manual QA effort by 25%.",
    ],
    tags: ["React", "Angular", "Vue", "TypeScript", "Cypress", "Node.js"],
  },
  {
    id: "bosch",
    company: "Bosch Global Software Technologies",
    role: "Associate Software Engineer",
    period: "Jun 2021 – Sep 2022",
    location: "Bangalore, India",
    type: "Full-time",
    bullets: [
      "Developed diagnostic and measurement software for Bosch power tools used on construction sites — tuning material-classification algorithms that reduced false detections by 25%.",
      "Optimised scan-view redraw logic in the embedded UI, increasing frame rates by 30% and improving real-time measurement responsiveness for field use.",
      "Migrated 15K+ lines of production Python 2 codebase to Python 3, eliminating runtime deprecation errors across multiple tool firmware releases.",
      "Delivered firmware update and structured logging flows across the Bosch Measure 200 product line with zero critical production issues post-release.",
    ],
    tags: ["Python", "C++", "Embedded Systems", "Firmware", "Agile"],
  },
  {
    id: "robert-bosch",
    company: "Robert Bosch Engineering & Business Solutions",
    role: "Software Engineering Intern",
    period: "Mar 2021 – Jun 2021",
    location: "Bangalore, India",
    type: "Internship",
    bullets: [
      "Developed and automated test workflows for the Bosch MeasrOn Android app using Java and the Appium mobile testing framework.",
      "Designed scalable test cases in Android Studio following test-driven development practices, improving coverage across core measurement features.",
    ],
    tags: ["Java", "Appium", "Android Studio", "TDD", "Mobile Testing"],
  },
  {
    id: "codespeedy",
    company: "Codespeedy Technology Pvt Ltd",
    role: "Python Developer Intern",
    period: "Aug 2019 – Jan 2020",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Developed beginner-friendly Python scripts and annotated code examples to teach core programming and data structures concepts to a student audience.",
      "Authored technical learning modules translating complex topics into accessible, well-structured content — published on the Codespeedy platform.",
    ],
    tags: ["Python", "Technical Writing", "DSA", "Content Creation"],
  },
];