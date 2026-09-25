import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { GridBackground } from './components/effects/GridBackground'
import { CursorGlow } from './components/effects/CursorGlow'

import React from 'react'

function App() {
  return (
    <div className="relative min-h-screen bg-canvas">
      <GridBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        
      </main>
      <Footer />
    </div>
  )
}

export default App
