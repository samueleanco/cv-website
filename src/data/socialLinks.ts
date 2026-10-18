import type { SocialLink } from "@/types/portfolio";
import { profile } from "@/data/profile";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/samueleanco",
    icon: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuele-ancona-9606122ba/",
    icon: "linkedin",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "email",
    external: false,
  },
];
