import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface ScaloCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'menu' | 'graphic' | 'reel'
  description?: string
}

export function ScaloCaseStudy({ isOpen, onClose }: ScaloCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'menus' | 'posts' | 'reels'>('all')
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

  const menuItems: LightboxItem[] = [
    {
      src: '/scalo/Bar food menu-cr.webp',
      title: 'Scalo Bar & Bites Menu',
      subtitle: 'Editorial Print Collateral',
      type: 'image',
      category: 'menu',
      description: 'Handcrafted bar snacks, specialty tapas, and artisanal craft beers presented in a clean two-column serif layout.',
    },
    {
      src: '/scalo/lounge menu.webp',
      title: 'Scalo Lounge & Spirits',
      subtitle: 'Beverage & Cocktail Program',
      type: 'image',
      category: 'menu',
      description: 'Comprehensive wine list, signature smoked cocktails, and digestifs designed with warm charcoal and cream tones.',
    },
    {
      src: '/scalo/christmas menu.webp',
      title: 'Christmas Tasting Menu',
      subtitle: 'Holiday Edition Collateral',
      type: 'image',
      category: 'menu',
      description: 'Multi-course holiday feast menu highlighting festive ingredients, wine pairings, and bespoke winter typography.',
    },
    {
      src: '/scalo/new eve menu.webp',
      title: "New Year's Eve Gala Menu",
      subtitle: 'Exclusive Event Card',
      type: 'image',
      category: 'menu',
      description: 'Midnight champagne dinner paired with luxury seafood and truffle dishes in an elegant golden-bordered card.',
    },
  ]

  const graphicPosts: LightboxItem[] = [
    {
      src: '/scalo/scalo_post.webp',
      title: 'Scalo Core Identity Post',
      subtitle: 'Social Campaign Hero',
      type: 'image',
      category: 'graphic',
      description: 'Signature brand post setting the visual tone with warm terracotta gradients, editorial typography, and raw dining portraiture.',
    },
    {
      src: '/scalo/brunch.webp',
      title: 'Weekend Brunch Campaign',
      subtitle: 'Social Media Graphic',
      type: 'image',
      category: 'graphic',
      description: 'Sun-drenched morning dining campaign created for Instagram feed and digital display banners.',
    },
    {
      src: '/scalo/christmas post.webp',
      title: 'Holiday Season Promo Graphic',
      subtitle: 'Campaign Graphic',
      type: 'image',
      category: 'graphic',
      description: 'Warm festive atmosphere promotion focusing on private dining reservations and winter cocktail specials.',
    },
    {
      src: '/scalo/thanksgiving.webp',
      title: 'Thanksgiving Harvest Edition',
      subtitle: 'Special Edition Graphic',
      type: 'image',
      category: 'graphic',
      description: 'Rustic autumn color story celebrating seasonal farm-to-table roasted meats and artisanal sides.',
    },
    {
      src: '/scalo/pizza post.webp',
      title: 'Artisanal Pizza Event Graphic',
      subtitle: 'High-Impact Social Reel Cover',
      type: 'image',
      category: 'graphic',
      description: 'High-contrast typography paired with close-up woodfired crust textures to drive evening booking conversions.',
    },
    {
      src: '/scalo/pizza.webp',
      title: 'Neapolitan Sourdough Feature',
      subtitle: 'Culinary Photography Graphic',
      type: 'image',
      category: 'graphic',
      description: 'Macro focus on 48-hour fermented dough, San Marzano tomato glaze, and fresh buffalo mozzarella.',
    },
  ]

  const videoReels: LightboxItem[] = [
    {
      src: '/scalo/intro.mp4',
      title: 'Scalo Brand Atmosphere Intro',
      subtitle: 'Cinematic Teaser Reel',
      type: 'video',
      category: 'reel',
      description: 'Atmospheric slow-motion cuts of kitchen prep, flame flare-ups, and ambient dining room lighting.',
    },
    {
      src: '/scalo/final reel.mp4',
      title: 'Master Promotional Campaign Reel',
      subtitle: 'Full Brand Film',
      type: 'video',
      category: 'reel',
      description: 'Comprehensive high-energy showcase combining mixology speedcraft, plating detail, and customer ambiance.',
    },
    {
      src: '/scalo/Scalo Bar.mp4',
      title: 'Mixology & Craft Bar Experience',
      subtitle: 'Social Video Reel',
      type: 'video',
      category: 'reel',
      description: 'Close-up ice carving, spirit pours, and smoked rosemary cocktail assembly.',
    },
    {
      src: '/scalo/Pizza short.mp4',
      title: 'Woodfired Pizza Craft',
      subtitle: 'Kitchen Action Loop',
      type: 'video',
      category: 'reel',
      description: 'Dynamic 900-degree oven blistering and knife slice crunch audio-visual reel.',
    },
    {
      src: '/scalo/thanksgiving.mp4',
      title: 'Festive Feast Experience',
      subtitle: 'Seasonal Campaign Video',
      type: 'video',
      category: 'reel',
      description: 'Rich holiday table spreads and family-style service storytelling.',
    },
    {
      src: '/scalo/permotional scalo.mp4',
      title: 'Culinary Craft & Plating Reel',
      subtitle: 'Chef Showcase Film',
      type: 'video',
      category: 'reel',
      description: 'Detailed pass-counter plating precision and micro-green garnishing sequence.',
    },
  ]

  const allLightboxItems: LightboxItem[] = [
    ...menuItems,
    ...graphicPosts,
    ...videoReels,
  ]

  const currentLightboxIndex = activeLightboxItem
    ? allLightboxItems.findIndex((item) => item.src === activeLightboxItem.src)
    : -1



  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#e35122] selection:text-white"
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-[#e35122] text-white px-3 py-1 rounded-full">
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Premium Dining &amp; Brand Strategy</span>
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
              Scalo <br />
              <span className="bg-gradient-to-r from-[#e35122] via-[#f28e2b] to-[#bfa15f] bg-clip-text text-transparent">Restaurant.</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              A complete visual identity, editorial print menu suite, and social campaign architecture designed for a world-class culinary sanctuary.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#e35122] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Brand System, Menu Design, Social Campaigns</span>
            </div>
            <div>
              <span className="text-[#e35122] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Scalo Restaurant Group</span>
            </div>
            <div>
              <span className="text-[#e35122] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#e35122] uppercase tracking-wider block mb-1">Location</span>
              <span className="text-[#28282e]">New York, NY</span>
            </div>
          </div>
        </div>

        {/* Hero Branding Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/scalo/hero-section.webp"
              alt="Scalo Restaurant Brand Collage"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">The Visual Identity Architecture</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              We conceptualized a modern typographic palette blended with warm, organic lighting assets to emphasize raw luxury. From physical print menus to stylized social layouts and motion reels, Scalo represents a perfect marriage of high-end culinary craft and editorial brand presentation.
            </p>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#e35122]">Showcase Directory</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore Brand Artifacts</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'menus', label: 'Menu Showcase' },
              { id: 'posts', label: 'Graphic Posts' },
              { id: 'reels', label: 'Video Reels' },
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

        {/* SECTION 1: MENU SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'menus') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#e35122]">Print &amp; Digital Collateral</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Menu Showcase</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Bespoke typographic menu systems crafted for seasonal tasting menus, bar snacks, lounge spirit lists, and holiday galas. Click any menu to inspect in full resolution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white rounded-[24px] p-4 border border-[#ebdcb9]/40 hover:border-[#e35122]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-[#faf9f5]">
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
                  <div className="mt-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#e35122]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[18px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#e35122] transition duration-300">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: GRAPHIC POSTS & SOCIAL CAMPAIGN SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'posts') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#e35122]">Social &amp; Editorial Campaigns</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Graphic Post Showcase</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-converting campaign graphics engineered to highlight special seasonal events, brunch launch stories, and signature woodfired pizza nights.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {graphicPosts.map((post, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(post)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#e35122]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#e35122]">
                      {post.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#e35122] transition duration-300">
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

        {/* SECTION 3: CINEMATIC REELS & VIDEO SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'reels') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#e35122]">Motion &amp; Video Direction</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Video Reel Showcase</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                High-definition culinary motion shorts capturing bar mixology, woodfired ovens, pass-counter plating, and dining room atmosphere.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoReels.map((reel, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(reel)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-4 border border-[#ebdcb9]/40 hover:border-[#e35122]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[9/16] max-h-[480px] overflow-hidden rounded-[20px] bg-black">
                    <video
                      src={reel.src}
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-4 flex flex-col justify-between">
                      <span className="self-end bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#e35122] animate-pulse"></span>
                        HD Motion Reel
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#f28e2b] font-bold uppercase tracking-wider block">
                          {reel.subtitle}
                        </span>
                        <h4 className="text-[18px] font-extrabold leading-tight mt-0.5">{reel.title}</h4>
                      </div>
                    </div>
                  </div>
                    <div className="mt-4 px-1">
                      <p className="text-[13px] text-muted font-medium line-clamp-2">{reel.description}</p>
                      <span className="inline-flex items-center gap-1 text-[12px] font-black uppercase text-[#e35122] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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

        {/* Feature: Curated Gastronomy Plated Cards */}
        <section className="mt-20 md:mt-32">
          <div className="bg-[#ebdcb9]/10 rounded-[30px] p-6 md:p-12 border border-[#ebdcb9]/30">
            <h2 className="text-[30px] md:text-[48px] font-black leading-none mb-10 text-center">Curated Gastronomy</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-[20px] border border-[#ebdcb9]/30 shadow-sm">
                <div className="overflow-hidden rounded-[15px]">
                  <img
                    src="/scalo/Bruschetta.webp"
                    alt="Plated Bruschetta"
                    className="w-full aspect-[1/1] object-cover rounded-[15px] hover:scale-[1.03] duration-500"
                  />
                </div>
                <h4 className="text-[18px] font-extrabold mt-4">Plated Bruschetta</h4>
                <p className="text-[13px] text-muted mt-1">Heirloom cherry tomatoes, fresh sweet basil, garlic-rubbed sourdough bread, and premium extra virgin olive oil.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 rounded-[20px] border border-[#ebdcb9]/30 shadow-sm">
                <div className="overflow-hidden rounded-[15px]">
                  <img
                    src="/scalo/Seabass.webp"
                    alt="Seared Sea Bass"
                    className="w-full aspect-[1/1] object-cover rounded-[15px] hover:scale-[1.03] duration-500"
                  />
                </div>
                <h4 className="text-[18px] font-extrabold mt-4">Chilean Sea Bass</h4>
                <p className="text-[13px] text-muted mt-1">Crispy skin-on fillet, white wine reduction sauce, tender asparagus spears, and micro-parsley garnish.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 rounded-[20px] border border-[#ebdcb9]/30 shadow-sm">
                <div className="overflow-hidden rounded-[15px]">
                  <img
                    src="/scalo/cover.webp"
                    alt="Signature Dining Room"
                    className="w-full aspect-[1/1] object-cover rounded-[15px] hover:scale-[1.03] duration-500"
                  />
                </div>
                <h4 className="text-[18px] font-extrabold mt-4">Intimate Ambiance</h4>
                <p className="text-[13px] text-muted mt-1">Modern, warm mood-lit interiors highlighting tactile stone materials and bespoke furniture finishes.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Feature: Master Hero Video Loop Banner */}
        <section className="mt-20 md:mt-32">
          <div className="relative aspect-[21/9] rounded-[20px] md:rounded-[40px] overflow-hidden border border-[#ebdcb9]/30">
            <video
              className="absolute left-0 top-0 w-full h-full object-cover"
              playsInline
              autoPlay
              loop
              muted
              preload="auto"
            >
              <source src="/scalo/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#28282e]/40 flex flex-col justify-end p-6 md:p-12">
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Bespoke Dining Aesthetics.
              </h2>
            </div>
          </div>
        </section>

        {/* Closing Case Study Block */}
        <section className="mt-20 md:mt-32 text-center border-t border-[#ebdcb9]/50 pt-16 pb-8">
          <h2 className="text-[32px] md:text-[60px] font-black tracking-tight leading-none">
            Ready to design your concept?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build highly curated visual campaigns and signature restaurant identities.
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
                Inquire &amp; Design
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

