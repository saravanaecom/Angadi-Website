import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Headphones, IndianRupee, ShieldCheck } from 'lucide-react'

const PERKS = [
  [Settings, 'Quick Setup in Minutes'],
  [Headphones, 'Dedicated Indian Support'],
  [IndianRupee, 'Affordable Plans'],
  [ShieldCheck, 'Secure & Reliable'],
]

export default function CtaBanner() {
  return (
    <section className="section cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <div>
          <h2 id="cta-title" className="section__title">Start Your Free Trial Today</h2>
          <p className="section__sub">
            Experience the simple and powerful billing software trusted by businesses across India.
          </p>
          <div className="btn-row">
            <Link to="/contact-us" className="btn btn--primary btn--lg">
              Free Trial (14 Days) <ArrowRight size={18} />
            </Link>
            <Link to="/contact-us" className="btn btn--outline btn--lg">Book a Demo</Link>
          </div>
        </div>
        <ul className="perks">
          {PERKS.map(([Icon, label]) => (
            <li key={label}>
              <Icon size={34} strokeWidth={1.6} aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
