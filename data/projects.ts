export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  links: { label: string; href: string }[];
  category: string;
  featured?: boolean;
  image: string;
}

export const projects: Project[] = [
  // ── FEATURED (carousel) ──────────────────────────────────
  {
    id: "ehr-ai",
    title: "EHR-AI",
    tagline: "HIPAA-compliant EHR with AI-powered clinical intelligence",
    image: "/assets/EHR.png",
    featured: true,
    category: "Full Stack",
    description:
      "A production-grade Electronic Health Records platform built with security and intelligence at its core. Combines AES-256 encryption, role-based access control, and a LangChain RAG pipeline that lets clinicians query patient records in plain English, cutting documentation time and boosting engagement.",
    problem:
      "Most EHR systems treat security and intelligence as afterthoughts, fragile audit trails, no semantic search, and zero AI assistance for clinicians.",
    solution:
      "FastAPI backend with RSA/AES encryption, SHA-256 hash-chaining for tamper-evident audit logs, Redis caching, and a LangChain RAG chatbot deployed on AWS with full Dockerized CI/CD.",
    metrics: [
      { label: "API latency reduced", value: "−50%" },
      { label: "Chatbot engagement", value: "+60%" },
      { label: "Role-based access tiers", value: "3" },
      { label: "Encryption standard", value: "AES-256" },
    ],
    tech: ["Python", "FastAPI", "React", "LangChain", "AWS", "Docker", "Redis", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju" }],
  },
  {
    id: "resumefit",
    title: "ResumeFit",
    tagline: "Chrome extension that matches your resume to any job, instantly, locally",
    image: "/assets/resumefit.png", // replace with resumefit image when available
    featured: true,
    category: "Chrome Extension",
    description:
      "A privacy-first Chrome extension that appears as a floating button on every job posting. Click it to instantly see which of your saved resumes best matches the role, complete with a 0–100 match score, matched vs missing skills, confidence rating, and optional AI tips. Everything runs locally. Nothing ever touches a server.",
    problem:
      "Job seekers waste hours tailoring resumes without knowing which version actually fits a role, and most tools require uploading sensitive data to third-party servers.",
    solution:
      "Browser-native NLP runs entirely client-side for full privacy. Optional BYOK AI integration (Gemini, Claude, OpenAI) for tailored suggestions. Built-in job tracker with CSV export and n8n webhook for auto-syncing to Notion, Sheets, or Airtable.",
    metrics: [
      { label: "Match score", value: "0–100%" },
      { label: "Server data sent", value: "Zero" },
      { label: "AI providers", value: "3" },
      { label: "Privacy model", value: "Local-first" },
    ],
    tech: ["JavaScript", "Chrome APIs", "NLP", "Gemini API", "Claude API", "OpenAI API", "n8n"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju/ResumeFit" }],
  },
  {
    id: "weather",
    title: "Weather Monitor",
    tagline: "Cross-platform real-time weather dashboard — web + iOS",
    image: "/assets/weather.png",
    featured: true,
    category: "Full Stack",
    description:
      "A unified weather platform spanning web and native iOS, built with Angular on the frontend, Swift on mobile, and a shared Node/Flask backend with MongoDB caching. Real-time data visualisation via Highcharts with historical trend comparison, all served at sub-150ms response times with 99.9% uptime on GCP autoscaling.",
    problem:
      "Existing weather tools are either too simple or fragmented across platforms, no single dashboard for live + historical trend comparison on both web and mobile.",
    solution:
      "Angular SPA and SwiftUI iOS app sharing a Node/Flask backend with MongoDB caching layer. GCP autoscaling handles traffic spikes; Highcharts renders rich interactive visualisations.",
    metrics: [
      { label: "Response time", value: "<150ms" },
      { label: "API calls reduced", value: "−30%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Platforms", value: "Web + iOS" },
    ],
    tech: ["Angular", "TypeScript", "Swift", "SwiftUI", "Node.js", "Flask", "MongoDB", "GCP", "Highcharts"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju" }],
  },
  {
    id: "waste-ml",
    title: "Waste Classification",
    tagline: "9-class waste image classifier via transfer learning",
    image: "/assets/transferlearning.png",
    featured: true,
    category: "ML",
    description:
      "A computer vision system that classifies waste into 9 categories using transfer learning across three CNN architectures — ResNet50, EfficientNet, and VGG16. Trained and benchmarked on a labelled waste dataset, the ensemble approach achieves robust per-class accuracy suitable for automated recycling pipelines.",
    problem:
      "Manual waste sorting is error-prone, slow, and unscalable. Vision-based automation needs to be accurate across diverse waste categories to be practically useful.",
    solution:
      "Systematic comparison of three pretrained CNN backbones fine-tuned on a curated 9-class waste dataset. Data augmentation and dropout regularisation used to prevent overfitting.",
    metrics: [
      { label: "Waste categories", value: "9" },
      { label: "Architectures compared", value: "3" },
      { label: "Framework", value: "Keras" },
      { label: "Approach", value: "Transfer Learning" },
    ],
    tech: ["Python", "Keras", "TensorFlow", "ResNet50", "EfficientNet", "VGG16", "NumPy"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju" }],
  },
  {
    id: "timefreeze",
    title: "TimeFreeze Runner",
    tagline: "Top-down survival game with strategic time-freeze mechanics",
    image: "/assets/timeFreeze.png",
    featured: true,
    category: "Game Dev",
    description:
      "A top-down survival Unity game where players navigate waves of enemies using a strategic time-freeze ability. Built with custom C# game logic, particle system VFX for the freeze effect, and an original audio engine integration. The time-freeze mechanic requires players to balance resource management with spatial awareness.",
    problem:
      "Building a satisfying time-manipulation mechanic that feels powerful but balanced, without breaking the game loop or making enemies trivial to defeat.",
    solution:
      "C# coroutine-based time dilation system that individually freezes enemy agents while preserving player physics. Particle system VFX tied to the freeze state for clear visual feedback.",
    metrics: [
      { label: "Engine", value: "Unity" },
      { label: "Language", value: "C#" },
      { label: "Genre", value: "Survival" },
      { label: "Core mechanic", value: "Time Freeze" },
    ],
    tech: ["Unity", "C#", "Particle Systems", "Physics Engine", "Audio Engine"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju" }],
  },

  // ── MORE PROJECTS (view more grid) ───────────────────────
  {
    id: "leavenow",
    title: "LeaveNow",
    tagline: "Microservices commute planner with real-time ETAs",
    image: "/assets/LeaveNow.png",
    featured: false,
    category: "Full Stack",
    description:
      "Kafka-driven microservices commute planner that aggregates Calendar, Maps, and Weather APIs to tell you exactly when to leave, with proactive alerts and smart replanning when conditions change.",
    problem: "Commuters juggle 3+ apps to coordinate meetings, traffic, and transit with no proactive alerting.",
    solution: "Kafka event pipeline with Spring Boot microservices, Redis caching, Kubernetes orchestration, and a Next.js frontend.",
    metrics: [
      { label: "Routing latency", value: "−35%" },
      { label: "Transport modes", value: "4" },
      { label: "Uptime", value: "99.9%" },
      { label: "Defects reduced", value: "−30%" },
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Next.js", "MongoDB", "Docker", "Kubernetes"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju" }],
  },
  {
    id: "routeit",
    title: "Route It",
    tagline: "Cross-platform Flutter route optimisation app",
    image: "/assets/routeit.png",
    featured: false,
    category: "Mobile",
    description:
      "Flutter app with real-time multi-stop route optimisation, Google Maps SDK integration, and Firebase backend for cross-platform trip planning on iOS and Android.",
    problem: "No single cross-platform app combines real-time route optimisation with offline-capable itinerary storage.",
    solution: "Flutter + Dart with Google Maps SDK, Firebase Realtime Database, and a custom route-scoring algorithm.",
    metrics: [
      { label: "Platforms", value: "iOS + Android" },
      { label: "Maps", value: "Google Maps" },
      { label: "Backend", value: "Firebase" },
      { label: "Framework", value: "Flutter" },
    ],
    tech: ["Flutter", "Dart", "Google Maps", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju" }],
  },
  {
    id: "ios-weather",
    title: "iOS Weather App",
    tagline: "Native Swift weather app with CoreLocation",
    image: "/assets/ios.png",
    featured: false,
    category: "Mobile",
    description:
      "Native iOS weather app built with SwiftUI and CoreLocation for intelligent location-based forecasts, animated weather visualisations, and a clean minimal interface.",
    problem: "Generic weather apps lack the polished native feel and location-intelligent UX that iOS users expect.",
    solution: "SwiftUI-first app with CoreLocation, custom animated components, and a Node.js REST backend.",
    metrics: [
      { label: "Platform", value: "iOS" },
      { label: "UI", value: "SwiftUI" },
      { label: "Location", value: "CoreLocation" },
      { label: "Backend", value: "Node.js" },
    ],
    tech: ["Swift", "SwiftUI", "UIKit", "CoreLocation", "Node.js"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju" }],
  },
  {
    id: "digit",
    title: "Handwritten Digit Recognition",
    tagline: "EMNIST-based classifier for handwritten alphabets",
    image: "/assets/digitrecognition.png",
    featured: false,
    category: "ML",
    description:
      "CNN trained on the EMNIST balanced dataset to classify handwritten English alphabets across 47 classes, using data augmentation and dropout regularisation for robust generalisation.",
    problem: "Accurate handwriting recognition for the full alphabet, not just digits, is significantly harder and less explored.",
    solution: "CNN on EMNIST balanced dataset with data augmentation and dropout regularisation.",
    metrics: [
      { label: "Dataset", value: "EMNIST" },
      { label: "Classes", value: "47" },
      { label: "Framework", value: "Keras" },
      { label: "Type", value: "CNN" },
    ],
    tech: ["Python", "Keras", "TensorFlow", "EMNIST", "NumPy"],
    links: [{ label: "GitHub", href: "https://github.com/nikhilgovindaraju" }],
  },
];