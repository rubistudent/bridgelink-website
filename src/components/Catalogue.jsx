import { catalogue } from '../data'
import BridgeDivider from './BridgeDivider'

export default function Catalogue() {
  return (
    <section id="catalogue" className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-10">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-teal flex items-center gap-2.5 mb-3.5">
              <span className="w-5 h-px bg-coral inline-block" /> Our catalogue
            </p>
            <h2 className="font-display font-semibold text-indigo-deep text-[clamp(30px,3.6vw,44px)] leading-tight max-w-[520px]">
              From business cards to billboards.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {['Print', 'Branding', 'Signage', 'Gifting', 'Apparel'].map((c) => (
              <span key={c} className="font-mono text-[11px] tracking-wider uppercase px-3.5 py-2 rounded-full border border-ink/10 text-ink-soft">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* CSS columns give a Pinterest-style masonry layout without a JS library */}
        <div className="columns-2 md:columns-4 gap-4 [column-fill:_balance]">
          {catalogue.map((item) => (
            <div key={item.label} className="break-inside-avoid mb-4 rounded-xl overflow-hidden border border-ink/10 bg-white relative group">
              <img src={item.image} alt={item.label} className="w-full block transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute left-0 right-0 bottom-0 px-3 py-2.5 bg-gradient-to-t from-indigo-deep/85 to-transparent text-cream text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BridgeDivider fill="#EFEADC" cableColor="#167A72" />
    </section>
  )
}
