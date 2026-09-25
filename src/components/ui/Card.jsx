import { cn } from '../../lib/cn'

export function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        'card-surface p-5 transition-all duration-300',
        hover && 'hover:border-accent-cyan/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
