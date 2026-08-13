import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface PclCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'dental' | 'skin' | 'reels'
  description?: string
}

export function PclCaseStudy({ isOpen, onClose }: PclCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'dental' | 'skin' | 'reels'>('all')
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

  const imageShowcase: LightboxItem[] = [
    {
      src: '/pcl/allura-ad-new.webp',
      title: 'Allora Aesthetic Skin Care & Rejuvenation',
      subtitle: 'Cosmetic Dermatology Campaign',
      type: 'image',
      category: 'skin',
      description: 'Custom brand campaign showcasing laser skin rejuvenation, anti-aging therapies, and clinical complexion treatments.',
    },
    {
      src: '/pcl/allura-ad-9-16-new.webp',
      title: 'Allora Skincare Mobile Campaign 9:16',
      subtitle: 'Social Story & Vertical Ad Creative',
      type: 'image',
      category: 'skin',
      description: 'High-converting vertical social ad campaign designed for Instagram Stories, TikTok, and modern mobile engagement.',
    },
    {
      src: '/pcl/allora-new-ad-1.webp',
      title: 'Allora Glow & Collagen Therapy',
      subtitle: 'Advanced Dermal Treatments',
      type: 'image',
      category: 'skin',
      description: 'Promotional series focusing on non-invasive laser resurfacing, hyaluronic hydration, and collagen restoration.',
    },
    {
      src: '/pcl/allora-new-ad-address.webp',
      title: 'Allora Clinic Location & Appointment Promo',
      subtitle: 'Patient Engagement & Booking',
      type: 'image',
      category: 'skin',
      description: 'Targeted local awareness ad highlighting clinic amenities, expert dermatologists, and instant online booking.',
    },
    {
      src: '/pcl/women-health-new.webp',
      title: 'Women’s Wellness & Aesthetic Health',
      subtitle: 'Holistic Skin & Body Care',
      type: 'image',
      category: 'skin',
      description: 'Integrated marketing collateral for specialized women’s aesthetic wellness, body contouring, and glow facials.',
    },
    {
      src: '/pcl/woman-health-new.webp',
      title: 'Modern Aesthetic Dermatology Suite',
      subtitle: 'Clinical Skincare Excellence',
      type: 'image',
      category: 'skin',
      description: 'State-of-the-art dermatological equipment, gentle chemical peels, and customized acne correction treatments.',
    },
    {
      src: '/pcl/women-health-2.webp',
      title: 'PCL Sedation Dentistry & Smile Design',
      subtitle: 'Pain-Free Dental Care',
      type: 'image',
      category: 'dental',
      description: 'Comfort-first sedation dentistry campaign reassuring patients seeking stress-free dental implants, veneers, and deep cleaning.',
    },
    {
      src: '/pcl/women-health-2-1.webp',
      title: 'Cosmetic Dental Veneers & Smile Makeover',
      subtitle: 'Precision Porcelain Veneers',
      type: 'image',
      category: 'dental',
      description: 'High-definition smile makeover showcase highlighting porcelain veneers, teeth whitening, and alignment aesthetics.',
    },
    {
      src: '/pcl/women-health.webp',
      title: 'Preventive Dental & Oral Care Guidance',
      subtitle: 'Family & Cosmetic Dentistry',
      type: 'image',
      category: 'dental',
      description: 'Patient education graphic series emphasizing routine oral hygiene, gum health maintenance, and cavity prevention.',
    },
    {
      src: '/pcl/media.webp',
      title: 'PCL Clinic Aesthetics Gallery 01',
      subtitle: 'Patient Transformation Portfolio',
      type: 'image',
      category: 'skin',
      description: 'Before-and-after aesthetic glow results capturing radiant skin texture and clinical dermatological enhancements.',
    },
    {
      src: '/pcl/media-(1).webp',
      title: 'PCL Dental Care Gallery 02',
      subtitle: 'Comfort Sedation Suite',
      type: 'image',
      category: 'dental',
      description: 'Showcasing modern dental operatory suites equipped with ergonomic patient chairs and relaxing IV sedation.',
    },
    {
      src: '/pcl/media-(2).webp',
      title: 'PCL Dermatology Care Gallery 03',
      subtitle: 'Premium Skincare Products',
      type: 'image',
      category: 'skin',
      description: 'Clinical skincare product line formulated with bioactive peptides, botanical antioxidants, and UV protection.',
    },
  ]

  const videoReels: LightboxItem[] = [
    {
      src: '/pcl/hero-video.mp4',
      title: 'Sedation Dentistry & Patient Care Feature',
      subtitle: 'Smith Sedation Dentistry Film',
      type: 'video',
      category: 'reels',
      description: 'Cinematic video commercial showcasing stress-free IV sedation dentistry, gentle procedures, and patient testimonials.',
    },
    {
      src: '/pcl/pcl-ad-reel.mp4',
      title: 'PCL Skincare & Aesthetic Reel',
      subtitle: 'High-Impact Social Reel',
      type: 'video',
      category: 'reels',
      description: 'Vibrant social media video advertisement highlighting glow treatments, laser skin tightening, and instant results.',
    },
  ]

  const allLightboxItems: LightboxItem[] = [
    ...imageShowcase,
    ...videoReels,
  ]

  const currentLightboxIndex = activeLightboxItem
    ? allLightboxItems.findIndex((item) => item.src === activeLightboxItem.src)
    : -1

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#e11d48] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#e11d48] to-[#ec4899] text-white px-3 py-1 rounded-full">
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
            <span className="text-[12px] font-extrabold tracking-widest uppercase bg-[#e11d48] text-white px-3 py-1 rounded-full">
              Case Study
            </span>
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Sedation Dentistry &amp; Aesthetic Dermatology</span>
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
              PCL Dental &amp; <br />
              <span className="bg-gradient-to-r from-[#e11d48] via-[#f43f5e] to-[#ec4899] bg-clip-text text-transparent">
                Skin Care.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Premium sedation dentistry, cosmetic smile makeovers, laser dermatology, and specialized skincare brand collateral.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#e11d48] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Sedation Dentistry, Skincare Ads</span>
            </div>
            <div>
              <span className="text-[#e11d48] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">PCL Dental &amp; Aesthetic Clinics</span>
            </div>
            <div>
              <span className="text-[#e11d48] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#e11d48] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Dental &amp; Skin Care</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/pcl/hero-image.webp"
              alt="PCL Dental & Skin Care Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">Aesthetic Elegance &amp; Gentle Patient Care</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              PCL Dental &amp; Skin Care unites painless IV sedation dentistry with clinical dermatology. Offering porcelain veneer makeovers, laser skin resurfacing, and glow therapies, PCL delivers transformative patient confidence in a luxurious clinic environment.
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
              <source src="/pcl/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#28282e]/80 via-[#28282e]/20 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-[#f43f5e] text-[12px] font-extrabold uppercase tracking-widest mb-2 block">
                Sedation Dentistry Commercial
              </span>
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Relaxing, Pain-Free Smile Transformations.
              </h2>
            </div>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#e11d48]">Portfolio Directory</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore Clinic Showcase</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Showcase' },
              { id: 'skin', label: 'Skin Care & Dermatology' },
              { id: 'dental', label: 'Dental & Sedation' },
              { id: 'reels', label: 'Video Showcase' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-extrabold uppercase tracking-wider transition duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#e11d48] text-white shadow-md'
                    : 'bg-white border border-[#ebdcb9]/40 text-[#28282e] hover:bg-[#ebdcb9]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 1: PRODUCT & CLINIC SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'skin' || activeTab === 'dental') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#e11d48]">Aesthetic Portfolio</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Dental &amp; Skincare Campaigns</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Full gallery of Allora skincare ads, sedation dentistry patient guides, and clinical aesthetic treatments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageShowcase
                .filter((item) => activeTab === 'all' || activeTab === item.category)
                .map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveLightboxItem(item)
                    }}
                    className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#e11d48]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#faf9f5]">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <span className="bg-white text-[#28282e] text-[12px] font-black uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          View Creative
                        </span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#e11d48]">
                        {item.subtitle}
                      </span>
                      <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#e11d48] transition duration-300">
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

        {/* SECTION 2: VIDEO REELS */}
        {(activeTab === 'all' || activeTab === 'reels') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#e11d48]">Cinematic Motion</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Video &amp; Commercial Reels</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-definition commercials, sedation dentistry walkthroughs, and skincare social reels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoReels.map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(video)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-4 border border-[#ebdcb9]/40 hover:border-[#e11d48]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                        <span className="h-2 w-2 rounded-full bg-[#f43f5e] animate-pulse"></span>
                        HD Commercial
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#f43f5e] font-bold uppercase tracking-wider block">
                          {video.subtitle}
                        </span>
                        <h4 className="text-[18px] font-extrabold leading-tight mt-0.5">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[13px] text-muted font-medium line-clamp-2">{video.description}</p>
                    <span className="inline-flex items-center gap-1 text-[12px] font-black uppercase text-[#e11d48] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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
            Transform your clinic's patient reach today.
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Partner with PCL for high-converting sedation dentistry campaigns and aesthetic skincare branding.
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
                Inquire &amp; Book Consultation
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
