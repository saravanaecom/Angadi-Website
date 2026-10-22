// Live domain (also in public/robots.txt and public/sitemap.xml)
export const SITE_URL = 'https://www.angadii.in'
export const SITE_NAME = 'Angadi'
export const TAGLINE = 'Smart Bill Smart Business'

export const PHONE = '9500078250'
export const PHONE_DISPLAY = `${PHONE.slice(0, 5)} ${PHONE.slice(5)}` // 95000 78250
export const PHONE_LINK = `tel:+91${PHONE}`
export const WHATSAPP_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent('Hi, I want to know more about Angadi Billing Software')}`

export const EMAIL = 'angadiiofficial@gmail.com'
export const EMAIL_LINK = `mailto:${EMAIL}`
export const whatsappWith = (text) => `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`

// Contact form mail service (Web3Forms, free). Get the key at https://web3forms.com by entering
// angadiiofficial@gmail.com; mails then arrive in that inbox. Until a key is set the form
// sends the enquiry on WhatsApp instead.
export const FORM_ACCESS_KEY = ''

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact-us', label: 'Contact Us' },
]

// TODO: replace these placeholders with your real links
export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
}
export const DOWNLOAD_LINK = '/contact-us' // change to the software download link
export const GOOGLE_REVIEW_LINK = 'https://www.google.com/maps' // change to your Google Business review page
export const GOOGLE_RATING = '4.9' // change to your real Google rating
