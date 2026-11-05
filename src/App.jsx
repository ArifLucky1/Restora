import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Stats from './sections/Stats'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
    </>
  )
}

export default App