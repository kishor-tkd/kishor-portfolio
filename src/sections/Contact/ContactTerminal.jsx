import { useState } from 'react'
import { TerminalWindow } from '../../components/terminal/TerminalWindow'
import { Button } from '../../components/ui/Button'
import { contact } from '../../data/contact'
import { Send } from 'lucide-react'

export function ContactTerminal() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate send
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <TerminalWindow
      title={contact.terminal.title}
      footer={
        <div className="flex items-center justify-between w-full text-label-code font-mono text-text-disabled">
          <span>Encrypted via HTTPS</span>
          <span>REGION: AP-SOUTH-1</span>
          <span>SSH-ED25519 VERIFIED</span>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {contact.terminal.fields.map((field) => (
          <div key={field.name}>
            <label className="block font-mono text-label-code text-text-tertiary uppercase mb-1.5">
              {field.name} {field.required && <span className="text-accent-cyan">*</span>}
            </label>
            {field.multiline ? (
              <textarea
                rows={4}
                placeholder={field.placeholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-canvas border border-white/10 text-text-primary placeholder:text-text-disabled font-mono text-code-block focus:outline-none focus:border-accent-cyan focus:shadow-focus-ring resize-none"
              />
            ) : (
              <input
                type={field.name === 'EMAIL' ? 'email' : 'text'}
                placeholder={field.placeholder}
                value={form[field.name.toLowerCase()] || ''}
                onChange={(e) =>
                  setForm({ ...form, [field.name.toLowerCase()]: e.target.value })
                }
                required={field.required}
                className="w-full h-10 px-3 rounded-lg bg-canvas border border-white/10 text-text-primary placeholder:text-text-disabled font-mono text-code-block focus:outline-none focus:border-accent-cyan focus:shadow-focus-ring"
              />
            )}
          </div>
        ))}
        <div className="flex justify-end pt-2">
          <Button type="submit" variant="primary" size="md">
            {sent ? 'Message Queued ✓' : ' Send Message'}
            {!sent && <Send size={14} />}
          </Button>
        </div>
      </form>
    </TerminalWindow>
  )
}
