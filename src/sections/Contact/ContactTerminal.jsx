import { useState } from 'react'
import { TerminalWindow } from '../../components/terminal/TerminalWindow'
import { Button } from '../../components/ui/Button'
import { contact } from '../../data/contact'
import { Send, Loader2 } from 'lucide-react'

// Replace with your real Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = '0fc7a0fd-41f1-42a6-a61f-519f76727e14'

export function ContactTerminal() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const formData = new FormData(event.target)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('from_name', 'Kishor AR Portfolio')
    formData.append('subject', formData.get('subject') || 'Portfolio Contact Form')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        event.target.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Failed to send. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please try again later.')
    }
  }

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

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
      <form onSubmit={onSubmit} className="space-y-4">
        {/* NAME */}
        <div>
          <label className="block font-mono text-label-code text-text-tertiary uppercase mb-1.5">
            NAME <span className="text-accent-cyan">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Linus Torvalds"
            required
            disabled={isLoading}
            className="w-full h-10 px-3 rounded-lg bg-canvas border border-white/10 text-text-primary placeholder:text-text-disabled font-mono text-code-block focus:outline-none focus:border-accent-cyan focus:shadow-focus-ring disabled:opacity-60"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block font-mono text-label-code text-text-tertiary uppercase mb-1.5">
            EMAIL <span className="text-accent-cyan">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            disabled={isLoading}
            className="w-full h-10 px-3 rounded-lg bg-canvas border border-white/10 text-text-primary placeholder:text-text-disabled font-mono text-code-block focus:outline-none focus:border-accent-cyan focus:shadow-focus-ring disabled:opacity-60"
          />
        </div>

        {/* SUBJECT */}
        <div>
          <label className="block font-mono text-label-code text-text-tertiary uppercase mb-1.5">
            SUBJECT
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Project Inquiry / Job Opportunity / Research"
            disabled={isLoading}
            className="w-full h-10 px-3 rounded-lg bg-canvas border border-white/10 text-text-primary placeholder:text-text-disabled font-mono text-code-block focus:outline-none focus:border-accent-cyan focus:shadow-focus-ring disabled:opacity-60"
          />
        </div>

        {/* MESSAGE BODY */}
        <div>
          <label className="block font-mono text-label-code text-text-tertiary uppercase mb-1.5">
            MESSAGE BODY <span className="text-accent-cyan">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Describe your project architecture, requirements, timeline, or position..."
            required
            disabled={isLoading}
            className="w-full px-3 py-2 rounded-lg bg-canvas border border-white/10 text-text-primary placeholder:text-text-disabled font-mono text-code-block focus:outline-none focus:border-accent-cyan focus:shadow-focus-ring resize-none disabled:opacity-60"
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-400 font-mono">{errorMsg}</p>
        )}

        <div className="flex justify-end pt-2">
          <Button type="submit" variant="primary" size="md" disabled={isLoading || isSuccess}>
            {isLoading && (
              <>
                <Loader2 size={14} className="animate-spin" />
                Sending...
              </>
            )}
            {isSuccess && 'Message Sent ✓'}
            {status === 'idle' && (
              <>
                Send Message
                <Send size={14} />
              </>
            )}
            {status === 'error' && (
              <>
                Try Again
                <Send size={14} />
              </>
            )}
          </Button>
        </div>
      </form>
    </TerminalWindow>
  )
}