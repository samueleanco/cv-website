import type { SkillGroup, SpokenLanguage } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages / Backend",
    description: "Tools I currently use for backend development and data work.",
    skills: ["C#", "SQL"],
  },
  {
    category: "Frameworks / Technologies",
    description: "Technologies I am applying in my current development work.",
    skills: [".NET", "gRPC"],
  },
  {
    category: "Areas of focus",
    description: "Fields I am studying, practising, and building experience in.",
    skills: [
      "Backend Development",
      "Cybersecurity",
      "Security Engineering",
      "Platforms",
      "DevOps",
      "Secure systems",
      "Agentic Coding",
      "AI-assisted Development",
    ],
  },
];

export const languages: SpokenLanguage[] = [
  { language: "German", proficiency: "Native / bilingual" },
  { language: "Italian", proficiency: "Native / bilingual" },
  { language: "English", proficiency: "B2–C1" },
  { language: "French", proficiency: "B1–B2" },
];
