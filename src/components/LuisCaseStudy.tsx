import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

interface LuisCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'video' | 'image'
  category: 'activation' | 'event' | 'campaign' | 'editorial'
  description: string
}

const brandActivations: LightboxItem[] = [
  {
    src: '/luis/liquid-iv.mp4',
    title: 'Liquid I.V. Kitchen Open Experience',
    subtitle: 'Experiential Brand Activation',
    type: 'video',
    category: 'activation',
    description: 'High-energy experiential brand activation featuring live hydration stations, interactive fan challenges, and social reels.',
  },
  {
    src: '/luis/chase-freedom.mp4',
    title: 'Chase Freedom All-Star Weekend',
    subtitle: 'Major Sports Event Takeover',
    type: 'video',
    category: 'activation',
    description: 'Comprehensive NBA All-Star Weekend takeover capturing fan activations, VIP lounge moments, and brand engagement.',
  },
  {
    src: '/luis/topo-chico.mp4',
    title: 'Topo Chico Refreshment Experience',
    subtitle: 'Beverage Activation Reel',
    type: 'video',
    category: 'activation',
    description: 'Artisanal product showcase and interactive sampling booth film highlighting Topo Chico mineral water experience.',
  },
  {
    src: '/luis/pacifico-beer.mp4',
    title: 'Pacifico Beer Coastal Activation',
    subtitle: 'Lifestyle & Experiential Reel',
    type: 'video',
    category: 'activation',
    description: 'Outdoor beach lifestyle activation reel highlighting Pacifico craft beer lounge, live DJ sets, and coastal fan vibes.',
  },
]

const btsAndEvents: LightboxItem[] = [
  {
    src: '/luis/bts-las-vegas.mp4',
    title: 'BTS Las Vegas Fan Experience',
    subtitle: 'Large-Scale Event Production',
    type: 'video',
    category: 'event',
    description: 'Behind-the-scenes event production documentary covering stage builds, immersive Army fan zones, and concert pop-ups.',
  },
  {
    src: '/luis/lexus-pride.mp4',
    title: 'Lexus Pride Celebration Showcase',
    subtitle: 'Automotive Diversity Campaign',
    type: 'video',
    category: 'event',
    description: 'Vibrant luxury automotive event film celebrating Pride with custom vehicle wraps, community highlights, and evening galas.',
  },
  {
    src: '/luis/coindesk-consensus.mp4',
    title: 'CoinDesk Consensus Campaign',
    subtitle: 'Tech Conference & BTS Short',
    type: 'video',
    category: 'campaign',
    description: 'Fast-paced promo reel covering Web3 thought leadership, mainstage keynote highlights, and attendee interactions.',
  },
]

const publisherCampaigns: LightboxItem[] = [
  {
    src: '/luis/random-house-childrens-books.mp4',
    title: 'Random House Children\'s Books',
    subtitle: 'Publishing Campaign Reel',
    type: 'video',
    category: 'editorial',
    description: 'Creative storytelling campaign bringing children\'s literature characters into interactive pop-up reading corners.',
  },
  {
    src: '/luis/activate-your-audience.mp4',
    title: 'Activate Your Audience',
    subtitle: 'Master Short Video Reel',
    type: 'video',
    category: 'campaign',
    description: 'High-impact showreel demonstrating dynamic video editing, audience retention hooks, and viral short-form formats.',
  },
]

const allLightboxItems: LightboxItem[] = [
  ...brandActivations,
  ...btsAndEvents,
  ...publisherCampaigns,
]

