import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";
import { Tags } from "@/components/ui/Tags";
import { plannedProjectAreas, projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" number="03" label="Projects" title="Work worth showing, when it is ready.">
      {projects.length > 0 ? (
        projects.map((project) => (
          <article className="project" key={project.title}>
            <p className="mono">
              {project.year} · {project.status}
            </p>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.image.src} alt={project.image.alt} loading="lazy" />
              )}
              <Tags items={project.technologies} label="Technologies" />
              {(project.githubUrl || project.liveUrl) && (
                <div className="project__links">
                  {project.githubUrl && (
                    <ArrowLink href={project.githubUrl} external>
                      GitHub
                    </ArrowLink>
                  )}
                  {project.liveUrl && (
                    <ArrowLink href={project.liveUrl} external>
                      Live
                    </ArrowLink>
                  )}
                </div>
              )}
            </div>
          </article>
        ))
      ) : (
        <div className="empty">
          <p className="mono">No public projects yet</p>
          <h3>Building first, publishing second.</h3>
          <p>
            Documented work will appear here with its context, technical decisions, and honest
            status. No tutorial clones or invented case studies.
          </p>
          <div className="empty__areas">
            <p className="mono">Currently exploring</p>
            <Tags items={plannedProjectAreas} label="Areas of exploration" />
          </div>
        </div>
      )}
    </Section>
  );
}
