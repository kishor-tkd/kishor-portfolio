import { Section } from '../../components/layout/Section'
import { ExperienceCard } from './ExperienceCard'
import { experience } from '../../data/experience'

export function Experience() {
  return (
    <Section id="experience">
      <div className="mb-10">
        <p className="section-label mb-3">{experience.sectionLabel}</p>
        <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary">
          {experience.title}
        </h2>
      </div>

      <div className="space-y-4">
        {experience.items.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  )
}
