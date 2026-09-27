import { Card } from '../../components/ui/Card'
import { Chip } from '../../components/ui/Chip'
import { Trophy } from 'lucide-react'

export function AchievementCard({ athletics }) {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-2 mb-3">
        <Trophy size={16} className="text-accent-cyan" />
        <h3 className="text-headline-sm text-text-primary">{athletics.title}</h3>
      </div>
      <p className="text-body-sm text-text-secondary mb-5 leading-relaxed">
        {athletics.description}
      </p>
      <ul className="space-y-3 mb-5">
        {athletics.medals.map((m, i) => (
          <li key={i} className="flex items-start justify-between gap-2">
            <div>
              <p className="text-body-sm text-text-secondary">{m.event}</p>
              <p className="text-label-ui text-accent-emerald">{m.result}</p>
            </div>
            <span className="text-label-code font-mono text-text-disabled shrink-0">
              {m.year}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
        {athletics.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Card>
  )
}
