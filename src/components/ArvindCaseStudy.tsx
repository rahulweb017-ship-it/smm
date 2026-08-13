import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface ArvindCaseStudyProps {
  isOpen: boolean
  onClose: () => void
}

interface LightboxItem {
  src: string
  title: string
  subtitle: string
  type: 'image'
  category: 'supplements' | 'aqua' | 'ayurvedic'
  description?: string
}

export function ArvindCaseStudy({ isOpen, onClose }: ArvindCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'supplements' | 'aqua' | 'ayurvedic'>('all')
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
          const curIdx = productShowcase.findIndex((i) => i.src === current.src)
          if (curIdx === -1) return current
          const prevIdx = (curIdx - 1 + productShowcase.length) % productShowcase.length
          return productShowcase[prevIdx]
        })
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setActiveLightboxItem((current) => {
          if (!current) return null
          const curIdx = productShowcase.findIndex((i) => i.src === current.src)
          if (curIdx === -1) return current
          const nextIdx = (curIdx + 1) % productShowcase.length
          return productShowcase[nextIdx]
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

  const productShowcase: LightboxItem[] = [
    {
      src: '/arvind/font page book let.webp',
      title: 'Arvind Herbal Labs Master Product Catalogue',
      subtitle: 'Official Product Portfolio & Science Guide',
      type: 'image',
      category: 'ayurvedic',
      description: 'Comprehensive product catalog showcasing bio-herbal feed additives, Ayurvedic health tonics, and natural livestock nutrition formulations.',
    },
    {
      src: '/arvind/arviliv.webp',
      title: 'Arviliv Liver Tonic & Detoxifier',
      subtitle: 'Herbal Hepato-Protective Solution',
      type: 'image',
      category: 'ayurvedic',
      description: 'Potent Ayurvedic liver supplement formulated to enhance metabolic function, improve digestion, and boost immunity in poultry and livestock.',
    },
    {
      src: '/arvind/Arvimix.webp',
      title: 'Arvimix Vitamin & Mineral Premix',
      subtitle: 'Essential Nutrition Fortifier',
      type: 'image',
      category: 'supplements',
      description: 'Balanced bio-available trace minerals and essential vitamins engineered for optimum growth, egg production, and feed efficiency.',
    },
    {
      src: '/arvind/A-lysine.webp',
      title: 'A-Lysine Herbal Amino Booster',
      subtitle: 'Natural Protein Synthesizer',
      type: 'image',
      category: 'supplements',
      description: 'Natural herbal alternative to synthetic L-Lysine for rapid muscle development, weight gain, and bio-enhanced protein absorption.',
    },
    {
      src: '/arvind/Ayur-c Cool.webp',
      title: 'Ayur-C Cool Anti-Stress Formula',
      subtitle: 'Natural Bio-Vitamin C & Heat Relief',
      type: 'image',
      category: 'ayurvedic',
      description: 'Pure bio-herbal anti-stress tonic enriched with natural Vitamin C to combat summer heat stress and bolster natural immunity.',
    },
    {
      src: '/arvind/Cal-D boost Page-1.webp',
      title: 'Cal-D Boost Liquid Calcium',
      subtitle: 'Bone Strength & Eggshell Quality',
      type: 'image',
      category: 'supplements',
      description: 'High-potency liquid calcium with Vitamin D3 and Phosphorus for robust skeletal growth and thick, break-resistant eggshell formation.',
    },
    {
      src: '/arvind/haematic plus front.webp',
      title: 'Haematic Plus Blood Purifier',
      subtitle: 'Iron & Hemoglobin Optimizer',
      type: 'image',
      category: 'ayurvedic',
      description: 'Herbal blood builder infused with organic iron chelates, folic acid, and B-complex vitamins for enhanced vitality.',
    },
    {
      src: '/arvind/HERBY-METHIONINE front.webp',
      title: 'Herby-Methionine Bio-Additive',
      subtitle: 'Botanical Methionine Substitute',
      type: 'image',
      category: 'supplements',
      description: 'Eco-friendly herbal methionine optimizer providing natural lipotropic activity and superior protein synthesis.',
    },
    {
      src: '/arvind/Imungain.webp',
      title: 'Imungain Immune Booster',
      subtitle: 'Natural Immunomodulator',
      type: 'image',
      category: 'ayurvedic',
      description: 'Phytogenic immune stimulant strengthening cellular immunity, antibody response, and disease resistance in flocks.',
    },
    {
      src: '/arvind/Max gorw Label Aqua.webp',
      title: 'Max Grow Label Aqua Series',
      subtitle: 'Aquaculture Growth Promoter',
      type: 'image',
      category: 'aqua',
      description: 'Specialized aquaculture herbal feed supplement accelerating shrimp and fish growth while maintaining pond water quality.',
    },
    {
      src: '/arvind/Max grow gold.webp',
      title: 'Max Grow Gold Poultry Enhancer',
      subtitle: 'FCR & Weight Gain Formula',
      type: 'image',
      category: 'supplements',
      description: 'Gold-standard growth catalyst improving Feed Conversion Ratio (FCR), gut health, and peak broiler performance.',
    },
    {
      src: '/arvind/PRORED Tonic.webp',
      title: 'PRORED Health & Tonic Series',
      subtitle: 'Vitality & Hematopoietic Solution',
      type: 'image',
      category: 'ayurvedic',
      description: 'Concentrated natural hematinic and stress-relief formula supporting optimal cellular oxygenation and energetic vigor.',
    },
    {
      src: '/arvind/Renoliv Ultra.webp',
      title: 'Renoliv Ultra Kidney & Liver Care',
      subtitle: 'Dual Kidney-Hepato Flush',
      type: 'image',
      category: 'ayurvedic',
      description: 'Advanced dual-action herbal diuretic and renal flusher designed to prevent gout, ascites, and metabolic toxicity.',
    },
    {
      src: '/arvind/repro-1.webp',
      title: 'Repro-1 Fertility & Egg Booster',
      subtitle: 'Reproductive Performance Tonic',
      type: 'image',
      category: 'supplements',
      description: 'Herbal reproductive conditioner optimizing ovary health, peak laying percentage, and hatchability rates.',
    },
    {
      src: '/arvind/respimune lable bag Aqua.webp',
      title: 'Respimune Aqua Defense',
      subtitle: 'Respiratory & Gill Protection',
      type: 'image',
      category: 'aqua',
      description: 'Botanical respiratory tonic shielding aquatic species from environmental toxins, gill inflammation, and waterborne pathogens.',
    },
    {
      src: '/arvind/respimune lable bag.webp',
      title: 'Respimune Respiratory Care',
      subtitle: 'Poultry Breathing & Mucolytic Support',
      type: 'image',
      category: 'supplements',
      description: 'Essential-oil enriched herbal respiratory decongestant reducing CRD incidence, coughing, and tracheal congestion.',
    },
    {
      src: '/arvind/Retroforte front.webp',
      title: 'Retroforte Antiviral Defense',
      subtitle: 'Broad-Spectrum Phytogenic Shield',
      type: 'image',
      category: 'ayurvedic',
      description: 'Next-generation phytomedicinal formulation designed to inhibit viral replication and protect livestock during disease outbreaks.',
    },
  ]

  const currentLightboxIndex = activeLightboxItem
    ? productShowcase.findIndex((item) => item.src === activeLightboxItem.src)
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#059669] to-[#10b981] text-white px-3 py-1 rounded-full">
                  {activeLightboxItem.category}
                </span>
                {currentLightboxIndex !== -1 && (
                  <span className="text-[11px] font-extrabold text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full">
                    {currentLightboxIndex + 1} / {productShowcase.length}
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
                const prevIdx = (currentLightboxIndex - 1 + productShowcase.length) % productShowcase.length
                setActiveLightboxItem(productShowcase[prevIdx])
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
                const nextIdx = (currentLightboxIndex + 1) % productShowcase.length
                setActiveLightboxItem(productShowcase[nextIdx])
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
            <img
              src={activeLightboxItem.src}
              alt={activeLightboxItem.title}
              className="max-h-[75vh] w-auto object-contain rounded-[20px]"
            />
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
            <span className="text-[12px] font-extrabold tracking-widest uppercase bg-[#059669] text-white px-3 py-1 rounded-full">
              Case Study
            </span>
            <span className="text-[14px] font-bold text-muted hidden sm:inline">Ayurvedic Healthcare &amp; Veterinary Formulations</span>
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
              Arvind Herbal <br />
              <span className="bg-gradient-to-r from-[#059669] via-[#10b981] to-[#047857] bg-clip-text text-transparent">
                Labs.
              </span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[22px] font-bold text-[#949ea9] leading-snug max-w-[600px]">
              Scientific Ayurvedic healthcare, bio-herbal feed premixes, aquaculture supplements, and natural livestock nutrition formulations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] md:text-[14px] font-bold">
            <div>
              <span className="text-[#059669] uppercase tracking-wider block mb-1">Services</span>
              <span className="text-[#28282e]">Ayurvedic Formulations, Feed Premixes</span>
            </div>
            <div>
              <span className="text-[#059669] uppercase tracking-wider block mb-1">Client</span>
              <span className="text-[#28282e]">Arvind Herbal Labs Pvt. Ltd.</span>
            </div>
            <div>
              <span className="text-[#059669] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-[#28282e]">2026</span>
            </div>
            <div>
              <span className="text-[#059669] uppercase tracking-wider block mb-1">Domain</span>
              <span className="text-[#28282e]">Phytogenic Healthcare &amp; Agriculture</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Banner */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-[20px] md:rounded-[40px] overflow-hidden bg-white border border-[#ebdcb9]/30 shadow-sm p-4 md:p-8">
            <img
              src="/arvind/hero image.webp"
              alt="Arvind Herbal Labs Showcase"
              className="w-full h-auto object-cover rounded-[15px] md:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
            <h2 className="text-[24px] md:text-[36px] font-black leading-none">Botanical Excellence &amp; Natural Healing</h2>
            <p className="text-[14px] md:text-[18px] text-muted leading-relaxed font-medium">
              Arvind Herbal Labs combines centuries-old Ayurvedic wisdom with modern phytogenic extraction technology. Producing GMP-certified feed additives, liquid minerals, and liver detoxifiers, Arvind delivers sustainable health for poultry, dairy, and aquatic species.
            </p>
          </div>
        </section>

        {/* Filter Bar for Showcase Sections */}
        <div className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcb9]/50 pb-6">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#059669]">Portfolio Directory</span>
            <h2 className="text-[28px] md:text-[40px] font-black leading-none mt-1">Explore Product Formulations</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Formulations' },
              { id: 'ayurvedic', label: 'Ayurvedic Tonics' },
              { id: 'supplements', label: 'Feed Supplements' },
              { id: 'aqua', label: 'Aquaculture Care' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-extrabold uppercase tracking-wider transition duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#059669] text-white shadow-md'
                    : 'bg-white border border-[#ebdcb9]/40 text-[#28282e] hover:bg-[#ebdcb9]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT SHOWCASE GALLERY */}
        <section className="mt-12 md:mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#059669]">Phytogenic Portfolio</span>
              <h3 className="text-[24px] md:text-[36px] font-black">Herbal &amp; Nutritional Solutions</h3>
            </div>
            <p className="text-[14px] text-muted font-medium max-w-md">
              Full gallery of Ayurvedic health boosters, organic trace mineral premixes, and specialized aquaculture growth promoters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productShowcase
              .filter((item) => activeTab === 'all' || activeTab === item.category)
              .map((item, idx) => (
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
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="bg-white text-[#28282e] text-[12px] font-black uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        View Label
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

        {/* Closing Case Study Block */}
        <section className="mt-20 md:mt-32 text-center border-t border-[#ebdcb9]/50 pt-16 pb-8">
          <h2 className="text-[32px] md:text-[60px] font-black tracking-tight leading-none">
            Ready to elevate your livestock &amp; aquaculture yield?
          </h2>
          <p className="mt-4 text-[14px] md:text-[18px] text-muted max-w-[500px] mx-auto font-medium">
            Partner with Arvind Herbal Labs for scientific Ayurvedic premixes and phytogenic nutrition.
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
                Inquire &amp; Order Formulations
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
