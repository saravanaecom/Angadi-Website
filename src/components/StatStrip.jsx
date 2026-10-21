import { useEffect, useRef, useState } from 'react'

// Counts a number like "10,000+" up from 0 when it scrolls into view.
// The real value is in the static HTML (SEO); skipped for reduced motion and non-numeric values like "24×7".
function CountUp({ value }) {
  const m = /^([\d,]+)(\+?)$/.exec(value)
  const ref = useRef(null)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (!m || !el || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const target = Number(m[1].replace(/,/g, ''))
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - start) / 1200)
        setShown(Math.round(target * (1 - (1 - p) ** 3)).toLocaleString('en-IN') + m[2])
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])
  return <span ref={ref}>{shown}</span>
}

// Dark green strip of key numbers with gold icons (styles in product-page.css)
export default function StatStrip({ stats, className = '' }) {
  return (
    <dl className={`pp-stats ${className}`}>
      {stats.map(([Icon, value, label]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd><CountUp value={value} /></dd>
          <span className="pp-stats__ic" aria-hidden="true"><Icon size={18} strokeWidth={2.2} /></span>
        </div>
      ))}
    </dl>
  )
}
