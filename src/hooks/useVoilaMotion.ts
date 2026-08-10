import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useVoilaMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const setup = () => {
      gsap.fromTo(
        '.fade-in',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: 'power3.out',
        },
      )

      gsap.utils.toArray<HTMLElement>('.card-reveal').forEach((card) => {
        const image = card.querySelector('img')
        gsap.fromTo(
          card,
          { scale: 0.9 },
          {
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              once: true,
            },
          },
        )
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 92%',
                once: true,
              },
            },
          )
        }
      })

      gsap.utils.toArray<HTMLElement>('.services-test-reveal').forEach((item) => {
        const image = item.querySelector('img')
        gsap.fromTo(
          item,
          { scale: 0.9 },
          {
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              once: true,
            },
          },
        )
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                once: true,
              },
            },
          )
        }
      })
    }

    setup()
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf('.fade-in')
      gsap.killTweensOf('.card-reveal')
      gsap.killTweensOf('.services-test-reveal')
    }
  }, [])
}
