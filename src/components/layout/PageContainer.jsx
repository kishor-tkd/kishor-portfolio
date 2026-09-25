import { cn } from '../../lib/cn'

export function PageContainer({ children, className }) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-content px-4 md:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}
