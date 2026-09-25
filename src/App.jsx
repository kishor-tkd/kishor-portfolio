import Navbar from "./components/layout/Navbar";
import PageContainer from "./components/layout/PageContainer";
import Hero from "./sections/Hero/Hero";

import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-[#0F131C] text-ink-primary">
      <Navbar />

      <main>
        <PageContainer>
          <Hero />
        </PageContainer>
      </main>
    </div>
  )
}

export default App
