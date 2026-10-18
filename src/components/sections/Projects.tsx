import { plannedProjectAreas, projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tags } from "@/components/ui/Tags";

export function Projects() {
  return (
    <section className="section shell" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        number="05"
        eyebrow="Projects"
        title="Work worth showing — when it is ready."
        description="This space is prepared for documented, finished work. No tutorial clones or invented case studies."
      />

      {projects.length > 0 ? (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <div className="project-empty">
          <div className="project-empty__status">
            <span aria-hidden="true" /> Project archive in progress
          </div>
          <div className="project-empty__copy">
            <p className="project-empty__label">Coming soon</p>
            <h3>Building first, publishing second.</h3>
            <p>
              I am currently developing the practical depth behind this portfolio.
              Future entries will include clear context, technical decisions, and
              honest project status.
            </p>
          </div>
          <div className="project-empty__areas">
            <p>Currently exploring</p>
            <Tags items={plannedProjectAreas} subtle />
          </div>
        </div>
      )}
    </section>
  );
}
