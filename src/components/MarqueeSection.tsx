const items = ['Replug', 'Clever Roots', 'Unezzy', 'Softdeviser', 'Retail Campaigns', 'Product Motion']

export function MarqueeSection() {
  return (
    <section className="mt-20 border-y border-line py-6">
      <div className="overflow-hidden">
        <div className="reveal flex min-w-max animate-[marquee_20s_linear_infinite] gap-12 px-5 font-mono text-xs uppercase tracking-[0.24em] text-faint md:px-10 xl:px-16">
          {[...items, ...items].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
