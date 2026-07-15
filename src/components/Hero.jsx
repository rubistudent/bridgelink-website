import BridgeDivider from './BridgeDivider'

export default function Hero() {
  return (
    <section
      id="top"
      className="pt-[150px] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1F93D3 0%, #5B27C4 55%, #5800C4 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-10 items-center pb-16">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-white/70 flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-white/70 inline-block" />
            Bridgelink Limited — Est. printing &amp; brand studio
          </p>
          <h1 className="font-display font-bold text-white leading-[1.08] text-[clamp(36px,5vw,58px)]">
            Your Brand.
            <br />
            Our Strategy.
            <br />
            Real Results.
          </h1>
          <p className="mt-6 max-w-[480px] text-white/85 text-[17px] leading-relaxed">
            We transform ideas into bold, artistic brand experiences that speak confidence,
            elegance, and purpose. From concept to creation, we design visuals that leave a
            lasting impression and elevate how your brand is seen and remembered.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="bg-white text-indigo-deep font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all inline-flex items-center gap-2">
              Start Now <span aria-hidden="true">→</span>
            </a>
            <a href="#catalogue" className="border border-white/40 text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all">
              View catalogue
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-10">
            {[['6', 'Service lines'], ['4', 'Step process'], ['2025', 'Est. studio']].map(([n, label]) => (
              <div key={label} className="border-l border-white/25 pl-4">
                <strong className="block font-display text-2xl text-white font-semibold">{n}</strong>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/60">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-first md:order-last h-[380px] sm:h-[440px] md:h-[480px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90">
            <img
              src="/images/tumblers.jpg"
              alt="Branded stainless steel tumblers in red, blue, purple, black and pink, each personalised with a name and event date"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block absolute top-[6%] right-[-6%] w-[42%] aspect-[5/7] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/images/giftset.jpg"
              alt="Personalised 2025 executive diary, branded with a name and job title"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <BridgeDivider fill="#F7F4EC" cableColor="#F17A4E" />
    </section>
  )
}

