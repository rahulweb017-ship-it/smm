import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface RethinkCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'ui' | 'clarity' | 'ad' | 'smm' | 'motion'
  description?: string
}

export function RethinkCaseStudy({ isOpen, onClose }: RethinkCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'ui' | 'clarity' | 'ad' | 'smm' | 'motion'>('all')
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

  const uiSlides: LightboxItem[] = [
    {
      src: '/rethink/slide-1.jpg',
      title: 'Digital Product Architecture',
      subtitle: 'UI/UX Design Framework',
      type: 'image',
      category: 'ui',
      description: 'Comprehensive design system layout defining component hierarchies, layout grids, and interactive state rules.',
    },
    {
      src: '/rethink/slide-2.jpg',
      title: 'User Flow & Interface Journey',
      subtitle: 'UX Mapping & Wireframes',
      type: 'image',
      category: 'ui',
      description: 'End-to-end user navigation flow engineered to reduce friction and maximize conversion throughput.',
    },
    {
      src: '/rethink/slide-3.jpg',
      title: 'Sleek Dashboard Components',
      subtitle: 'Product Interface Design',
      type: 'image',
      category: 'ui',
      description: 'High-density metric cards, data visualization widgets, and dark/light adaptive color tokens.',
    },
    {
      src: '/rethink/slide-4.jpg',
      title: 'Mobile First Responsive System',
      subtitle: 'Cross-Platform UI Suite',
      type: 'image',
      category: 'ui',
      description: 'Fluid mobile application layouts designed for seamless touch interactions and gesture controls.',
    },
    {
      src: '/rethink/slide-11.jpg',
      title: 'Design System Token Library',
      subtitle: 'Design System & Typography',
      type: 'image',
      category: 'ui',
      description: 'Unified font pairings, spatial spacing scale, and accessible contrast ratios for enterprise apps.',
    },
    {
      src: '/rethink/S-Slide-1.jpg',
      title: 'Interactive Prototype Showcase 01',
      subtitle: 'Product Experience Deck',
      type: 'image',
      category: 'ui',
      description: 'Micro-interaction animations, button states, and modal overlay behavior specs.',
    },
    {
      src: '/rethink/S-Slide-2.jpg',
      title: 'Interactive Prototype Showcase 02',
      subtitle: 'Product Experience Deck',
      type: 'image',
      category: 'ui',
      description: 'Dynamic filtering components, search experience design, and data table states.',
    },
    {
      src: '/rethink/sSlide-1.jpg',
      title: 'Studio Overview & Vision',
      subtitle: 'Agency Presentation Deck',
      type: 'image',
      category: 'ui',
      description: 'Rethink Studio strategic vision and product design methodology overview.',
    },
  ]

  const claritySuite: LightboxItem[] = [
    {
      src: '/rethink/Clarity-1.jpg',
      title: 'Visual Clarity Framework 01',
      subtitle: 'Information Hierarchy',
      type: 'image',
      category: 'clarity',
      description: 'De-cluttering complex data flows to deliver effortless readability and intuitive user focus.',
    },
    {
      src: '/rethink/Clarity-2.jpg',
      title: 'Visual Clarity Framework 02',
      subtitle: 'Micro-Typography & Layout',
      type: 'image',
      category: 'clarity',
      description: 'Editorial spacing, focal point alignment, and clean visual grouping for web dashboards.',
    },
    {
      src: '/rethink/Clarity-3.jpg',
      title: 'Visual Clarity Framework 03',
      subtitle: 'Accessibility & Color Tokens',
      type: 'image',
      category: 'clarity',
      description: 'High-contrast color systems engineered for WCAG AA compliance and visual harmony.',
    },
  ]

  const adCampaigns: LightboxItem[] = [
    {
      src: '/rethink/ADD.jpg',
      title: 'Rethink Studio Brand Campaign',
      subtitle: 'Global Ad Launch Graphic',
      type: 'image',
      category: 'ad',
      description: 'Bold promotional ad campaign communicating high-end digital product design services.',
    },
    {
      src: '/rethink/ADD-1.jpg',
      title: 'UX/UI Excellence Showcase',
      subtitle: 'Digital & Print Ad',
      type: 'image',
      category: 'ad',
      description: 'High-impact advertising feature spotlighting creative agency capabilities and case study results.',
    },
    {
      src: '/rethink/ADD-2.jpg',
      title: 'Product Transformation Series',
      subtitle: 'Social Ad Campaign',
      type: 'image',
      category: 'ad',
      description: 'Modern editorial graphic promoting startup product redesigns and conversion optimization.',
    },
    {
      src: '/rethink/ADD-3.jpg',
      title: 'Design-Driven Growth Promo',
      subtitle: 'Agency Marketing Graphic',
      type: 'image',
      category: 'ad',
      description: 'Targeted ad campaign focused on building world-class user experiences for SaaS platforms.',
    },
  ]

  const smmCampaigns: LightboxItem[] = [
    {
      src: '/rethink/SMM-04-10.jpg',
      title: 'Rethink Social Series 01',
      subtitle: 'SMM Campaign Graphic',
      type: 'image',
      category: 'smm',
      description: 'Curated social media content spotlighting UI design trends, color theory, and digital craftsmanship.',
    },
    {
      src: '/rethink/SMM-04-10-1.jpg',
      title: 'Rethink Social Series 02',
      subtitle: 'SMM Campaign Graphic',
      type: 'image',
      category: 'smm',
      description: 'High-engagement social story layout featuring client testimonials and design process insights.',
    },
    {
      src: '/rethink/SMM-04-10-2.jpg',
      title: 'Rethink Social Series 03',
      subtitle: 'SMM Campaign Graphic',
      type: 'image',
      category: 'smm',
      description: 'Creative design tips post focusing on responsive layout strategies and typography rules.',
    },
    {
      src: '/rethink/SMM-1-W3.jpg',
      title: 'Rethink Weekly Spotlight',
      subtitle: 'SMM Editorial Post',
      type: 'image',
      category: 'smm',
      description: 'Weekly design breakdown highlighting before-and-after UI transformations.',
    },
    {
      src: '/rethink/SMM-27-09.jpg',
      title: 'Special Event & Workshop Post',
      subtitle: 'SMM Campaign Graphic',
      type: 'image',
      category: 'smm',
      description: 'Promotional social post announcing UX strategy masterclasses and design sprint workshops.',
    },
    {
      src: '/rethink/SMM-W4-P3.jpg',
      title: 'Design System Inspiration',
      subtitle: 'SMM Campaign Graphic',
      type: 'image',
      category: 'smm',
      description: 'Inspirational design post exploring color gradients, frosted glass UI, and subtle shadows.',
    },
  ]

  const motionVideos: LightboxItem[] = [
    {
      src: '/rethink/hero-video.mp4',
      title: 'Rethink UX/UI Studio Brand Film',
      subtitle: 'Cinematic Reel',
      type: 'video',
      category: 'motion',
      description: 'Dynamic product motion video showcasing interface interactions, smooth animations, and studio workflow.',
    },
  ]

  const allLightboxItems: LightboxItem[] = [
    ...uiSlides,
    ...claritySuite,
    ...adCampaigns,
    ...smmCampaigns,
    ...motionVideos,
  ]

  const currentLightboxIndex = activeLightboxItem
    ? allLightboxItems.findIndex((item) => item.src === activeLightboxItem.src)
    : -1



  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#8b5cf6] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Creative Digital Product Agency &amp; UX/UI Design</span>
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
              Rethink <br />
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">
                UX/UI Studio.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              A complete digital product design studio showcase, user experience architecture, ad campaigns, and brand identity systems built for high-growth tech companies.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#8b5cf6] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">UX/UI Design, Product Strategy, Social Campaigns</span>
            </div>
            <div>
              <span className="text-[#8b5cf6] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Rethink Creative Studio</span>
            </div>
            <div>
              <span className="text-[#8b5cf6] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#8b5cf6] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Digital Product &amp; Agency</span>
            </div>
          </div>
        </div>

        {/* Hero Banner Showcase */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/rethink/mockup main.jpg"
              alt="Rethink Studio Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">Human-Centered Design Architecture</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              Rethink UX/UI Studio combines deep user research with cutting-edge visual design systems. From complex web dashboards to mobile ecosystems and advertising campaigns, Rethink elevates brand prestige and digital engagement.
            </p>
          </div>
        </section>

        {/* Master Video Motion Section */}
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
              <source src="/rethink/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#28282e]/80 via-[#28282e]/20 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-[#ec4899] text-[12px] font-extrabold uppercase tracking-widest mb-2 block">
                Cinematic Motion Film
              </span>
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Designing Digital Experiences.
              </h2>
            </div>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">Portfolio Directory</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore Rethink Artifacts</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'ui', label: 'UI/UX Slides' },
              { id: 'clarity', label: 'Product Clarity' },
              { id: 'ad', label: 'Ad Campaigns' },
              { id: 'smm', label: 'Social Media (SMM)' },
              { id: 'motion', label: 'Motion Reels' },
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

        {/* SECTION 1: UI/UX SLIDES */}
        {(activeTab === 'all' || activeTab === 'ui') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">Product &amp; Systems</span>
                <h3 className="text-[24px] md:text-[36px] font-black">UI/UX Design &amp; Architecture Slides</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                End-to-end product design decks, interface component libraries, user journey maps, and responsive layout systems. Click any slide to inspect in full resolution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {uiSlides.map((slide, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(slide)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#8b5cf6]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#faf9f5]">
                    <img
                      src={slide.src}
                      alt={slide.title}
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">
                      {slide.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#8b5cf6] transition duration-300">
                      {slide.title}
                    </h4>
                    <p className="text-[13px] text-muted font-medium mt-2 line-clamp-2">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: PRODUCT CLARITY */}
        {(activeTab === 'all' || activeTab === 'clarity') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">Design Thinking</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Visual Clarity &amp; Layout Framework</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                De-cluttering complex user interfaces through intelligent typography, visual grouping, and accessible contrast principles.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {claritySuite.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#8b5cf6]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#8b5cf6] transition duration-300">
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

        {/* SECTION 3: AD CAMPAIGNS */}
        {(activeTab === 'all' || activeTab === 'ad') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">Marketing &amp; Growth</span>
                <h3 className="text-[24px] md:text-[36px] font-black">High-Impact Advertising Campaigns</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Commercial advertising graphics, digital launch promos, and campaign posters engineered for client growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {adCampaigns.map((ad, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(ad)
                  }}
                  className="group cursor-pointer bg-white rounded-[24px] p-4 border border-[#ebdcb9]/40 hover:border-[#8b5cf6]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-[#faf9f5]">
                    <img
                      src={ad.src}
                      alt={ad.title}
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
                  <div className="mt-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">
                      {ad.subtitle}
                    </span>
                    <h4 className="text-[18px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#8b5cf6] transition duration-300">
                      {ad.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: SOCIAL MEDIA MARKETING (SMM) */}
        {(activeTab === 'all' || activeTab === 'smm') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">Social Content Architecture</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Social Media Marketing (SMM) Suite</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Social campaign posts, carousel slides, and brand storytelling graphics built to engage tech and design audiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {smmCampaigns.map((post, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(post)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#8b5cf6]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#faf9f5]">
                    <img
                      src={post.src}
                      alt={post.title}
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">
                      {post.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#8b5cf6] transition duration-300">
                      {post.title}
                    </h4>
                    <p className="text-[13px] text-muted font-medium mt-2 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 5: MOTION REELS */}
        {(activeTab === 'all' || activeTab === 'motion') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#8b5cf6]">Video Direction</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Motion &amp; Video Reel Showcase</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-definition motion reels capturing interactive UI design flows, prototype animations, and studio creative process.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
              {motionVideos.map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(video)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#8b5cf6]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-black">
                    <video
                      src={video.src}
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-6 flex flex-col justify-between">
                      <span className="self-end bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#8b5cf6] animate-pulse"></span>
                        HD Master Film
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#ec4899] font-bold uppercase tracking-wider block">
                          {video.subtitle}
                        </span>
                        <h4 className="text-[22px] font-extrabold leading-tight mt-0.5">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[14px] text-muted font-medium">{video.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#8b5cf6] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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
            Ready to rethink your digital product?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build user-centered digital products, design systems, and high-converting marketing campaigns.
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
                Inquire &amp; Design
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
