import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface AuroCoinCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'platform' | 'staking' | 'reels'
  description?: string
}

export function AuroCoinCaseStudy({ isOpen, onClose }: AuroCoinCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'platform' | 'staking' | 'reels'>('all')
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
      src: '/aurocoin/hero-image.webp',
      title: 'AuroCoin Layer-1 Decentralized Protocol',
      subtitle: 'Next-Generation Smart Contract Platform',
      type: 'image',
      category: 'platform',
      description: 'High-throughput Layer-1 blockchain ecosystem engineered for institutional DeFi, instant micro-settlements, and yield generation.',
    },
  ]

  const videoReels: LightboxItem[] = [
    {
      src: '/aurocoin/hero-video.mp4',
      title: 'AuroCoin Autonomous Blockchain Motion Reveal',
      subtitle: 'Cryptographic Protocol Feature Film',
      type: 'video',
      category: 'reels',
      description: 'High-energy 3D motion advertisement capturing global node consensus, staking rewards, and secure asset liquidity.',
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
      className="fixed inset-0 z-[100] h-full w-full bg-[#0a0a0f] overflow-y-auto overflow-x-hidden text-white font-sans antialiased selection:bg-[#f59e0b] selection:text-black"
    >
      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl p-4 md:p-8 flex flex-col justify-between items-center animate-fadeIn select-none"
          onClick={() => setActiveLightboxItem(null)}
        >
          {/* Top Header */}
          <div className="w-full max-w-6xl flex justify-between items-center text-white py-2 z-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black px-3 py-1 rounded-full">
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
      <header className="sticky top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10">
        <div className="site-container py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-extrabold tracking-widest uppercase bg-[#f59e0b] text-black px-3 py-1 rounded-full">
              Case Study
            </span>
            <span className="text-[14px] font-bold text-white/60 hidden sm:inline">Decentralized Finance &amp; Smart Contract Infrastructure</span>
          </div>
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-[14px] font-black uppercase tracking-wider text-white hover:opacity-70 transition duration-300"
          >
            Close
            <span className="grid h-[36px] w-[36px] place-items-center rounded-full border border-white/20 bg-white/10 group-hover:rotate-90 duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="site-container py-12 md:py-20">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-20 items-end border-b border-white/10 pb-12">
          <div>
            <h1 className="text-[40px] md:text-[80px] font-black leading-[0.9] tracking-tight text-white">
              AuroCoin <br />
              <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                Protocol.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-white/60 leading-snug max-w-[600px]">
              Decentralized autonomous currency, ultra-fast smart contract engine, institutional liquidity, and cross-chain yield protocols.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#f59e0b] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-white">Smart Contracts, DeFi Protocol</span>
            </div>
            <div>
              <span className="text-[#f59e0b] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-white">AuroCoin Foundation</span>
            </div>
            <div>
              <span className="text-[#f59e0b] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-white">2026</span>
            </div>
            <div>
              <span className="text-[#f59e0b] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-white">Blockchain &amp; Web3 Tech</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-black/60 border border-white/10 shadow-2xl p-4 md:p-8">
            <img
              src="/aurocoin/hero-image.webp"
              alt="AuroCoin Blockchain Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none text-white">Cryptographic Speed &amp; Financial Sovereignty</h2>
            <p className="text-[14px] md:text-[18px] text-white/70 leading-relaxed font-medium">
              AuroCoin redefines Web3 architecture through sub-second transaction finality, zero-knowledge privacy proofs, and automated yield farming. Built for global scale, AuroCoin empowers decentralized finance applications with military-grade asset security.
            </p>
          </div>
        </section>

        {/* Master Video Reel Section */}
        <section className="mt-20 md:mt-28">
          <div className="relative aspect-[21/9] rounded-[20px] md:rounded-[40px] overflow-hidden border border-white/10 bg-black">
            <video
              className="absolute left-0 top-0 w-full h-full object-cover"
              playsInline
              autoPlay
              loop
              muted
              preload="auto"
            >
              <source src="/aurocoin/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-2 block">
                3D Motion Cinema
              </span>
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                The Future of Decentralized Yield.
              </h2>
            </div>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#f59e0b]">Blockchain Portfolio</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1 text-white">Explore Protocol Assets</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Assets' },
              { id: 'platform', label: 'Layer-1 Engine' },
              { id: 'reels', label: 'Video Motion' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-extrabold uppercase tracking-wider transition duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#f59e0b] text-black shadow-md'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 1: PRODUCT SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'platform') && (
          <section className="mt-12 md:mt-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageShowcase.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white/5 rounded-[28px] p-5 border border-white/10 hover:border-[#f59e0b]/50 shadow-lg hover:shadow-2xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-black">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="bg-[#f59e0b] text-black text-[12px] font-black uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        Inspect UI
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#f59e0b]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-white mt-1 group-hover:text-[#f59e0b] transition duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-white/60 font-medium mt-2 line-clamp-2">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoReels.map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(video)
                  }}
                  className="group cursor-pointer bg-white/5 rounded-[28px] p-4 border border-white/10 hover:border-[#f59e0b]/50 shadow-lg hover:shadow-2xl transition duration-500 flex flex-col justify-between"
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
                        <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
                        HD Video Reel
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#f59e0b] font-bold uppercase tracking-wider block">
                          {video.subtitle}
                        </span>
                        <h4 className="text-[18px] font-extrabold leading-tight mt-0.5">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[13px] text-white/60 font-medium line-clamp-2">{video.description}</p>
                    <span className="inline-flex items-center gap-1 text-[12px] font-black uppercase text-[#f59e0b] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
                      Watch Video
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
        <section className="mt-20 md:mt-32 text-center border-t border-white/10 pt-16 pb-8">
          <h2 className="text-[32px] md:text-[60px] font-black tracking-tight leading-none text-white">
            Build your Web3 ecosystem with AuroCoin.
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-white/60 max-w-[500px] mx-auto font-medium">
            Partner with AuroCoin Foundation for decentralized smart contract integration and tokenomics design.
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
              <span className="hireOurTeamTitle rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[18px] font-bold text-white">
                Inquire &amp; Build Web3 Protocol
              </span>
              <span className="hireOurTeamArrow grid h-[43px] w-[43px] place-items-center rounded-full bg-[#f59e0b]">
                <svg className="h-[11px] w-[11px]" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.5H11M11 6.5L5.93606 1M11 6.5L5.93606 12" stroke="black" strokeWidth="2" />
                </svg>
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
