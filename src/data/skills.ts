import type { SkillGroup, SpokenLanguage } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend & Development",
    level: 60,
    description: "Tools I use for backend development and data work. Python and Bash are at a basics level.",
    skills: ["C#", ".NET", "SQL", "gRPC", "REST", "Python (basics)", "Bash (basics)"],
  },
  {
    category: "Infrastructure & Operations",
    level: 80,
    description: "Tools I work with for running and observing software. Docker is at a basics level.",
    skills: ["Linux", "Git", "Datadog", "Docker (basics)"],
  },
  {
    category: "Security & Learning",
    description: "Learning status through TryHackMe, not a certification.",
    skills: ["Security fundamentals (TryHackMe)"],
  },
];

export const languages: SpokenLanguage[] = [
  { language: "German", proficiency: "Native / bilingual" },
  { language: "Italian", proficiency: "Native / bilingual" },
  { language: "English", proficiency: "B2–C1" },
  { language: "French", proficiency: "B1–B2" },
];
