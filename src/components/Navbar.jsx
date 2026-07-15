import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)      // is the mobile menu open?
  const [scrolled, setScrolled] = useState(false) // has the user scrolled down?

  // Runs once on mount, attaches a scroll listener, cleans it up on unmount.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#catalogue', label: 'Catalogue' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5">
      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? 'bg-indigo-deep/85 backdrop-blur-md shadow-xl' : 'bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-xl text-cream">
          <svg viewBox="0 0 120 70" className="w-8 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 44C6 44 28 10 60 10C92 10 114 44 114 44" stroke="#F7F4EC" strokeWidth="6" strokeLinecap="round" />
            <path d="M30 40V28M42 34V22M54 31V19M66 31V19M78 34V22M90 40V28" stroke="#F7F4EC" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M2 48C2 48 40 40 60 40C80 40 118 48 118 48" stroke="#F7F4EC" strokeWidth="6" strokeLinecap="round" />
          </svg>
          Bridgelink
          <small className="block font-mono font-normal text-[9px] tracking-widest text-teal-soft ml-1">
            PRINT · BRAND · DIGITAL
          </small>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-cream/85 text-sm font-semibold hover:text-coral-soft transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="bg-coral text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-coral/40 hover:-translate-y-0.5 transition-transform">
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-5.5 h-0.5 bg-cream relative">
            <span className="absolute w-5.5 h-0.5 bg-cream -top-2"></span>
            <span className="absolute w-5.5 h-0.5 bg-cream top-2"></span>
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        className={`md:hidden fixed top-0 right-0 h-screen w-[80vw] max-w-[320px] bg-indigo-deep flex flex-col justify-center gap-7 p-10 transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-cream text-lg font-semibold">
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} className="bg-coral text-white text-center font-bold px-6 py-3 rounded-full">
          Get a Quote
        </a>
      </nav>
    </header>
  )
}
