import { useRef, useEffect, type ReactNode } from 'react'
import gsap from 'gsap'

interface ServiceCard {
  id: number
  title: string
  subtitle: string
  description: string
  tags: string[]
  bgColor: string
  textColor: string
  tagBg: string
  tagText: string
  icon: ReactNode
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    title: 'Brand Identity & Logo Design',
    subtitle: 'What does your brand stand for? Not what you sell, but who you are.',
    description: 'I create comprehensive visual identity systems, memorable logo marks, cohesive color palettes, typography guidelines, and brand assets that make your business instantly recognizable and trusted.',
    tags: ['Logo Mark', 'Brand Guidelines', 'Color Palette', 'Typography', 'Visual Strategy'],
    bgColor: 'bg-[#9ec5fe]',
    textColor: 'text-[#0f172a]',
    tagBg: 'bg-[#0f172a]/10 hover:bg-[#0f172a]/20 border border-[#0f172a]/20',
    tagText: 'text-[#0f172a]',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Social Media Content & Creatives',
    subtitle: 'Stop the scroll with content designed to captivate and convert.',
    description: 'High-converting Instagram, LinkedIn, and Facebook post graphics, carousel storyboards, promotional banners, and aesthetic grid layouts tailored for maximum audience reach and engagement.',
    tags: ['Grid Layouts', 'Instagram Carousels', 'LinkedIn Posts', 'Story Graphics', 'Brand Consistency'],
    bgColor: 'bg-[#ff6b4a]',
    textColor: 'text-white',
    tagBg: 'bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md',
    tagText: 'text-white',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Reels & Short-Form Video Editing',
    subtitle: 'Short-form video that holds attention from second one to the end.',
    description: 'Viral-ready Instagram Reels, TikToks, and YouTube Shorts edited with dynamic pacing, custom kinetic captions, sound design, hook animations, and color grading built to blow up organic reach.',
    tags: ['Kinetic Captions', 'Pacing & Hooks', 'Sound Design', 'Color Grading', 'Viral Editing'],
    bgColor: 'bg-[#ffc837]',
    textColor: 'text-[#1e293b]',
    tagBg: 'bg-[#1e293b]/10 hover:bg-[#1e293b]/20 border border-[#1e293b]/20',
    tagText: 'text-[#1e293b]',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Ad Creative & Campaign Design',
    subtitle: 'Turn views into clicks and clicks into loyal paying customers.',
    description: 'Performance-focused ad creatives for Meta, Google, and TikTok ad campaigns. Tested visual hierarchies, high-converting call-to-actions, and multi-format variants engineered to scale ROAS.',
    tags: ['Meta Ad Banners', 'TikTok Ads', 'Performance Creatives', 'A/B Test Variants', 'CRO Design'],
    bgColor: 'bg-[#2ec4b6]',
    textColor: 'text-white',
    tagBg: 'bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md',
    tagText: 'text-white',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Website & Landing Page Visuals',
    subtitle: 'First impressions happen in milliseconds—make yours unforgettable.',
    description: 'Custom landing page designs, hero section visuals, interactive product showcases, UI mockups, and conversion-optimized web layouts that turn casual site visitors into high-value clients.',
    tags: ['Landing Pages', 'Hero Mockups', 'UI/UX Visuals', 'Conversion Design', 'Responsive Layouts'],
    bgColor: 'bg-[#c8b6ff]',
    textColor: 'text-[#1e1b4b]',
    tagBg: 'bg-[#1e1b4b]/10 hover:bg-[#1e1b4b]/20 border border-[#1e1b4b]/20',
    tagText: 'text-[#1e1b4b]',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Brochures, Presentations & Marketing Materials',
    subtitle: 'Tangible & digital collateral that seals the deal and builds authority.',
    description: 'Polished pitch decks, company profile brochures, print-ready marketing collateral, catalog layouts, and executive slide decks engineered to communicate authority and close high-ticket deals.',
    tags: ['Pitch Decks', 'Company Profiles', 'Print Collateral', 'Sales Decks', 'Brand Catalogs'],
    bgColor: 'bg-[#28282e]',
    textColor: 'text-white',
    tagBg: 'bg-white/10 hover:bg-white/20 border border-white/20',
    tagText: 'text-white',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="9" x2="8" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function ServicesStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle header fade in animation
      gsap.fromTo(
        '.services-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-header',
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="site-container py-20 md:py-32 relative z-20">
      {/* Header */}
      <div className="services-header text-center mb-16 md:mb-24">
        <span className="text-[12px] md:text-[13px] font-extrabold uppercase tracking-[0.25em] text-[#949ea9] block mb-3">
          Services
        </span>
        <h2 className="text-[36px] sm:text-[50px] md:text-[68px] font-black text-[#28282e] tracking-tight leading-[1.05] max-w-4xl mx-auto">
          Six ways I build your brand
        </h2>
        <p className="text-[16px] md:text-[22px] font-bold text-[#949ea9] max-w-2xl mx-auto mt-5 leading-snug">
          From the first idea to the final scroll, I turn your brand into visuals that connect, engage, and get remembered.
        </p>
      </div>

      {/* Sticky Stacked Cards Container */}
      <div className="relative flex flex-col gap-10 md:gap-14 pb-20">
        {servicesData.map((service, index) => {
          // Increment sticky top offset so each previous card's top header bar remains visible at the top (deck-stacking effect)
          const stickyTopOffset = 90 + index * 36

          return (
            <div
              key={service.id}
              style={{
                top: `${stickyTopOffset}px`,
                zIndex: index + 1,
              }}
              className={`sticky rounded-[28px] md:rounded-[36px] p-6 sm:p-10 md:p-14 shadow-xl ${service.bgColor} ${service.textColor} transition-shadow duration-300 border border-black/5 hover:shadow-2xl flex flex-col justify-between min-h-[380px] md:min-h-[440px] select-none`}
            >
              {/* Card Header with Icon and Title */}
              <div>
                <div className="flex items-center justify-between mb-8 md:mb-12">
                  <div className="p-3 md:p-4 rounded-2xl bg-black/10 backdrop-blur-md">
                    {service.icon}
                  </div>
                  <span className="text-[14px] md:text-[18px] font-extrabold opacity-60 tracking-wider">
                    0{service.id} / 06
                  </span>
                </div>

                <h3 className="text-[28px] sm:text-[36px] md:text-[48px] font-black leading-[1.1] tracking-tight mb-4">
                  {service.title}
                </h3>
              </div>

              {/* Card Subtitle, Description & Tags */}
              <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 md:gap-12 items-end mt-6">
                <div>
                  <p className="text-[16px] md:text-[20px] font-extrabold opacity-90 leading-snug mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-[14px] md:text-[16px] font-medium opacity-80 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Pill Badges / Tags */}
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] md:text-[13px] font-extrabold px-3.5 py-1.5 rounded-full transition-colors duration-200 cursor-default ${service.tagBg} ${service.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
