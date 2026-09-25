import { Section } from '../../components/layout/Section'
import { Card } from '../../components/ui/Card'
import { Chip } from '../../components/ui/Chip'
import { about } from '../../data/about'
import { GraduationCap, Rocket, BookOpen, Trophy } from 'lucide-react'

const icons = {
  graduation: GraduationCap,
  deploy: Rocket,
  research: BookOpen,
  athletics: Trophy,
}

export function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Narrative */}
        <div className="lg:col-span-7">
          <p className="section-label mb-3">{about.sectionLabel}</p>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary mb-6">
            {about.title}
          </h2>
          <div className="space-y-4 text-body-md text-text-secondary leading-relaxed">
            {about.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <span className="text-body-sm text-text-tertiary">{about.location}</span>
            {about.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {about.stats.map((stat) => {
            const Icon = icons[stat.icon]
            return (
              <Card key={stat.label} className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-headline-md text-text-primary tabular-nums font-semibold">
                    {stat.value}
                  </span>
                  {Icon && <Icon size={16} className="text-text-disabled" />}
                </div>
                <div>
                  <p className="text-body-sm text-text-secondary font-medium">{stat.label}</p>
                  <p className="text-label-ui text-text-tertiary">{stat.sub}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
