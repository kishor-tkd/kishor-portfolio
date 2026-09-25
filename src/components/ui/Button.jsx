import { cn } from '../../lib/cn'

const variants = {
  primary:
    'bg-[#F0F6FC] !text-[#090D16] font-medium hover:bg-[#E6EDF3] hover:shadow-[0_0_12px_rgba(240,246,252,0.2)] border border-transparent',
  secondary:
    'bg-[#F0F6FC]/[0.04] border border-white/[0.08] !text-[#F0F6FC] hover:bg-white/[0.08] hover:border-white/[0.16]',
  ghost:
    'bg-transparent !text-[#C9D1D9] hover:!text-[#F0F6FC] hover:bg-white/[0.04] border border-transparent',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as: Component = 'button',
  ...props
}) {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-[0.9375rem]',
    lg: 'px-5 py-2.5 text-[0.9375rem]',
  }

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/50',
        'disabled:opacity-50 disabled:pointer-events-none',
        'leading-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}