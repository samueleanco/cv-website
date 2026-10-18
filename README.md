# Samuele Ancona — Portfolio

A single-page personal portfolio and CV for Samuele Ancona. The site presents education, current backend development experience, technical interests, language skills, and martial arts background without overstating experience or inventing projects.

## Technology stack

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- CSS transitions for small interactions (no animation library)

Most components are React Server Components. The navigation is the only Client Component because it needs interactive mobile menu state.

## Folder structure

```text
src/
├── app/                    # Page, global styles, metadata, and favicon
├── components/
│   ├── layout/             # Navbar and footer
│   ├── sections/           # The eight main page sections
│   └── ui/                 # Reusable headings, cards, tags, and icons
├── data/                   # Personal content shown on the site
└── types/                  # Shared TypeScript data models
```

Keeping content in `src/data` makes regular updates possible without restructuring the visual components.

## Installation

Install [Node.js](https://nodejs.org/) 20.9 or newer first. Node.js 24 LTS is a good default for a new setup.

Then open a terminal in the project folder and install the dependencies:

```bash
npm install
```

## Local development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes to files are reflected while the server is running.

## Production build

Create an optimized production build:

```bash
npm run build
```

To run that build locally:

```bash
npm run start
```

## Where the portfolio content lives

| Content | File |
| --- | --- |
| Name, age, location, role, email, introduction | `src/data/profile.ts` |
| Main navigation | `src/data/navigation.ts` |
| GitHub, LinkedIn, and email links | `src/data/socialLinks.ts` |
| Work experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Projects and future project areas | `src/data/projects.ts` |
| Technical skills and spoken languages | `src/data/skills.ts` |
| Karate, Muay Thai, and other interests | `src/data/beyondCode.ts` |

## Add a project

Open `src/data/projects.ts` and add an object to the `projects` array:

```ts
export const projects: Project[] = [
  {
    title: "Project name",
    description: "A concise explanation of the problem and your solution.",
    technologies: ["C#", ".NET", "gRPC"],
    githubUrl: "https://github.com/your-username/repository",
    liveUrl: "https://example.com", // Optional — remove if there is no live version
    year: "2026",
    status: "Completed",
  },
];
```

Allowed status values are `"In progress"`, `"Coming soon"`, and `"Completed"`. The Projects section automatically replaces its empty state with project cards once the array contains an item.

## Edit work experience

Open `src/data/experience.ts`. Each item has a role, organization, period, optional employment level, description, and a list of technologies. Add another object to the array to create another timeline entry.

## Edit skills or languages

Open `src/data/skills.ts`:

- Add or remove a `SkillGroup` object to change a technical category.
- Edit a group's `skills` array to change its badges.
- Edit the `languages` array to update spoken languages and proficiency descriptions.

No percentage scores are used; skill and language information stays descriptive.

## Replace the profile placeholder

1. Add a portrait to `public/`, for example `public/samuele-portrait.webp`.
2. Open `src/components/sections/Hero.tsx`.
3. Replace the `<div className="portrait-frame" ...>` block with Next.js's `Image` component:

```tsx
import Image from "next/image";

<div className="portrait-frame portrait-frame--image">
  <Image
    src="/samuele-portrait.webp"
    alt="Portrait of Samuele Ancona"
    fill
    priority
    sizes="(max-width: 700px) 90vw, 32vw"
  />
</div>
```

Then add this small rule to `src/app/globals.css` if you want the photo to fill the frame:

```css
.portrait-frame--image img {
  object-fit: cover;
}
```

## Deploy with Vercel

1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and select **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected framework as **Next.js** and the default build settings.
5. Select **Deploy**.

Vercel will create a new deployment whenever changes are pushed to the connected branch. After choosing a permanent domain, update `metadataBase` in `src/app/layout.tsx` so shared links use the correct canonical origin.

## Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Check code quality and common mistakes |
| `npm run typecheck` | Check TypeScript types without creating output |
| `npm run build` | Create and validate the production build |
| `npm run start` | Serve an already-created production build |

## Editing notes

- Keep personal facts in the typed files under `src/data` where possible.
- Shared content models are in `src/types/portfolio.ts`.
- Global design tokens such as colors, fonts, and spacing are near the top of `src/app/globals.css`.
- The generated favicon lives at `src/app/icon.svg` and can be replaced later with another supported Next.js app icon file.
