import Seo from '../components/Seo'
import Hero from '../components/home/Hero'
import BusinessTypes from '../components/home/BusinessTypes'
import Features from '../components/home/Features'
import Trusted from '../components/home/Trusted'
import CtaBanner from '../components/home/CtaBanner'
import { PHONE, SITE_URL } from '../data/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Angadi Billing Software',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows, Android, Web',
  url: SITE_URL,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: '14-day free trial' },
  publisher: {
    '@type': 'Organization',
    name: 'Angadi',
    logo: `${SITE_URL}/images/angadi-logo-full.webp`,
    telephone: `+91${PHONE}`,
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  },
}

export default function Home() {
  return (
    <>
      <Seo
        title="Billing Software for Retail, Supermarket & Restaurant"
        description="Angadi is fast, easy GST billing software for retail shops, supermarkets, restaurants and wholesale. Works offline, online or hybrid. Start your 14-day free trial."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <BusinessTypes />
      <Features />
      <Trusted />
      <CtaBanner />
    </>
  )
}
