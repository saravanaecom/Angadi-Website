import { Link } from 'react-router-dom'
import {
  Store, ShoppingCart, ShoppingBasket, Carrot, Warehouse, Pill,
  Wrench, Shirt, MonitorSmartphone, LayoutGrid, ChevronRight,
} from 'lucide-react'
import { productPath } from '../../data/products/catalog'

// Cards link to their product page; types without a page yet open the full product list
const TYPES = [
  [Store, 'Retail Shops', '#e11d48', productPath('retail-shop-billing-software')],
  [ShoppingCart, 'Supermarkets', '#2563eb', productPath('supermarket-billing-software')],
  [ShoppingBasket, 'Grocery Stores', '#f59e0b', productPath('grocery-billing-software')],
  [Carrot, 'Vegetables & Fruits', '#0f7a3d', productPath('vegetable-fruit-billing-software')],
  [Warehouse, 'Wholesale', '#0f7a3d', '/products'],
  [Pill, 'Pharmacy', '#ef4444', '/products'],
  [Wrench, 'Hardware & Paints', '#f59e0b', '/products'],
  [Shirt, 'Textiles & Garments', '#db2777', productPath('garments-textile-billing-software')],
  [MonitorSmartphone, 'Electronics', '#0284c7', productPath('mobile-computer-shop-billing-software')],
  [LayoutGrid, 'More Businesses', '#64748b', '/products'],
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
          {TYPES.map(([Icon, label, color, to]) => (
            <li key={label}>
              <Link to={to} className="types__card">
                <Icon size={34} color={color} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
