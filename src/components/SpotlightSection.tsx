import { SectionHeader } from './SectionHeader'

export function SpotlightSection() {
  return (
    <section className="section-wrap py-24 md:py-32">
      <SectionHeader
        index="06"
        label="Spotlight"
        title="Case depth, not just gallery volume."
        description="Featured work demonstrates end-to-end thinking, from strategy and identity to campaign rollout."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <article className="reveal rounded-2xl border border-line bg-bg-elev p-7">
          <h3 className="mb-4 font-display text-3xl">Replug</h3>
          <p className="mb-4 text-muted">
            Built a cohesive campaign system including social content, product highlights, and catalog direction.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Branding · Catalog · Social Media</p>
        </article>
        <article className="reveal rounded-2xl border border-line bg-bg-elev p-7">
          <h3 className="mb-4 font-display text-3xl">Clever Roots</h3>
          <p className="mb-4 text-muted">
            Designed logo routes, packaging visuals, and mockup systems to establish a premium product narrative.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Identity · Packaging · Art Direction</p>
        </article>
      </div>
    </section>
  )
}
