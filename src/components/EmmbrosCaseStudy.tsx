import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface EmmbrosCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'component' | 'industrial' | 'campaign' | 'motion'
  description?: string
}

export function EmmbrosCaseStudy({ isOpen, onClose }: EmmbrosCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'component' | 'industrial' | 'campaign' | 'motion'>('all')
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

  const forgedComponents: LightboxItem[] = [
    {
      src: '/emmbros/spindles.jpg',
      title: 'Precision Forged Axle Spindles',
      subtitle: 'Heavy-Duty Automotive Powertrain',
      type: 'image',
      category: 'component',
      description: 'High-tensile forged spindles engineered for heavy commercial vehicles, agricultural machinery, and off-road applications.',
    },
    {
      src: '/emmbros/spandles.jpg',
      title: 'Custom Machined Stub Axles',
      subtitle: 'CNC Precision Finishing',
      type: 'image',
      category: 'component',
      description: 'Heat-treated alloy steel stub axles with ultra-tight tolerance grinding for extreme load resistance.',
    },
    {
      src: '/emmbros/ring nut.jpg',
      title: 'Heavy Industrial Ring Nuts',
      subtitle: 'Fastening & Retaining Components',
      type: 'image',
      category: 'component',
      description: 'Precision threaded lock ring nuts manufactured to ISO/TS automotive standards for drivetrain stability.',
    },
    {
      src: '/emmbros/slip yoke.jpg',
      title: 'Drivetrain Slip Yoke Forgings',
      subtitle: 'Propeller Shaft Components',
      type: 'image',
      category: 'component',
      description: 'Forged steel slip yokes built to withstand torsional stress and high RPM rotational loads.',
    },
    {
      src: '/emmbros/PLANETARY.jpg',
      title: 'Planetary Gear Carriers',
      subtitle: 'Transmission & Reduction Gears',
      type: 'image',
      category: 'component',
      description: 'Precision forged planetary gear hubs for heavy tractor axles, earthmovers, and construction equipment.',
    },
    {
      src: '/emmbros/plantcerier.jpg',
      title: 'Planet Carrier Heavy Assembly',
      subtitle: 'Earthmoving Machinery Parts',
      type: 'image',
      category: 'component',
      description: 'Heavy-duty forged planet carriers engineered for maximum torque distribution and extended fatigue life.',
    },
    {
      src: '/emmbros/Spools - Copy.jpg',
      title: 'Hydraulic Spool Valve Bodies',
      subtitle: 'Fluid Power Components',
      type: 'image',
      category: 'component',
      description: 'Precision bored hydraulic valve spools designed for high-pressure fluid control systems.',
    },
    {
      src: '/emmbros/product 4.jpg',
      title: 'Precision Powertrain Shafts',
      subtitle: 'Engineered Drive Shafts',
      type: 'image',
      category: 'component',
      description: 'Induction hardened drive shafts tailored for automotive OEMs and Tier-1 suppliers globally.',
    },
  ]

  const industrialExcellence: LightboxItem[] = [
    {
      src: '/emmbros/forging Excellence.jpg',
      title: 'Forging Excellence Masterclass',
      subtitle: 'Metallurgical Mastery & Quality Assurance',
      type: 'image',
      category: 'industrial',
      description: 'State-of-the-art closed die forging presses, induction heating furnaces, and metallurgical lab testing.',
    },
    {
      src: '/emmbros/Quality Machine.jpg',
      title: 'CNC Quality Inspection Center',
      subtitle: 'Coordinate Measuring Machine (CMM)',
      type: 'image',
      category: 'industrial',
      description: 'Sub-micron precision CMM inspection ensuring 100% dimensional accuracy across all production batches.',
    },
    {
      src: '/emmbros/Team colaboration.jpg',
      title: 'Engineering R&D Team Collaboration',
      subtitle: 'CAD/CAM Simulation & Tooling',
      type: 'image',
      category: 'industrial',
      description: 'In-house tool design team utilizing 3D forging simulation software to optimize material flow and grain structure.',
    },
    {
      src: '/emmbros/exhibition invite.jpg',
      title: 'Auto Expo Global Exhibition Showcase',
      subtitle: 'International Trade Presentation',
      type: 'image',
      category: 'industrial',
      description: 'Official exhibition collateral presenting Emmbros Autocomp components to global automotive manufacturers.',
    },
    {
      src: '/emmbros/screencapture-emmbros-2026-08-08-14_52_35.png',
      title: 'Emmbros Autocomp Corporate Portal',
      subtitle: 'Web Architecture & Digital Presence',
      type: 'image',
      category: 'industrial',
      description: 'Comprehensive digital portal detailing manufacturing plants, OEM certifications, and product catalogues.',
    },
  ]

  const brandCampaigns: LightboxItem[] = [
    {
      src: '/emmbros/Environment Day.jpg',
      title: 'Green Industrial Eco Initiative',
      subtitle: 'World Environment Day Campaign',
      type: 'image',
      category: 'campaign',
      description: 'Promoting sustainable manufacturing practices, solar-powered forging plants, and zero-waste recycling.',
    },
    {
      src: '/emmbros/labour day.jpg',
      title: 'Honoring Industrial Craftsmanship',
      subtitle: 'International Workers Day Tribute',
      type: 'image',
      category: 'campaign',
      description: 'Celebrating the dedicated engineers, machinists, and technicians behind Emmbros industrial excellence.',
    },
    {
      src: '/emmbros/happy teacher day.jpg',
      title: 'Engineering Mentorship Campaign',
      subtitle: 'Teachers Day Brand Creative',
      type: 'image',
      category: 'campaign',
      description: 'Acknowledging industrial mentors and master blacksmiths who train the next generation of engineers.',
    },
    {
      src: '/emmbros/Happy birthday pulkit Mehta.jpg',
      title: 'Executive Leadership Celebration',
      subtitle: 'Corporate Milestone Creative',
      type: 'image',
      category: 'campaign',
      description: 'Celebrating leadership vision and business expansion across global automotive markets.',
    },
    {
      src: '/emmbros/dec-1.jpg',
      title: 'Year-End Engineering Milestone 01',
      subtitle: 'Industrial Showcase Banner',
      type: 'image',
      category: 'campaign',
      description: 'Highlighting annual production benchmarks, new forging press lines, and international OEM partnerships.',
    },
    {
      src: '/emmbros/dec-4.jpg',
      title: 'Year-End Engineering Milestone 02',
      subtitle: 'Precision Component Banner',
      type: 'image',
      category: 'campaign',
      description: 'Visual showcase of precision CNC machined components manufactured for defense and commercial vehicles.',
    },
    {
      src: '/emmbros/dec-5.jpg',
      title: 'Year-End Engineering Milestone 03',
      subtitle: 'Global Supply Chain Banner',
      type: 'image',
      category: 'campaign',
      description: 'Showcasing worldwide export logistics servicing OEM assembly lines in North America, Europe, and Asia.',
    },
  ]

  const motionVideos: LightboxItem[] = [
    {
      src: '/emmbros/hero video.mp4',
      title: 'Emmbros Autocomp Official Master Film',
      subtitle: 'Cinematic Forging Reel',
      type: 'video',
      category: 'motion',
      description: 'High-impact industrial motion film featuring 2000T forging presses, robotic heat treatment, and precision CNC grinding.',
    },
  ]

  const allLightboxItems: LightboxItem[] = [
    ...forgedComponents,
    ...industrialExcellence,
    ...brandCampaigns,
    ...motionVideos,
  ]

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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Automotive Forging &amp; Industrial Engineering</span>
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
              Emmbros <br />
              <span className="bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#075985] bg-clip-text text-transparent">
                Autocomp.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              World-class automotive forgings, precision spindles, slip yokes, planetary carriers, and industrial manufacturing media.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#0284c7] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Precision Forging, Machining, Engineering</span>
            </div>
            <div>
              <span className="text-[#0284c7] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Emmbros Autocomp Ltd.</span>
            </div>
            <div>
              <span className="text-[#0284c7] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#0284c7] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Automotive &amp; Heavy Industry</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/emmbros/hero image.png"
              alt="Emmbros Autocomp Industrial Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">Forging Tomorrow's Powertrain Solutions</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              Emmbros Autocomp is a premier manufacturer of high-precision closed die forgings and CNC machined components for global automotive OEMs. Specializing in axle spindles, slip yokes, planetary carriers, and transmission shafts, Emmbros powers heavy transport and agriculture worldwide.
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
              <source src="/emmbros/hero video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#28282e]/80 via-[#28282e]/20 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-[#38bdf8] text-[12px] font-extrabold uppercase tracking-widest mb-2 block">
                Cinematic Manufacturing Film
              </span>
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Engineering Power &amp; Metallurgical Precision.
              </h2>
            </div>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">Portfolio Directory</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore Emmbros Artifacts</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'component', label: 'Forged Components' },
              { id: 'industrial', label: 'Industrial Excellence' },
              { id: 'campaign', label: 'Social & CSR Campaigns' },
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

        {/* SECTION 1: FORGED COMPONENTS */}
        {(activeTab === 'all' || activeTab === 'component') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">Drivetrain &amp; Axles</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Precision Forged Components</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Heavy-duty spindles, slip yokes, planetary carriers, ring nuts, and hydraulic spools. Click any component to inspect technical specifications.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {forgedComponents.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
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

        {/* SECTION 2: INDUSTRIAL EXCELLENCE */}
        {(activeTab === 'all' || activeTab === 'industrial') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">Facility &amp; R&amp;D</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Industrial Excellence &amp; Quality</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Metallurgical forging presses, sub-micron CMM inspection, CAD/CAM engineering collaboration, and global expo displays.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrialExcellence.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
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

        {/* SECTION 3: SOCIAL & CSR CAMPAIGNS */}
        {(activeTab === 'all' || activeTab === 'campaign') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">Corporate Culture</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Social &amp; CSR Campaigns</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                World Environment Day initiatives, industrial worker tributes, leadership milestones, and annual engineering reviews.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandCampaigns.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
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
                    <p className="text-[13px] text-muted font-medium mt-2">
                      {item.description}
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
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#0284c7]">Industrial Motion</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Motion &amp; Manufacturing Video</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Cinematic video showcasing 2000T forging presses, robotic heat treatment, and precision CNC finishing.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-8">
              {motionVideos.map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(video)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#0284c7]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                        <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
                        HD Industrial Film
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#38bdf8] font-bold uppercase tracking-wider block">
                          {video.subtitle}
                        </span>
                        <h4 className="text-[22px] font-extrabold leading-tight mt-0.5">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[14px] text-muted font-medium">{video.description}</p>
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
            Ready for OEM Precision Engineering?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Partner with Emmbros Autocomp for custom closed die forgings, heavy drivetrain components, and precision CNC manufacturing.
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
