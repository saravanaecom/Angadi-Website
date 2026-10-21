import {
  ScanBarcode, Boxes, FileText, Users, Truck, Store, CloudOff, LineChart, UserCog, Languages,
} from 'lucide-react'

const FEATURES = [
  [ScanBarcode, 'Fast Billing with Barcode'],
  [Boxes, 'Inventory Management'],
  [FileText, 'GST Billing & Reports'],
  [Users, 'Customer Management'],
  [Truck, 'Purchase & Supplier Management'],
  [Store, 'Multi-Store Support'],
  [CloudOff, 'Works Offline, Online or Hybrid'],
  [LineChart, 'Detailed Reports & Analytics'],
  [UserCog, 'User & Role Management'],
  [Languages, 'Multi-language (Tamil, English & more)'],
]

export default function Features() {
  return (
    <section className="section section--tint" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="section__title">Everything You Need in One Software</h2>
        <p className="section__sub">
          From billing to inventory, reports to customer management – Angadi has all the tools to
          run your business smoothly.
        </p>
        <ul className="features">
          {FEATURES.map(([Icon, label]) => (
            <li key={label} className="features__item">
              <span className="features__icon"><Icon size={26} aria-hidden="true" /></span>
              <h3>{label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
