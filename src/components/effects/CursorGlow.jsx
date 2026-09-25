import { useMousePosition } from '../../hooks/useMousePosition'

export function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x * 100}% ${y * 100}%, rgba(56, 189, 248, 0.04), transparent 40%)`,
      }}
    />
  )
}
