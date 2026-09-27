export function EducationCard({ degree }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-white/[0.06] last:border-0">
      <div>
        <h4 className="text-body-md text-text-primary font-medium mb-0.5">
          {degree.degree}
        </h4>
        <p className="text-body-sm text-text-secondary">{degree.school}</p>
        <p className="text-label-ui text-text-tertiary">
          {degree.location} · {degree.period}
        </p>
      </div>
      <div className="text-right shrink-0">
        <span className="text-headline-sm text-accent-emerald tabular-nums font-semibold">
          {degree.score}
        </span>
        <p className="text-label-code font-mono text-text-disabled">{degree.scoreLabel}</p>
      </div>
    </div>
  )
}
