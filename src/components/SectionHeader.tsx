type Props = {
  index: string
  label: string
  title: string
  description?: string
}

export function SectionHeader({ index, label, title, description }: Props) {
  return (
    <header className="reveal mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <span className="section-label">{index}</span>
        <span className="section-label">{label}</span>
      </div>
      <h2 className="section-title mb-5">{title}</h2>
      {description && <p className="max-w-2xl text-base text-muted md:text-lg">{description}</p>}
    </header>
  )
}
