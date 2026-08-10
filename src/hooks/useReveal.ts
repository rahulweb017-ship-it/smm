import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = gsap.utils.toArray<HTMLElement>('.reveal')
    const animations = items.map((item) =>
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          once: true,
        },
      }),
    )

    return () => {
      animations.forEach((animation) => animation.kill())
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
