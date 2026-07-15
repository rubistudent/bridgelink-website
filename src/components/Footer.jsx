export default function Footer() {
  return (
    <footer className="bg-[#120F38] border-t border-cream/10 pt-12 pb-6">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 pb-8">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display font-bold text-xl text-cream mb-3.5">
              <svg viewBox="0 0 120 70" className="w-8 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 44C6 44 28 10 60 10C92 10 114 44 114 44" stroke="#F7F4EC" strokeWidth="6" strokeLinecap="round" />
                <path d="M30 40V28M42 34V22M54 31V19M66 31V19M78 34V22M90 40V28" stroke="#F7F4EC" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M2 48C2 48 40 40 60 40C80 40 118 48 118 48" stroke="#F7F4EC" strokeWidth="6" strokeLinecap="round" />
              </svg>
              Bridgelink
            </a>
            <p className="text-cream/55 text-sm max-w-[340px]">
              We are a team of passionate people whose goal is to improve every brand we touch.
              Our products and services are designed for small to medium size companies willing
              to optimise their performance.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[11px] tracking-widest uppercase text-cream/50 mb-4">Useful links</h5>
            <ul className="flex flex-col gap-2.5">
              {['Home', 'About us', 'Services', 'Catalogue', 'Contact us'].map((l) => (
                <li key={l}><a href="#top" className="text-cream/80 text-sm hover:text-coral-soft">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[11px] tracking-widest uppercase text-cream/50 mb-4">Connect with us</h5>
            <ul className="flex flex-col gap-2.5">
              <li><a href="mailto:bridgelinklimited@gmail.com" className="text-cream/80 text-sm hover:text-coral-soft">bridgelinklimited@gmail.com</a></li>
              <li><a href="tel:+254722396042" className="text-cream/80 text-sm hover:text-coral-soft">+254 722 396042</a></li>
              <li><a href="#" className="text-cream/80 text-sm hover:text-coral-soft">Teak House, 2nd Floor, Room 18</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-5 flex flex-wrap justify-between gap-2.5 text-[13px] text-cream/40">
          <span>© {new Date().getFullYear()} Bridgelink Limited. All rights reserved.</span>
          <span>timeless elegance, unmatched quality</span>
        </div>
      </div>
    </footer>
  )
}
