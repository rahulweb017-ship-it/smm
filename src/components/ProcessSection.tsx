import { processSteps } from '../data/siteData'
import { SectionHeader } from './SectionHeader'

export function ProcessSection() {
  return (
    <section className="section-wrap py-24 md:py-32">
      <SectionHeader index="08" label="Process" title="Simple workflow, premium execution." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article key={step.title} className="reveal rounded-2xl border border-line bg-bg-elev p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">0{index + 1}</p>
            <h3 className="mb-3 font-display text-2xl tracking-tight">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
