import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

interface ReplugCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'audio' | 'power' | 'creative'
  description: string
}

const audioProducts: LightboxItem[] = [
  {
    src: '/replug/Airpod-M3.webp',
    title: 'Replug Airpod M3 Studio TWS',
    subtitle: 'True Wireless Active Noise Cancellation',
    type: 'image',
    category: 'audio',
    description: 'Ergonomic in-ear TWS earbuds featuring low-latency gaming mode, touch controls, and 36-hour battery life.',
  },
  {
    src: '/replug/Airpod-M6 pro.webp',
    title: 'Replug Airpod M6 Pro',
    subtitle: 'Flagship Spatial Audio Earbuds',
    type: 'image',
    category: 'audio',
    description: 'Pro-grade spatial audio wireless earbuds with quad-mic environmental noise cancellation and wireless charging case.',
  },
  {
    src: '/replug/Airpod-T1-1.webp',
    title: 'Replug Airpod T1 Wireless',
    subtitle: 'Ultra-Light Everyday Earbuds',
    type: 'image',
    category: 'audio',
    description: 'Sleek matte finish TWS earbuds engineered with 13mm dynamic bass drivers and IPX5 sweat resistance.',
  },
  {
    src: '/replug/Neckband-R2.webp',
    title: 'Replug Neckband R2 Sport',
    subtitle: 'Magnetic Neckband Audio',
    type: 'image',
    category: 'audio',
    description: 'Flexible silicone sport neckband with fast charging, magnetic earbuds, and deep bass acoustics.',
  },
  {
    src: '/replug/enc with dual mic.webp',
    title: 'Replug ENC Dual Mic Earbuds',
    subtitle: 'Crystal Clear Voice Calls',
    type: 'image',
    category: 'audio',
    description: 'Dual microphone environmental noise cancelling earbuds tailored for remote work calls and clear audio.',
  },
  {
    src: '/replug/headphone.webp',
    title: 'Replug Studio Over-Ear Headphones',
    subtitle: 'High-Fidelity Wireless Headphones',
    type: 'image',
    category: 'audio',
    description: 'Premium memory foam ear cushions, 40mm neodymium drivers, and 50-hour continuous playtime.',
  },
]

const powerProducts: LightboxItem[] = [
  {
    src: '/replug/C-USB-charger.webp',
    title: 'Replug Dual Port Power Adapter',
    subtitle: '33W GaN Fast Charger',
    type: 'image',
    category: 'power',
    description: 'Compact USB-C and USB-A dual port wall charger with smart power distribution and surge protection.',
  },
  {
    src: '/replug/car charger.webp',
    title: 'Replug Metal Car Charger',
    subtitle: 'Dual Turbo Vehicle Power',
    type: 'image',
    category: 'power',
    description: 'Heavy-duty aluminum alloy vehicle charger supporting Quick Charge 3.0 and PD fast charging.',
  },
  {
    src: '/replug/c to lightning.webp',
    title: 'Replug Type-C to Lightning Cable',
    subtitle: 'Braided Fast Charging Cable',
    type: 'image',
    category: 'power',
    description: 'Kevlar-reinforced nylon braided cable supporting 20W Power Delivery and high-speed data sync.',
  },
  {
    src: '/replug/flash charge.webp',
    title: 'Replug Flash Charge Series',
    subtitle: 'High-Density Power Cable',
    type: 'image',
    category: 'power',
    description: 'Extra durable fast charge cable with reinforced stress points and gold-plated connectors.',
  },
  {
    src: '/replug/Aux cable.webp',
    title: 'Replug Braided Aux Cable',
    subtitle: '3.5mm Gold-Plated Audio Cord',
    type: 'image',
    category: 'power',
    description: 'Lossless audio transmission cable with step-down design compatible with all standard 3.5mm jacks.',
  },
]

