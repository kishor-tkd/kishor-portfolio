import { Button } from '../../components/ui/Button'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { PageContainer } from '../../components/layout/PageContainer'
import { HeroTerminal } from './HeroTerminal'
import { hero } from '../../data/hero'
import { downloadResume } from '../../lib/utils'
import { ChevronDown, Mail, Download } from 'lucide-react'

export function Hero() {
  const handleCta = (cta) => {
    if (cta.action === 'download') {
      downloadResume()
    } else if (cta.href) {
      const el = document.querySelector(cta.href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge>{hero.status}</StatusBadge>
            </div>

            <p className="font-mono text-label-code text-text-tertiary tracking-widest uppercase">
              {hero.role}
            </p>

            <h1 className="text-hero-mobile md:text-hero text-text-primary tracking-tight">
              {hero.name}
            </h1>

            <p className="text-headline-sm md:text-headline-md text-text-secondary font-medium">
              {hero.title}
            </p>

            <p className="text-body-md md:text-body-lg text-text-tertiary max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {hero.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  variant={cta.variant}
                  size="md"
                  onClick={() => handleCta(cta)}
                >
                  {cta.label === 'View Projects' && <ChevronDown size={16} className="rotate-[-90deg]" />}
                  {cta.label === 'Contact Me' && <Mail size={16} />}
                  {cta.label === 'Download Resume' && <Download size={16} />}
                  {cta.label}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-body-sm text-text-tertiary">
              {hero.meta.map((m, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-text-disabled" />
                  {m.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right terminal */}
          <div className="lg:col-span-5">
            <HeroTerminal />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
