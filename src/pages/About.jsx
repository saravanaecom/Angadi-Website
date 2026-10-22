import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import StatStrip from '../components/StatStrip'
import { heroSrc, heroSrcSet } from '../data/heroSlides'
import { ABOUT_STATS, STORY, PURPOSE, WHAT_WE_DO, HOW_WE_WORK } from '../data/about'
import { PHONE, SITE_URL, TAGLINE, WHATSAPP_LINK } from '../data/site'
import '../styles/product-page.css'
import '../styles/about.css'

const PATH = '/about-us'
const DESCRIPTION = 'Angadi builds billing, stock and accounts software for Tamil Nadu shops. 17+ years, 10,000+ businesses and support in Tamil. Read our story.'
const HERO_IMAGE = 'retail-shop-billing'

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

export default function About() {
  return (
    <>
      <Seo title="About Angadi: Billing Software Made in Tamil Nadu" description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />

      <section className="pp-hero abt-hero">
        <div className="container pp-hero__in">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="pp-crumb">
                <li><Link to="/">Home</Link></li>
                <li aria-current="page">About Us</li>
              </ol>
            </nav>
            <p className="pp-pill">Our Story</p>
            <h1>We Keep Your Counter Moving <em>Billing software made in Tamil Nadu</em></h1>
            <p className="pp-hero__text">
              Angadi is the billing, stock and accounts software behind more than 10,000 shops. For 17+ years we have had one job:
              make every bill quick, every number clear and every owner a little less worried.
            </p>
            <div className="pp-btns">
              <Link to="/contact-us" className="pp-btn pp-btn--lime">Talk to Our Team <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/products" className="pp-btn pp-btn--wa">See Our Products</Link>
            </div>
          </div>
          <div className="abt-hero__pic">
            <img
              src={heroSrc(HERO_IMAGE, 1200)}
              srcSet={heroSrcSet(HERO_IMAGE)}
              sizes="(min-width: 1024px) 560px, 100vw"
              width="1200"
              height="800"
              alt="Angadi billing software running at a retail shop counter"
              fetchPriority="high"
            />
            <span className="abt-hero__tag"><b>{TAGLINE}</b> since day one</span>
          </div>
        </div>
      </section>

      <section className="abt-story" aria-labelledby="story-title">
        <div className="container abt-story__in">
          <div>
            <p className="pp-eyebrow">Why We Exist</p>
            <h2 id="story-title">It started at the billing counter</h2>
            {STORY.map((p) => <p key={p.slice(0, 20)} className="abt-story__p">{p}</p>)}
          </div>
          <ul className="abt-purpose">
            {PURPOSE.map(([Icon, title, text]) => (
              <li key={title}>
                <span className="abt-purpose__ic"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="abt-numbers" aria-label="Angadi in numbers">
        <div className="container">
          <StatStrip stats={ABOUT_STATS} />
        </div>
      </section>

      <section className="abt-do" aria-labelledby="do-title">
        <div className="container">
          <div className="pp-head">
            <p className="pp-eyebrow">What We Build</p>
            <h2 id="do-title">One family of software for every kind of trade</h2>
          </div>
          <ul className="abt-do__grid">
            {WHAT_WE_DO.map(([Icon, title, text, to]) => (
              <li key={title}>
                <Link to={to} className="abt-do__card">
                  <span className="abt-do__ic"><Icon size={26} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="abt-do__more">Explore <ArrowRight size={16} aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="abt-how" aria-labelledby="how-title">
        <div className="container">
          <div className="pp-head">
            <p className="pp-eyebrow">Working With Us</p>
            <h2 id="how-title">From first call to everyday billing</h2>
          </div>
          <ol className="abt-how__steps">
            {HOW_WE_WORK.map(([Icon, title, text], i) => (
              <li key={title}>
                <span className="abt-how__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="abt-how__ic"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pp-cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="pp-cta__box">
            <div>
              <h2 id="cta-title">Ready when your counter is</h2>
              <p>Try Angadi free for 14 days. Our team helps you set up and trains your staff.</p>
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
