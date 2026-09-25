import { cn } from '../../lib/cn'

export function Chip({ children, className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-label-code font-mono',
        'bg-white/[0.04] text-text-tertiary border border-white/[0.06]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
