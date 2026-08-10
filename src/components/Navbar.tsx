import { navLinks } from '../data/siteData'

export function Navbar() {
  return (
    <header className="fade-in sticky top-0 z-50 bg-white/90 backdrop-blur-[2px]">
      <div className="site-container grid grid-cols-[1fr_auto_auto] items-center gap-4 py-4 text-[14px] font-extrabold leading-[1.3] md:grid-cols-[1fr_1fr_auto]">
        <nav className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition duration-500 hover:text-text">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="hidden text-muted md:block">
          Branding, Product &amp;
          <br />
          Jewelry Design Studio
        </p>
        <a href="#contact" className="justify-self-end text-muted transition duration-500 hover:text-text">
          Book Call
        </a>
      </div>
    </header>
  )
}
