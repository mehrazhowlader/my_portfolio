import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'

export default function App() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenLightbox={setActiveImage} />
        <About onOpenLightbox={setActiveImage} />
        <Skills />
        <Projects />
        <Journey />
        <Achievements onOpenLightbox={setActiveImage} />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </>
  )
}
