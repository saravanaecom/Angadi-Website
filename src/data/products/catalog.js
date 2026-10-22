import { Store, Truck, Package, Pill, Warehouse, Receipt, FileCheck, FileText, Cloud, Globe, Building2, TabletSmartphone, ChartLine, MapPin, ReceiptText, CloudCog, Smartphone } from 'lucide-react'
import { RETAIL_PRODUCTS } from './retail'

// Products menu tree. Items without their own page yet (ready: false) link to the contact page.
const planned = (slug, short, icon, blurb) => ({ slug, short, icon, blurb, ready: false })

export const CATEGORIES = [
  { id: 'retail', title: 'Retail Software', icon: Store, items: RETAIL_PRODUCTS },
  {
    id: 'distribution', title: 'Distribution Software', icon: Truck,
    items: [
      planned('wholesale-billing-software', 'Wholesale', Truck, 'Bulk billing, party-wise rates and outstanding.'),
      planned('fmcg-distributor-billing-software', 'FMCG Distributor', Package, 'Beat-wise orders, schemes and van stock.'),
      planned('pharma-distributor-billing-software', 'Pharma Distributor', Pill, 'Batch, expiry and drug licence details.'),
      planned('warehouse-inventory-software', 'Warehouse & Inventory', Warehouse, 'Rack-wise stock, inward and dispatch.'),
    ],
  },
  {
    id: 'gst', title: 'GST Invoicing Software', icon: ReceiptText,
    items: [
      planned('gst-billing-software', 'GST Billing', Receipt, 'GST invoices, HSN and GSTR-ready reports.'),
      planned('e-invoice-e-way-bill-software', 'E-Invoice & E-Way Bill', FileCheck, 'IRN and e-way bills from the invoice.'),
      planned('quotation-invoice-software', 'Quotation & Invoice', FileText, 'Quotes that turn into invoices in one click.'),
    ],
  },
  {
    id: 'cloud', title: 'Cloud Billing Software', icon: CloudCog,
    items: [
      planned('cloud-billing-software', 'Cloud Billing', Cloud, 'Bill anywhere, data safe in the cloud.'),
      planned('web-billing-software', 'Web-Based Billing', Globe, 'Bill from any browser, no installation.'),
      planned('multi-branch-billing-software', 'Multi-Branch Billing', Building2, 'HO and branches on one dashboard.'),
    ],
  },
  {
    id: 'mobile', title: 'Mobile Billing Software', icon: Smartphone,
    items: [
      planned('android-billing-app', 'Android Billing App', TabletSmartphone, 'Full billing on an Android phone or tablet.'),
      planned('owner-mobile-app', 'Owner Mobile App', ChartLine, 'Live sales and stock on your phone.'),
      planned('van-sales-billing-app', 'Van Sales Billing App', MapPin, 'Field billing and collections on the move.'),
    ],
  },
]

export const PRODUCTS = CATEGORIES.flatMap((c) => c.items.filter((p) => p.ready !== false).map((p) => ({ ...p, category: c.title })))
export const PRODUCT_COUNT = CATEGORIES.reduce((n, c) => n + c.items.length, 0)
export const productPath = (slug) => `/products/${slug}`
export const itemPath = (p) => (p.ready === false ? '/contact-us' : productPath(p.slug))
