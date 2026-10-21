import { Link } from 'react-router-dom'
import { Phone, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { LEGAL_LINKS } from '../data/legal'
import { NAV_LINKS, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo full />
          <p className="footer__about">
            Fast, easy and reliable billing software for retail shops, supermarkets, restaurants,
            wholesale and more. Made in India.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contact</h2>
          <ul className="footer__links">
            <li><a href={PHONE_LINK}><Phone size={16} /> +91 {PHONE_DISPLAY}</a></li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container footer__bar-in">
          <p>© {new Date().getFullYear()} Angadi. All rights reserved.</p>
          <nav aria-label="Legal">
            {LEGAL_LINKS.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          </nav>
        </div>
      </div>
    </footer>
  )
}