export function LuisCaseStudy({ isOpen, onClose }: LuisCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'activation' | 'event' | 'campaign' | 'editorial'>('all')
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
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#ec4899] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Short Video Content Creation &amp; Experiential Media</span>
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
              Imperial Branding Agency <br />
              <span className="bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
                Content Creation.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              High-impact short-form video creation, brand activation films, experiential coverage, and viral social content direction.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#ec4899] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Short Video, Experiential, Brand Activations</span>
            </div>
            <div>
              <span className="text-[#ec4899] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Imperial Branding Agency</span>
            </div>
            <div>
              <span className="text-[#ec4899] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#ec4899] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Short Video &amp; Social Media</span>
            </div>
          </div>
        </div>

        {/* Hero Master Video Showcase */}
        <section className="mt-16 md:mt-24">
          <div className="relative aspect-[16/9] max-h-[650px] rounded-[20px] md:rounded-[40px] overflow-hidden border border-[#ebdcb9]/30 shadow-xl bg-black">
            <video
              className="w-full h-full object-cover"
              src="/luis/hero video.mp4"
              poster="/luis/hero image.png"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ec4899] animate-pulse"></span>
                Official Hero Reel
              </span>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#ebdcb9]/50 pb-8">
          <div>
            <h2 className="text-[28px] md:text-[42px] font-black tracking-tight">Content Creation Portfolio</h2>
            <p className="text-[14px] text-muted font-medium mt-1">Explore brand activations, short reels, and experiential event films.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Media' },
              { id: 'activation', label: 'Brand Activations' },
              { id: 'event', label: 'BTS & Events' },
              { id: 'editorial', label: 'Publishing & Editorial' },
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

        {/* SECTION 1: BRAND ACTIVATIONS */}
        {(activeTab === 'all' || activeTab === 'activation') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ec4899]">Experiential &amp; Live</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Brand Activations</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Immersive consumer experience reels for Liquid I.V., Chase Freedom, Topo Chico, and Pacifico.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {brandActivations.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#ec4899]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[9/16] max-h-[480px] overflow-hidden rounded-[20px] bg-black">
                    <video
                      src={item.src}
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between">
                      <span className="self-end bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#ec4899] animate-pulse"></span>
                        Short Reel
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#ec4899] font-bold uppercase tracking-wider block">
                          {item.subtitle}
                        </span>
                        <h4 className="text-[20px] font-extrabold leading-tight mt-0.5">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[13px] text-muted font-medium line-clamp-2">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#ec4899] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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

        {/* SECTION 2: BTS & EVENT PRODUCTION */}
        {(activeTab === 'all' || activeTab === 'event') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ec4899]">BTS &amp; Events</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Event Production &amp; Behind The Scenes</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                BTS Las Vegas Fan Experience, Lexus Pride Celebration, and CoinDesk Consensus tech conference shorts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {btsAndEvents.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#ec4899]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[9/16] max-h-[480px] overflow-hidden rounded-[20px] bg-black">
                    <video
                      src={item.src}
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between">
                      <span className="self-end bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#8b5cf6] animate-pulse"></span>
                        Event Short
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#8b5cf6] font-bold uppercase tracking-wider block">
                          {item.subtitle}
                        </span>
                        <h4 className="text-[18px] font-extrabold leading-tight mt-0.5">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[13px] text-muted font-medium line-clamp-2">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#ec4899] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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

        {/* SECTION 3: PUBLISHER & EDITORIAL */}
        {(activeTab === 'all' || activeTab === 'editorial') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ec4899]">Publisher &amp; Audience</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Publishing &amp; Audience Activation</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Random House Children's Books reading experiences and master audience activation reels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {publisherCampaigns.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#ec4899]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[9/16] max-h-[480px] overflow-hidden rounded-[20px] bg-black">
                    <video
                      src={item.src}
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between">
                      <span className="self-end bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#3b82f6] animate-pulse"></span>
                        Campaign Reel
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#3b82f6] font-bold uppercase tracking-wider block">
                          {item.subtitle}
                        </span>
                        <h4 className="text-[20px] font-extrabold leading-tight mt-0.5">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[13px] text-muted font-medium line-clamp-2">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#ec4899] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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
            Ready to create viral short-form content?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate on high-impact short videos, event coverage, and brand activation campaigns.
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
                Inquire &amp; Collaborate
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
