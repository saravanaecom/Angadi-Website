import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingContact from './FloatingContact'

// On every page change: jump to the #section if the link has one, otherwise to the top
function ScrollOnNavigate() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollOnNavigate />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
