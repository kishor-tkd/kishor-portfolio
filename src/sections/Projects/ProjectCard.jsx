import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Chip } from '../../components/ui/Chip'
import { ArchitectureCard } from './ArchitectureCard'
import { ExternalLink, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/cn'

export function ProjectCard({ project, variant = 'default' }) {
  const [showArch, setShowArch] = useState(false)
  const isFeatured = variant === 'featured' || project.featured

  return (
    <div className={cn('flex flex-col', isFeatured && 'lg:col-span-2')}>
      <Card className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge variant={isFeatured ? 'cyan' : 'default'}>
            {project.badge}
          </Badge>
          <span className="text-label-code font-mono text-text-disabled">
            {project.date}
          </span>
        </div>

        <h3 className="text-headline-sm text-text-primary mb-1">
          {project.title}
        </h3>
        <p className="text-body-sm text-text-tertiary mb-3">
          {project.subtitle}
        </p>

        <p className="text-body-md text-text-secondary mb-4 leading-relaxed">
          {project.description}
        </p>

        {isFeatured && project.role && (
          <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-y border-white/[0.06]">
            <div>
              <p className="text-label-code font-mono text-text-disabled mb-0.5">ROLE</p>
              <p className="text-body-sm text-text-secondary">{project.role}</p>
            </div>
            <div>
              <p className="text-label-code font-mono text-text-disabled mb-0.5">PLATFORMS</p>
              <p className="text-body-sm text-text-secondary">{project.platforms}</p>
            </div>
            <div>
              <p className="text-label-code font-mono text-text-disabled mb-0.5">STATUS</p>
              <p className="text-body-sm text-accent-emerald">{project.status}</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        {project.metrics && (
          <div className="flex flex-wrap gap-4 mb-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="text-label-code font-mono text-text-disabled">{m.label} </span>
                <span className="text-body-sm text-text-secondary tabular-nums">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 mt-auto">
          {project.links?.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-body-sm text-accent-cyan hover:underline"
            >
              {link.label}
              <ExternalLink size={12} />
            </a>
          ))}
          {project.architecture && (
            <button
              type="button"
              onClick={() => setShowArch((v) => !v)}
              className="inline-flex items-center gap-1 text-body-sm text-text-tertiary hover:text-text-primary transition-colors ml-auto"
            >
              View Case Study Architecture
              <ChevronDown
                size={14}
                className={cn('transition-transform', showArch && 'rotate-180')}
              />
            </button>
          )}
        </div>
      </Card>

      {showArch && project.architecture && (
        <ArchitectureCard
          architecture={project.architecture}
          onClose={() => setShowArch(false)}
        />
      )}
    </div>
  )
}