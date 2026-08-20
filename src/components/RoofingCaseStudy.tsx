import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

interface RoofingCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'replacement' | 'exterior' | 'social'
  description: string
}

const replacementServices: LightboxItem[] = [
  {
    src: '/roofing/roof-08-12-1.webp',
    title: 'Architectural Shingle Replacement',
    subtitle: 'Premium Asphalt Shingle Installation',
    type: 'image',
    category: 'replacement',
    description: 'Complete tear-off and replacement utilizing GAF Timberline HDZ shingles with 130mph wind resistance warranty.',
  },
  {
    src: '/roofing/roof-08-12-2.webp',
    title: 'Ridge Cap & Ventilation System',
    subtitle: 'Attic Airflow Optimization',
    type: 'image',
    category: 'replacement',
    description: 'Continuous ridge vent installation ensuring maximum attic ventilation, preventing moisture buildup and ice dams.',
  },
  {
    src: '/roofing/roof-08-12.webp',
    title: 'Plywood Sheathing & Deck Repair',
    subtitle: 'Sub-Roof Structural Integrity',
    type: 'image',
    category: 'replacement',
    description: 'Replacement of damaged roof decking with CDX exterior plywood prior to synthetic underlayment application.',
  },
  {
    src: '/roofing/roof-1-11-1.webp',
    title: 'Ice & Water Leak Shield',
    subtitle: 'Eave & Valley Waterproofing',
    type: 'image',
    category: 'replacement',
    description: 'Self-adhering rubberized asphalt membrane application along eaves, valleys, and chimneys for leak prevention.',
  },
  {
    src: '/roofing/roof-1-11-2.webp',
    title: 'Commercial Flat Roofing System',
    subtitle: 'TPO & EPDM Rubber Membrane',
    type: 'image',
    category: 'replacement',
    description: 'Energy-efficient white TPO single-ply roofing for commercial buildings with heat-welded seams.',
  },
  {
    src: '/roofing/roof-1-11.webp',
    title: 'Emergency Storm Damage Repair',
    subtitle: 'Insurance Claim & Tarping Service',
    type: 'image',
    category: 'replacement',
    description: '24/7 emergency response team providing temporary tarping and full insurance restoration following severe weather.',
  },
]

const exteriorServices: LightboxItem[] = [
  {
    src: '/roofing/roof-14-11-1.webp',
    title: 'Seamless Aluminum Gutter Installation',
    subtitle: 'Custom K-Style Water Drainage',
    type: 'image',
    category: 'exterior',
    description: 'On-site extruded 5-inch and 6-inch seamless aluminum gutters equipped with heavy-duty hidden hangers.',
  },
  {
    src: '/roofing/roof-14-11-2.webp',
    title: 'Metal Flashing & Chimney Cricket',
    subtitle: 'Precision Copper & Aluminum Trim',
    type: 'image',
    category: 'exterior',
    description: 'Custom-bent step flashing and counter flashing engineered to channel rainwater around roof penetrations.',
  },
  {
    src: '/roofing/roof-14-11.webp',
    title: 'Skylight Replacement & Leak Seal',
    subtitle: 'Energy Efficient Skylight Installation',
    type: 'image',
    category: 'exterior',
    description: 'Velux solar-powered fresh-air skylight installation featuring laminated glass and leak-free flashing kits.',
  },
  {
    src: '/roofing/roof-17-11-1.webp',
    title: 'Cedar Shake & Slate Restoration',
    subtitle: 'Historical Roofing Crafts',
    type: 'image',
    category: 'exterior',
    description: 'Specialized natural cedar shake and Vermont slate tile replacement for historical Bucks County properties.',
  },
  {
    src: '/roofing/roof-17-11.webp',
    title: 'Siding & Exterior Trim Upgrade',
    subtitle: 'Vinyl Siding & Fascia Wrap',
    type: 'image',
    category: 'exterior',
    description: 'Insulated vinyl siding installation with aluminum coil wrapped soffit and fascia for maintenance-free exteriors.',
  },
  {
    src: '/roofing/roof-20-10-2.webp',
    title: 'High-Wind LayerLock Technology',
    subtitle: 'Advanced Shingle Adhesion',
    type: 'image',
    category: 'exterior',
    description: 'Dual-phase shingle sealing strip engineered to withstand hurricane-force winds and torrential downpours.',
  },
]

