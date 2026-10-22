import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Send, CheckCircle2, MonitorPlay, Wrench, Headphones, ArrowRight, Loader2 } from 'lucide-react'
import Seo from '../components/Seo'
import {
  PHONE, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK, EMAIL, EMAIL_LINK, FORM_ACCESS_KEY, SITE_URL, whatsappWith,
} from '../data/site'
import '../styles/product-page.css'
import '../styles/contact.css'

const PATH = '/contact-us'
const DESCRIPTION = 'Contact Angadi billing software. Call or WhatsApp +91 95000 78250 or email angadiiofficial@gmail.com to book a free demo or start your 14-day free trial.'

const BUSINESS_TYPES = ['Supermarket', 'Grocery / Kirana', 'Retail shop', 'Garments & textiles', 'Footwear', 'Mobile & computer', 'Vegetables & fruits', 'Spa & salon', 'Wholesale / distribution', 'Other']

const NEXT_STEPS = [
  [Phone, 'We call you back', 'Our team calls you to understand your shop and your counters.'],
  [MonitorPlay, 'Free demo', 'See Angadi working with your kind of items, in Tamil or English.'],
  [Wrench, 'Setup & training', 'We help you install, load your items and train your staff.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'Contact Angadi',
      url: SITE_URL + PATH,
      mainEntity: {
        '@type': 'Organization',
        name: 'Angadi',
        url: SITE_URL,
        email: EMAIL,
        contactPoint: { '@type': 'ContactPoint', telephone: `+91${PHONE}`, email: EMAIL, contactType: 'sales', availableLanguage: ['Tamil', 'English'] },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: SITE_URL + PATH },
      ],
    },
  ],
}

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}

const EMPTY = { name: '', phone: '', business: '', type: '', message: '' }

function ContactForm() {
  const [f, setF] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | whatsapp | error
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }))

  const asText = () => [
    'New enquiry from angadi website',
    `Name: ${f.name}`, `Phone: ${f.phone}`, `Business: ${f.business}`,
    f.type && `Type: ${f.type}`, f.message && `Message: ${f.message}`,
  ].filter(Boolean).join('\n')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (e.currentTarget.botcheck.checked) return // spam bot filled the hidden box

    // No mail key yet: hand the enquiry over on WhatsApp so no lead is lost
    if (!FORM_ACCESS_KEY) {
      window.open(whatsappWith(asText()), '_blank', 'noopener')
      setStatus('whatsapp')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_ACCESS_KEY,
          subject: `New Angadi enquiry: ${f.business}`,
          from_name: 'Angadi Website',
          name: f.name, phone: f.phone, business: f.business, business_type: f.type, message: f.message,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus('sent')
      setF(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent' || status === 'whatsapp') {
    return (
      <div className="ct-done" role="status">
        <CheckCircle2 size={48} aria-hidden="true" />
        <h3>{status === 'sent' ? 'Thank you! Your message is on its way.' : 'Almost done!'}</h3>
        <p>
          {status === 'sent'
            ? 'Our team will call you back shortly. For anything urgent, call or WhatsApp us.'
            : 'WhatsApp has opened with your details. Just press send there and our team will reply.'}
        </p>
        <button type="button" className="ct-link" onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    )
  }

  return (
    <form className="ct-form" onSubmit={onSubmit}>
      <div className="ct-form__row">
        <label>
          <span>Your Name *</span>
          <input name="name" required autoComplete="name" value={f.name} onChange={set('name')} placeholder="e.g. Kumar" />
        </label>
        <label>
          <span>Phone Number *</span>
          <input name="phone" type="tel" required inputMode="numeric" autoComplete="tel" pattern="[0-9+ ]{10,14}" title="Enter a 10 digit mobile number" value={f.phone} onChange={set('phone')} placeholder="10 digit mobile number" />
        </label>
      </div>
      <div className="ct-form__row">
        <label>
          <span>Business Name *</span>
          <input name="business" required autoComplete="organization" value={f.business} onChange={set('business')} placeholder="Your shop or company name" />
        </label>
        <label>
          <span>Business Type</span>
          <select name="type" value={f.type} onChange={set('type')}>
            <option value="">Select one</option>
            {BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea name="message" rows="4" value={f.message} onChange={set('message')} placeholder="Tell us how many counters or branches you have, or anything you want to know" />
      </label>
      <input type="checkbox" name="botcheck" className="ct-hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      {status === 'error' && (
        <p className="ct-err" role="alert">
          Sorry, the message could not be sent. Please <a href={whatsappWith(asText())} target="_blank" rel="noopener noreferrer">send it on WhatsApp</a> or call us.
        </p>
      )}
      <button type="submit" className="ct-submit" disabled={status === 'sending'}>
        {status === 'sending' ? <><Loader2 size={18} className="ct-spin" aria-hidden="true" /> Sending…</> : <>Send Message <Send size={18} aria-hidden="true" /></>}
      </button>
      <p className="ct-note">We only use your details to contact you about Angadi.</p>
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us: Book a Free Billing Software Demo" description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />

      <section className="pp-hero ct-hero">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="pp-crumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <div className="ct-hero__head">
            <p className="pp-pill">Contact Us</p>
            <h1>Let&apos;s Talk About Your Billing</h1>
            <p className="pp-hero__text">
              Book a free demo, ask about pricing or get help with Angadi. Reach us the way you like, in Tamil or English.
            </p>
          </div>
          <ul className="ct-cards">
            <li>
              <a href={PHONE_LINK} className="ct-card">
                <span className="ct-card__ic"><Phone size={22} aria-hidden="true" /></span>
                <b>Call Us</b>
                <span className="ct-card__val">+91 {PHONE_DISPLAY}</span>
                <small>Talk to our team directly</small>
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} className="ct-card ct-card--wa" target="_blank" rel="noopener noreferrer">
                <span className="ct-card__ic"><WhatsAppIcon /></span>
                <b>WhatsApp</b>
                <span className="ct-card__val">+91 {PHONE_DISPLAY}</span>
                <small>Chat with us instantly</small>
              </a>
            </li>
            <li>
              <a href={EMAIL_LINK} className="ct-card">
                <span className="ct-card__ic"><Mail size={22} aria-hidden="true" /></span>
                <b>Email Us</b>
                <span className="ct-card__val">{EMAIL}</span>
                <small>Write to us any time</small>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="ct-main" aria-labelledby="form-title">
        <div className="container ct-main__in">
          <div className="ct-box">
            <p className="pp-eyebrow">Send Us a Message</p>
            <h2 id="form-title">Get a call back from our team</h2>
            <ContactForm />
          </div>

          <aside className="ct-side" aria-label="What happens next">
            <h2>What happens next?</h2>
            <ol>
              {NEXT_STEPS.map(([Icon, title, text]) => (
                <li key={title}>
                  <span className="ct-side__ic"><Icon size={20} aria-hidden="true" /></span>
                  <div><b>{title}</b><span>{text}</span></div>
                </li>
              ))}
            </ol>
            <div className="ct-side__direct">
              <p><Headphones size={18} aria-hidden="true" /> Prefer to talk now?</p>
              <div className="ct-side__btns">
                <a href={PHONE_LINK} className="pp-btn pp-btn--lime"><Phone size={17} aria-hidden="true" /> Call Now</a>
                <a href={WHATSAPP_LINK} className="pp-btn ct-btn-wa" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> WhatsApp</a>
              </div>
            </div>
            <Link to="/products" className="ct-side__more">Explore our products <ArrowRight size={16} aria-hidden="true" /></Link>
          </aside>
        </div>
      </section>
    </>
  )
}
