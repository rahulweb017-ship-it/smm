import { stats } from '../data/siteData'
import { SectionHeader } from './SectionHeader'

export function StatsSection() {
  return (
    <section className="section-wrap py-24 md:py-32">
      <SectionHeader index="09" label="Proof" title="Built through consistency, measured in outcomes." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article key={item.label} className="reveal rounded-2xl border border-line bg-bg-elev p-6">
            <p className="mb-2 font-display text-5xl tracking-tight text-accent">{item.value}</p>
            <p className="text-sm uppercase tracking-[0.14em] text-faint">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
