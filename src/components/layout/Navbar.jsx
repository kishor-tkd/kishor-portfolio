const navItems = [
  { label: "About", href: "#about", active: true },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#research" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="relative z-50 px-margin-mobile pt-2 md:px-margin">
      <div className="mx-auto flex h-[58px] max-w-content items-center rounded-component border border-cyan/25 bg-surface-1/95 px-3 backdrop-blur-card lg:px-4">
        
        {/* Brand */}
        <a
          href="#top"
          className="flex min-w-[235px] items-center gap-2.5"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-cyan/30 bg-canvas">
            <img
              src="/assets/images/logo.png"
              alt="Kishor AR"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center gap-2 font-mono">
            <span className="text-[13px] font-medium tracking-[0.08em] text-ink-primary">
              KISHOR AR
            </span>

            <span className="text-[13px] text-ink-trace">
              /
            </span>

            <span className="text-[11px] tracking-[0.08em] text-cyan-light">
              PORTFOLIO
            </span>

            <span className="rounded-micro border border-white/[0.08] bg-white/[0.035] px-1.5 py-0.5 text-[9px] tracking-[0.04em] text-ink-tertiary">
              v2.4.0
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="flex flex-1 items-center justify-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={[
                "rounded-micro px-3 py-2 font-sans text-[13px] transition-colors duration-200",
                item.active
                  ? "border border-white/[0.08] bg-surface-highest text-ink-primary"
                  : "text-ink-secondary hover:bg-white/[0.035] hover:text-ink-primary",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex min-w-[235px] items-center justify-end gap-3">
          <a
            href="#contact"
            className="inline-flex h-9 items-center gap-2 rounded-component bg-cyan px-4 font-mono text-[11px] font-medium tracking-[0.02em] text-[#06121A] shadow-primary-glow transition-all duration-200 hover:bg-cyan-light"
          >
            Get in Touch
            <span className="text-sm">→</span>
          </a>

          <button
            type="button"
            aria-label="Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan/30 bg-cyan/[0.08] text-cyan transition-colors hover:bg-cyan/[0.14]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="8" r="3.2" />
              <path d="M5.5 19c.8-3.1 3.1-4.8 6.5-4.8s5.7 1.7 6.5 4.8" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;