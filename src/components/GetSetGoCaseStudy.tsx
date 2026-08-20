import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

interface GetSetGoCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'it' | 'smm' | 'creative'
  description: string
}

const itSolutions: LightboxItem[] = [
  {
    src: '/getsetgo/Designing Services.webp',
    title: 'Custom UI/UX & Design Services',
    subtitle: 'Enterprise Design System',
    type: 'image',
    category: 'it',
    description: 'Comprehensive UI/UX design architecture, custom web interfaces, and enterprise brand design frameworks.',
  },
  {
    src: '/getsetgo/mobile app.webp',
    title: 'Mobile App Development Solutions',
    subtitle: 'iOS & Android Engineering',
    type: 'image',
    category: 'it',
    description: 'Scalable cross-platform mobile application architecture built for high performance and seamless user experiences.',
  },
  {
    src: '/getsetgo/SEO Servicces.webp',
    title: 'SEO & Organic Growth Strategy',
    subtitle: 'Search Engine Optimization',
    type: 'image',
    category: 'it',
    description: 'Data-driven technical SEO audits, keyword positioning, content architecture, and organic traffic growth.',
  },
  {
    src: '/getsetgo/services.webp',
    title: '360° IT & Digital Solutions Suite',
    subtitle: 'Full-Service Technology Portfolio',
    type: 'image',
    category: 'it',
    description: 'End-to-end digital transformation consulting, cloud integrations, and custom enterprise software development.',
  },
  {
    src: '/getsetgo/website banner.webp',
    title: 'High-Converting Web Banners',
    subtitle: 'Digital Advertising Assets',
    type: 'image',
    category: 'it',
    description: 'Custom hero website banners and landing page visual assets engineered for max CTR and brand engagement.',
  },
]

const smmCampaigns: LightboxItem[] = [
  {
    src: '/getsetgo/hero-smm-1.webp',
    title: 'Social Media Marketing Master Suite',
    subtitle: 'Strategic Campaign Launch',
    type: 'image',
    category: 'smm',
    description: 'Targeted social media marketing campaign creative designed to boost lead generation and brand recall.',
  },
  {
    src: '/getsetgo/hero-smm-2.webp',
    title: 'Digital Performance Ad Post',
    subtitle: 'Paid Media Marketing',
    type: 'image',
    category: 'smm',
    description: 'High-impact ad creatives optimized for Instagram, LinkedIn, and Facebook sponsored growth campaigns.',
  },
  {
    src: '/getsetgo/hero-smm-3.webp',
    title: 'Tech Innovation Reel Graphic',
    subtitle: 'Brand Storytelling Post',
    type: 'image',
    category: 'smm',
    description: 'Engaging visual graphics highlighting cutting-edge IT services and digital agency capabilities.',
  },
  {
    src: '/getsetgo/SMM.webp',
    title: 'SMM Brand Growth Strategy',
    subtitle: 'Social Content Architecture',
    type: 'image',
    category: 'smm',
    description: 'Structured social media content calendar assets, promotional carousels, and audience interaction posts.',
  },
  {
    src: '/getsetgo/smm-10-06.webp',
    title: 'Digital Marketing Campaign Post',
    subtitle: 'Audience Engagement Graphic',
    type: 'image',
    category: 'smm',
    description: 'Creative promotional graphics engineered for viral reach, client conversion, and social engagement.',
  },
  {
    src: '/getsetgo/smm-21-06.webp',
    title: 'Enterprise Tech Promotion',
    subtitle: 'B2B Marketing Campaign',
    type: 'image',
    category: 'smm',
    description: 'Professional B2B promotional campaign posts showcasing IT software solutions and enterprise services.',
  },
]

const creativeShowcase: LightboxItem[] = [
  {
    src: '/getsetgo/hero-img-1.webp',
    title: 'Creative Agency Brand Identity',
    subtitle: 'Visual Brand Guidelines',
    type: 'image',
    category: 'creative',
    description: 'Modern, vibrant visual identity, custom color palettes, and corporate branding collateral.',
  },
  {
    src: '/getsetgo/hero-img-2.webp',
    title: 'Digital Launch Promo Graphic',
    subtitle: 'Product Campaign Art',
    type: 'image',
    category: 'creative',
    description: 'Sleek promotional launch graphics engineered for tech startups and digital transformation agencies.',
  },
  {
    src: '/getsetgo/hero-img-4.webp',
    title: 'Tech Solutions Presentation Art',
    subtitle: 'Marketing Display Banner',
    type: 'image',
    category: 'creative',
    description: 'Premium marketing banner and presentation slide art crafted for enterprise IT solution pitches.',
  },
  {
    src: '/getsetgo/Smm-05-06.webp',
    title: 'Audience Retention Creative',
    subtitle: 'Social Campaign Art',
    type: 'image',
    category: 'creative',
    description: 'Creative promotional artwork highlighting IT consulting benefits and software product features.',
  },
  {
    src: '/getsetgo/smm-28-05-1.webp',
    title: 'Performance Marketing Poster',
    subtitle: 'Digital Agency Graphic',
    type: 'image',
    category: 'creative',
    description: 'High-conversion marketing poster highlighting full-funnel digital strategy and ROI growth.',
  },
]

