import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import HeroHighlights from './HeroHighlights'
import { HERO_SLIDES, HERO_SIZES, heroSrc, heroSrcSet } from '../../data/heroSlides'

const AUTOPLAY_MS = 6000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  // No fade on first paint, so the heading shows at once (better LCP)
  const [moved, setMoved] = useState(false)
  const touchX = useRef(null)
  const count = HERO_SLIDES.length
  // Pictures are added only when needed: slide 1 at first paint, the next one ahead of time
  const [loaded, setLoaded] = useState([0])
  useEffect(() => {
    const next = (index + 1) % count
    const t = setTimeout(() => setLoaded((l) => (l.includes(index) && l.includes(next) ? l : [...new Set([...l, index, next])])), index === 0 ? 2500 : 0)
    return () => clearTimeout(t)
  }, [index, count])

  const go = (i) => { setMoved(true); setIndex((i + count) % count) }

  // Auto-play; stops on hover/focus and for people who prefer reduced motion
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => { setMoved(true); setIndex((i) => (i + 1) % count) }, AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [index, paused, count])

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Angadi highlights">
      <div
        className="container hero__inner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* All slides sit in one grid cell, so the hero keeps the height of the tallest
            slide and nothing below it jumps when the slide changes */}
        <div className="hero__slides">
          {HERO_SLIDES.map((sl, i) => {
            const active = i === index
            const Title = i === 0 ? 'h1' : 'h2'
            return (
              <div
                key={sl.pill}
                className={`hero__content${active ? ' is-active' : ''}${active && moved ? ' hero__slide' : ''}`}
                aria-hidden={!active}
                inert={!active}
              >
                <p className="pill">{sl.pill}</p>
                <Title className="hero__title">
                  {sl.title[0]}<br />
                  {sl.title[1]}<br />
                  <span>{sl.title[2]}</span>
                </Title>
                <p className="hero__text">{sl.text}</p>
                <div className="btn-row">
                  <Link to="/contact-us" className="btn btn--primary btn--lg">
                    Free Trial (14 Days) <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact-us" className="btn btn--outline btn--lg">Book a Live Demo</Link>
                </div>
                <ul className="hero__points">
                  {sl.points.map((p) => (
                    <li key={p}><Check size={16} /> {p}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="hero__visual">
          {/* Same stacking as the text: every picture sits in one 3:2 frame, only the active one shows */}
          <div className="hero__pics">
            {HERO_SLIDES.map((sl, i) => loaded.includes(i) && (
              <img
                key={sl.image}
                className={`hero__pic${i === index ? ' is-active' : ''}`}
                src={heroSrc(sl.image, 1200)}
                srcSet={heroSrcSet(sl.image)}
                sizes={HERO_SIZES}
                width="1200"
                height="800"
                alt={sl.alt}
                aria-hidden={i !== index}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'low'}
                decoding={i === 0 ? 'sync' : 'async'}
              />
            ))}
          </div>
          <div className="hero__dots">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.pill}
                type="button"
                className={i === index ? 'is-active' : ''}
                aria-label={`Show slide ${i + 1} of ${count}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <HeroHighlights />
    </section>
  )
}
