import { TestimonialsSection } from './components/TestimonialsSection'
import { CtaSection } from './components/CtaSection'
import { FooterSection } from './components/FooterSection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { WorkSection } from './components/WorkSection'
import { ServicesStackSection } from './components/ServicesStackSection'
import { useLenis } from './hooks/useLenis'
import { useVoilaMotion } from './hooks/useVoilaMotion'

function App() {
  useLenis()
  useVoilaMotion()

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main id="main-content" className="pb-2">
        <HeroSection />
        <WorkSection />
        <ServicesStackSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