const allLightboxItems: LightboxItem[] = [
  ...itSolutions,
  ...smmCampaigns,
  ...creativeShowcase,
]

export function GetSetGoCaseStudy({ isOpen, onClose }: GetSetGoCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'it' | 'smm' | 'creative'>('all')
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

  const currentLightboxIndex = activeLightboxItem
    ? allLightboxItems.findIndex((item) => item.src === activeLightboxItem.src)
    : -1

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#3b82f6] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">IT Solutions &amp; Digital Marketing Agency</span>
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
              Get Set Go Digital <br />
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
                IT Solutions Marketing.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Full-service digital transformation, custom mobile app &amp; UI/UX design, technical SEO, and high-performance social media marketing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#3b82f6] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">UI/UX, Mobile Apps, SEO, SMM</span>
            </div>
            <div>
              <span className="text-[#3b82f6] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Get Set Go Digital</span>
            </div>
            <div>
              <span className="text-[#3b82f6] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#3b82f6] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">IT Solutions &amp; Marketing</span>
            </div>
          </div>
        </div>

        {/* Hero Master Video Showcase */}
        <section className="mt-16 md:mt-24">
          <div className="relative aspect-[16/9] max-h-[650px] rounded-[20px] md:rounded-[40px] overflow-hidden border border-[#ebdcb9]/30 shadow-xl bg-black">
            <video
              className="w-full h-full object-cover"
              src="/getsetgo/hero video .mp4"
              poster="/getsetgo/hero image .webp"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3b82f6] animate-pulse"></span>
                Official Hero Reel
              </span>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#ebdcb9]/50 pb-8">
          <div>
            <h2 className="text-[28px] md:text-[42px] font-black tracking-tight">IT Solutions &amp; Marketing Portfolio</h2>
            <p className="text-[14px] text-muted font-medium mt-1">Explore software design decks, mobile app interfaces, technical SEO, and social campaign creative.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'it', label: 'IT & App Solutions' },
              { id: 'smm', label: 'Social Media Marketing' },
              { id: 'creative', label: 'Creative Graphics' },
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

        {/* SECTION 1: IT & APP SOLUTIONS */}
        {(activeTab === 'all' || activeTab === 'it') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#3b82f6]">Technology &amp; Systems</span>
                <h3 className="text-[24px] md:text-[36px] font-black">IT Services &amp; App Engineering</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Custom UI/UX design systems, native mobile applications, technical SEO strategy, and full-stack software architecture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#3b82f6]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3b82f6]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#3b82f6] transition duration-300">
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

        {/* SECTION 2: SOCIAL MEDIA MARKETING */}
        {(activeTab === 'all' || activeTab === 'smm') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#3b82f6]">Growth &amp; Engagement</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Social Media Marketing Suite</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Data-driven social media ad campaigns, brand storytelling carousels, and high-conversion marketing graphics.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {smmCampaigns.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#3b82f6]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#faf9f5]">
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3b82f6]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#3b82f6] transition duration-300">
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

        {/* SECTION 3: CREATIVE GRAPHICS */}
        {(activeTab === 'all' || activeTab === 'creative') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#3b82f6]">Branding &amp; Creative</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Creative Brand Graphics</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Brand identity systems, marketing posters, landing page art, and promotional event banners.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {creativeShowcase.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#3b82f6]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3b82f6]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#3b82f6] transition duration-300">
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

        {/* Closing Case Study Block */}
        <section className="mt-20 md:mt-32 text-center border-t border-[#ebdcb9]/50 pt-16 pb-8">
          <h2 className="text-[32px] md:text-[60px] font-black tracking-tight leading-none">
            Ready to transform your IT &amp; digital presence?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build cutting-edge software solutions, custom web design, and high-impact digital marketing campaigns.
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
                Inquire &amp; Partner
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
