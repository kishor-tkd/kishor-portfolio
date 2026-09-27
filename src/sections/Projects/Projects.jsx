import { Section } from '../../components/layout/Section'
import { ProjectCard } from './ProjectCard'
import { projects } from '../../data/projects'

export function Projects() {
  const [featured, ...rest] = projects.items

  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <p className="section-label mb-3">{projects.sectionLabel}</p>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary">
            {projects.title}
          </h2>
        </div>
        <span className="text-body-sm text-text-tertiary font-mono">
          {projects.subtitle}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProjectCard project={featured} variant="featured" />
        {rest.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
