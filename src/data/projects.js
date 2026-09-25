export const projects = {
  sectionLabel: '04 / SHIPPED CODE & CASE STUDIES',
  title: 'Featured Production Works',
  subtitle: 'Showing 5 Verified Repositories',
  items: [
    {
      id: 'sap-crm',
      featured: true,
      badge: 'FEATURED COMMERCIAL SYSTEM',
      title: 'SAP CRM',
      subtitle: 'Sampath Academy Personalized CRM & Multi-Tenant Portal',
      date: 'Jul 2026',
      description:
        'Engineered the full frontend for a tailored CRM and educational management engine. Created customized student-tracking pipelines, automated course analytics, and a cross-platform mobile application available directly on the Google Play Store.',
      role: 'Lead Frontend Dev',
      platforms: 'Web & Android App',
      status: 'Live on Play Store',
      tech: ['React Native', 'Tailwind CSS', 'Node.js'],
      links: [
        { label: 'app.sampathacademy.in', href: 'https://app.sampathacademy.in/' },
        { label: 'Play Store App', href: '#' },
      ],
      architecture: {
        problem: 'Inconsistent administrative tools and fragmented student course analytics leading to high drop-off and manual operational friction.',
        solution: 'Single-page React web dashboard coupled with a lightweight React Native client for mobile learners and staff, backed by modular Node.js services.',
        techStack: 'React 18, React Native, Tailwind CSS, Node.js REST API endpoints, and real-time state management.',
        outcomes: 'Over 500+ active user sessions, zero latency spikes, and successful production publishing on Google Play Store.',
      },
    },
    {
      id: 'chithu',
      badge: 'COMMERCE',
      title: 'Chithu Vibes',
      subtitle: 'Custom Calligraphy & Artisanal Products',
      date: 'May 2026',
      description:
        'Designed and built an immersive e-commerce catalog showcasing handcrafted typography and artisanal designs, featuring customized checkout workflows and reactive galleries.',
      tech: ['ReactJS', 'Tailwind CSS', 'Node.js'],
      links: [{ label: 'chithuvibes.in', href: 'https://www.chithuvibes.in/' }],
    },
    {
      id: 'iqbridge',
      badge: 'EDTECH',
      title: 'IQ Bridge',
      subtitle: 'UAE-Based Global E-Learning Platform',
      date: 'Mar 2025',
      description:
        'Architected the responsive web platform for a UAE educational institution. Structured course catalogs, tutor schedules, and dynamic localized learning inquiry components.',
      tech: ['ReactJS', 'Tailwind', 'Node.js'],
      links: [{ label: 'iqbridge.org', href: 'https://www.iqbridge.org/' }],
    },
    {
      id: 'imposters',
      badge: 'ML SECURITY',
      title: 'Exposing Digital Imposters',
      subtitle: 'Fake Social Account Detection Engine',
      date: 'Dec 2024',
      description:
        'Trained and tuned Random Forest and SVM classifiers to detect fraudulent online accounts using 18+ behavioral and profile signals with high precision and low false positives.',
      tech: ['Python', 'Random Forest', 'SVM'],
      metrics: [
        { label: 'ACCURACY', value: '~98%' },
        { label: 'STACK', value: 'Kaggle / Colab' },
      ],
    },
    {
      id: 'spam',
      badge: 'NLP & WEB',
      title: 'SMS Spam Detection',
      subtitle: 'Naive Bayes Classifier + Flask Web API',
      date: 'Jul 2024',
      description:
        'Constructed an end-to-end spam scoring system with text vectorization, TF-IDF analysis, and a lightweight Flask application for instantaneous real-time classification.',
      tech: ['Python', 'Naive Bayes', 'Flask'],
      metrics: [
        { label: 'INFERENCE', value: '<15ms' },
        { label: 'TYPE', value: 'NLP Pipeline' },
      ],
    },
  ],
}
