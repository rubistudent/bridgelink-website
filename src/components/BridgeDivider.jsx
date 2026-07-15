import { useEffect, useRef, useState } from 'react'

// A reusable SVG bridge-arch used as a section divider throughout the page.
// `fill` controls the color of the "deck" shape, so the divider always
// matches the section that comes AFTER it.
export default function BridgeDivider({ fill = '#171347', cableColor = '#E8562E' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full leading-none">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto block">
        <path
          className={`bridge-cable ${inView ? 'in-view' : ''}`}
          d="M0 20C0 20 300 90 600 90C900 90 1200 20 1200 20"
          stroke={cableColor}
          strokeOpacity="0.5"
          fill="none"
          strokeWidth="1.4"
        />
        <path
          d="M0 40C240 62 420 70 600 70C780 70 960 62 1200 40V120H0V40Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
