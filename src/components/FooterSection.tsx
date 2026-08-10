export function FooterSection() {
  return (
    <footer className="site-container my-6 flex items-end justify-between md:my-10">
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fade-in inline-flex items-center gap-4 text-[20px] font-black leading-[0.85] tracking-[-0.02em]">
        <span className="grid h-[43px] w-[43px] place-items-center rounded-full border border-line bg-white">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 13L6.5 2M6.5 2L1.43606 7M6.5 2L12 7" stroke="#28282E" strokeWidth="2" />
          </svg>
        </span>
        <span className="hidden md:block">Back to top</span>
      </button>
      <p className="fade-in bg-gradient-to-r from-[#EC0D78] via-[#FF2B40] to-[#FE880E] bg-clip-text text-[28px] font-black tracking-[-0.03em] text-transparent md:text-[34px]">
        Sameer.
      </p>
    </footer>
  )
}
