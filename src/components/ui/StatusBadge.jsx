import { cn } from '../../lib/cn'

export function StatusBadge({ children, status = 'online', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-label-code font-mono border',
        'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20',
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75 animate-pulse-beacon" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-emerald" />
      </span>
      {children}
    </span>
  )
}
