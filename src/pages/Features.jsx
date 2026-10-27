import { Link } from 'react-router-dom'
import { ArrowRight, Plus, ListChecks, Award, Store, Headphones, Check } from 'lucide-react'
import Seo from '../components/Seo'
import StatStrip from '../components/StatStrip'
import { heroSrc, heroSrcSet } from '../data/heroSlides'
import { HARDWARE } from '../data/supermarketPage'
import { FEATURE_CATEGORIES, FEATURE_TOTAL, FEATURE_FAQS } from '../data/features'
import { PHONE, PHONE_DISPLAY, PHONE_LINK, SITE_URL, WHATSAPP_LINK } from '../data/site'
import '../styles/product-page.css'
import '../styles/features.css'

const PATH = '/features'
const DESCRIPTION = `See all ${FEATURE_TOTAL}+ features of Angadi billing software: barcode billing, Tamil bills, stock, purchase, GST reports, owner app and cloud backup.`
const HERO_IMAGE = 'supermarket-experience'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Angadi Billing Software',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Point of Sale',
      operatingSystem: 'Windows, macOS, Web, Android, iOS',
      url: SITE_URL + PATH,
      description: DESCRIPTION,
      featureList: FEATURE_CATEGORIES.flatMap((c) => c.items.map(([t]) => t)),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: '14-day free trial' },
      publisher: { '@type': 'Organization', name: 'Angadi', url: SITE_URL, telephone: `+91${PHONE}` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: SITE_URL + PATH },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FEATURE_FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
}

const STATS = [
  [ListChecks, `${FEATURE_TOTAL}+`, 'Features'],
  [Award, '17+', 'Years'],
  [Store, '10,000+', 'Shops'],
  [Headphones, '24×7', 'Tamil Support'],
]

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.1.1.7-.1 1.4Z" />
    </svg>
  )
}

function CtaButtons() {
  return (
    <div className="pp-btns">
      <Link to="/contact-us" className="pp-btn pp-btn--lime">Book Free Demo <ArrowRight size={18} aria-hidden="true" /></Link>
      <a href={WHATSAPP_LINK} className="pp-btn pp-btn--wa" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp Us</a>
    </div>
  )
}

// Decorative phone with a mini sales chart (numbers are illustrative), same as the product pages
function PhoneMock() {
  return (
    <div className="pp-phone" aria-hidden="true">
      <small>Live Sales</small>
      <b>₹1,24,800</b>
      <div className="pp-bars">{[30, 55, 45, 70, 60, 85, 100].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
      <small>3 branches · synced</small>
    </div>
  )
}

// All features on one page: hero, the 3 feature groups as tabs (every panel is in the HTML for search engines), hardware, FAQ, CTA
export default function Features() {
  return (
    <>
      <Seo title="Angadi Features: Billing, Stock, GST Reports & More" description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />

      <section className="pp-hero">
        <div className="container pp-hero__in">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="pp-crumb">
                <li><Link to="/">Home</Link></li>
                <li aria-current="page">Features</li>
              </ol>
            </nav>
            <p className="pp-pill">Angadi Features</p>
            <h1>Every Tool Your Shop Needs <em>One Simple Software</em></h1>
            <p className="pp-hero__text">
              Billing, stock and reports built for Tamil Nadu kirana shops, supermarkets and chain stores.
              Works offline, syncs to the cloud.
            </p>
            <CtaButtons />
            <StatStrip stats={STATS} />
          </div>
          <div className="pp-dev pp-dev--hero">
            <div className="pp-lap">
              <img
                src={heroSrc(HERO_IMAGE, 1200)}
                srcSet={heroSrcSet(HERO_IMAGE)}
                sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
                width="1200"
                height="800"
                alt="Angadi billing software at a supermarket counter with barcode scanner and bill printer"
                fetchPriority="high"
              />
            </div>
            <i className="pp-lap__base" aria-hidden="true" />
            <PhoneMock />
          </div>
        </div>
      </section>

      <section className="ft-groups" aria-labelledby="ft-title">
        <div className="container">
          <div className="pp-head">
            <p className="pp-eyebrow">{FEATURE_TOTAL} Features · {FEATURE_CATEGORIES.length} Groups</p>
            <h2 id="ft-title">Built for every corner of your shop</h2>
            <p className="ft-sub">From the billing counter to the owner's phone, here is everything Angadi does.</p>
          </div>

          {FEATURE_CATEGORIES.map(({ id, title, icon: Icon, tone, items }) => (
            <div key={id} className={`ft-cat ft-cat--${tone}`} aria-labelledby={`ft-${id}`} role="group">
              <div className="ft-cat__head">
                <span className="ft-cat__ic"><Icon size={26} aria-hidden="true" /></span>
                <div>
                  <h3 id={`ft-${id}`}>{title}</h3>
                  <p>{items.length} features</p>
                </div>
              </div>
              <ul className="ft-grid">
                {items.map(([t, d]) => (
                  <li key={t} className="ft-card">
                    <span className="ft-card__ic"><Check size={14} strokeWidth={3} aria-hidden="true" /></span>
                    <div><h4>{t}</h4><p>{d}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pp-hw ft-hw" aria-labelledby="hw-title">
        <div className="container">
          <div className="pp-head">
            <p className="pp-eyebrow">Hardware Ready</p>
            <h2 id="hw-title">Plug in your counter hardware</h2>
          </div>
          <ul className="pp-hw__list">
            {HARDWARE.map(([Icon, name]) => (
              <li key={name}><span><Icon size={26} strokeWidth={1.8} aria-hidden="true" /></span>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pp-faq ft-faq" aria-labelledby="faq-title">
        <div className="container ft-faq__in">
          <div>
            <p className="pp-eyebrow">FAQ</p>
            <h2 id="faq-title">Questions shop owners ask us</h2>
            <p className="ft-faq__call">Still not sure? Call <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>, our team will explain in Tamil.</p>
          </div>
          <div className="pp-faq__list">
            {FEATURE_FAQS.map(([q, a], i) => (
              <details key={q} className="pp-faq__item" open={i === 0}>
                <summary>{q}<i aria-hidden="true"><Plus size={18} /></i></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="pp-cta__box">
            <div>
              <h2 id="cta-title">See Angadi running in your own shop</h2>
              <p>Free installation, free training and a 14-day free trial. No credit card needed.</p>
            </div>
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  )
}
