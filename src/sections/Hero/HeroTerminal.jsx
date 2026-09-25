import { TerminalWindow } from '../../components/terminal/TerminalWindow'
import { TerminalLine } from '../../components/terminal/TerminalLine'
import { hero } from '../../data/hero'

export function HeroTerminal() {
  const { terminal } = hero

  return (
    <TerminalWindow
      title={terminal.title}
      footer={
        <div className="flex flex-wrap items-center gap-4 w-full">
          {terminal.footer.map((f, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {f.color === 'emerald' && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse-beacon" />
              )}
              {f.label}
            </span>
          ))}
        </div>
      }
    >
      {terminal.lines.map((line, i) => (
        <TerminalLine key={i} prefix={line.prefix} variant={line.variant}>
          {line.text}
        </TerminalLine>
      ))}
    </TerminalWindow>
  )
}
