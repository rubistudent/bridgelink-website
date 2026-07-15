import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="bg-indigo-deep pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="pt-16 mb-4 max-w-[640px]">
          <p className="font-mono text-xs tracking-widest uppercase text-teal-soft flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-px bg-coral inline-block" /> What we do
          </p>
          <h2 className="font-display font-semibold text-cream text-[clamp(30px,3.6vw,44px)] leading-tight">
            Six ways we put your brand to work.
          </h2>
          <p className="text-cream/65 mt-4">
            From the card in someone's wallet to the sign above your door — one studio, every
            touchpoint.
          </p>
        </div>

        {/* .map() turns 6 near-identical blocks into one template + one array */}
        {services.map((s, i) => {
          const reversed = i % 2 === 1 // alternate media left/right
          return (
            <div
              key={s.title}
              className="grid md:grid-cols-2 gap-10 md:gap-14 items-center py-9 md:py-13 border-t border-cream/10"
            >
              <div className={reversed ? 'md:order-2' : ''}>
                <span className="font-mono text-xs text-coral-soft tracking-wider">{s.idx}</span>
                <h3 className="font-display font-semibold text-cream text-[clamp(22px,2.4vw,30px)] mt-2.5 mb-3.5">
                  {s.title}
                </h3>
                <p className="text-cream/70 text-[15.5px] max-w-[440px]">{s.text}</p>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-2xl border border-cream/10 ${reversed ? 'md:order-1' : ''}`}>
                <img src={s.image} alt={s.alt} className="w-full h-[220px] md:h-[280px] object-cover" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
