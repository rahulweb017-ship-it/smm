import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

interface LimcoCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'air' | 'routes' | 'social'
  description: string
  poster?: string
}

const airFreightAds: LightboxItem[] = [
  {
    src: '/limco/Ad final car by air Europe.mp4',
    poster: '/limco/Car by air Europe.jpg',
    title: 'Vehicle Air Shipping Europe',
    subtitle: 'Luxury Auto Air Cargo Ad',
    type: 'video',
    category: 'air',
    description: 'Specialized vehicle air transport commercial showcasing enclosed aircraft loading, climate control, and European delivery.',
  },
  {
    src: '/limco/Car by air for md .mp4',
    poster: '/limco/Car by air md.jpg',
    title: 'Executive Auto Air Transport',
    subtitle: 'High-Value Freight Motion Reel',
    type: 'video',
    category: 'air',
    description: 'Precision air cargo transport film highlighting exotic car handling, airport tarmac logistics, and rapid international transit.',
  },
  {
    src: '/limco/Cargo by air Ad -1 .mp4',
    poster: '/limco/cargo by air ad -1.jpg',
    title: 'Cargo By Air Campaign',
    subtitle: 'Global Express Air Freight',
    type: 'video',
    category: 'air',
    description: 'High-impact air freight commercial spotlighting cargo aircraft fleet management, customs clearance, and global door-to-door delivery.',
  },
  {
    src: '/limco/CBA ad final .mp4',
    poster: '/limco/cargo by air ad -2.jpg',
    title: 'CBA Freight Logistics Master',
    subtitle: 'International Freight Commercial',
    type: 'video',
    category: 'air',
    description: 'Master commercial reel covering charter aircraft booking, heavy lift cargo solutions, and worldwide logistics tracking.',
  },
]

const regionalRoutes: LightboxItem[] = [
  {
    src: '/limco/Caribbean ad.jpg',
    title: 'Caribbean Logistics & Maritime Trade',
    subtitle: 'Regional Trade Route Graphic',
    type: 'image',
    category: 'routes',
    description: 'Dedicated Caribbean island shipping routes, port operations, and ocean container freight promotional artwork.',
  },
  {
    src: '/limco/Europe Ad.jpg',
    title: 'European Cargo Corridor Network',
    subtitle: 'Transatlantic Freight Ad',
    type: 'image',
    category: 'routes',
    description: 'European overland and air freight connectivity promo highlighting key distribution hubs in Frankfurt, London, and Paris.',
  },
  {
    src: '/limco/Middle east ad.jpg',
    title: 'Middle East Air & Ocean Transit',
    subtitle: 'GCC Trade Route Campaign',
    type: 'image',
    category: 'routes',
    description: 'Strategic Middle East logistics network connecting Dubai, Abu Dhabi, and Riyadh with global trade partners.',
  },
  {
    src: '/limco/cargo by air ad -3.jpg',
    title: 'Global Cargo Fleet Network',
    subtitle: 'Air Express Display Graphic',
    type: 'image',
    category: 'routes',
    description: 'Clean infographics and promotional ad design highlighting airport-to-airport express delivery timelines.',
  },
]

const socialAndReels: LightboxItem[] = [
  {
    src: '/limco/reel-1.mp4',
    title: 'Global Supply Chain Motion Reel 01',
    subtitle: 'Social Video Feature',
    type: 'video',
    category: 'social',
    description: 'Dynamic social media short showcasing container vessel docking, cargo plane takeoffs, and logistics operations.',
  },
  {
    src: '/limco/reel-2.mp4',
    title: 'Express Delivery Motion Reel 02',
    subtitle: 'Air Freight Social Short',
    type: 'video',
    category: 'social',
    description: 'Fast-paced Instagram & LinkedIn reel capturing warehouse distribution, pallet loading, and real-time tracking.',
  },
  {
    src: '/limco/Post-1.jpg',
    title: 'Logistics Innovation Social Post 01',
    subtitle: 'Supply Chain Graphic',
    type: 'image',
    category: 'social',
    description: 'Modern social media campaign graphic highlighting digital freight tracking and transparent supply chain management.',
  },
  {
    src: '/limco/post-2.jpg',
    title: 'Global Trade Campaign Post 02',
    subtitle: 'Worldwide Freight Promo',
    type: 'image',
    category: 'social',
    description: 'High-converting social banner showcasing multimodal air, ocean, and road freight solutions.',
  },
  {
    src: '/limco/Post-3.jpg',
    title: 'Priority Air Cargo Post 03',
    subtitle: 'Time-Sensitive Freight',
    type: 'image',
    category: 'social',
    description: 'Promotional ad post focusing on emergency medical, aerospace, and high-value cargo transport.',
  },
  {
    src: '/limco/post-4.jpg',
    title: 'Customs & Compliance Post 04',
    subtitle: 'Trade Solutions Graphic',
    type: 'image',
    category: 'social',
    description: 'Informative social graphic breaking down customs clearance, import/export documentation, and tariff compliance.',
  },
]

