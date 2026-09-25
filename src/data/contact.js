export const contact = {
  sectionLabel: '07 / TRANSMIT MESSAGE',
  title: "Let's Build Something.",
  description:
    'Currently accepting engineering opportunities, frontend contracts, full-stack roles, and research collaborations in AI/Quantum computing.',
  details: [
    { label: 'EMAIL DIRECT', value: 'kishortdk7@gmail.com', href: 'mailto:kishortdk7@gmail.com' },
    { label: 'TELEPHONE', value: '+91 9884923998', href: 'tel:+919884923998' },
    { label: 'LOCATION', value: 'Chennai, Tamil Nadu, India' },
  ],
  socials: [
    { label: 'linkedin.com/in/arkishor', href: 'https://linkedin.com/in/arkishor' },
    { label: 'github.com/kishor-tkd', href: 'https://github.com/kishor-tkd' },
    { label: 'instagram', href: 'https://instagram.com/kishor__tkd' },
  ],
  terminal: {
    title: 'dispatch_payload.json',
    fields: [
      { name: 'NAME', placeholder: 'e.g. Linus Torvalds', required: true },
      { name: 'EMAIL', placeholder: 'name@company.com', required: true },
      { name: 'SUBJECT', placeholder: 'Project Inquiry / Job Opportunity / Research' },
      { name: 'MESSAGE', placeholder: 'Describe your project architecture, requirements, timeline, or position...', multiline: true },
    ],
  },
}
