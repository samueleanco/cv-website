import type { Project } from "@/types/portfolio";
import { Tags } from "./Tags";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{project.year}</span>
        <span>{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Tags items={project.technologies} subtle />
      {project.githubUrl || project.liveUrl ? (
        <div className="project-card__links">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              Source <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live site <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
