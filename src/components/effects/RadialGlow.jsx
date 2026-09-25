import { cn } from '../../lib/cn'

export function RadialGlow({ className, color = 'rgba(56, 189, 248, 0.08)' }) {
  return (
    <div
      className={cn('absolute pointer-events-none', className)}
      style={{
        background: `radial-gradient(ellipse at center, ${color}, transparent 70%)`,
      }}
    />
  )
}
