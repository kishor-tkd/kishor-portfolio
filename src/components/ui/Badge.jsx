import { cn } from '../../lib/cn'

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-white/[0.04] text-text-tertiary border-white/[0.06]',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
    emerald: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20',
    indigo: 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-label-code font-mono border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