const allLightboxItems: LightboxItem[] = [
  ...airFreightAds,
  ...regionalRoutes,
  ...socialAndReels,
]

export function LimcoCaseStudy({ isOpen, onClose }: LimcoCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'air' | 'routes' | 'social'>('all')
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
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#0284c7] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#0284c7] to-[#2563eb] text-white px-3 py-1 rounded-full">
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
                poster={activeLightboxItem.poster}
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Global Air Freight &amp; Vehicle Logistics</span>
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
              Limco Logistics <br />
              <span className="bg-gradient-to-r from-[#0284c7] via-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
                Air &amp; Freight.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Global air cargo charters, luxury vehicle transport by air, ocean freight corridors, and supply chain marketing creative.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#0284c7] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Air Freight, Auto Transit, Trade Campaigns</span>
            </div>
            <div>
              <span className="text-[#0284c7] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Limco Logistics</span>
            </div>
            <div>
              <span className="text-[#0284c7] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#0284c7] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Transport &amp; Freight Logistics</span>
            </div>
          </div>
        </div>

        {/* Hero Master Video Showcase */}
        <section className="mt-16 md:mt-24">
          <div className="relative aspect-[16/9] max-h-[650px] rounded-[20px] md:rounded-[40px] overflow-hidden border border-[#ebdcb9]/30 shadow-xl bg-black">
            <video
              className="w-full h-full object-cover"
              src="/limco/hero video.mp4"
              poster="/limco/hero image.jpg?v=2"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0284c7] animate-pulse"></span>
                Official Air Freight Film
              </span>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#ebdcb9]/50 pb-8">
          <div>
            <h2 className="text-[28px] md:text-[42px] font-black tracking-tight">Logistics Media Showcase</h2>
            <p className="text-[14px] text-muted font-medium mt-1">Explore vehicle air cargo films, regional freight route posters, and social motion reels.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Media' },
              { id: 'air', label: 'Air Freight & Auto Transport' },
              { id: 'routes', label: 'Regional Freight Routes' },
              { id: 'social', label: 'Reels & Social Campaigns' },
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

        {/* SECTION 1: AIR FREIGHT & AUTO TRANSPORT */}
        {(activeTab === 'all' || activeTab === 'air') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">Global Aviation</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Air Freight &amp; Vehicle Transport Commercials</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-definition video commercials covering European vehicle air charters, luxury automotive transit, and heavy freight cargo operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {airFreightAds.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#0284c7]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-black">
                    <video
                      src={item.src}
                      poster={item.poster}
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between">
                      <span className="self-end bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#0284c7] animate-pulse"></span>
                        HD Air Freight Film
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#38bdf8] font-bold uppercase tracking-wider block">
                          {item.subtitle}
                        </span>
                        <h4 className="text-[20px] font-extrabold leading-tight mt-0.5">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[13px] text-muted font-medium line-clamp-2">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#0284c7] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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

        {/* SECTION 2: REGIONAL FREIGHT ROUTES */}
        {(activeTab === 'all' || activeTab === 'routes') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">Global Trade Networks</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Regional Freight &amp; Maritime Corridors</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Caribbean maritime trade routes, European distribution networks, and Middle East logistics infrastructure campaigns.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {regionalRoutes.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#0284c7]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0284c7]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#0284c7] transition duration-300">
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

        {/* SECTION 3: REELS & SOCIAL CAMPAIGNS */}
        {(activeTab === 'all' || activeTab === 'social') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">Digital Outreach</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Motion Reels &amp; Social Campaigns</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Fast-paced logistics reels, social campaign banners, and priority air cargo trade artwork.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialAndReels.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#0284c7]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[20px] bg-black">
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        playsInline
                        autoPlay
                        loop
                        muted
                        preload="auto"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between">
                      <span className="self-end bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#0284c7] animate-pulse"></span>
                        {item.type === 'video' ? 'Motion Reel' : 'Social Graphic'}
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#38bdf8] font-bold uppercase tracking-wider block">
                          {item.subtitle}
                        </span>
                        <h4 className="text-[18px] font-extrabold leading-tight mt-0.5">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[13px] text-muted font-medium line-clamp-2">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#0284c7] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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
            Ready to streamline your global logistics?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build high-impact air cargo marketing campaigns, vehicle shipping video reels, and trade route presentations.
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
