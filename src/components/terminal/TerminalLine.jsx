import { cn } from '../../lib/cn'

export function TerminalLine({ prefix, children, className, variant = 'default' }) {
  const variants = {
    default: 'text-text-secondary',
    success: 'text-accent-emerald',
    muted: 'text-text-tertiary',
    accent: 'text-accent-cyan',
  }

  return (
    <div className={cn('font-mono text-code-block leading-relaxed', variants[variant], className)}>
      {prefix && <span className="text-text-disabled mr-2">{prefix}</span>}
      {children}
    </div>
  )
}
