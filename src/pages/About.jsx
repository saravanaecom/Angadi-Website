import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Phone, MapPin } from 'lucide-react'
import Seo from '../components/Seo'
import StatStrip from '../components/StatStrip'
import { heroSrc, heroSrcSet } from '../data/heroSlides'
import { ABOUT_STATS, FOUNDER, JOURNEY, VALUES, OFFICES } from '../data/about'
import { PHONE, PHONE_DISPLAY, PHONE_LINK, SITE_URL, TAGLINE, WHATSAPP_LINK } from '../data/site'
import '../styles/product-page.css'
import '../styles/about.css'

const PATH = '/about-us'
const DESCRIPTION = 'Angadi is a made-in-Tamil Nadu billing software company trusted by 10,000+ businesses for 17+ years. Meet the team, our journey and what we stand for.'
const HERO_IMAGE = 'multi-branch-billing'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Angadi',
      url: SITE_URL,
      logo: `${SITE_URL}/images/angadi-logo-full.webp`,
      slogan: TAGLINE,
      description: DESCRIPTION,
      areaServed: { '@type': 'State', name: 'Tamil Nadu' },
      contactPoint: { '@type': 'ContactPoint', telephone: `+91${PHONE}`, contactType: 'customer support', availableLanguage: ['Tamil', 'English'] },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: SITE_URL + PATH },
      ],
    },
  ],
}

// Text still waiting for real details ("[...]") gets a visible highlight
function T({ children }) {
  return /\[.*\]/.test(children) ? <mark className="ph">{children}</mark> : children
}

export default function About() {
  return (
    <>
      <Seo title="About Us: Billing Software Company in Tamil Nadu" description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />

      <section className="pp-hero ab-hero">
        <div className="container pp-hero__in">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="pp-crumb">
                <li><Link to="/">Home</Link></li>
                <li aria-current="page">About Us</li>
              </ol>
            </nav>
            <p className="pp-pill">About Angadi</p>
            <h1>Smart Billing Software <em>for Tamil Nadu Shops</em></h1>
            <p className="pp-hero__text">
              For more than 17 years, Angadi has helped kirana shops, supermarkets and chain stores bill faster, control stock
              and understand their numbers. Our mission is simple: <b>{TAGLINE}</b>.
            </p>
            <StatStrip stats={ABOUT_STATS} />
          </div>
          <div className="ab-hero__pic">
            <img
              src={heroSrc(HERO_IMAGE, 1200)}
              srcSet={heroSrcSet(HERO_IMAGE)}
              sizes="(min-width: 1024px) 560px, 100vw"
              width="1200"
              height="800"
              alt="Angadi billing software dashboard connecting head office and branches"
              fetchPriority="high"
            />
            <span className="ab-hero__badge"><b>17+</b> Years of trust</span>
          </div>
        </div>
      </section>

      <section className="ab-founder" aria-labelledby="founder-title">
        <div className="container">
          <blockquote className="ab-quote">
            <Quote size={34} aria-hidden="true" />
            <p><T>{FOUNDER.message}</T></p>
            <footer><T>{FOUNDER.name}</T>, <T>{FOUNDER.role}</T></footer>
          </blockquote>

          <div className="ab-founder__card">
            <div className="ab-founder__photo" aria-hidden="true"><span>Photo</span></div>
            <div>
              <p className="pp-eyebrow">Meet the Founder</p>
              <h2 id="founder-title"><T>{FOUNDER.name}</T></h2>
              <p className="ab-founder__role"><T>{FOUNDER.role}</T></p>
              <p className="ab-founder__bio"><T>{FOUNDER.bio}</T></p>
              <ul className="ab-founder__hl">
                {FOUNDER.highlights.map(([n, l]) => <li key={l}><b><T>{n}</T></b><span><T>{l}</T></span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-journey" aria-labelledby="journey-title">
        <div className="container">
          <div className="pp-head">
            <p className="pp-eyebrow">Our Journey</p>
            <h2 id="journey-title">17+ years of making billing simple</h2>
          </div>
          <ol className="ab-timeline">
            {JOURNEY.map(([Icon, year, title, text]) => (
              <li key={title}>
                <span className="ab-timeline__dot"><Icon size={20} aria-hidden="true" /></span>
                <div className="ab-timeline__card">
                  <span className="ab-timeline__year"><T>{year}</T></span>
                  <h3><T>{title}</T></h3>
                  <p><T>{text}</T></p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ab-values" aria-labelledby="values-title">
        <div className="container">
          <div className="pp-head">
            <p className="pp-eyebrow">What We Stand For</p>
            <h2 id="values-title">Our values</h2>
          </div>
          <ul className="ab-values__grid">
            {VALUES.map(([Icon, title, text]) => (
              <li key={title}>
                <span className="ab-values__ic"><Icon size={28} strokeWidth={1.8} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ab-offices" aria-labelledby="offices-title">
        <div className="container">
          <div className="pp-head">
            <p className="pp-eyebrow">Visit Us</p>
            <h2 id="offices-title">Our offices</h2>
          </div>
          <ul className="ab-offices__grid">
            {OFFICES.map(([name, line1, line2]) => (
              <li key={name}>
                <span className="ab-offices__ic"><MapPin size={22} aria-hidden="true" /></span>
                <h3><T>{name}</T></h3>
                <address><T>{line1}</T><br /><T>{line2}</T></address>
                <a href={PHONE_LINK}><Phone size={16} aria-hidden="true" /> +91 {PHONE_DISPLAY}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pp-cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="pp-cta__box">
            <div>
              <h2 id="cta-title">Let Angadi run your billing</h2>
              <p>Free installation, free training and 14 days free trial. No credit card needed.</p>
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
