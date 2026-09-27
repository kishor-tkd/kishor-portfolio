export function ArchitectureCard({ architecture, onClose }) {
  if (!architecture) return null

  const sections = [
    { label: 'THE PROBLEM', content: architecture.problem },
    { label: 'THE SOLUTION', content: architecture.solution },
    { label: 'TECH STACK', content: architecture.techStack },
    { label: 'KEY OUTCOMES', content: architecture.outcomes },
  ]

  return (
    <div
      className="mt-4 rounded-xl p-5"
      style={{
        background: 'rgba(22, 27, 34, 0.95)',
        border: '1px solid rgba(56, 189, 248, 0.4)',
      }}
    >
      <div className="flex items-center justify-between mb-4 gap-3">
        <h4
          className="font-mono uppercase tracking-wider"
          style={{ fontSize: '12px', color: '#8B949E', margin: 0 }}
        >
          Architectural Deep Dive: SAP CRM Platform
        </h4>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="font-mono shrink-0"
            style={{ fontSize: '12px', color: '#8B949E', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            × Close
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sections.map((s) => (
          <div key={s.label}>
            <p
              className="font-mono uppercase tracking-wider"
              style={{ fontSize: '12px', color: '#38BDF8', margin: '0 0 8px 0' }}
            >
              {s.label}
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#C9D1D9', margin: 0 }}>
              {s.content || '—'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}