export function formatDate(dateStr) {
  return dateStr
}

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function downloadResume() {
  const link = document.createElement('a')
  link.href = '/assets/resume/Kishor_Updated_Resume_AUG2026.pdf'
  link.download = 'Kishor_AR_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
