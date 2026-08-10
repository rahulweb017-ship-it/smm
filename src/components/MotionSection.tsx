import { SectionHeader } from './SectionHeader'

export function MotionSection() {
  return (
    <section className="section-wrap py-24 md:py-32">
      <SectionHeader
        index="07"
        label="Motion"
        title="Editing crafted for retention and recall."
        description="Video direction focuses on rhythm, pacing, and brand consistency across reels and promotional cuts."
      />
      <div className="reveal rounded-2xl border border-line bg-gradient-to-br from-[#1b1b20] to-[#101014] p-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">Placeholder Reel Surface</p>
        <h3 className="mb-3 font-display text-4xl tracking-tight">Product + Social Motion Showcase</h3>
        <p className="max-w-3xl text-muted">Video embeds can be dropped here after final reel hosting links are added.</p>
      </div>
    </section>
  )
}
