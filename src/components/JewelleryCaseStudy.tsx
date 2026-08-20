import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface JewelleryCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

export function JewelleryCaseStudy({ isOpen, onClose }: JewelleryCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when open
      document.body.style.overflow = 'hidden'
      
      // Animate modal entry
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform' }
      )
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased"
    >
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#faf9f5]/90 backdrop-blur-md border-b border-[#ebdcb9]/30">
        <div className="site-container py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-extrabold tracking-widest uppercase bg-[#28282e] text-white px-3 py-1 rounded-full">
              Case Study
            </span>
            <span className="text-[14px] font-bold text-muted">The Forsted Vault</span>
          </div>
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-[14px] font-black uppercase tracking-wider text-[#28282e] hover:opacity-70 transition duration-300"
          >
            Close
            <span className="grid h-[36px] w-[36px] place-items-center rounded-full border border-line bg-white group-hover:rotate-90 duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11M11 1L1 11" stroke="#28282E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* Main Hero Study */}
      <main className="site-container py-12 md:py-20">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-20 items-end border-b border-[#ebdcb9]/50 pb-12">
          <div>
            <h1 className="text-[40px] md:text-[80px] font-black leading-[0.9] tracking-tight">
              The Forsted <br />
              <span className="bg-gradient-to-r from-[#bfa15f] via-[#d6c585] to-[#a88944] bg-clip-text text-transparent">Vault.</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Exquisite fine jewellery and custom master craftsmanship. Sculpted with gold, silver, diamonds, and organic saltwater pearls.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#a88944] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">3D CAD, Casting, Detailing</span>
            </div>
            <div>
              <span className="text-[#a88944] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Sameer Khan Studio</span>
            </div>
            <div>
              <span className="text-[#a88944] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#a88944] uppercase tracking-wider block mb-1">Materials</span>
              <span className="text-[#28282e]">18K Gold, 925 Silver, Pearls</span>
            </div>
          </div>
        </div>

        {/* Feature 1: The Design Workspace Mockup (Full width) */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/jewellery/mockup.webp"
              alt="Jewelry design workstation"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">The Workspace &amp; 3D Setup</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              Every detail is micro-curated in high-fidelity. By merging traditional goldsmithing techniques with modern 3D CAD sculpting, each ring shank, prong setting, and pave gallery is mathematically optimized for weight balance, durability, and maximum brilliance.
            </p>
          </div>
        </section>

        {/* Feature 2: Asymmetric Grid displaying Rings & Pendants */}
        <section className="mt-20 md:mt-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left Side: Silver Elegance Ring with Hover Play Video */}
            <div className="rounded-[20px] md:rounded-[30px] border border-[#ebdcb9]/40 bg-white overflow-hidden p-4 flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-[15px] md:rounded-[24px] overflow-hidden group">
                <video
                  className="w-full h-full object-cover"
                  playsInline
                  autoPlay
                  loop
                  muted
                  preload="auto"
                >
                  <source src="/jewellery/C0003_1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-6">
                <h3 className="text-[20px] md:text-[28px] font-black">Silver Elegance Ring</h3>
                <p className="text-[13px] md:text-[16px] text-muted font-medium mt-1">
                  A high-polish solid sterling silver band featuring a custom cushion-cut moissanite focal. Handcrafted with heavy gallery undercuts for refined comfort.
                </p>
              </div>
            </div>

            {/* Right Side: Faith Pendant with Video Loop */}
            <div className="rounded-[20px] md:rounded-[30px] border border-[#ebdcb9]/40 bg-white overflow-hidden p-4 flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-[15px] md:rounded-[24px] overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  playsInline
                  autoPlay
                  loop
                  muted
                  preload="auto"
                >
                  <source src="/jewellery/faith.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-6">
                <h3 className="text-[20px] md:text-[28px] font-black">Faith Pendant</h3>
                <p className="text-[13px] md:text-[16px] text-muted font-medium mt-1">
                  Elegant symbolic custom cross-pendant detailed with custom-fitted round brilliant-cut diamond accents in solid gold settings.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Feature 3: Interlocking Style Cards (Like the image reference) */}
        <section className="mt-20 md:mt-32">
          <div className="bg-[#ebdcb9]/10 rounded-[30px] p-6 md:p-12 border border-[#ebdcb9]/30">
            <h2 className="text-[30px] md:text-[48px] font-black leading-none mb-10 text-center">Exquisite Detailing</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-[20px] border border-[#ebdcb9]/30 shadow-sm">
                <img
                  src="/jewellery/Drop Ear.webp"
                  alt="Drop earrings"
                  className="w-full aspect-[1/1] object-cover rounded-[15px]"
                />
                <h4 className="text-[18px] font-extrabold mt-4">Drop Earrings</h4>
                <p className="text-[13px] text-muted mt-1">Stunning cascade style gemstone drop earrings reflecting pure luxury.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 rounded-[20px] border border-[#ebdcb9]/30 shadow-sm">
                <img
                  src="/jewellery/jw-st-5-12.webp"
                  alt="Royal statement set"
                  className="w-full aspect-[1/1] object-cover rounded-[15px]"
                />
                <h4 className="text-[18px] font-extrabold mt-4">Royal Statement Set</h4>
                <p className="text-[13px] text-muted mt-1">Premium luxury necklace with deep, rich emerald accents in yellow gold.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 rounded-[20px] border border-[#ebdcb9]/30 shadow-sm">
                <img
                  src="/jewellery/jw-st-07-12.webp"
                  alt="Gold hoops"
                  className="w-full aspect-[1/1] object-cover rounded-[15px]"
                />
                <h4 className="text-[18px] font-extrabold mt-4">Graceful Gold Hoops</h4>
                <p className="text-[13px] text-muted mt-1">Timeless 18K solid yellow gold classic chunky hoop earrings.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Campaign & Editorial Showcase Section */}
        <section className="mt-20 md:mt-32">
          <div className="border-t border-[#ebdcb9]/40 pt-16">
            <div className="max-w-[800px] mb-12">
              <span className="text-[#a88944] text-[12px] md:text-[14px] font-black uppercase tracking-wider block mb-2">Editorial Campaigns</span>
              <h2 className="text-[32px] md:text-[50px] font-black leading-none text-[#28282e]">The Celestial Moissanite Campaign</h2>
              <p className="text-[14px] md:text-[18px] text-muted font-medium mt-4 leading-relaxed">
                A high-fidelity visual and typographical study. Featuring our signature D-colored moissanite and solid 925 sterling silver collections, presented in pristine editorial poster campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Moissanite Necklace - Left Card */}
              <div className="bg-white rounded-[24px] md:rounded-[36px] overflow-hidden border border-[#ebdcb9]/30 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="overflow-hidden rounded-[18px] md:rounded-[28px]">
                  <img
                    src="/jewellery/moissanite-necklace.webp"
                    alt="925 Sterling Silver Moissanite Stones Necklace Poster"
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.01]"
                  />
                </div>
                <div className="mt-6 px-2">
                  <span className="text-[12px] font-bold text-[#a88944] uppercase tracking-wider">Campaign Vol. I</span>
                  <h4 className="text-[20px] font-black text-[#28282e] mt-1">Silver Moissanite Stones Necklace</h4>
                  <p className="text-[13px] md:text-[15px] text-muted font-medium mt-2 leading-relaxed">
                    Showcasing five hand-selected, premium D-colored Moissanite stones set along an elegant yellow gold-plated sterling silver chain.
                  </p>
                </div>
              </div>

              {/* Moissanite Ring - Right Card */}
              <div className="bg-white rounded-[24px] md:rounded-[36px] overflow-hidden border border-[#ebdcb9]/30 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="overflow-hidden rounded-[18px] md:rounded-[28px]">
                  <img
                    src="/jewellery/moissanite-ring.webp"
                    alt="Silver White Moissanite Ring Poster"
                    className="w-full h-auto block transition-transform duration-500 hover:scale-[1.01]"
                  />
                </div>
                <div className="mt-6 px-2">
                  <span className="text-[12px] font-bold text-[#a88944] uppercase tracking-wider">Campaign Vol. II</span>
                  <h4 className="text-[20px] font-black text-[#28282e] mt-1">Celestial Glow Moissanite Ring</h4>
                  <p className="text-[13px] md:text-[15px] text-muted font-medium mt-2 leading-relaxed">
                    Designed to adorn with a brilliant stellar aura, celebrating timeless round brilliant-cut center stones in multi-claw settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 4: 925 Collection and Pearl stringing (Side by side asymmetric) */}
        <section className="mt-20 md:mt-32">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-[32px] md:text-[50px] font-black leading-none">The 925 Silver &amp; Pearl Curation</h2>
              <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
                Our silver selection maintains an anti-tarnish protective plating, ensuring lasting micro-luster. Coupled with carefully selected hand-sorted organic pearls, our bracelets represent raw beauty crafted into daily fine wear.
              </p>
              
              <div className="rounded-[20px] overflow-hidden border border-[#ebdcb9]/40 aspect-[16/10]">
                <video
                  className="w-full h-full object-cover"
                  playsInline
                  autoPlay
                  loop
                  muted
                  preload="auto"
                >
                  <source src="/jewellery/C0078 (1)_1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[20px] overflow-hidden border border-[#ebdcb9]/40">
                <img
                  src="/jewellery/925-silver-28-11.webp"
                  alt="925 silver detailing"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden border border-[#ebdcb9]/40">
                <img
                  src="/jewellery/jw-7-12.webp"
                  alt="Saltwater pearl bracelet"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature 5: Epic Video Loop Banner */}
        <section className="mt-20 md:mt-32">
          <div className="relative aspect-[21/9] rounded-[20px] md:rounded-[40px] overflow-hidden border border-[#ebdcb9]/30">
            <video
              className="absolute left-0 top-0 w-full h-full object-cover"
              playsInline
              autoPlay
              loop
              muted
              preload="auto"
            >
              <source src="/jewellery/Faith_1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#28282e]/30 flex flex-col justify-end p-6 md:p-12">
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Sculpted Fine Luxury.
              </h2>
            </div>
          </div>
        </section>

        {/* Closing Case Study Block */}
        <section className="mt-20 md:mt-32 text-center border-t border-[#ebdcb9]/50 pt-16 pb-8">
          <h2 className="text-[32px] md:text-[60px] font-black tracking-tight leading-none">
            Ready to design yours?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Contact us today to start your bespoke jewelry commission journey.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                onClose()
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="hireOurTeam group inline-flex items-center gap-2"
            >
              <span className="hireOurTeamTitle rounded-full border border-line bg-white px-6 py-3 text-[18px] font-bold text-[#28282e]">
                Inquire &amp; Order
              </span>
              <span className="hireOurTeamArrow grid h-[43px] w-[43px] place-items-center rounded-full bg-dark">
                <svg className="h-[11px] w-[11px]" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.5H11M11 6.5L5.93606 1M11 6.5L5.93606 12" stroke="white" strokeWidth="2" />
                </svg>
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
