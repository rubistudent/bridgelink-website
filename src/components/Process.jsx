import { processSteps, testimonials } from '../data'
import BridgeDivider from './BridgeDivider'

export default function Process() {
  return (
    <section id="process" className="bg-cream-dim pt-24 pb-6">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-teal flex items-center gap-2.5 mb-3.5">
          <span className="w-5 h-px bg-coral inline-block" /> How it works
        </p>
        <h2 className="font-display font-semibold text-indigo-deep text-[clamp(30px,3.6vw,44px)] leading-tight max-w-[520px]">
          Our process, in four easy steps.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {processSteps.map((s) => (
            <div key={s.num}>
              <span className="font-display font-semibold text-4xl text-indigo/90">{s.num}</span>
              <h4 className="font-display text-lg text-indigo-deep mt-2.5 mb-2">{s.title}</h4>
              <p className="text-sm text-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-14 border-t border-ink/10">
          <p className="font-mono text-xs tracking-widest uppercase text-teal flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-px bg-coral inline-block" /> Customer testimonials
          </p>
          <h2 className="font-display font-semibold text-indigo-deep text-[clamp(26px,3vw,36px)]">
            What our customers are saying.
          </h2>

          <div className="grid md:grid-cols-3 gap-7 mt-9">
            {testimonials.map((t) => (
              <div key={t.who} className="bg-white border border-ink/10 rounded-2xl p-7">
                <div className="text-coral text-sm tracking-widest mb-4">★★★★☆</div>
                <p className="font-display italic text-lg leading-relaxed text-indigo-deep">"{t.quote}"</p>
                <span className="block mt-4 font-mono text-xs tracking-wider uppercase text-ink-soft">{t.who}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BridgeDivider fill="#171347" cableColor="#167A72" />
    </section>
  )
}
