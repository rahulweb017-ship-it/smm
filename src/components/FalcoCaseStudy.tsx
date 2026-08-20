import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface FalcoCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'system' | 'ad' | 'infographic' | 'motion'
  description?: string
}

export function FalcoCaseStudy({ isOpen, onClose }: FalcoCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'system' | 'ad' | 'infographic' | 'motion'>('all')
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

  const systemArchitecture: LightboxItem[] = [
    {
      src: '/falco/Falco e-drive.webp',
      title: 'Falco E-Drive Powertrain Hub',
      subtitle: 'Integrated Motor & Inverter System',
      type: 'image',
      category: 'system',
      description: 'Compact high-efficiency electric hub drive engineered for seamless integration across e-bikes, urban commuters, and light electric vehicles.',
    },
    {
      src: '/falco/Falco e-drive-1.webp',
      title: 'Smart Power Management Architecture',
      subtitle: 'BMS & Telemetry Controller',
      type: 'image',
      category: 'system',
      description: 'Advanced 48V/72V intelligent battery management system with real-time Bluetooth telemetry and regenerative braking optimization.',
    },
    {
      src: '/falco/falco 12-05.webp',
      title: 'Ergonomic Control Console & Display',
      subtitle: 'Digital Cockpit Interface',
      type: 'image',
      category: 'system',
      description: 'OLED handlebars display unit detailing live battery health, torque curve assist modes, and GPS navigation feedback.',
    },
  ]

  const adCampaigns: LightboxItem[] = [
    {
      src: '/falco/ad post -1.webp',
      title: 'Power Beyond Limits Campaign',
      subtitle: 'Global Ad Launch Graphic',
      type: 'image',
      category: 'ad',
      description: 'High-contrast typography campaign highlighting zero-emission high-torque acceleration for modern riders.',
    },
    {
      src: '/falco/ad post -2.webp',
      title: 'Electric Performance Redefined',
      subtitle: 'Editorial Print & Social Ad',
      type: 'image',
      category: 'ad',
      description: 'Minimalist industrial product feature showcasing precision-machined aluminum alloy casing and weather-sealed housing.',
    },
    {
      src: '/falco/ad post -3.webp',
      title: 'Urban Commute Evolution',
      subtitle: 'Outdoor & Digital Banner',
      type: 'image',
      category: 'ad',
      description: 'Lifestyle campaign emphasizing whisper-quiet operation, instant torque delivery, and maintenance-free longevity.',
    },
    {
      src: '/falco/add.webp',
      title: 'Falco Power Promo Card 01',
      subtitle: 'Special Launch Promotion',
      type: 'image',
      category: 'ad',
      description: 'Targeted performance banner spotlighting motor efficiency ratings and range extension technology.',
    },
    {
      src: '/falco/adddd.webp',
      title: 'Falco Power Promo Card 02',
      subtitle: 'High-Torque Performance Edition',
      type: 'image',
      category: 'ad',
      description: 'Special edition campaign graphics highlighting hill-climb assist and custom ride tuning profiles.',
    },
  ]

  const infographicsAndPosts: LightboxItem[] = [
    {
      src: '/falco/falco new rule.webp',
      title: 'E-Mobility Standards & Brand Rules',
      subtitle: 'Technical Guidelines Infographic',
      type: 'image',
      category: 'infographic',
      description: 'Comprehensive brand standards detailing safety certification protocols, green energy compliance, and modular drive specs.',
    },
    {
      src: '/falco/falco-1-2.webp',
      title: 'Modular Drive Compatibility Chart',
      subtitle: 'OEM Integration Infographic',
      type: 'image',
      category: 'infographic',
      description: 'Detailed mechanical and electronic compatibility specs for bicycle frame manufacturers and fleet operators.',
    },
    {
      src: '/falco/power-07-03.webp',
      title: 'Falco Power Feature Spotlight 01',
      subtitle: 'Social Campaign Infographic',
      type: 'image',
      category: 'infographic',
      description: 'Key performance metrics breakdown: 850W peak output, 92% efficiency index, and IP67 water resistance.',
    },
    {
      src: '/falco/power-08-03.webp',
      title: 'Falco Power Feature Spotlight 02',
      subtitle: 'Social Campaign Infographic',
      type: 'image',
      category: 'infographic',
      description: 'Regenerative braking energy recovery diagram detailing up to 15% range recovery in downhill stop-and-go city traffic.',
    },
    {
      src: '/falco/power-12-03.webp',
      title: 'Falco Power Feature Spotlight 03',
      subtitle: 'Social Campaign Infographic',
      type: 'image',
      category: 'infographic',
      description: 'Fast-charging battery architecture diagram showcasing 80% charge capability in under 45 minutes.',
    },
    {
      src: '/falco/post-13-06.webp',
      title: 'Clean Energy Movement Story',
      subtitle: 'Social Media Graphic',
      type: 'image',
      category: 'infographic',
      description: 'Brand story post highlighting carbon footprint reduction and sustainable urban micro-mobility solutions.',
    },
    {
      src: '/falco/post-14-06.webp',
      title: 'Rider Community & Fleet Care',
      subtitle: 'Social Media Graphic',
      type: 'image',
      category: 'infographic',
      description: 'Over-the-air firmware update support and mobile companion app connectivity campaign.',
    },
    {
      src: '/falco/post-17-06.webp',
      title: 'Precision Craftsmanship Details',
      subtitle: 'Social Media Graphic',
      type: 'image',
      category: 'infographic',
      description: 'Macro engineering focus detailing laser-welded copper windings and neodymium permanent magnet configuration.',
    },
  ]

  const motionVideos: LightboxItem[] = [
    {
      src: '/falco/hero video.mp4',
      title: 'Falco Power E-Drive Master Film',
      subtitle: 'Cinematic Product Reel',
      type: 'video',
      category: 'motion',
      description: 'High-impact product motion video highlighting CAD exploded views, high-speed dyno testing, and urban road performance.',
    },
  ]

  const allLightboxItems: LightboxItem[] = [
    ...systemArchitecture,
    ...adCampaigns,
    ...infographicsAndPosts,
    ...motionVideos,
  ]

  const currentLightboxIndex = activeLightboxItem
    ? allLightboxItems.findIndex((item) => item.src === activeLightboxItem.src)
    : -1



  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#00c6ff] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Next-Gen Electric Drive &amp; Smart Power Systems</span>
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
              Falco Power <br />
              <span className="bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#00f2fe] bg-clip-text text-transparent">
                E-Drive System.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Next-generation electric powertrain engineering, smart energy management, and high-impact ad campaigns designed for the future of urban e-mobility.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#0072ff] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">E-Drive Systems, Ad Campaigns, Brand Rules</span>
            </div>
            <div>
              <span className="text-[#0072ff] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Falco E-Motors Group</span>
            </div>
            <div>
              <span className="text-[#0072ff] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#0072ff] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Smart Mobility &amp; Clean Tech</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/falco/hero-secti.webp"
              alt="Falco Power E-Drive Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">High-Performance E-Drive Architecture</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              Falco Power E-Drive represents a breakthrough in high-efficiency electric vehicle powertrains. Combining ultra-compact direct-drive motors with intelligent energy recovery and wireless connectivity, Falco sets a new benchmark in urban clean transportation.
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
              <source src="/falco/hero video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#28282e]/80 via-[#28282e]/20 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-[#00f2fe] text-[12px] font-extrabold uppercase tracking-widest mb-2 block">
                Cinematic Motion Film
              </span>
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Engineering Power &amp; Precision.
              </h2>
            </div>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0072ff]">Portfolio Artifacts</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore Falco Artifacts</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'system', label: 'E-Drive Systems' },
              { id: 'ad', label: 'Ad Campaigns' },
              { id: 'infographic', label: 'Infographics & Rules' },
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

        {/* SECTION 1: E-DRIVE SYSTEMS */}
        {(activeTab === 'all' || activeTab === 'system') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0072ff]">Hardware &amp; Controls</span>
                <h3 className="text-[24px] md:text-[36px] font-black">E-Drive Core Powertrain</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Direct-drive electric motor hubs, battery management systems (BMS), and rider display interfaces engineered for maximum torque and thermal efficiency.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {systemArchitecture.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#0072ff]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0072ff]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#0072ff] transition duration-300">
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

        {/* SECTION 2: AD CAMPAIGNS */}
        {(activeTab === 'all' || activeTab === 'ad') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0072ff]">Advertising &amp; Promotion</span>
                <h3 className="text-[24px] md:text-[36px] font-black">High-Impact Ad Campaigns</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Commercial advertising graphics, launch promotion banners, and social campaign assets designed to drive electric vehicle adoption.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {adCampaigns.map((ad, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(ad)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#0072ff]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#faf9f5]">
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
                  <div className="mt-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0072ff]">
                      {ad.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#0072ff] transition duration-300">
                      {ad.title}
                    </h4>
                    <p className="text-[13px] text-muted font-medium mt-2 line-clamp-2">
                      {ad.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: INFOGRAPHICS & BRAND RULES */}
        {(activeTab === 'all' || activeTab === 'infographic') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0072ff]">Technical &amp; Brand Systems</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Infographics &amp; Brand Rule Suite</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Technical rule sheets, OEM integration diagrams, power efficiency breakdowns, and social educational infographics.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {infographicsAndPosts.map((info, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(info)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#0072ff]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#faf9f5]">
                    <img
                      src={info.src}
                      alt={info.title}
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0072ff]">
                      {info.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#0072ff] transition duration-300">
                      {info.title}
                    </h4>
                    <p className="text-[13px] text-muted font-medium mt-2 line-clamp-2">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: MOTION REELS */}
        {(activeTab === 'all' || activeTab === 'motion') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0072ff]">Video Showcase</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Motion &amp; Video Reel</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-definition product motion video capturing engineering dyno tests, real-world road trials, and aerodynamic flow visualizations.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
              {motionVideos.map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(video)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#0072ff]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                        <span className="h-2 w-2 rounded-full bg-[#00c6ff] animate-pulse"></span>
                        HD Master Film
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#00f2fe] font-bold uppercase tracking-wider block">
                          {video.subtitle}
                        </span>
                        <h4 className="text-[22px] font-extrabold leading-tight mt-0.5">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[14px] text-muted font-medium">{video.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#0072ff] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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
            Ready to power your e-mobility vision?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build cutting-edge electric powertrains and high-converting marketing campaigns.
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
