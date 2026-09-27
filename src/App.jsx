import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { GridBackground } from './components/effects/GridBackground'
import { CursorGlow } from './components/effects/CursorGlow'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Skills } from './sections/Skills/Skills'
import { Experience } from './sections/Experience/Experience'
import { Projects } from './sections/Projects/Projects'
import { Education } from './sections/Education/Education'
import { Contact } from './sections/Contact/Contact'


export default function App() {
  return (
    <div className="relative min-h-screen bg-canvas">
      <GridBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


