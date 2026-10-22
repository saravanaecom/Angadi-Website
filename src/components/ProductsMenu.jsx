import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { CATEGORIES, PRODUCT_COUNT, itemPath } from '../data/products/catalog'

function Item({ p, compact }) {
  const body = (
    <>
      <span className="mega__ic"><p.icon size={compact ? 17 : 20} strokeWidth={1.9} aria-hidden="true" /></span>
      <span className="mega__txt"><b>{p.short}</b>{!compact && <small>{p.blurb}</small>}</span>
    </>
  )
  return <Link to={itemPath(p)} className="mega__item">{body}</Link>
}

// Desktop mega menu: categories on the left, shop types of the hovered category on the right.
// Rendered outside the clipped navbar, so it is positioned against the whole header.
export function MegaMenu({ open, onEnter, onLeave, onClose }) {
  const [active, setActive] = useState(CATEGORIES[0].id)
  const cat = CATEGORIES.find((c) => c.id === active)
  return (
    <div
      id="mega-products"
      className={`mega${open ? ' is-open' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) onLeave() }}
      onKeyDown={(e) => { if (e.key === 'Escape') onClose() }}
    >
      <div className="mega__cats" role="tablist" aria-label="Product categories">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={c.id === active}
            className={`mega__cat${c.id === active ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(c.id)}
            onFocus={() => setActive(c.id)}
            onClick={() => setActive(c.id)}
          >
            <c.icon size={18} aria-hidden="true" /> {c.title} <ChevronRight size={16} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="mega__list" role="tabpanel">
        {cat.items.map((p) => <Item key={p.slug} p={p} />)}
      </div>
      <div className="mega__foot">
        <span>{PRODUCT_COUNT}+ industry-specific solutions</span>
        <Link to="/products">View all <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>
  )
}

// Mobile menu: one collapsible block per category
export function MobileProducts() {
  return (
    <div className="nav__sub">
      {CATEGORIES.map((c, i) => (
        <details key={c.id} open={i === 0}>
          <summary><c.icon size={18} aria-hidden="true" /> {c.title}</summary>
          <div className="nav__sub-list">{c.items.map((p) => <Item key={p.slug} p={p} compact />)}</div>
        </details>
      ))}
      <Link to="/products" className="nav__sub-all">View all products <ArrowRight size={16} aria-hidden="true" /></Link>
    </div>
  )
}
