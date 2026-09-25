import { Card } from '../../components/ui/Card'
import { Chip } from '../../components/ui/Chip'
import { Badge } from '../../components/ui/Badge'
import { ExternalLink, MapPin, Calendar } from 'lucide-react'

export function ExperienceCard({ item }) {
  return (
    <Card className="relative">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-headline-sm text-text-primary">
              {item.role}
            </h3>
            {item.current && (
              <Badge variant="emerald">Current</Badge>
            )}
          </div>
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-body-md text-accent-cyan hover:underline"
          >
            {item.company}
            <ExternalLink size={12} />
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-body-sm text-text-tertiary mb-4">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {item.period}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={12} />
          {item.location}
        </span>
      </div>

      <p className="text-body-md text-text-secondary mb-4 leading-relaxed">
        {item.description}
      </p>

      <ul className="space-y-2">
        {item.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-body-sm text-text-secondary">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-emerald shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {item.companyUrl && (
        <div className="mt-4 pt-3 border-t border-white/[0.06]">
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-label-code font-mono text-text-tertiary hover:text-accent-cyan transition-colors"
          >
            Visit {item.company.replace(/\s.*/, '').toLowerCase()}.com
            <ExternalLink size={11} />
          </a>
        </div>
      )}
    </Card>
  )
}
