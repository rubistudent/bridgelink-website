import BridgeDivider from './BridgeDivider'

const specs = [
  {
    label: 'Our Motto',
    title: 'Timeless elegance, unmatched quality',
    text: 'To be the leading brand recognized for timeless elegance, unmatched quality, and innovative solutions that inspire confidence worldwide.',
  },
  {
    label: 'Our Mission',
    title: 'Excellence, delivered with integrity',
    text: 'We blend creativity and professionalism to provide sustainable solutions that empower our clients — every print and every branded item is a statement of your brand.',
  },
  {
    label: 'Our Vision',
    title: 'Brand elevation, not just design',
    text: 'We offer more than design — we offer brand elevation: identities built with intention, craft, and systems designed to grow with your business.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-14 items-end mb-14">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-teal flex items-center gap-2.5 mb-3.5">
              <span className="w-5 h-px bg-coral inline-block" /> About Bridgelink
            </p>
            <h2 className="font-display font-semibold text-indigo-deep text-[clamp(30px,3.6vw,44px)] leading-tight">
              Printing, branding &amp; a software wing — under one roof.
            </h2>
          </div>
          <p className="text-ink-soft max-w-[440px]">
            Bridgelink is a printing and branding company committed to providing high-quality
            solutions that help businesses, organizations and individuals make a strong
            impression. We also run a dedicated software development wing — websites,
            e-commerce and business systems — so your brand shows up as strong online as it
            does on paper.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-ink/10">
          {specs.map((s) => (
            <div key={s.label} className="border-r border-b border-ink/10 bg-white p-8">
              <span className="block font-mono text-[11px] tracking-wider uppercase text-coral mb-3.5">
                {s.label}
              </span>
              <h3 className="font-display font-semibold text-xl text-indigo-deep mb-3">{s.title}</h3>
              <p className="text-ink-soft text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <BridgeDivider fill="#171347" cableColor="#E8562E" />
    </section>
  )
}
