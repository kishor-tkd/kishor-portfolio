import { cn } from '../../lib/cn'

export function TerminalHeader({ title = 'kishor.config.ts', className }) {
  return (
    <div className={cn('flex items-center justify-between px-3 py-2 border-b border-white/[0.08]', className)}>
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
      </div>
      <span className="font-mono text-label-code text-text-tertiary flex items-center gap-1.5">
        <span className="text-text-disabled">◇</span> {title}
      </span>
      <span className="font-mono text-label-code text-accent-emerald">● main</span>
    </div>
  )
}
