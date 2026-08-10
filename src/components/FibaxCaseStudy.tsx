import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface FibaxCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image' | 'video'
  category: 'product' | 'artboard' | 'slider' | 'motion'
  description?: string
}

export function FibaxCaseStudy({ isOpen, onClose }: FibaxCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'product' | 'artboard' | 'slider' | 'motion'>('all')
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

  const productFormulations: LightboxItem[] = [
    {
      src: '/fibax/fp enzyme.jpg',
      title: 'FP Enzyme Digestive Tonic',
      subtitle: 'Ayurvedic Digestive Care',
      type: 'image',
      category: 'product',
      description: 'Natural herbal enzyme formulation for digestive wellness, appetite stimulation, and gut health.',
    },
    {
      src: '/fibax/fp enzyme-1.jpg',
      title: 'FP Enzyme Bottle Presentation',
      subtitle: 'Syrup Packaging Design',
      type: 'image',
      category: 'product',
      description: 'Custom amber glass bottle with UV-sealed protective label and measuring cap design.',
    },
    {
      src: '/fibax/fp enzyme-2.jpg',
      title: 'FP Enzyme Box & Label Collateral',
      subtitle: 'Outer Carton Architecture',
      type: 'image',
      category: 'product',
      description: 'High-contrast typography carton layout with clear botanical ingredients and dosage guidelines.',
    },
    {
      src: '/fibax/axe ortho pain syrup copy.jpg',
      title: 'Axe Ortho Pain Relief Syrup',
      subtitle: 'Joint & Muscle Care',
      type: 'image',
      category: 'product',
      description: 'Potent herbal anti-inflammatory syrup designed for joint mobility and muscular comfort.',
    },
    {
      src: '/fibax/fib-ortho.jpg',
      title: 'Fib-Ortho Active Care',
      subtitle: 'Therapeutic Herb Formulation',
      type: 'image',
      category: 'product',
      description: 'Concentrated herbal extract bottle focusing on cartilage health and active lifestyle support.',
    },
    {
      src: '/fibax/Cough Syurp.jpg',
      title: 'Herbal Cough & Bronchial Relief',
      subtitle: 'Respiratory Wellness Syrup',
      type: 'image',
      category: 'product',
      description: 'Tulsi and Adulsa enriched throat soothing syrup with natural honey base.',
    },
    {
      src: '/fibax/botal triphla.jpg',
      title: 'Triphala Natural Detoxifier',
      subtitle: 'Traditional Herbal Extract',
      type: 'image',
      category: 'product',
      description: 'Pure Amla, Haritaki, and Bibhitaki extract blend for cellular rejuvenation and gut cleansing.',
    },
    {
      src: '/fibax/fibocid.jpg',
      title: 'Fibocid Rapid Antacid Liquid',
      subtitle: 'Hyperacidity & Reflux Relief',
      type: 'image',
      category: 'product',
      description: 'Mint-flavored cooling antacid suspension for immediate gastric comfort.',
    },
    {
      src: '/fibax/immunity booster.jpg',
      title: 'Immunity Shield Health Tonic',
      subtitle: 'Vitality & Protection Formula',
      type: 'image',
      category: 'product',
      description: 'Giloy, Ashwagandha, and Vitamin C fortified syrup for daily immune system defense.',
    },
    {
      src: '/fibax/multi-vitamin-.jpg',
      title: 'Multi-Vitamin Energy Elixir',
      subtitle: 'Daily Nutritional Supplement',
      type: 'image',
      category: 'product',
      description: 'Essential micronutrients and trace minerals blend to combat fatigue and boost daily stamina.',
    },
    {
      src: '/fibax/winter care-1.jpg',
      title: 'Winter Wellness Seasonal Shield',
      subtitle: 'Cold & Flu Protection',
      type: 'image',
      category: 'product',
      description: 'Seasonal immune booster enriched with natural antioxidant berries and ginger extracts.',
    },
  ]

  const artboardsAndPackaging: LightboxItem[] = [
    {
      src: '/fibax/Artboard 1.png',
      title: 'Fibax Pharma Brand Identity Artboard 01',
      subtitle: 'Logo & Color Token System',
      type: 'image',
      category: 'artboard',
      description: 'Corporate pharmaceutical identity guidelines, teal and emerald brand colors, and typography standards.',
    },
    {
      src: '/fibax/Artboard 4.png',
      title: 'Packaging Carton Die-Line Artboard 04',
      subtitle: 'Print Production Specs',
      type: 'image',
      category: 'artboard',
      description: 'Precise packaging die-cuts, foil stamping callouts, and pharma regulatory compliance markings.',
    },
    {
      src: '/fibax/Artboard 5.png',
      title: 'Product Family Lineup Artboard 05',
      subtitle: 'Carton Architecture',
      type: 'image',
      category: 'artboard',
      description: 'Unified visual hierarchy across liquid tonics, syrups, and wellness capsule outer boxes.',
    },
    {
      src: '/fibax/Artboard 6.png',
      title: 'Label Design Typography Artboard 06',
      subtitle: 'Front & Back Label Layout',
      type: 'image',
      category: 'artboard',
      description: 'Micro-typography alignment for active ingredient tables, manufacturing licenses, and barcodes.',
    },
    {
      src: '/fibax/Artboard 7.png',
      title: 'Ayurvedic Product Series Artboard 07',
      subtitle: 'Herbal Line Identity',
      type: 'image',
      category: 'artboard',
      description: 'Earth-tone branding accents for traditional herbal remedies and botanical wellness lines.',
    },
    {
      src: '/fibax/Artboard 8.png',
      title: 'Retail Display Box Artboard 08',
      subtitle: 'Countertop POP Display',
      type: 'image',
      category: 'artboard',
      description: 'Point-of-sale display carton design for pharmacy counter visibility and impulse purchase engagement.',
    },
    {
      src: '/fibax/Artboard 9.png',
      title: 'Medical Representative Detailer Artboard 09',
      subtitle: 'Doctor Presentation Deck',
      type: 'image',
      category: 'artboard',
      description: 'Clinical trial highlights, mechanism of action graphics, and physician detailing collateral.',
    },
    {
      src: '/fibax/Artboard 10.png',
      title: 'Fibax Corporate Brochure Artboard 10',
      subtitle: 'Enterprise Marketing',
      type: 'image',
      category: 'artboard',
      description: 'GMP facility certification showcase, R&D capabilities, and global distribution network overview.',
    },
    {
      src: '/fibax/Artboard 11.png',
      title: 'Syrup Bottle Label System Artboard 11',
      subtitle: 'Waterproof Synthetic Label',
      type: 'image',
      category: 'artboard',
      description: 'Moisture-resistant metallic foil label design for pharmaceutical glass and PET bottles.',
    },
    {
      src: '/fibax/Artboard 12.png',
      title: 'Wellness Supplements Artboard 12',
      subtitle: 'Nutraceutical Brand Extension',
      type: 'image',
      category: 'artboard',
      description: 'Modern lifestyle wellness aesthetic tailored for young professionals and health-conscious consumers.',
    },
    {
      src: '/fibax/Artboard 13.png',
      title: 'Product Launch Campaign Artboard 13',
      subtitle: 'Marketing Visual Assets',
      type: 'image',
      category: 'artboard',
      description: 'High-impact product launch banners engineered for print trade publications and digital ads.',
    },
    {
      src: '/fibax/Artboard 14.png',
      title: 'Pharma Exhibition Booth Artboard 14',
      subtitle: 'Trade Show Architecture',
      type: 'image',
      category: 'artboard',
      description: 'Large-format environmental graphics, backdrops, and product podium displays for pharma expos.',
    },
    {
      src: '/fibax/Artboard 15.png',
      title: 'Quality Assurance System Artboard 15',
      subtitle: 'ISO & WHO-GMP Standards',
      type: 'image',
      category: 'artboard',
      description: 'Visual compliance infographics illustrating 100% batch testing and zero-contamination protocols.',
    },
    {
      src: '/fibax/Artboard 16.png',
      title: 'Doctor Prescribing Guide Artboard 16',
      subtitle: 'Clinical Dosage Matrix',
      type: 'image',
      category: 'artboard',
      description: 'Quick-reference dosage charts and indication guides designed for general practitioners.',
    },
    {
      src: '/fibax/Artboard 17.png',
      title: 'Fibax Master Brand Guidelines Artboard 17',
      subtitle: 'Brand Governance Manual',
      type: 'image',
      category: 'artboard',
      description: 'Master rulebook defining logo clear zones, co-branding rules, and packaging print specifications.',
    },
  ]

  const campaignSliders: LightboxItem[] = [
    {
      src: '/fibax/Fibax-slider-1.jpg',
      title: 'Fibax Natural Health Hero Banner 01',
      subtitle: 'Digital Website & Ad Slider',
      type: 'image',
      category: 'slider',
      description: 'Wide-format promotional hero slider showcasing the core Ayurvedic product lineup with botanical imagery.',
    },
    {
      src: '/fibax/Fibax-slider-2.jpg',
      title: 'Fibax Herbal Wellness Hero Banner 02',
      subtitle: 'Digital Website & Ad Slider',
      type: 'image',
      category: 'slider',
      description: 'Promotional slider focusing on digestive care, orthopaedic syrups, and daily immunity boosters.',
    },
  ]

  const motionVideos: LightboxItem[] = [
    {
      src: '/fibax/hero video.mp4',
      title: 'Fibax Pharma Official Master Film',
      subtitle: 'Cinematic Product Reel',
      type: 'video',
      category: 'motion',
      description: 'Official brand motion reel showcasing 3D bottle renders, automated liquid filling lines, and packaging reveals.',
    },
  ]

  const allLightboxItems: LightboxItem[] = [
    ...productFormulations,
    ...artboardsAndPackaging,
    ...campaignSliders,
    ...motionVideos,
  ]

  const currentLightboxIndex = activeLightboxItem
    ? allLightboxItems.findIndex((item) => item.src === activeLightboxItem.src)
    : -1



  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-full w-full bg-[#faf9f5] overflow-y-auto overflow-x-hidden text-[#28282e] font-sans antialiased selection:bg-[#059669] selection:text-white"
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
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Pharmaceutical Branding &amp; Herbal Formulations</span>
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
              Fibax <br />
              <span className="bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] bg-clip-text text-transparent">
                Pharma Systems.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Complete pharmaceutical brand identity, Ayurvedic syrup packaging, retail POP displays, and 3D product motion campaigns.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#059669] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Pharma Branding, Packaging, 3D Motion</span>
            </div>
            <div>
              <span className="text-[#059669] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Fibax Healthcare Group</span>
            </div>
            <div>
              <span className="text-[#059669] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#059669] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Pharmaceuticals &amp; Wellness</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/fibax/hero image.jpg"
              alt="Fibax Pharma Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">Pharmaceutical Design Architecture</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              Fibax Pharma combines clinical precision with natural botanical aesthetics. From outer carton die-lines to regulatory label compliance and 3D motion reels, Fibax sets a gold standard in modern healthcare packaging.
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
              <source src="/fibax/hero video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#28282e]/80 via-[#28282e]/20 to-transparent flex flex-col justify-end p-6 md:p-12">
              <span className="text-[#10b981] text-[12px] font-extrabold uppercase tracking-widest mb-2 block">
                Cinematic Product Film
              </span>
              <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-tight leading-none">
                Purity &amp; Scientific Innovation.
              </h2>
            </div>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#059669]">Portfolio Directory</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore Fibax Artifacts</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'product', label: 'Product Formulations' },
              { id: 'artboard', label: 'Packaging & Artboards' },
              { id: 'slider', label: 'Campaign Sliders' },
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

        {/* SECTION 1: PRODUCT FORMULATIONS */}
        {(activeTab === 'all' || activeTab === 'product') && (
          <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#059669]">Herbal Tonics &amp; Syrups</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Product Formulations</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Botanical digestive tonics, joint mobility syrups, herbal cough formulas, and daily multi-vitamin elixirs. Click any item to inspect packaging details.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productFormulations.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#059669]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#059669]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#059669] transition duration-300">
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

        {/* SECTION 2: PACKAGING & ARTBOARDS */}
        {(activeTab === 'all' || activeTab === 'artboard') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#059669]">Design Systems</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Packaging &amp; Artboard Suite</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Outer carton die-lines, brand guidelines, POP displays, doctor detailer decks, and regulatory print artwork.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {artboardsAndPackaging.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#059669]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#059669]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#059669] transition duration-300">
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

        {/* SECTION 3: CAMPAIGN SLIDERS */}
        {(activeTab === 'all' || activeTab === 'slider') && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#059669]">Digital Banners</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Brand Campaign Sliders</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Wide-aspect website headers, e-commerce banners, and promotional digital ad sliders.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
              {campaignSliders.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(item)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#059669]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[21/9] overflow-hidden rounded-[20px] bg-[#faf9f5]">
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
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#059669]">
                      {item.subtitle}
                    </span>
                    <h4 className="text-[20px] font-extrabold leading-tight text-[#28282e] mt-1 group-hover:text-[#059669] transition duration-300">
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
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#059669]">Video Showcase</span>
                <h3 className="text-[24px] md:text-[36px] font-black">Motion &amp; Product Video</h3>
              </div>
              <p className="text-[14px] text-muted font-medium max-w-md">
                Cinematic product motion video highlighting 3D renders, liquid filling automation, and packaging finishes.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-8">
              {motionVideos.map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveLightboxItem(video)
                  }}
                  className="group cursor-pointer bg-white rounded-[28px] p-5 border border-[#ebdcb9]/40 hover:border-[#059669]/50 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between"
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
                        <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse"></span>
                        HD Master Film
                      </span>
                      <div className="text-white">
                        <span className="text-[11px] text-[#10b981] font-bold uppercase tracking-wider block">
                          {video.subtitle}
                        </span>
                        <h4 className="text-[22px] font-extrabold leading-tight mt-0.5">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="text-[14px] text-muted font-medium">{video.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase text-[#059669] tracking-wider mt-3 group-hover:translate-x-1 transition duration-300">
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
            Ready to elevate your pharma brand?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Let's collaborate to build modern pharmaceutical packaging, 3D product motion, and regulatory brand design systems.
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
