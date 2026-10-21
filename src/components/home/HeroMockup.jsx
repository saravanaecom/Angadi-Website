import {
  LayoutDashboard, ShoppingCart, Package, BarChart3, Users, Wallet, Settings,
  FilePlus2, Search,
} from 'lucide-react'
import { LogoMark } from '../Logo'

const BILLS = [
  ['A00123', 'Walk-in', '₹1,250', 'UPI'],
  ['A00122', 'Kumar Stores', '₹3,450', 'Card'],
  ['A00121', 'Priya', '₹980', 'Cash'],
  ['A00120', 'Walk-in', '₹2,300', 'UPI'],
]

const SIDEBAR = [
  [LayoutDashboard, 'Dashboard'],
  [ShoppingCart, 'Sales'],
  [Package, 'Products'],
  [BarChart3, 'Reports'],
  [Users, 'Customers'],
  [Wallet, 'Expenses'],
  [Settings, 'Settings'],
]

const PHONE_APPS = [
  [FilePlus2, 'New Bill', '#2563eb'],
  [Package, 'Products', '#f59e0b'],
  [Users, 'Customers', '#2563eb'],
  [BarChart3, 'Reports', '#e11d48'],
  [Wallet, 'Expenses', '#16a34a'],
  [Settings, 'Settings', '#2563eb'],
]

// A lightweight HTML/SVG picture of the software, so the hero needs no large image download
export default function HeroMockup({ data }) {
  const { note, screen, menu, stats, listTitle, list, chart } = data
  return (
    <div className="mockup" aria-hidden="true">
      <p className="mockup__note">{note[0]}<br />{note[1]}<br />{note[2]}</p>

      <div className="laptop">
        <div className="laptop__screen">
          <aside className="dash__side">
            <div className="dash__brand"><LogoMark size={16} /> Angadi</div>
            {SIDEBAR.map(([Icon, label], i) => (
              <div key={label} className={`dash__menu${i === menu ? ' is-active' : ''}`}>
                <Icon size={11} /> {label}
              </div>
            ))}
          </aside>

          <div className="dash__main">
            <div className="dash__top">
              <strong>{screen}</strong>
              <span className="dash__search"><Search size={9} /> Search…</span>
            </div>

            <div className="dash__stats">
              {stats.map(([label, value, badge]) => (
                <div key={label} className="dash__stat">
                  <small>{label}</small>
                  <b>{value}{badge && <em>{badge}</em>}</b>
                </div>
              ))}
            </div>

            <div className="dash__body">
              <div className="dash__left">
                <svg className="dash__chart" viewBox="0 0 220 60" preserveAspectRatio="none">
                  <polyline
                    fill="none" stroke="#16a34a" strokeWidth="2"
                    points={chart}
                  />
                </svg>
                <table className="dash__table">
                  <thead>
                    <tr><th>Bill No</th><th>Customer</th><th>Amount</th><th>Payment</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {BILLS.map(([no, name, amt, pay]) => (
                      <tr key={no}>
                        <td>{no}</td><td>{name}</td><td>{amt}</td><td>{pay}</td>
                        <td><span className="dash__paid">Paid</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="dash__right">
                <b>{listTitle}</b>
                <ol>
                  {list.map(([item, qty]) => (
                    <li key={item}><span>{item}</span><span>{qty}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop__base" />
      </div>

      <div className="phone">
        <div className="phone__head"><LogoMark size={14} /> Angadi</div>
        <div className="phone__grid">
          {PHONE_APPS.map(([Icon, label, color]) => (
            <div key={label} className="phone__app">
              <span style={{ color }}><Icon size={16} /></span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="receipt">
        <b>Angadi</b>
        <span>Rice 5kg <i>₹450</i></span>
        <span>Oil 1L <i>₹180</i></span>
        <span>Milk <i>₹60</i></span>
        <span>Biscuits <i>₹560</i></span>
        <strong>Total <i>₹1,250</i></strong>
      </div>
    </div>
  )
}
