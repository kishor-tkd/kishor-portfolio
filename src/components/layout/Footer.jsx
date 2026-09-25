import { SITE } from '../../lib/constants'
import { PageContainer } from './PageContainer'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-label-code text-text-tertiary uppercase">
              Kishor AR / Staff Software Engineer
            </span>
            <p className="text-body-sm text-text-disabled max-w-md">
              Crafting high-throughput distributed architectures, runtime engines, and technical design systems.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 text-body-sm text-text-tertiary font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse-beacon" />
                SYS: OPERATIONAL
              </span>
              <span>LATENCY: 14ms</span>
            </div>
            <span className="text-text-disabled">© 2026 Kishor AR. All rights reserved.</span>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}
