import { SectionHeader } from './SectionHeader'

export function AboutSection() {
  return (
    <section id="studio" className="section-wrap py-24 md:py-32">
      <SectionHeader
        index="03"
        label="Studio"
        title="Minimal by design, bold by impact."
        description="I partner with founders and teams to translate brand strategy into visual systems that feel premium, modern, and unmistakably original."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="reveal rounded-2xl border border-line bg-bg-elev p-8">
          <p className="text-muted">
            4+ years of design execution across branding, campaigns, and motion. Current role at Softdeviser with
            hands-on delivery across digital and print surfaces.
          </p>
        </div>
        <div className="reveal rounded-2xl border border-line bg-bg-elev p-8">
          <p className="text-muted">
            Tools: Photoshop, Illustrator, Premiere Pro, After Effects, CorelDRAW, Canva. Languages: English, Hindi,
            Punjabi.
          </p>
        </div>
      </div>
    </section>
  )
}