const marketingCampaigns: LightboxItem[] = [
  {
    src: '/roofing/post1.webp',
    title: 'Bucks County Free Inspection Campaign',
    subtitle: 'Local Homeowner Outreach',
    type: 'image',
    category: 'social',
    description: 'Targeted digital marketing creative offering 21-point comprehensive roof inspections for Bucks County residents.',
  },
  {
    src: '/roofing/post2.webp',
    title: 'GAF Master Elite Certified Banner',
    subtitle: 'Trust & Warranty Campaign',
    type: 'image',
    category: 'social',
    description: 'Promotional ad highlighting factory-certified contractor status and 50-year non-prorated system warranties.',
  },
  {
    src: '/roofing/roof-20-11.webp',
    title: '24/7 Emergency Roof Response',
    subtitle: 'Storm Damage Priority Ad',
    type: 'image',
    category: 'social',
    description: 'High-visibility social ad informing homeowners of immediate tarping and emergency repair availability.',
  },
  {
    src: '/roofing/roof-26-12-1.webp',
    title: 'Seasonal Winterizing Special',
    subtitle: 'Ice Dam Protection Offer',
    type: 'image',
    category: 'social',
    description: 'Winter prep promotional post covering gutter guard installation and thermal attic insulation checks.',
  },
  {
    src: '/roofing/roof-26-12-2.webp',
    title: 'No Interest Financing Promotion',
    subtitle: 'Flexible Home Improvement Plans',
    type: 'image',
    category: 'social',
    description: 'E-commerce and social graphic promoting 12-month zero interest roof replacement financing options.',
  },
  {
    src: '/roofing/roof-26-12.webp',
    title: 'Bucks County Roofing Quality Guarantee',
    subtitle: 'Client Satisfaction Campaign',
    type: 'image',
    category: 'social',
    description: 'Client review showcase banner highlighting 5-star Google ratings and local roofing craftsmanship.',
  },
]

const allLightboxItems: LightboxItem[] = [
  ...replacementServices,
  ...exteriorServices,
  ...marketingCampaigns,
]

export function RoofingCaseStudy({ isOpen, onClose }: RoofingCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'replacement' | 'exterior' | 'social'>('all')
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#ea580c] to-[#c2410c] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Residential &amp; Commercial Roofing Services</span>
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
              Roofing Bucks County <br />
              <span className="bg-gradient-to-r from-[#ea580c] via-[#c2410c] to-[#9a3412] bg-clip-text text-transparent">
                Roofing Services.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Full roof replacements, GAF Timberline HDZ shingles, seamless aluminum gutters, emergency storm repair, and digital client acquisition.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#ea580c] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Roof Replacements, Gutters, Storm Damage</span>
            </div>
            <div>
              <span className="text-[#ea580c] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Roofing Bucks County</span>
            </div>
            <div>
              <span className="text-[#ea580c] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#ea580c] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Roofing Services &amp; Exterior Contracting</span>
            </div>
          </div>
        </div>

        {/* Hero Master Video Showcase */}
        <section className="mt-16 md:mt-24">
          <div className="relative aspect-[16/9] max-h-[650px] rounded-[20px] md:rounded-[40px] overflow-hidden border border-[#ebdcb9]/30 shadow-xl bg-black">
            <video
              className="w-full h-full object-cover"
              src="/roofing/hero video.mp4"
              poster="/roofing/hero image.webp?v=2"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ea580c] animate-pulse"></span>
                Official Roofing Showcase Film
              </span>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#ebdcb9]/50 pb-8">
          <div>
            <h2 className="text-[28px] md:text-[42px] font-black tracking-tight">Roofing Portfolio &amp; Services</h2>
            <p className="text-[14px] text-muted font-medium mt-1">Explore roof replacement craftsmanship, seamless gutters, skylights, and promotional campaigns.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'replacement', label: 'Roof Replacements' },
              { id: 'exterior', label: 'Gutters & Trim' },
              { id: 'social', label: 'Marketing & Promotions' },
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

        {/* SECTION 1: ROOF REPLACEMENTS */}
        {(activeTab === 'all' || activeTab === 'replacement') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ea580c]">Craftsmanship &amp; Materials</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Full Roof Replacements &amp; Repairs</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Architectural shingle installation, ridge ventilation, decking repair, ice dam waterproofing, and storm damage restoration.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {replacementServices.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
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

        {/* SECTION 2: GUTTERS & EXTERIOR */}
        {(activeTab === 'all' || activeTab === 'exterior') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ea580c]">Gutter Systems &amp; Trim</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Gutters, Flashing &amp; Exterior Upgrades</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Seamless aluminum gutters, chimney flashings, Velux skylight installations, slate tile repairs, and vinyl siding.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {exteriorServices.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
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

        {/* SECTION 3: MARKETING & PROMOTIONS */}
        {(activeTab === 'all' || activeTab === 'social') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#ea580c]">Digital Marketing</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Marketing &amp; Local Outreach Campaigns</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Local free inspection offers, GAF certified contractor ads, 24/7 storm damage alerts, and zero-interest financing promos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingCampaigns.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxItem(item)}
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

        {/* Closing Case Study Block */}
        <section className="mt-20 md:mt-32 text-center border-t border-[#ebdcb9]/50 pt-16 pb-8">
          <h2 className="text-[32px] md:text-[60px] font-black tracking-tight leading-none">
            Need expert roofing &amp; exterior Contracting?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build high-converting contractor marketing campaigns, project showcases, and local lead generation portals.
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
