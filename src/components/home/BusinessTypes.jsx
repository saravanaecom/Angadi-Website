import { Link } from 'react-router-dom'
import {
  Store, ShoppingCart, ShoppingBasket, UtensilsCrossed, Warehouse, Pill,
  Wrench, Shirt, MonitorSmartphone, LayoutGrid, ChevronRight,
} from 'lucide-react'

const TYPES = [
  [Store, 'Retail Shops', '#e11d48'],
  [ShoppingCart, 'Supermarkets', '#2563eb'],
  [ShoppingBasket, 'Grocery Stores', '#f59e0b'],
  [UtensilsCrossed, 'Restaurants', '#0f7a3d'],
  [Warehouse, 'Wholesale', '#0f7a3d'],
  [Pill, 'Pharmacy', '#ef4444'],
  [Wrench, 'Hardware & Paints', '#f59e0b'],
  [Shirt, 'Textiles & Garments', '#db2777'],
  [MonitorSmartphone, 'Electronics', '#0284c7'],
  [LayoutGrid, 'More Businesses', '#64748b'],
]

export default function BusinessTypes() {
  return (
    <section className="section" aria-labelledby="types-title">
      <div className="container">
        <div className="section__head">
          <h2 id="types-title" className="section__title">Built for Every Type of Business</h2>
          <Link to="/products" className="link-more">View All <ChevronRight size={16} /></Link>
        </div>
        <ul className="types">
          {TYPES.map(([Icon, label, color]) => (
            <li key={label} className="types__card">
              <Icon size={34} color={color} strokeWidth={1.8} aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
