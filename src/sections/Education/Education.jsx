import { Section } from '../../components/layout/Section'
import { Card } from '../../components/ui/Card'
import { EducationCard } from './EducationCard'
import { AchievementCard } from './AchievementCard'
import { education } from '../../data/education'
import { Badge } from '../../components/ui/Badge'

export function Education() {
  return (
    <Section id="education">
      <div className="mb-10">
        <p className="section-label mb-3">{education.sectionLabel}</p>
        <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary">
          {education.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Degrees + Certs */}
        <div className="lg:col-span-7 space-y-6">
          <Card>
            {education.degrees.map((d, i) => (
              <EducationCard key={i} degree={d} />
            ))}
          </Card>

          <div>
            <p className="section-label mb-3">Verified Certifications</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {education.certifications.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
                >
                  <Badge variant="default" className="shrink-0 mt-0.5">✓</Badge>
                  <div>
                    <p className="text-body-sm text-text-primary">{c.name}</p>
                    <p className="text-label-ui text-text-tertiary">{c.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Athletics */}
        <div className="lg:col-span-5">
          <AchievementCard athletics={education.athletics} />
        </div>
      </div>
    </Section>
  )
}
