import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Download, House, User, Package, Tag, LayoutGrid, Newspaper, Mail, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import SocialIcons from './SocialIcons'
import GoogleRating from './GoogleRating'
import { MegaMenu, MobileProducts } from './ProductsMenu'
import { NAV_LINKS, PHONE_DISPLAY, PHONE_LINK, DOWNLOAD_LINK, LOGIN_LINK, getMobileAppLink, getMobileAppStore } from '../data/site'

const NAV_ICONS = {
  '/': House,
  '/about-us': User,
  '/products': Package,
  '/pricing': Tag,
  '/features': LayoutGrid,
  '/blog': Newspaper,
  '/contact-us': Mail,
}

// Colour gift (red box, yellow ribbon) for the free trial pill
function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M12 7.5C10.5 3 6 2.5 6.2 5.2 6.4 7.3 9.5 7.5 12 7.5ZM12 7.5c1.5-4.5 6-5 5.8-2.3-.2 2.1-3.3 2.3-5.8 2.3Z" fill="#facc15" stroke="#b45309" strokeWidth=".9" />
      <rect x="3.5" y="11" width="17" height="10" rx="1.5" fill="#ef4444" />
      <rect x="2.5" y="7.5" width="19" height="4.2" rx="1.2" fill="#dc2626" />
      <rect x="10.4" y="7.5" width="3.2" height="13.5" fill="#facc15" />
      <rect x="3.5" y="11.7" width="17" height="1.2" fill="#b91c1c" opacity=".5" />
    </svg>
  )
}

function CloudMark() {
  return (
    <svg viewBox="0 0 28 18" width="22" height="14" aria-hidden="true">
      <path d="M7.2 15.2h13.4a4.1 4.1 0 0 0 .5-8.17 6.15 6.15 0 0 0-11.72-1.4A4.9 4.9 0 0 0 7.2 15.2Z" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#fff" />
      <path d="M5.2 4.4v15.2L13.5 12 5.2 4.4Z" fill="#00c9a7" />
      <path d="m5.2 4.4 10.4 5.9-2.1 1.7-8.3-7.6Z" fill="#20a9ff" />
      <path d="m5.2 19.6 10.4-5.9-2.1-1.7-8.3 7.6Z" fill="#ffd43b" />
      <path d="m15.6 10.3 2.8 1.6c.3.2.3.4 0 .6l-2.8 1.6-2.1-2.1 2.1-1.7Z" fill="#ff4b55" />
    </svg>
  )
}

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#fff" />
      <path d="M14.7 5.25c.73-.88 1.23-2.08 1.1-3.25-1.05.04-2.34.7-3.1 1.58-.68.76-1.28 1.99-1.12 3.1 1.18.09 2.37-.59 3.12-1.43Zm2.65 6.9c-.02-2.25 1.84-3.34 1.93-3.4-1.05-1.55-2.68-1.71-3.26-1.75-1.38-.14-2.7.82-3.4.82-.71 0-1.79-.8-2.94-.78-1.49.02-2.87.86-3.63 2.18-1.56 2.69-.4 6.66 1.1 8.84.75 1.07 1.63 2.27 2.79 2.22 1.12-.05 1.54-.72 2.89-.72 1.34 0 1.72.72 2.9.69 1.2-.02 1.96-1.08 2.68-2.16.86-1.23 1.2-2.44 1.22-2.5-.03-.01-2.28-.88-2.29-3.44Z" fill="#191919" />
    </svg>
  )
}

