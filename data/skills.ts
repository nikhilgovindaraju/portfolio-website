export interface Skill {
  name: string;
  icon: string; // SVG path or emoji fallback
}
export interface SkillGroup {
  category: string;
  color: string; // accent color for this category
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    color: "#f7df1e",
    items: [
      { name: "TypeScript", icon: "ts" },
      { name: "Python",     icon: "py" },
      { name: "JavaScript", icon: "js" },
      { name: "Java",       icon: "java" },
      { name: "Swift",      icon: "swift" },
      { name: "C++",        icon: "cpp" },
      { name: "Dart",       icon: "dart" },
      { name: "C",          icon: "c" },
    ],
  },
  {
    category: "Frontend",
    color: "#61dafb",
    items: [
      { name: "React.js",    icon: "react" },
      { name: "Next.js",     icon: "next" },
      { name: "Angular",     icon: "angular" },
      { name: "Flutter",     icon: "flutter" },
      { name: "Tailwind CSS",icon: "tailwind" },
      { name: "Redux",       icon: "redux" },
      { name: "HTML5",       icon: "html" },
      { name: "CSS3",        icon: "css" },
    ],
  },
  {
    category: "Backend",
    color: "#68d391",
    items: [
      { name: "Node.js",    icon: "node" },
      { name: "Express",    icon: "express" },
      { name: "FastAPI",    icon: "fastapi" },
      { name: "Flask",      icon: "flask" },
      { name: "Spring Boot",icon: "spring" },
      { name: "GraphQL",    icon: "graphql" },
      { name: "REST APIs",  icon: "api" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#fc8181",
    items: [
      { name: "AWS",            icon: "aws" },
      { name: "GCP",            icon: "gcp" },
      { name: "Docker",         icon: "docker" },
      { name: "Kubernetes",     icon: "k8s" },
      { name: "GitHub Actions", icon: "gh-actions" },
      { name: "Kafka",          icon: "kafka" },
      { name: "Jenkins",        icon: "jenkins" },
    ],
  },
  {
    category: "Databases",
    color: "#b794f4",
    items: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MongoDB",    icon: "mongo" },
      { name: "Redis",      icon: "redis" },
      { name: "MySQL",      icon: "mysql" },
      { name: "DynamoDB",   icon: "dynamo" },
      { name: "Firebase",   icon: "firebase" },
      { name: "Supabase",   icon: "supabase" },
    ],
  },
  {
    category: "ML & AI",
    color: "#f6ad55",
    items: [
      { name: "TensorFlow",  icon: "tf" },
      { name: "PyTorch",     icon: "pytorch" },
      { name: "Keras",       icon: "keras" },
      { name: "LangChain",   icon: "langchain" },
      { name: "OpenAI API",  icon: "openai" },
      { name: "HuggingFace", icon: "hf" },
      { name: "Pandas",      icon: "pandas" },
      { name: "NumPy",       icon: "numpy" },
    ],
  },
];
