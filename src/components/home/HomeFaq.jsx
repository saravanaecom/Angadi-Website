import { Link } from 'react-router-dom'
import { Phone, Plus } from 'lucide-react'
import { HOME_FAQS } from '../../data/homeFaq'
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../../data/site'
import '../../styles/faq.css'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}

export default function HomeFaq() {
  return (
    <section className="section hfaq" aria-labelledby="faq-title">
      <div className="container hfaq__in">
        <div className="hfaq__intro">
          <p className="why-eyebrow">FAQ</p>
          <h2 id="faq-title" className="section__title">Frequently Asked Questions</h2>
          <p className="section__sub">
            Quick answers about billing, GST, stock and getting started with Angadi.
          </p>
        </div>
        <div className="hfaq__list">
          {HOME_FAQS.map(([q, a], i) => (
            <details key={q} className="hfaq__item" open={i === 0}>
              <summary>
                <span>{q}</span>
                <i aria-hidden="true"><Plus size={18} /></i>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <div className="hfaq__help">
          <b>Still have a question?</b>
          <span>Talk to our team in Tamil or English.</span>
          <div className="hfaq__btns">
            <a href={PHONE_LINK} className="hfaq__btn hfaq__btn--call"><Phone size={17} aria-hidden="true" /> {PHONE_DISPLAY}</a>
            <a href={WHATSAPP_LINK} className="hfaq__btn hfaq__btn--wa" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp</a>
          </div>
          <Link to="/pricing" className="hfaq__link">See pricing</Link>
        </div>
      </div>
    </section>
  )
}
