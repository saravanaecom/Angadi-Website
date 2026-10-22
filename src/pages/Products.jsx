import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { CATEGORIES, PRODUCT_COUNT, productPath, itemPath } from '../data/products/catalog'
import { SITE_URL, WHATSAPP_LINK } from '../data/site'
import '../styles/product-page.css'
import '../styles/products.css'

const DESCRIPTION = `Angadi billing software for ${PRODUCT_COUNT}+ business types: supermarket, grocery, textiles, footwear, mobile shop, salon, distribution, GST, cloud and mobile billing.`

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Angadi Billing Software Products',
  itemListElement: CATEGORIES.flatMap((c) => c.items.filter((p) => p.ready !== false))
    .map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: `${p.short} Billing Software`, url: SITE_URL + productPath(p.slug) })),
}

// /products: every shop type grouped by category
export default function Products() {
  return (
    <>
      <Seo title="Billing Software Products for Every Business" description={DESCRIPTION} path="/products" jsonLd={jsonLd} />
      <section className="pp-hero prd-hero">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="pp-crumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Products</li>
            </ol>
          </nav>
          <p className="pp-pill">{PRODUCT_COUNT}+ industry-specific solutions</p>
          <h1>Billing Software <em>Made for Your Business</em></h1>
          <p className="pp-hero__text">Pick your shop type to see the features, hardware and reports Angadi gives you. Every product works offline, syncs to cloud and comes with Tamil support.</p>
          <nav className="prd-jump" aria-label="Product categories">
            {CATEGORIES.map((c) => <a key={c.id} href={`#${c.id}`}><c.icon size={18} aria-hidden="true" /> {c.title}</a>)}
          </nav>
        </div>
      </section>

      {CATEGORIES.map((c) => (
        <section key={c.id} id={c.id} className="prd-cat" aria-labelledby={`${c.id}-title`}>
          <div className="container">
            <div className="prd-cat__head">
              <span className="prd-cat__ic"><c.icon size={24} aria-hidden="true" /></span>
              <h2 id={`${c.id}-title`}>{c.title}</h2>
              <span className="prd-cat__count">{c.items.length}</span>
            </div>
            <ul className="prd-grid">
              {c.items.map((p) => {
                const body = (
                  <>
                    <span className="prd-card__ic"><p.icon size={24} strokeWidth={1.9} aria-hidden="true" /></span>
                    <span className="prd-card__txt">
                      <h3>{p.short}</h3>
                      <p>{p.blurb}</p>
                    </span>
                    <ArrowRight className="prd-card__go" size={18} aria-hidden="true" />
                  </>
                )
                return (
                  <li key={p.slug}>
                    <Link to={itemPath(p)} className="prd-card">{body}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ))}

      <section className="pp-cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="pp-cta__box">
            <div>
              <h2 id="cta-title">Not sure which one fits your shop?</h2>
              <p>Tell us about your business and we will set up the right Angadi for you. Free demo, free installation.</p>
            </div>
            <div className="pp-btns">
              <Link to="/contact-us" className="pp-btn pp-btn--lime">Book Free Demo <ArrowRight size={18} aria-hidden="true" /></Link>
              <a href={WHATSAPP_LINK} className="pp-btn pp-btn--wa" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