// Desktop screens list the computer apps, phone screens the mobile apps (swapped in CSS, no layout shift)
function OsText() {
  return (
    <>
      <span className="os os--desktop">Windows &amp; Mac</span>
      <span className="os os--mobile">Android &amp; iOS</span>
    </>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mobileApp, setMobileApp] = useState({ link: DOWNLOAD_LINK, store: 'other' })
  const { pathname } = useLocation()

  useEffect(() => {
    const device = {
      userAgent: navigator.userAgent,
      platform: navigator.userAgentData?.platform || navigator.platform,
      maxTouchPoints: navigator.maxTouchPoints,
    }
    setMobileApp({
      link: getMobileAppLink(device),
      store: getMobileAppStore(device),
    })
  }, [])

  // Products mega menu (desktop): opens on hover/focus, closes after a short delay so the pointer can travel into it
  const [mega, setMega] = useState(false)
  const megaTimer = useRef()
  const openMega = () => { clearTimeout(megaTimer.current); setMega(true) }
  const closeMega = () => { clearTimeout(megaTimer.current); megaTimer.current = setTimeout(() => setMega(false), 160) }

  // Close the menus after navigating
  useEffect(() => { setOpen(false); setMega(false) }, [pathname])

  // Stronger shadow once the page has scrolled under the sticky header
  const [stuck, setStuck] = useState(false)
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${stuck ? ' is-stuck' : ''}`}>
      {/* Mobile only: thin green strip with the number and the free trial */}
      <div className="mstrip">
        <a href={PHONE_LINK} className="mstrip__call">
          <span className="mstrip__ic"><Phone size={13} aria-hidden="true" /></span>
          <span className="phone-num">{PHONE_DISPLAY}</span>
        </a>
        <Link to="/contact-us" className="mstrip__trial">
          <b>30 Days Free Trial</b>
          <small>No Credit Card Needed</small>
        </Link>
      </div>

      <div className="hdr">
        <div className="topbar">
          <div className="topbar__follow">
            <span>Follow Us :</span>
            <SocialIcons />
          </div>
          <a href={PHONE_LINK} className="topbar__phone"><Phone size={16} aria-hidden="true" /> <span className="phone-num">{PHONE_DISPLAY}</span></a>
        </div>

        <p className="hdr__trust">
          <span className="hdr__trust-icon" aria-hidden="true">🏆</span>
          <span><b>17+ YEARS</b> Trust &amp; Excellence</span>
        </p>

        <div className="hdr__download">
          <a href={DOWNLOAD_LINK} className="dl-btn">
            <span className="dl-btn__icon"><Download size={17} strokeWidth={2.6} aria-hidden="true" /></span>
            <span><b>Download</b> <OsText /></span>
          </a>
        </div>

        <div className="hdr__nav">
          <Link to="/contact-us" className="hdr__trial">
            <GiftIcon />
            <span>14 Days Free Trial<small>No credit card needed</small></span>
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <div className="hdr__card">
            <div className="navbar">
              <Logo />

              <nav className={`nav${open ? ' nav--open' : ''}`} aria-label="Main">
                <ul className="nav__list">
                  {NAV_LINKS.map((link) => {
                    const Icon = NAV_ICONS[link.to]
                    const isProducts = link.to === '/products'
                    return (
                      <li
                        key={link.to}
                        {...(isProducts && { className: 'nav__item--mega', onMouseEnter: openMega, onMouseLeave: closeMega, onFocus: openMega, onBlur: closeMega })}
                      >
                        <NavLink
                          to={link.to}
                          end={link.to === '/'}
                          // Keep Products highlighted on /product and every /products/... page
                          className={({ isActive }) => `nav__link${isActive || (isProducts && pathname.startsWith('/product')) ? ' active' : ''}`}
                          {...(isProducts && { 'aria-controls': 'mega-products', 'aria-expanded': mega })}
                        >
                          <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                          {link.label}
                        </NavLink>
                        {isProducts && <MobileProducts />}
                      </li>
                    )
                  })}
                </ul>
                <div className="nav__mobile-extra">
                  <a href={DOWNLOAD_LINK} className="btn btn--primary"><Download size={16} aria-hidden="true" /> Download <OsText /></a>
                  <Link to="/contact-us" className="btn btn--outline">Book a Demo</Link>
                  <GoogleRating />
                </div>
              </nav>

              <div className="navbar__desktop-login">
                <span className="navbar__desktop-label">
                  <CloudMark />
                  Online Billing Software
                </span>
                <a href={LOGIN_LINK} className="navbar__login">
                  <User size={21} strokeWidth={2} aria-hidden="true" />
                  <span>Login</span>
                </a>
              </div>

              {/* Mobile only: opens the matching app store beside the menu toggle */}
              <a
                href={mobileApp.link}
                className={`navbar__demo${mobileApp.store === 'android' ? ' navbar__demo--android' : mobileApp.store === 'ios' ? ' navbar__demo--ios' : ''}`}
                aria-label="Install Angadi app"
              >
                {mobileApp.store === 'android' && <GooglePlayIcon />}
                {mobileApp.store === 'ios' && <AppStoreIcon />}
                {mobileApp.store === 'other' && <Download size={18} strokeWidth={2.4} aria-hidden="true" />}
                <span>Install App</span>
              </a>

              <button
                type="button"
                className="header__toggle"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          <a href={PHONE_LINK} className="navbar__phone">
            <span className="phone-ring"><Phone size={16} aria-hidden="true" /></span>
            <span className="phone-num">{PHONE_DISPLAY}</span>
          </a>
        </div>

        <MegaMenu open={mega} onEnter={openMega} onLeave={closeMega} onClose={() => setMega(false)} />
      </div>
    </header>
  )
}