const creativeCampaigns: LightboxItem[] = [
  {
    src: '/replug/web graphic.webp',
    title: 'Replug Digital E-Commerce Storefront',
    subtitle: 'Web Graphic & Layout Design',
    type: 'image',
    category: 'creative',
    description: 'Sleek, modern e-commerce storefront web graphics highlighting product features and brand aesthetics.',
  },
  {
    src: '/replug/coming four .webp',
    title: 'Next-Gen Product Launch Banner',
    subtitle: 'Teaser Campaign Poster',
    type: 'image',
    category: 'creative',
    description: 'High-contrast teaser promotional graphic introducing upcoming smart audio and charging series.',
  },
  {
    src: '/replug/giveway.webp',
    title: 'Replug Community Giveaway Campaign',
    subtitle: 'Social Media Engagement Post',
    type: 'image',
    category: 'creative',
    description: 'Vibrant social media giveaway post engineered to drive follower growth and audience engagement.',
  },
  {
    src: '/replug/new arrivall.webp',
    title: 'Replug New Arrival Showcase',
    subtitle: 'E-Commerce Product Poster',
    type: 'image',
    category: 'creative',
    description: 'Product launch promotional creative highlighting premium packaging, build quality, and acoustic specs.',
  },
  {
    src: '/replug/earphone.webp',
    title: 'Replug Classic Wired Earphones',
    subtitle: 'Metallic HD Audio Series',
    type: 'image',
    category: 'creative',
    description: 'In-ear wired earphones with tangle-free cable, inline microphone, and deep bass frequency tuning.',
  },
]

const allLightboxItems: LightboxItem[] = [
  ...audioProducts,
  ...powerProducts,
  ...creativeCampaigns,
]

export function ReplugCaseStudy({ isOpen, onClose }: ReplugCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'audio' | 'power' | 'creative'>('all')
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
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#10b981] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Audio &amp; Smart Charging Accessories</span>
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
              Replug <br />
              <span className="bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] bg-clip-text text-transparent">
                Audio &amp; Power.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Next-generation TWS wireless earbuds, neckbands, fast charging wall adapters, car chargers, and e-commerce brand collateral.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#10b981] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Product Design, E-Commerce, Branding</span>
            </div>
            <div>
              <span className="text-[#10b981] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Replug Smart Electronics</span>
            </div>
            <div>
              <span className="text-[#10b981] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#10b981] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Audio &amp; Smart Accessories</span>
            </div>
          </div>
        </div>

        {/* Hero Master Video Showcase */}
        <section className="mt-16 md:mt-24">
          <div className="relative aspect-[16/9] max-h-[650px] rounded-[20px] md:rounded-[40px] overflow-hidden border border-[#ebdcb9]/30 shadow-xl bg-black">
            <video
              className="w-full h-full object-cover"
              src="/replug/hero image.mp4"
              poster="/replug/hero image.webp"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#10b981] animate-pulse"></span>
                Official Product Film
              </span>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#ebdcb9]/50 pb-8">
          <div>
            <h2 className="text-[28px] md:text-[42px] font-black tracking-tight">Products &amp; Brand Portfolio</h2>
            <p className="text-[14px] text-muted font-medium mt-1">Explore wireless TWS earbuds, fast charging series, and e-commerce brand collateral.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'audio', label: 'TWS & Wireless Audio' },
              { id: 'power', label: 'Chargers & Cables' },
              { id: 'creative', label: 'E-Commerce Marketing' },
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

        {/* SECTION 1: TWS & WIRELESS AUDIO */}
        {(activeTab === 'all' || activeTab === 'audio') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#10b981]">Acoustics &amp; Wireless</span>
                <h3 className="text-[24px] md:text-[36px] font-black">TWS Earbuds &amp; Audio Collection</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-fidelity TWS Airpods, sport neckbands, ENC dual mic calling earbuds, and studio over-ear headphones.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {audioProducts.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#10b981]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#10b981]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#10b981] transition duration-300">
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

        {/* SECTION 2: CHARGERS & CABLES */}
        {(activeTab === 'all' || activeTab === 'power') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#10b981]">Power &amp; Connectivity</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Smart Chargers &amp; Cable Accessories</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Fast charging dual port adapters, metallic car chargers, braided Type-C cables, and high-speed audio cords.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {powerProducts.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#10b981]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#10b981]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#10b981] transition duration-300">
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

        {/* SECTION 3: E-COMMERCE MARKETING */}
        {(activeTab === 'all' || activeTab === 'creative') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#10b981]">Brand &amp; Marketing</span>
                <h3 className="text-[24px] md:text-[36px] font-black">E-Commerce Marketing Campaign</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Digital storefront web graphics, next-gen teaser banners, giveaway promotions, and product launch posters.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {creativeCampaigns.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#10b981]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#10b981]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#10b981] transition duration-300">
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
            Ready to power your e-commerce brand?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build high-converting product marketing campaigns, custom brand designs, and e-commerce collateral.
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
