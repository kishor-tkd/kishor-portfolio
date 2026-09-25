import { cn } from '../../lib/cn'

export function TerminalControls({ className }) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
    </div>
  )
}
