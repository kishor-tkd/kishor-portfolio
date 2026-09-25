import { cn } from '../../lib/cn'

export function IconButton({ children, className, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-lg text-text-tertiary transition-all duration-200',
        'hover:text-text-primary hover:bg-white/[0.06] hover:border-white/[0.12]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
