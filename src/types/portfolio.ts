export type IconName = "github" | "linkedin" | "email";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  external: boolean;
}

export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  employmentLevel?: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  qualification: string;
  focus?: string;
  period: string;
  description: string;
  topics?: string[];
}

export type ProjectStatus = "In progress" | "Coming soon" | "Completed";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  status: ProjectStatus;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface SpokenLanguage {
  language: string;
  proficiency: string;
}

export interface PersonalProfile {
  name: string;
  age: number;
  location: string;
  role: string;
  focus: string;
  email: string;
  introduction: string;
}

export interface PersonalPursuit {
  title: string;
  meta: string;
  description: string;
  highlights: string[];
}
