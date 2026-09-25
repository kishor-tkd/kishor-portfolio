import { useState, useEffect } from 'react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { IconButton } from '../ui/IconButton'
import { navigation } from '../../data/navigation'
import { Menu, X, Download } from 'lucide-react'
import { downloadResume } from '../../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-surface-1/90 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-content px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/assets/images/logo.png"
            alt="Kishor AR"
            className="w-7 h-7 rounded-md"
          />
          <span className="font-semibold text-text-primary text-body-md tracking-tight">
            KISHOR AR
          </span>
          <span className="font-mono text-label-code text-text-disabled hidden sm:inline">v2.4</span>
        </a>

        {/* Desktop Nav - only from lg (1024px) */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="px-3 py-1.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-white/[0.04]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA - only from lg */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleNav('#contact')}
          >
            Get in Touch
          </Button>
          <IconButton onClick={downloadResume} aria-label="Download resume">
            <Download size={16} />
          </IconButton>
        </div>

        {/* Mobile / Tablet toggle */}
        <IconButton
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </IconButton>
      </div>

      {/* Mobile / Tablet menu */}
      {open && (
        <div className="lg:hidden bg-surface-1/95 backdrop-blur-lg border-b border-white/[0.08] px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="text-left px-3 py-2.5 text-body-md text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/[0.04]"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-3 flex gap-2">
              <Button variant="primary" size="sm" className="flex-1" onClick={() => handleNav('#contact')}>
                Get in Touch
              </Button>
              <Button variant="secondary" size="sm" onClick={downloadResume}>
                <Download size={14} /> Resume
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}