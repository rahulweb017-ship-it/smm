import { services, teamFaces } from '../data/siteData'

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="site-container mt-20 md:mt-32">
      <h2 className="section-title fade-in">Capabilities.</h2>
      <div className="mt-8 grid gap-10 border-b border-line pb-10 md:grid-cols-[1.4fr_1fr] md:pb-14">
        <p className="fade-in max-w-[680px] text-[13px] leading-[1.4] text-muted md:text-[18px]">
          Our team is your team. We work side by side with founders and teams to put visions into motion, elevate
          presence, cultivate trust, and move faster with a clear creative direction.
        </p>
        <div className="fade-in flex items-center gap-2 self-end">
          {teamFaces.map((face) => (
            <img key={face} src={face} alt="" className="h-10 w-10 rounded-full border border-white object-cover md:h-[55px] md:w-[55px]" loading="lazy" />
          ))}
        </div>
      </div>
      <div className="Services mt-8 grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-12">
        {services.map((service) => (
          <article key={service.title} className="ServicesBlock grid items-start gap-4 border-t border-line pt-6 md:grid-cols-[1fr_1fr] md:pt-10">
            <h3 className="text-[30px] font-black leading-[0.85] tracking-[-0.02em] md:text-[40px]">{service.title}</h3>
            <ul className="text-[12px] font-medium text-muted md:text-[18px]">
              {service.points.map((point) => (
                <li key={point} className="border-b border-line py-1 last:border-0">
                  {point}
                </li>
              ))}
            </ul>
            <div className="services-test-reveal overflow-hidden rounded-[20px] md:col-start-2">
              <img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
