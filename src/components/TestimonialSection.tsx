import { SectionHeader } from './SectionHeader'

export function TestimonialSection() {
  return (
    <section className="section-wrap py-24 md:py-32">
      <SectionHeader index="10" label="Testimonial" title="Trusted to elevate visual standards." />
      <blockquote className="reveal rounded-2xl border border-line bg-bg-elev p-8 text-lg text-muted md:text-2xl">
        “Sameer consistently transformed rough ideas into premium visuals that improved campaign quality and execution
        speed.”
        <footer className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-faint">Team Lead, Softdeviser</footer>
      </blockquote>
    </section>
  )
}
