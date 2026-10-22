import Seo from '../components/Seo'
import Hero from '../components/home/Hero'
import BusinessTypes from '../components/home/BusinessTypes'
import { WhyTrust, WhyChoose } from '../components/home/WhyAngadi'
import HomeFaq from '../components/home/HomeFaq'
import { HOME_FAQS } from '../data/homeFaq'
import Trusted from '../components/home/Trusted'
import CtaBanner from '../components/home/CtaBanner'
import { PHONE, SITE_URL } from '../data/site'

const appLd = {
  '@type': 'SoftwareApplication',
  name: 'Angadi Billing Software',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows, macOS, Web, Android, iOS',
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

const faqLd = {
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

const jsonLd = { '@context': 'https://schema.org', '@graph': [appLd, faqLd] }

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
      <WhyTrust />
      <WhyChoose />
      <HomeFaq />
      <Trusted />
      <CtaBanner />
    </>
  )
}
