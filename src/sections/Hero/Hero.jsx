import HeroTerminal from "./HeroTerminal";

function IconCode() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}

function IconGraduation() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11.5V16c2.8 2 7.2 2 10 0v-4.5" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative left-[20px] overflow-hidden pb-[64px] pt-[62px] lg:pt-[66px]"
    >
      {/* Left cyan telemetry / particle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[90px] top-[10px] h-[430px] w-[230px] opacity-80"
      >
        <div className="absolute left-[85px] top-0 h-[430px] w-[75px] rounded-[50%] bg-cyan/[0.12] blur-[45px]" />

        <div className="absolute left-[100px] top-[35px] h-[350px] w-[42px] rounded-[50%] border-r border-cyan/30 bg-cyan/[0.04] blur-[1px]" />

        <div className="absolute left-[111px] top-[55px] h-[315px] w-[15px] rounded-[50%] bg-cyan/[0.18] blur-[14px]" />

        <div className="absolute left-[105px] top-[20px] h-[390px] w-[3px] bg-cyan/25 blur-[2px]" />
      </div>

      <div className="relative grid grid-cols-12 items-center gap-grid">
        
        {/* =====================================================
            HERO COPY
        ====================================================== */}
        <div className="col-span-12 lg:col-span-7">
          
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/[0.055] px-[9px] py-[5px]">
            <span className="h-[6px] w-[6px] rounded-full bg-emerald shadow-[0_0_8px_rgba(16,185,129,0.7)]" />

            <span className="font-mono text-[10px] font-medium uppercase leading-none tracking-[0.08em] text-emerald-light">
              Available for roles &amp; contracts
            </span>
          </div>

          {/* Eyebrow */}
          <div className="mt-[24px] font-mono text-[11px] font-medium uppercase leading-none tracking-[0.09em] text-cyan">
            Software Developer &amp; Researcher
          </div>

          {/* Name */}
          <h1 className="mt-[14px] font-sans text-[60px] font-semibold leading-[1.02] tracking-[-0.045em] text-ink-primary">
            Kishor AR
          </h1>

          {/* Subtitle */}
          <h2 className="mt-[12px] max-w-[650px] font-sans text-[20px] font-medium leading-[1.3] tracking-[-0.018em] text-cyan">
            Full-Stack Engineer &amp; AI / Quantum Computing Researcher
          </h2>

          {/* Description */}
          <p className="mt-[22px] max-w-[635px] font-sans text-[15px] leading-[1.55] tracking-[-0.004em] text-ink-secondary">
            Software developer specializing in ReactJS, React Native, Tailwind
            CSS, Node.js, and Python ML. Engineering robust web and mobile
            applications alongside novel research in quantum-classical
            logistics optimization.
          </p>

          {/* CTA buttons */}
          <div className="mt-[27px] flex flex-wrap items-center gap-[12px]">
            
            <a
              href="#projects"
              className="inline-flex h-[40px] items-center gap-[9px] rounded-component border border-cyan/50 bg-cyan px-[15px] font-mono text-[11px] font-medium text-[#07151D] shadow-[0_0_12px_rgba(56,189,248,0.12)] transition-all duration-200 hover:bg-cyan-light"
            >
              View Projects
              <span className="text-[16px] leading-none">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex h-[40px] items-center gap-[9px] rounded-component border border-cyan/45 bg-white/[0.025] px-[15px] font-mono text-[11px] font-medium text-cyan-light transition-all duration-200 hover:bg-cyan/[0.08]"
            >
              <IconMail />
              Contact Me
            </a>

            <a
              href="/assets/resume/Kishor_Updated_Resume_AUG2026.pdf"
              download
              className="inline-flex h-[40px] items-center gap-[9px] rounded-component border border-cyan/35 bg-white/[0.025] px-[15px] font-mono text-[11px] font-medium text-cyan-light transition-all duration-200 hover:bg-cyan/[0.08]"
            >
              <IconDownload />
              Download Resume
            </a>
          </div>

          {/* Metadata */}
          <div className="mt-[28px] flex flex-wrap items-center gap-y-[9px] font-mono text-[10px] text-ink-secondary">
            
            <div className="flex items-center gap-[7px]">
              <span className="text-emerald">
                <IconCode />
              </span>
              <span>B.Tech CSE</span>
            </div>

            <span className="mx-[10px] text-ink-trace">•</span>

            <div className="flex items-center gap-[7px]">
              <span className="text-cyan">
                <IconGraduation />
              </span>
              <span>Vel Tech Univ</span>
            </div>

            <span className="mx-[10px] text-ink-trace">•</span>

            <div className="flex items-center gap-[7px]">
              <span className="text-cyan">
                <IconGraduation />
              </span>
              <span>TQCEBT '26 IEEE Author</span>
            </div>

            <span className="mx-[10px] text-ink-trace">•</span>

            <div className="flex items-center gap-[7px]">
              <span className="text-cyan">
                <IconPin />
              </span>
              <span>Chennai, TN</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            TERMINAL
        ====================================================== */}
        <div className="col-span-12 flex justify-center lg:col-span-5 lg:justify-end lg:self-start lg:pt-[57px]">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}

export default Hero;