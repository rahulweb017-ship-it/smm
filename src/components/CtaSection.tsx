export function CtaSection() {
  return (
    <section id="contact" className="site-container py-24 md:py-36 border-t border-[#ebdcb9]/40 relative z-20">
      <div className="grid lg:grid-cols-[1.2fr_1.5fr_1fr] items-center gap-12 lg:gap-8">
        
        {/* LEFT COLUMN: Giant Title */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-[64px] sm:text-[90px] lg:text-[110px] font-black tracking-tight leading-[0.95] text-[#28282e]">
              Let&apos;s talk.
            </h2>
          </div>
        </div>

        {/* CENTER COLUMN: 3D Stacked Overlapping Video Cards */}
        <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[380px] my-6 lg:my-0">
          
          {/* Back Left Card */}
          <div className="absolute left-2 sm:left-6 bottom-4 w-[200px] sm:w-[260px] md:w-[300px] aspect-[4/3] rounded-[24px] overflow-hidden border-2 border-white shadow-xl -rotate-6 z-10 bg-[#28282e] transition duration-500 hover:rotate-0 hover:z-30">
            <video
              className="w-full h-full object-cover"
              src="/jewellery/faith.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Back Right Card */}
          <div className="absolute right-2 sm:right-6 top-2 w-[220px] sm:w-[280px] md:w-[320px] aspect-[4/3] rounded-[24px] overflow-hidden border-2 border-white shadow-xl rotate-6 z-10 bg-[#28282e] transition duration-500 hover:rotate-0 hover:z-30">
            <video
              className="w-full h-full object-cover"
              src="/scalo/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Front Center Highlight Card */}
          <div className="relative z-20 w-[240px] sm:w-[320px] md:w-[360px] aspect-[16/10] rounded-[24px] overflow-hidden border-4 border-white shadow-2xl bg-[#28282e] transform hover:scale-105 transition duration-500">
            <video
              className="w-full h-full object-cover"
              src="/luis/hero video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Green Indicator + Hire Our Team Pill Button */}
        <div className="flex flex-col items-start lg:items-end justify-center gap-8">
          {/* Green Live Status Indicator */}
          <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#ebdcb9]/50 shadow-sm">
            <span className="h-3 w-1.5 bg-[#22c55e] rounded-full animate-pulse"></span>
            <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#28282e]">Available for work</span>
          </div>

          {/* Hire Our Team Button */}
          <a
            href="mailto:sk0402688@gmail.com"
            className="hireOurTeam group inline-flex items-center gap-3"
          >
            <span className="hireOurTeamTitle rounded-full border border-[#28282e]/20 bg-white px-7 py-3.5 text-[16px] md:text-[18px] font-extrabold text-[#28282e] shadow-md hover:shadow-lg transition duration-300">
              Hire our team
            </span>
            <span className="hireOurTeamArrow grid h-[46px] w-[46px] place-items-center rounded-full bg-[#28282e] shadow-md">
              <svg className="h-[12px] w-[12px]" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.5H11M11 6.5L5.93606 1M11 6.5L5.93606 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
