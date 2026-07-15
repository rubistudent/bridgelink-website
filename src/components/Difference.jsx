const items = [
  {
    image: '/images/diff_identity.jpg',
    title: 'Brand Identity with Intention',
    text: 'Distinctive brand identities crafted with strategy, clarity, and refined aesthetics.',
    alt: 'Bold geometric "A.D Creative" monogram logo',
  },
  {
    image: '/images/diff_craft.jpg',
    title: 'Thoughtful Design Craft',
    text: 'Bold, artistic design created with precision and purpose.',
    alt: 'Stack of branded kraft-cover notebooks with matching bamboo pens',
  },
  {
    image: '/images/diff_experience.jpg',
    title: 'Meaningful Brand Experiences',
    text: 'Designs that connect emotionally and leave a lasting impression.',
    alt: 'The word BRAND with connecting lines to purpose, message, values and clarity',
  },
  {
    image: '/images/diff_evolve.jpg',
    title: 'Brands Built to Evolve',
    text: 'Flexible branding systems designed to grow with your business.',
    alt: 'Three branded tumblers in green, white and gold for a wellness brand',
  },
]

export default function Difference() {
  return (
    <section className="bg-cream py-20 border-b border-ink/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="font-mono text-xs tracking-widest uppercase text-teal flex items-center gap-2.5 mb-3.5">
          <span className="w-5 h-px bg-coral inline-block" /> The difference we create
        </p>
        <h2 className="font-display font-semibold text-indigo-deep text-[clamp(28px,3.4vw,40px)] leading-tight max-w-[560px]">
          We offer more than design — we offer brand elevation.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {items.map((item) => (
            <div key={item.title}>
              <div className="rounded-xl overflow-hidden aspect-[4/5] border border-ink/10 shadow-sm">
                <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-semibold text-lg text-indigo-deep mt-4 mb-1.5">{item.title}</h3>
              <p className="text-sm text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
