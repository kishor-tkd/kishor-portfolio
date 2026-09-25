import { cn } from '../../lib/cn'
import { TerminalHeader } from './TerminalHeader'

export function CodeBlock({ title, children, className }) {
  return (
    <div className={cn('rounded-lg overflow-hidden border border-white/[0.08] bg-surface-1', className)}>
      {title && <TerminalHeader title={title} />}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-code-block text-text-secondary whitespace-pre">
          {children}
        </pre>
      </div>
    </div>
  )
}
