import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface SliderItem {
  name: string
  logo: string
  image?: string
  video?: string
  link: string
}

const sliderItems: SliderItem[] = [
  {
    name: 'Scalo Restaurant',
    logo: '/scalo/hero-section.png',
    image: '/scalo/hero-section.png',
    video: '/scalo/hero-video.mp4',
    link: '#work',
  },
  {
    name: 'Imperial Branding Agency',
    logo: '/luis/hero image.png?v=2',
    image: '/luis/hero image.png?v=2',
    video: '/luis/hero video.mp4',
    link: '#work',
  },
  {
    name: 'The Forsted Vault',
    logo: '/jewellery/Ring .jpg',
    image: '/jewellery/Mockup.jpg',
    video: '/jewellery/faith.mp4',
    link: '#work',
  },
  {
    name: 'JRC Home Remodeling',
    logo: '/jrc/hero image.webp',
    image: '/jrc/hero image.webp',
    video: '/jrc/hero video.mp4',
    link: '#work',
  },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playVideo, setPlayVideo] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setPlayVideo(false)
    const timer = setTimeout(() => {
      setPlayVideo(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [activeIndex])

  useEffect(() => {
    if (titleRef.current) {
      const spans = titleRef.current.querySelectorAll('.reveal-span')
      gsap.fromTo(
        spans,
        { opacity: 0, y: 30, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
        }
      )
    }

    gsap.fromTo(
      '.latestWork',
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.4,
      }
    )

    gsap.fromTo(
      '.logosVideos li',
      { opacity: 0, scale: 0.8, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.5,
      }
    )

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { scale: 0, opacity: 0, transformOrigin: 'bottom right' },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.3,
        }
      )
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const slides = containerRef.current.querySelectorAll('.slider-video-card')

    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        gsap.to(slide, {
          scale: 1,
          opacity: 1,
          x: '0%',
          y: '0%',
          rotate: 0,
          zIndex: 10,
          duration: 0.8,
          ease: 'power4.out',
          overwrite: 'auto',
        })
      } else {
        const diff = (index - activeIndex + 4) % 4
        if (diff === 1) {
          gsap.to(slide, {
            scale: 0.93,
            opacity: 0.65,
            x: '8%',
            y: '4%',
            rotate: '1.5deg',
            zIndex: 5,
            duration: 0.8,
            ease: 'power4.out',
            overwrite: 'auto',
          })
        } else if (diff === 2) {
          gsap.to(slide, {
            scale: 0.86,
            opacity: 0.35,
            x: '16%',
            y: '8%',
            rotate: '3deg',
            zIndex: 3,
            duration: 0.8,
            ease: 'power4.out',
            overwrite: 'auto',
          })
        } else {
          gsap.to(slide, {
            scale: 0.8,
            opacity: 0,
            x: '24%',
            y: '12%',
            rotate: '4.5deg',
            zIndex: 1,
            duration: 0.8,
            ease: 'power4.out',
            overwrite: 'auto',
          })
        }
      }
    })
  }, [activeIndex])

  return (
    <>
      <section id="top" className="site-container lg:mt-[15px] pt-6 md:pt-10">
        <h1 ref={titleRef} className="hero-title">
          <span className="block overflow-hidden pb-1">
            <span className="reveal-span inline-block origin-top-left">We put visions</span>
          </span>
          <span className="block overflow-hidden pb-1 mt-[-10px] sm:mt-[-20px]">
            <span className="reveal-span inline-block origin-top-left">into motion.</span>
          </span>
        </h1>
      </section>

      <section className="videoSlider site-container relative mt-[10px] sm:mt-[40px] grid md:grid-cols-[1%_8%_7%_76%] lg:grid-cols-[3%_12%_5.5%_71.5%] gap-[5%] md:gap-[3%]">
        <div className="hidden md:grid col-start-2 items-center">
          <span className="latestWork opacity-0 text-[14px] font-[800] translate-y-[-40px] flex items-center gap-2">
            <span className="hidden lg:block whitespace-nowrap">Latest work</span>
            <svg className="lg:hidden" width="39" height="7" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.5H36L31.8568 1" stroke="black" strokeWidth="2"></path>
            </svg>
            <svg className="hidden lg:block" width="109" height="7" viewBox="0 0 109 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.5H106L101.857 1" stroke="black" strokeWidth="2"></path>
            </svg>
          </span>
        </div>

        <div className="logosVideos">
          <ul className="flex md:grid gap-[5px]">
            {sliderItems.map((item, index) => (
              <li
                key={item.name}
                className="cursor-pointer mb-[4px] list-none"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  className={`duration-200 ease-[cubic-bezier(0.25,0.4,0.55,1.4)] origin-center rounded-full w-[43px] md:w-full object-cover aspect-[1/1] border-2 ${
                    activeIndex === index
                      ? 'scale-[1] opacity-100 border-[#28282e]'
                      : 'scale-[0.9] opacity-60 border-transparent hover:scale-[1] hover:opacity-100'
                  }`}
                  alt={`${item.name} logo`}
                  src={item.logo}
                  height="75"
                  width="75"
                  loading="eager"
                />
              </li>
            ))}
          </ul>
        </div>

        <div ref={containerRef} className="heroVideos relative aspect-[810/460] origin-bottom-right">
          {sliderItems.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              className="slider-video-card absolute origin-bottom-right w-[84%] h-full z-[4]"
              style={{
                opacity: index === 0 ? 1 : 0,
                transform: index === 0 ? 'scale(1)' : 'scale(0.8)',
              }}
            >
              {item.video ? (
                <div className="absolute inset-0 w-full h-full rounded-[12px] md:rounded-[30px] overflow-hidden">
                  <video
                    className={`pointer-events-none absolute left-0 top-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === activeIndex && playVideo ? 'opacity-100' : 'opacity-0'
                    }`}
                    playsInline
                    preload="auto"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <img
                    className={`pointer-events-none absolute left-0 top-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === activeIndex && playVideo ? 'opacity-0' : 'opacity-100'
                    }`}
                    src={item.image || item.logo}
                    alt={item.name}
                  />
                </div>
              ) : (
                <img
                  className="pointer-events-none absolute left-0 top-0 w-full aspect-[810/455] object-cover rounded-[12px] md:rounded-[30px] h-full"
                  src={item.image || item.logo}
                  alt={item.name}
                />
              )}
              
              <div className="absolute left-[10px] md:left-[28px] top-[10px] md:top-[26px] flex gap-[8px] z-20">
                <div className="font-[700] px-[12px] md:px-[20px] pt-[5px] pb-[6px] md:py-[10px] leading-[1.3] text-[12px] md:text-[18px] rounded-full bg-white text-[#28282e]">
                  {item.name}
                </div>
                <div className="grid place-items-center w-[27px] md:w-[43px] h-[27px] md:h-[43px] rounded-full bg-white">
                  <svg className="w-[8px] md:w-[11px] h-[8px] md:h-[11px]" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.5H11M11 6.5L5.93606 1M11 6.5L5.93606 12" stroke="black" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
