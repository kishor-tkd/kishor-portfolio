import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { GridBackground } from './components/effects/GridBackground'
import { CursorGlow } from './components/effects/CursorGlow'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'

import React from 'react'

function App() {
  return (
    <div className="relative min-h-screen bg-canvas">
      <GridBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
