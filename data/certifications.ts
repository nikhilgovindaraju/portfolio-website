export interface Certification {
  id: string; name: string; issuer: string; year: string; featured?: boolean;
}
export const certifications: Certification[] = [
  { id: "google-ai",   name: "Google AI Essentials",                issuer: "Google",               year: "Feb 2026",  featured: true },
  { id: "aws-cp",      name: "AWS Certified Cloud Practitioner",     issuer: "Amazon Web Services",  year: "Jan 2025",  featured: true },
  { id: "scrum",       name: "Certified Scrum Master",               issuer: "Scrum Alliance",       year: "Oct 2023",  featured: true },
  { id: "oci",         name: "OCI AI Foundations Associate",         issuer: "Oracle",               year: "Nov 2024" },
  { id: "agentic",     name: "Agentic AI & Multi-Agent Systems",     issuer: "Udemy",                year: "2025" },
  { id: "aws-cloud",   name: "AWS Cloud Native Architecture",        issuer: "Amazon Web Services",  year: "2024" },
  { id: "agile",       name: "Agile Project Management",             issuer: "Google",               year: "2023" },
  { id: "flutter",     name: "Flutter Development Bootcamp",         issuer: "Udemy",                year: "2023" },
  { id: "angular",     name: "Angular — The Complete Guide",         issuer: "Udemy",                year: "2022" },
  { id: "react-li",    name: "React Essential Training",             issuer: "LinkedIn Learning",    year: "2022" },
  { id: "pm",          name: "Project Management",                   issuer: "Simplilearn",          year: "2022" },
  { id: "nasscom",     name: "ML & AI Foundations",                  issuer: "NASSCOM",              year: "2022" },
];
