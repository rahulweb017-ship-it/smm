import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface JrcCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'portfolio' | 'beforeafter' | 'kitchenbath' | 'testimonial'
  description?: string
}

export function JrcCaseStudy({ isOpen, onClose }: JrcCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'portfolio' | 'beforeafter' | 'kitchenbath' | 'testimonial'>('all')
  const [activeLightboxItem, setActiveLightboxItem] = useState<LightboxItem | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
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

  useEffect(() => {
    if (!isOpen || !activeLightboxItem) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActiveLightboxItem((current) => {
          if (!current) return null
          const curIdx = allLightboxItems.findIndex((i) => i.src === current.src)
          if (curIdx === -1) return current
          const prevIdx = (curIdx - 1 + allLightboxItems.length) % allLightboxItems.length
          return allLightboxItems[prevIdx]
        })
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setActiveLightboxItem((current) => {
          if (!current) return null
          const curIdx = allLightboxItems.findIndex((i) => i.src === current.src)
          if (curIdx === -1) return current
          const nextIdx = (curIdx + 1) % allLightboxItems.length
          return allLightboxItems[nextIdx]
        })
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setActiveLightboxItem(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, activeLightboxItem])

  if (!isOpen) return null

  const portfolioShowcase: LightboxItem[] = [
    {
      src: '/jrc/portfolio.jpg',
      title: 'JRC Master Home Remodeling Portfolio',
      subtitle: 'Whole-Home Architecture & Craftsmanship',
      type: 'image',
      category: 'portfolio',
      description: 'Comprehensive high-end residential renovation showcasing custom woodworking, open-concept living, and premium architectural finishes.',
    },
    {
      src: '/jrc/portfolio-1.jpg',
      title: 'Gourmet Chef Kitchen Renovation',
      subtitle: 'Custom Cabinetry & Quartz Countertops',
      type: 'image',
      category: 'portfolio',
      description: 'Handcrafted hardwood cabinets, waterfall quartz kitchen island, custom tile backsplash, and smart lighting solutions.',
    },
    {
      src: '/jrc/portfolio-2.jpg',
      title: 'Luxury Spa Bathroom Sanctuary',
      subtitle: 'Master Bath Transformation',
      type: 'image',
      category: 'portfolio',
      description: 'Frameless glass walk-in rainfall shower, freestanding soaking tub, heated floor tiles, and custom double vanity.',
    },
    {
      src: '/jrc/portfolio-3.jpg',
      title: 'Finished Basement & Entertainment Lounge',
      subtitle: 'Lower-Level Conversion',
      type: 'image',
      category: 'portfolio',
      description: 'Custom home theater, wet bar installation, ambient mood lighting, and moisture-sealed vinyl plank flooring.',
    },
    {
      src: '/jrc/portfolio-4.jpg',
      title: 'Exterior & Outdoor Living Transformation',
      subtitle: 'Facade & Decking Renovation',
      type: 'image',
      category: 'portfolio',
      description: 'Modern exterior siding replacement, composite deck buildout, integrated patio lighting, and curb appeal upgrade.',
    },
  ]

  const videoReels: LightboxItem[] = [
    {
      src: '/jrc/add-final--.mp4',
      title: 'JRC Home Remodeling Master Campaign',
      subtitle: 'Official Brand Video Reel',
      type: 'video',
      category: 'beforeafter',
      description: 'High-impact commercial campaign highlighting complete home turnkeys, demolition-to-finish timelapses, and homeowner reactions.',
    },
    {
      src: '/jrc/Final After before .mp4',
      title: 'Dramatic Before & After Transformation',
      subtitle: 'Whole-Home Renovation Reel',
      type: 'video',
      category: 'beforeafter',
      description: 'Side-by-side video walkthrough revealing outdated interiors re-engineered into luxurious modern living spaces.',
    },
    {
      src: '/jrc/Kitchan Ad-1.mp4',
      title: 'Kitchen Remodeling Spotlight 01',
      subtitle: 'Gourmet Kitchen Tour',
      type: 'video',
      category: 'kitchenbath',
      description: 'Detailed showcase of soft-close cabinetry, hidden pantry storage, and premium brass fixture details.',
    },
    {
      src: '/jrc/Kitchan Ad-2.mp4',
      title: 'Kitchen Remodeling Spotlight 02',
      subtitle: 'Modern Open-Concept Cooking',
      type: 'video',
      category: 'kitchenbath',
      description: 'Pendant lighting, integrated stainless appliances, and spacious dining island showcase.',
    },
    {
      src: '/jrc/Final bath.mp4',
      title: 'Master Bath Transformation 01',
      subtitle: 'Spa Experience Video Reel',
      type: 'video',
      category: 'kitchenbath',
      description: 'Floor-to-ceiling porcelain tile installation, body jet shower system, and floating LED vanity mirror.',
    },
    {
      src: '/jrc/bath customer .mp4',
      title: 'Master Bath Transformation 02',
      subtitle: 'Custom Bath Renovation',
      type: 'video',
      category: 'kitchenbath',
      description: 'Spacious double vanity arrangement with custom quartz countertops and polished chrome hardware.',
    },
    {
      src: '/jrc/basement reel.mp4',
      title: 'Custom Basement Buildout',
      subtitle: 'Lower-Level Living Reel',
      type: 'video',
      category: 'portfolio',
      description: 'Converting subterranean storage into high-end guest suites, home gyms, and wet bar lounges.',
    },
    {
      src: '/jrc/Testimonial.mp4',
      title: 'Homeowner Review & Testimonial',
      subtitle: 'Client Experience Story',
      type: 'video',
      category: 'testimonial',
      description: 'Real client stories detailing JRC project management, clean jobsite discipline, and on-time completion.',
    },
    {
      src: '/jrc/Jrc hook .mp4',
      title: 'JRC Craftsmanship Social Hook',
      subtitle: 'High-Energy Social Short',
      type: 'video',
      category: 'beforeafter',
      description: 'Fast-paced editing highlighting tile layout precision, cabinet installation, and painting perfection.',
    },
  ]

  const allLightboxItems: LightboxItem[] = [
    ...portfolioShowcase,
    ...videoReels,
  ]

  const currentLightboxIndex = activeLightboxItem
    ? allLightboxItems.findIndex((item) => item.src === activeLightboxItem.src)
    : -1



  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#ea580c] selection:text-white"
    >
      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl p-4 md:p-8 flex flex-col justify-between items-center animate-fadeIn select-none"
          onClick={() => setActiveLightboxItem(null)}
        >
          {/* Top Header */}
          <div className="w-full max-w-6xl flex justify-between items-center text-white py-2 z-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-3 py-1 rounded-full">
                  {activeLightboxItem.category}
                </span>
                {currentLightboxIndex !== -1 && (
                  <span className="text-[11px] font-extrabold text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full">
                    {currentLightboxIndex + 1} / {allLightboxItems.length}
                  </span>
                )}
              </div>
              <h4 className="text-[18px] md:text-[24px] font-extrabold mt-1">{activeLightboxItem.title}</h4>
              <p className="text-[13px] text-white/70">{activeLightboxItem.subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition duration-300"
                title="Close (Esc)"
              >
                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L11 11M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Left Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (currentLightboxIndex !== -1) {
                const prevIdx = (currentLightboxIndex - 1 + allLightboxItems.length) % allLightboxItems.length
                setActiveLightboxItem(allLightboxItems[prevIdx])
              }
            }}
            className="fixed left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition duration-300 backdrop-blur-md border border-white/20 z-[210] group"
            title="Previous item (Left Arrow)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition duration-200">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (currentLightboxIndex !== -1) {
                const nextIdx = (currentLightboxIndex + 1) % allLightboxItems.length
                setActiveLightboxItem(allLightboxItems[nextIdx])
              }
            }}
            className="fixed right-3 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition duration-300 backdrop-blur-md border border-white/20 z-[210] group"
            title="Next item (Right Arrow)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition duration-200">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Center Media Display */}
          <div
            className="my-auto max-h-[75vh] max-w-5xl overflow-hidden rounded-[20px] shadow-2xl flex items-center justify-center relative select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {activeLightboxItem.type === 'image' ? (
              <img
                src={activeLightboxItem.src}
                alt={activeLightboxItem.title}
                className="max-h-[75vh] w-auto object-contain rounded-[20px]"
              />
            ) : (
              <video
                src={activeLightboxItem.src}
                controls
                autoPlay
                className="max-h-[75vh] w-auto rounded-[20px]"
              />
            )}
          </div>

          {activeLightboxItem.description && (
            <div className="text-center pb-4 z-10">
              <p className="text-white/80 text-[14px] md:text-[16px] max-w-2xl font-medium">
                {activeLightboxItem.description}
              </p>
              <p className="text-white/40 text-[11px] font-semibold mt-1 uppercase tracking-wider">
                ← Press Left / Right Arrow Keys to Navigate →
              </p>
            </div>
          )}
        </div>
      )}

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#faf9f5]/90 backdrop-blur-md border-b border-[#ebdcb9]/30">
        <div className="site-container py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-extrabold tracking-widest uppercase bg-[#28282e] text-white px-3 py-1 rounded-full">
              Case Study
            </span>
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Luxury Residential Remodeling &amp; Interior Design</span>
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

      {/* Main Content */}
      <main className="site-container py-12 md:py-20">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-20 items-end border-b border-[#ebdcb9]/50 pb-12">
          <div>
            <h1 className="text-[40px] md:text-[80px] font-black leading-[0.9] tracking-tight">
              JRC Home <br />
              <span className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#c2410c] bg-clip-text text-transparent">
                Remodeling.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Master home transformations, luxury kitchen &amp; bath remodels, finished basements, and cinematic before-and-after video showcases.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#ea580c] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Whole-Home Remodeling, Kitchens, Baths</span>
            </div>
            <div>
              <span className="text-[#ea580c] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">JRC Home Remodeling Group</span>
            </div>
            <div>
              <span className="text-[#ea580c] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#ea580c] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Residential Construction &amp; Design</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/jrc/hero image.png"
              alt="JRC Home Remodeling Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">Artisanal Renovation &amp; Master Finishing</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              JRC Home Remodeling elevates residential living spaces through flawless carpentry, custom cabinetry, luxurious tiling, and open-concept spatial design. From initial 3D design to turnkey delivery, JRC transforms houses into dream homes.
            </p>
          </div>
        </section>

        {/* Master Video Reel Section */}
        <section className="mt-20 md:mt-28">
          <div className="relative aspect-[21/9] rounded-[20px] md:rounded-[40px] overflow-hidden border border-[#ebdcb9]/30 bg-black">
            <video
              className="absolute left-0 top-0 w-full h-full object-cover"
              playsInline
              autoPlay
              loop
              muted
              preload="auto"
            >
              <source src="/jrc/hero video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#28282e]/80 via-[#28282e]/20 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-[#f97316] text-[12px] font-extrabold uppercase tracking-widest mb-2 block">
                Cinematic Campaign Film
              </span>
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Crafting Your Dream Spaces.
              </h2>
            </div>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ea580c]">Portfolio Directory</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore JRC Projects</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'portfolio', label: 'Remodeling Portfolio' },
              { id: 'beforeafter', label: 'Before & After Videos' },
              { id: 'kitchenbath', label: 'Kitchen & Bath Reels' },
              { id: 'testimonial', label: 'Client Reviews' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-extrabold uppercase tracking-wider transition duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#28282e] text-white shadow-md'
                    : 'bg-white border border-[#ebdcb9]/40 text-[#28282e] hover:bg-[#ebdcb9]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 1: REMODELING PORTFOLIO */}
        {(activeTab === 'all' || activeTab === 'portfolio') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ea580c]">Architecture &amp; Interiors</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Remodeling Showcase</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-end photography showcasing whole-home transformations, gourmet kitchens, spa master baths, and finished lower levels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioShowcase.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#ea580c]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#faf9f5]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="bg-white text-[#28282e] text-[12px] font-black uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        View
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea580c]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#ea580c] transition duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-muted font-medium mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: VIDEO REELS (BEFORE/AFTER & KITCHEN/BATH) */}
        {(activeTab === 'all' || activeTab === 'beforeafter' || activeTab === 'kitchenbath' || activeTab === 'testimonial') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ea580c]">Cinematic Motion</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Video &amp; Transformation Reels</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-definition before-and-after walkthroughs, kitchen/bath project tours, and real client reviews.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoReels
                .filter((v) => activeTab === 'all' || activeTab === v.category)
                .map((video, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveLightboxItem(video)
                    }}
                    className="group cursor-pointer bg-white rounded-[28px] p-4 border border-[#ebdcb9]/40 hover:border-[#ea580c]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                  >
                    <div className="relative aspect-[9/16] max-h-[480px] overflow-hidden rounded-[20px] bg-black">
                      <video
                        src={video.src}
                        playsInline
                        autoPlay
                        loop
                        muted
                        preload="auto"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-4 flex flex-col justify-between">
                        <span className="self-end bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#f97316] animate-pulse"></span>
                          HD Video Reel
                        </span>
                        <div className="text-white">
                          <span className="text-[11px] text-[#f97316] font-bold uppercase tracking-wider block">
                            {video.subtitle}
                          </span>
                          <h4 className="text-[18px] font-extrabold leading-tight mt-0.5">{video.title}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 px-1">
                      <p className="text-[13px] text-muted font-medium line-clamp-2">{video.description}</p>
                      <span className="inline-flex items-center gap-1 text-[12px] font-black uppercase text-[#ea580c] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
                        View
                        <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                          <path d="M0 6.5H11M11 6.5L5.93606 1M11 6.5L5.93606 12" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Closing Case Study Block */}
        <section className="mt-20 md:mt-32 text-center border-t border-[#ebdcb9]/50 pt-16 pb-8">
          <h2 className="text-[32px] md:text-[60px] font-black tracking-tight leading-none">
            Ready to transform your home?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build stunning custom kitchens, spa bathrooms, and whole-home renovations.
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
                Inquire &amp; Build
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
