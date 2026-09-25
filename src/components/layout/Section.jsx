import { cn } from '../../lib/cn'
import { PageContainer } from './PageContainer'

export function Section({ id, children, className, containerClassName }) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-20 lg:py-24', className)}
    >
      <PageContainer className={containerClassName}>
        {children}
      </PageContainer>
    </section>
  )
}
