import { cn } from '../../lib/cn'

export function TelemetryGlow({ className, color = '#10B981' }) {
  return (
    <span
      className={cn('absolute inset-0 rounded-full blur-[8px] opacity-40', className)}
      style={{ backgroundColor: color }}
    />
  )
}
