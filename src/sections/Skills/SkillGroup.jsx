import { Card } from '../../components/ui/Card'
import { Chip } from '../../components/ui/Chip'
import { Badge } from '../../components/ui/Badge'
import { Code2, Layers, Wrench } from 'lucide-react'

const icons = {
  languages: Code2,
  frameworks: Layers,
  tools: Wrench,
}

export function SkillGroup({ group }) {
  const Icon = icons[group.id] || Code2

  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-text-tertiary" />
          <h3 className="font-mono text-label-code text-text-tertiary uppercase tracking-wider">
            {group.title}
          </h3>
        </div>
      </div>

      <p className="text-body-sm text-text-secondary mb-4 leading-relaxed">
        {group.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 flex-1">
        {group.items.map((item) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <Chip>{item.name}</Chip>
            {item.level && (
              <span className="text-label-code font-mono text-text-disabled">{item.level}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
        <span className="text-label-code font-mono text-text-disabled">{group.footer}</span>
        <Badge variant="default">{group.badge}</Badge>
      </div>
    </Card>
  )
}
