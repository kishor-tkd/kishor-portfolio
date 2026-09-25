import { cn } from '../../lib/cn'
import { TerminalHeader } from './TerminalHeader'

export function TerminalWindow({ title, children, className, footer }) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border border-white/[0.08] bg-surface-1 shadow-card',
        className
      )}
    >
      <TerminalHeader title={title} />
      <div className="p-4 space-y-1.5">
        {children}
      </div>
      {footer && (
        <div className="px-4 py-2 border-t border-white/[0.06] flex items-center justify-between text-label-code font-mono text-text-tertiary">
          {footer}
        </div>
      )}
    </div>
  )
}
