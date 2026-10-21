import { Users, Cloud, Package, Smartphone, Headphones } from 'lucide-react'
import HeroPlatforms from './HeroPlatforms'

const ITEMS = [
  [Users, '10,000+', 'Happy Businesses', 'Trusted Across Tamil Nadu'],
  [Cloud, 'Cloud Offline &', 'Online Billing', 'Access Anywhere, Anytime'],
  [Package, 'Advanced', 'Inventory Management', 'Complete Stock Control'],
  [Smartphone, 'Owner', 'Mobile App', 'Business in Your Pocket'],
  [Headphones, 'Dedicated', 'Tamil Support', 'Quick & Reliable Help'],
]

// Dark green strip of 5 key features under the hero slider
export default function HeroHighlights() {
  return (
    <div className="container">
      <HeroPlatforms />
      <ul className="highlights">
        {ITEMS.map(([Icon, top, main, sub]) => (
          <li key={main}>
            <Icon size={28} aria-hidden="true" />
            <span>
              <b>{top}</b>
              <strong>{main}</strong>
              <small>{sub}</small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
