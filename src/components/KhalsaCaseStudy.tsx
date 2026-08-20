import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface KhalsaCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'services' | 'campaign' | 'infographic' | 'motion'
  description?: string
}

export function KhalsaCaseStudy({ isOpen, onClose }: KhalsaCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'services' | 'campaign' | 'infographic' | 'motion'>('all')
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

  const serviceShowcase: LightboxItem[] = [
    {
      src: '/khalsa/khalsa p2.webp',
      title: 'Global Visa & Express Entry Overview',
      subtitle: 'Immigration Services Suite',
      type: 'image',
      category: 'services',
      description: 'Comprehensive consultancy roadmap for permanent residency, work permits, and student visa pathways.',
    },
    {
      src: '/khalsa/khalsa p3.webp',
      title: 'Study Permit & Campus Placement',
      subtitle: 'Education & Student Visas',
      type: 'image',
      category: 'services',
      description: 'Structured university placement strategy, SOP assistance, and study permit documentation system.',
    },
    {
      src: '/khalsa/khalsa P5.webp',
      title: 'Business & Investor Visa Programs',
      subtitle: 'Corporate Immigration Strategy',
      type: 'image',
      category: 'services',
      description: 'Bespoke investor visa, startup visa, and business expansion immigration consultation.',
    },
    {
      src: '/khalsa/khalsa P6.webp',
      title: 'Family Sponsorship & Super Visas',
      subtitle: 'Family Reunification',
      type: 'image',
      category: 'services',
      description: 'Streamlined parental super visa and spouse sponsorship documentation guidelines.',
    },
    {
      src: '/khalsa/khalsa P7.webp',
      title: 'PNP & Provincial Nomination Guide',
      subtitle: 'Regional Immigration Pathways',
      type: 'image',
      category: 'services',
      description: 'Provincial Nominee Program (PNP) targeting skilled workers, tech talent, and healthcare professionals.',
    },
  ]

  const campaignPosts: LightboxItem[] = [
    {
      src: '/khalsa/post-1.webp',
      title: 'Express Entry Draw Update',
      subtitle: 'Social Media Campaign',
      type: 'image',
      category: 'campaign',
      description: 'Latest CRS score trends and targeted category draws for skilled professionals.',
    },
    {
      src: '/khalsa/post-2.webp',
      title: 'Student Visa Success Spotlight',
      subtitle: 'Client Approval Story',
      type: 'image',
      category: 'campaign',
      description: 'High-conversion approval post celebrating international student visa success stories.',
    },
    {
      src: '/khalsa/post-4.webp',
      title: 'Work Permit Extension Rules',
      subtitle: 'Regulatory Advisory Graphic',
      type: 'image',
      category: 'campaign',
      description: 'Important updates regarding open work permits, LMIA exemptions, and post-graduate work permits (PGWP).',
    },
    {
      src: '/khalsa/post-5.webp',
      title: 'PR Pathway for Healthcare Workers',
      subtitle: 'Targeted Stream Campaign',
      type: 'image',
      category: 'campaign',
      description: 'Dedicated campaign highlighting priority PR pathways for nurses, doctors, and care providers.',
    },
    {
      src: '/khalsa/post-6.webp',
      title: 'Tech Talent Visa Fast-Track',
      subtitle: 'Innovation & Tech Stream',
      type: 'image',
      category: 'campaign',
      description: 'Specialized visa guidance for software engineers, data analysts, and IT professionals.',
    },
    {
      src: '/khalsa/post-8.webp',
      title: 'Visitor to Work Permit Conversion',
      subtitle: 'Policy Update Post',
      type: 'image',
      category: 'campaign',
      description: 'Step-by-step breakdown of temporary policy extensions for visitor visa holders.',
    },
    {
      src: '/khalsa/post-9.webp',
      title: 'IELTS & Language Proficiency Tips',
      subtitle: 'Educational Campaign',
      type: 'image',
      category: 'campaign',
      description: 'Language benchmark requirements (CLB 7/8/9) for max Express Entry points.',
    },
    {
      src: '/khalsa/post-10.webp',
      title: 'Seasonal Agri-Worker Placement',
      subtitle: 'Skilled Trades Campaign',
      type: 'image',
      category: 'campaign',
      description: 'Agricultural and trade sector employment visa guidance.',
    },
    {
      src: '/khalsa/post-11.webp',
      title: 'Spousal Open Work Permit Guide',
      subtitle: 'Family Sponsorship Feature',
      type: 'image',
      category: 'campaign',
      description: 'Work authorization options for spouses of international students and skilled workers.',
    },
    {
      src: '/khalsa/post-12.webp',
      title: 'Citizenship Eligibility Checklist',
      subtitle: 'Final Pathway Advisory',
      type: 'image',
      category: 'campaign',
      description: 'Physical presence requirements, tax compliance, and citizenship test preparation.',
    },
    {
      src: '/khalsa/post-14.webp',
      title: 'Khalsa Immigration Consultation Drive',
      subtitle: 'Brand Promotional Campaign',
      type: 'image',
      category: 'campaign',
      description: 'Call-to-action campaign inviting prospective applicants for 1-on-1 expert assessment.',
    },
  ]

  const motionVideos: LightboxItem[] = [
    {
      src: '/khalsa/hero video.mp4',
      title: 'Khalsa Immigration Master Film',
      subtitle: 'Cinematic Brand Reel',
      type: 'video',
      category: 'motion',
      description: 'Official brand overview video showcasing global visa consultation, client testimonials, and immigration success milestones.',
    },
  ]

  const allLightboxItems: LightboxItem[] = [
    ...serviceShowcase,
    ...campaignPosts,
    ...motionVideos,
  ]

  const currentLightboxIndex = activeLightboxItem
    ? allLightboxItems.findIndex((item) => item.src === activeLightboxItem.src)
    : -1



  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#d97706] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Global Visa &amp; Immigration Services</span>
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
              Khalsa <br />
              <span className="bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Immigration.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Comprehensive global immigration consultancy branding, visa strategy, client approval stories, and high-impact social campaigns.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#d97706] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Visa Strategy, Brand Identity, Social Campaigns</span>
            </div>
            <div>
              <span className="text-[#d97706] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Khalsa Immigration Consultancy</span>
            </div>
            <div>
              <span className="text-[#d97706] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#d97706] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Global Mobility &amp; Legal Advisory</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/khalsa/hero image.webp"
              alt="Khalsa Immigration Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">Trusted Global Mobility Brand</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              Khalsa Immigration delivers expert advisory for international students, skilled workers, business investors, and families seeking permanent residency. From educational campaign series to transparent policy updates, Khalsa empowers dreams worldwide.
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
              <source src="/khalsa/hero video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#28282e]/80 via-[#28282e]/20 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-2 block">
                Cinematic Brand Video
              </span>
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Empowering Your Global Journey.
              </h2>
            </div>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#d97706]">Portfolio Directory</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore Khalsa Artifacts</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'services', label: 'Immigration Services' },
              { id: 'campaign', label: 'Social & Campaign Posts' },
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

        {/* SECTION 1: IMMIGRATION SERVICES */}
        {(activeTab === 'all' || activeTab === 'services') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#d97706]">Visa Pathways</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Core Immigration Services</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Detailed service guides for Express Entry, PNP draws, student permits, investor streams, and family reunification.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceShowcase.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#d97706]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d97706]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#d97706] transition duration-300">
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

        {/* SECTION 2: SOCIAL & CAMPAIGN POSTS */}
        {(activeTab === 'all' || activeTab === 'campaign') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#d97706]">Social Media &amp; Awareness</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Social Campaign Posts</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-engagement social campaign posts, policy update infographics, client approval stories, and visa eligibility guides.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaignPosts.map((post, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(post)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#d97706]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d97706]">
                      {post.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#d97706] transition duration-300">
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

        {/* SECTION 3: MOTION REELS */}
        {(activeTab === 'all' || activeTab === 'motion') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#d97706]">Video Showcase</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Motion &amp; Video Reel</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Official brand film showcasing client success stories, immigration consultation environment, and global mobility services.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
              {motionVideos.map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(video)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#d97706]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                        <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
                        HD Master Film
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#f59e0b] font-bold uppercase tracking-wider block">
                          {video.subtitle}
                        </span>
                        <h4 className="text-[22px] font-extrabold leading-tight mt-0.5">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                    <div className="mt-4 px-1">
                      <p className="text-[14px] text-muted font-medium">{video.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#d97706] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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
            Ready to start your visa journey?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build transparent, high-converting immigration brand experiences and client success stories.
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
                Inquire &amp; Consult
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
