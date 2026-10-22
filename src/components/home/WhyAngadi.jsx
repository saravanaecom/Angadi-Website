import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Award, CloudOff, ShieldCheck, Headphones, Wrench, MousePointerClick, ArrowRight, ChevronDown,
  Wallet, ScanBarcode, Gift, Tags, FileText, BookUser, Receipt, MessageCircle, Store, Smartphone, Printer,
} from 'lucide-react'
import '../../styles/why.css'

// Figures already used elsewhere on the site
const PROOF = [
  ['17+', 'Years in billing'],
  ['10,000+', 'Businesses'],
  ['24×7', 'Tamil support'],
]

const TRUST = [
  [Award, '17+ Years in Billing', 'A team that has been setting up billing counters for Tamil Nadu shops for over 17 years.'],
  [CloudOff, 'Bills Even Without Internet', 'The counter keeps billing offline and syncs to the cloud once the line is back.'],
  [ShieldCheck, 'Your Data Stays Safe', 'Automatic cloud backup and user-wise rights, so only the owner can edit or delete.'],
  [Headphones, 'Help in Tamil', 'Call or WhatsApp our team in Tamil or English whenever your counter needs help.'],
  [Wrench, 'Setup & Training Support', 'We help you install Angadi, load your items and train your staff before you go live.'],
  [MousePointerClick, 'Easy for Any Staff', 'Clear screens and shortcut keys, so new counter staff pick it up quickly.'],
]

const CHOOSE = [
  [Wallet, 'Every Payment Mode', 'Cash, UPI, card and credit on the same bill, with a mode-wise tally at day end.', 'Retail'],
  [ScanBarcode, 'Barcode Print & Scan', 'Print price labels for loose and own-brand items, then bill each one with a single scan.', 'Retail'],
  [Gift, 'MRP, Offers & Discounts', 'Bill at MRP or your own price, with item, bill and festival offers applied for you.', 'Retail'],
  [Award, 'Loyalty for Regulars', 'Points and memberships that give your regular customers a reason to come back.', 'Retail'],
  [Tags, 'Party-wise Price Lists', 'Separate retail, wholesale and dealer rates, so every party gets the right price.', 'B2B'],
  [FileText, 'Quotation to Invoice', 'Send a quotation and turn it into a bill in one click once the order is confirmed.', 'B2B'],
  [BookUser, 'Credit & Outstanding', 'Customer and supplier dues in one place, with payment reminders on WhatsApp.', 'B2B'],
  [Receipt, 'GST-Ready Invoices', 'HSN and CGST, SGST or IGST worked out for you, with reports ready for GSTR filing.', 'Retail & B2B'],
  [MessageCircle, 'Bills on WhatsApp', "Share the bill PDF to your customer's WhatsApp straight from the billing screen.", 'Retail & B2B'],
  [Store, 'Multi-Branch Control', 'Stock transfer between branches and one combined view for the head office.', 'Retail & B2B'],
  [Smartphone, 'Owner Mobile App', 'Sales, stock and dues of every counter and branch, live on your phone.', 'Retail & B2B'],
  [Printer, 'Works With Your Hardware', 'Thermal and A4 printers, barcode scanners, weighing scales and cash drawers.', 'Retail & B2B'],
]

export function WhyTrust() {
  return (
    <section className="why-t" aria-labelledby="why-trust-title">
      <div className="container why-t__in">
        <div className="why-t__intro">
          <p className="why-eyebrow">Why Angadi</p>
          <h2 id="why-trust-title">Why Businesses Trust Angadi Billing Software?</h2>
          <p className="why-t__lead">
            Shop owners stay with Angadi because the counter never stops, the numbers are always right
            and help is one call away, in the language they speak.
          </p>
          <dl className="why-t__proof">
            {PROOF.map(([num, label]) => (
              <div key={label}>
                <dt>{num}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          <Link to="/contact-us" className="why-t__btn">Book Free Demo <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <ul className="why-t__grid">
          {TRUST.map(([Icon, title, text]) => (
            <li key={title}>
              <span className="why-t__ic"><Icon size={22} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function WhyChoose() {
  // Mobile shows the first 6 cards until "View all" is tapped; desktop always shows all
  const [all, setAll] = useState(false)
  return (
    <section className={`section why-c${all ? ' why-c--all' : ''}`} aria-labelledby="why-choose-title">
      <div className="container">
        <div className="why-c__head">
          <p className="why-eyebrow">For Retail &amp; B2B</p>
          <h2 id="why-choose-title" className="section__title">Why Businesses Choose Angadi Billing Software for Retail &amp; B2B?</h2>
          <p className="section__sub">
            Whether you sell over the counter or supply other businesses, Angadi has the tools for the way you trade.
          </p>
        </div>
        <ul className="why-c__grid" id="why-choose-list">
          {CHOOSE.map(([Icon, title, text, tag]) => (
            <li key={title}>
              <div className="why-c__top">
                <span className="why-c__ic"><Icon size={22} aria-hidden="true" /></span>
                <span className={`why-c__tag why-c__tag--${tag === 'B2B' ? 'b2b' : tag === 'Retail' ? 'retail' : 'both'}`}>{tag}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
        <button type="button" className="why-c__more" aria-controls="why-choose-list" aria-expanded={all} onClick={() => setAll((v) => !v)}>
          {all ? 'View less' : `View all ${CHOOSE.length} features`} <ChevronDown size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
