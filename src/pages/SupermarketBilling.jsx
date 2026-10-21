import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { ArrowRight, Plus, ListChecks, Award, Store, Headphones } from 'lucide-react'
import Seo from '../components/Seo'
import StatStrip from '../components/StatStrip'
import { heroSrc, heroSrcSet } from '../data/heroSlides'
import { FEATURE_GROUPS, FEATURE_COUNT, HARDWARE, FAQS } from '../data/supermarketPage'
import { PHONE, PHONE_DISPLAY, PHONE_LINK, SITE_URL, WHATSAPP_LINK } from '../data/site'
import '../styles/product-page.css'

const PATH = '/products/supermarket-billing-software'
const TITLE = 'Supermarket Billing Software in Chennai, Tamil Nadu'
const DESCRIPTION = `Angadi supermarket billing software for Chennai & Tamil Nadu: barcode billing, weighing scale, stock, GST reports & owner app. Works offline. Free demo.`
const DEVICE_SIZES = '(min-width: 1024px) 560px, 100vw'
const HERO_IMAGE = 'cloud-billing-desktop-mobile'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Angadi Supermarket Billing Software',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Point of Sale',
      operatingSystem: 'Windows, macOS, Web, Android, iOS',
      url: SITE_URL + PATH,
      description: DESCRIPTION,
      areaServed: [{ '@type': 'City', name: 'Chennai' }, { '@type': 'State', name: 'Tamil Nadu' }],
      featureList: FEATURE_GROUPS.flatMap((g) => g.items.map(([, t]) => t)),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: '14-day free trial' },
      publisher: { '@type': 'Organization', name: 'Angadi', url: SITE_URL, telephone: `+91${PHONE}` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: SITE_URL + '/product' },
        { '@type': 'ListItem', position: 3, name: 'Supermarket Billing Software', item: SITE_URL + PATH },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
}

const STATS = [
  [ListChecks, `${FEATURE_COUNT}+`, 'Features'],
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

// Decorative phone with a mini sales chart (numbers are illustrative)
function PhoneMock({ label, amount, foot, bars }) {
  return (
    <div className="pp-phone" aria-hidden="true">
      <small>{label}</small>
      <b>{amount}</b>
      <div className="pp-bars">{bars.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
      <small>{foot}</small>
    </div>
  )
}

function DeviceImage({ image, alt, eager }) {
  return (
    <img
      src={heroSrc(image, 1200)}
      srcSet={heroSrcSet(image)}
      sizes={DEVICE_SIZES}
      width="1200"
      height="800"
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'low'}
      decoding="async"
    />
  )
}

export default function SupermarketBilling() {
  return (
    <>
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />
      <Head>
        <link rel="preload" as="image" href={heroSrc(HERO_IMAGE, 1200)} imageSrcSet={heroSrcSet(HERO_IMAGE)} imageSizes={DEVICE_SIZES} fetchPriority="high" />
      </Head>

      <section className="pp-hero">
        <div className="container pp-hero__in">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="pp-crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li aria-current="page">Supermarket Billing Software</li>
              </ol>
            </nav>
            <p className="pp-pill">For Supermarkets &amp; Hypermarkets</p>
            <h1>Supermarket Billing Software <em>for Chennai &amp; Tamil Nadu</em></h1>
            <p className="pp-hero__text">
              Barcode billing, stock, GST reports and an owner app in one simple software, built for Tamil Nadu supermarkets,
              departmental stores and chain stores. Works offline, syncs to cloud.
            </p>
            <CtaButtons />
            <StatStrip stats={STATS} />
          </div>
          <div className="pp-dev pp-dev--hero">
            <div className="pp-lap"><DeviceImage image={HERO_IMAGE} alt="Angadi cloud billing on a shop computer and the owner mobile app" eager /></div>
            <i className="pp-lap__base" aria-hidden="true" />
            <PhoneMock label="Live Sales" amount="₹1,24,800" foot="3 branches · synced" bars={[30, 55, 45, 70, 60, 85, 100]} />
          </div>
        </div>
      </section>

      {FEATURE_GROUPS.map((g, k) => (
        <section key={g.id} id={g.id} className={`pp-sec${k % 2 ? ' pp-sec--alt' : ''}`} aria-labelledby={`${g.id}-title`}>
          <div className={`container pp-sec__in${k % 2 ? ' pp-sec__in--rev' : ''}`}>
            <div className={`pp-dev${k === 1 ? ' pp-dev--mon' : ''}`}>
              {k === 1 ? (
                <>
                  <div className="pp-mon"><DeviceImage image={g.image} alt={g.alt} /></div>
                  <i className="pp-mon__stand" aria-hidden="true" />
                </>
              ) : (
                <>
                  <div className="pp-lap"><DeviceImage image={g.image} alt={g.alt} /></div>
                  <i className="pp-lap__base" aria-hidden="true" />
                </>
              )}
              {g.phone && <PhoneMock label="Today's Sales" amount="₹48,250" foot="Profit ₹9,640" bars={[40, 65, 50, 80, 70, 95, 60]} />}
            </div>
            <div>
              <span className="pp-num" aria-hidden="true">0{k + 1}</span>
              <p className="pp-eyebrow">{g.tag}</p>
              <h2 id={`${g.id}-title`}>{g.title}</h2>
              <p className="pp-intro">{g.intro}</p>
              <ul className="pp-list">
                {g.items.map(([Icon, t, d]) => (
                  <li key={t}>
                    <span className="pp-list__ic"><Icon size={18} aria-hidden="true" /></span>
                    <div><h3>{t}</h3><p>{d}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="pp-hw" aria-labelledby="hw-title">
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

      <section className="pp-faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="pp-head">
            <p className="pp-eyebrow">FAQ</p>
            <h2 id="faq-title">Questions supermarket owners ask us</h2>
          </div>
          <div className="pp-faq__list">
            {FAQS.map(([q, a], i) => (
              <details key={q} className="pp-faq__item" open={i === 0}>
                <summary>{q}<i aria-hidden="true"><Plus size={18} /></i></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <p className="pp-faq__more">Still not sure? Call <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>, our team will explain in Tamil.</p>
        </div>
      </section>

      <section className="pp-cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="pp-cta__box">
            <div>
              <h2 id="cta-title">See Angadi running in your own supermarket</h2>
              <p>Free installation, free training and 14 days free trial. No credit card needed.</p>
            </div>
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  )
}
