import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
  highlight: string
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sean Yiu',
    role: 'Founder & Tech Lead',
    company: 'Yiu Digital',
    avatar: 'https://softdeviser.com/wp-content/uploads/2025/01/review-3-1.jpg',
    rating: 5,
    highlight: 'He delivers very fast & cares for clients',
    text: 'He is amazing. He communicated very well. He is so passionate about his development work. He cares for his clients. He delivers very fast. I can tell he wants his customers to be happy. Hire him today. You will not regret it!!!',
  },
  {
    id: 2,
    name: 'Luis Giraldo',
    role: 'Brand Manager',
    company: 'Luis Giraldo Media',
    avatar: 'https://softdeviser.com/wp-content/uploads/2024/07/review-1.jpg',
    rating: 5,
    highlight: 'Exceptional experience & unexpected results',
    text: 'Working with him was an exceptional experience. His dedication to the project, attention to detail, and timely delivery surpassed my expectations. He not only demonstrated a high level of expertise in Social Media Marketing for my brand—unexpected results for me, thank you.',
  },
  {
    id: 3,
    name: 'Sean Hynes',
    role: 'Agency Partner',
    company: 'Hynes Creative',
    avatar: 'https://softdeviser.com/wp-content/uploads/2024/07/review-2.jpg',
    rating: 5,
    highlight: 'Passionate about development work',
    text: 'He is amazing. He communicated very well. He is so passionate about his development work. He cares for his clients. He delivers very fast. I can tell he wants his customers to be happy. Hire him today.',
  },
  {
    id: 4,
    name: 'Ashish Bedi',
    role: 'Marketing Director',
    company: 'Growth Edge',
    avatar: 'https://softdeviser.com/wp-content/uploads/2024/07/ashish-bedi-1.jpg',
    rating: 5,
    highlight: 'Expert guidance & long-term strategies',
    text: 'Best digital strategist & designer, offering expert guidance and a focus on long-term growth, renowned for exceptional SEO, branding, and visual design services.',
  },
  {
    id: 5,
    name: 'David Miller',
    role: 'E-Commerce Founder',
    company: 'Replug Audio',
    avatar: 'https://cdn.sanity.io/images/y63jgrcb/production/bc41b7f7da44c76ea2fbaa985982917c3c44bf15-127x127.jpg?w=200&auto=format',
    rating: 5,
    highlight: 'Transformed our brand visual identity',
    text: 'He exceeded all our expectations! The UI/UX redesign and brand visual identity transformed our user engagement instantly. Outstanding attention to detail and lightning-fast communication throughout.',
  },
  {
    id: 6,
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Verve Studio',
    avatar: 'https://cdn.sanity.io/images/y63jgrcb/production/7284a1c86e2a88c768a6b7557c3349a2fa5b9a89-2400x1800.jpg?w=750&auto=format',
    rating: 5,
    highlight: 'Seamless workflow & viral media direction',
    text: 'Working with him was seamless. His visual storytelling, video editing precision, and campaign creatives gave our product launch massive market momentum.',
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonial-header',
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const current = testimonialsData[activeIndex]

  return (
    <section ref={sectionRef} className="site-container py-20 md:py-32 relative z-20 overflow-hidden">
      {/* Header */}
      <div className="testimonial-header text-center mb-16 md:mb-20">
        <span className="text-[12px] md:text-[13px] font-extrabold uppercase tracking-[0.25em] text-[#949ea9] block mb-3">
          Testimonials
        </span>
        <h2 className="text-[36px] sm:text-[50px] md:text-[68px] font-black text-[#28282e] tracking-tight leading-[1.05] max-w-4xl mx-auto">
          What people say
        </h2>
        <p className="text-[16px] md:text-[22px] font-bold text-[#949ea9] max-w-2xl mx-auto mt-5 leading-snug">
          Real feedback from global founders, brand directors, and business leaders.
        </p>
      </div>

      {/* Featured Large Active Testimonial Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] md:rounded-[48px] p-8 sm:p-12 md:p-16 border border-[#ebdcb9]/50 shadow-2xl relative">
        {/* Quote Mark Watermark */}
        <div className="absolute top-6 right-8 text-[120px] md:text-[160px] font-black text-[#28282e]/5 select-none leading-none pointer-events-none">
          “
        </div>

        <div className="relative z-10 flex flex-col justify-between min-h-[320px]">
          {/* Rating Stars & Highlight */}
          <div>
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
              <span className="ml-2 text-[12px] font-extrabold uppercase tracking-wider text-[#ea580c] bg-[#ea580c]/10 px-3 py-1 rounded-full">
                {current.highlight}
              </span>
            </div>

            {/* Main Testimonial Text */}
            <blockquote className="text-[20px] sm:text-[26px] md:text-[34px] font-extrabold leading-[1.25] text-[#28282e] tracking-tight">
              "{current.text}"
            </blockquote>
          </div>

          {/* Author Details & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-10 border-t border-[#ebdcb9]/40 mt-8">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#ea580c]/30 shadow-md bg-[#28282e] flex items-center justify-center text-white font-extrabold text-[18px]">
                {current.avatar.startsWith('http') ? (
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // Fallback if external image blocked
                      ;(e.target as HTMLElement).style.display = 'none'
                    }}
                  />
                ) : (
                  current.name.charAt(0)
                )}
              </div>
              <div>
                <h4 className="text-[18px] md:text-[22px] font-extrabold text-[#28282e] leading-tight">
                  {current.name}
                </h4>
                <p className="text-[13px] md:text-[14px] font-bold text-[#949ea9]">
                  {current.role} &bull; <span className="text-[#28282e]">{current.company}</span>
                </p>
              </div>
            </div>

            {/* Navigation Arrows & Counter */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <span className="text-[13px] font-extrabold text-[#949ea9] mr-2">
                0{activeIndex + 1} / 0{testimonialsData.length}
              </span>
              <button
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full border border-line bg-[#faf9f5] hover:bg-[#28282e] hover:text-white transition duration-300 grid place-items-center"
                title="Previous testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full border border-line bg-[#faf9f5] hover:bg-[#28282e] hover:text-white transition duration-300 grid place-items-center"
                title="Next testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Thumbnails Navigation */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {testimonialsData.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(idx)}
            className={`p-4 rounded-2xl border text-left transition duration-300 flex flex-col justify-between ${
              activeIndex === idx
                ? 'bg-[#28282e] text-white border-[#28282e] shadow-lg scale-105'
                : 'bg-white text-[#28282e] border-[#ebdcb9]/40 hover:border-[#ea580c]/40 hover:bg-[#faf9f5]'
            }`}
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(item.rating)].map((_, i) => (
                <span key={i} className="text-[10px] text-[#f59e0b]">★</span>
              ))}
            </div>
            <p className="text-[13px] font-extrabold truncate">{item.name}</p>
            <p className={`text-[11px] font-medium truncate ${activeIndex === idx ? 'text-white/60' : 'text-[#949ea9]'}`}>
              {item.company}
            </p>
          </button>
        ))}
      </div>
    </section>
  )
}
