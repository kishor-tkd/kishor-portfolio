import { Section } from '../../components/layout/Section'
import { Card } from '../../components/ui/Card'
import { ContactTerminal } from './ContactTerminal'
import { contact } from '../../data/contact'
import { Mail, Phone, MapPin } from 'lucide-react'

const icons = {
  'EMAIL DIRECT': Mail,
  TELEPHONE: Phone,
  LOCATION: MapPin,
}

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left info */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <p className="section-label mb-3">{contact.sectionLabel}</p>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-text-primary mb-4">
              {contact.title}
            </h2>
            <p className="text-body-md text-text-secondary leading-relaxed">
              {contact.description}
            </p>
          </div>

          <div className="space-y-4">
            {contact.details.map((d) => {
              const Icon = icons[d.label]
              return (
                <div key={d.label} className="flex items-start gap-3">
                  {Icon && <Icon size={16} className="text-text-tertiary mt-0.5" />}
                  <div>
                    <p className="font-mono text-label-code text-text-disabled uppercase">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-body-md text-text-secondary hover:text-accent-cyan transition-colors"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-body-md text-text-secondary">{d.value}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-white/[0.08] text-body-sm text-text-tertiary hover:text-text-primary hover:border-white/[0.16] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Terminal form */}
        <div className="lg:col-span-7">
          <ContactTerminal />
        </div>
      </div>
    </Section>
  )
}
