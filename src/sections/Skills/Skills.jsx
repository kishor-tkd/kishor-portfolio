import { Section } from '../../components/layout/Section'
import { SkillGroup } from './SkillGroup'
import { skills } from '../../data/skills'

export function Skills() {
  return (
    <Section id="skills">
      <div className="mb-10">
        <p className="section-label mb-3">{skills.sectionLabel}</p>
        <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary mb-3">
          {skills.title}
        </h2>
        <p className="text-body-md text-text-secondary max-w-2xl">
          {skills.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.groups.map((group) => (
          <SkillGroup key={group.id} group={group} />
        ))}
      </div>
    </Section>
  )
}
