import { Store, Truck, Package, Pill, Warehouse, Receipt, FileCheck, FileText, Cloud, Globe, Building2, TabletSmartphone, ChartLine, MapPin, ReceiptText, CloudCog, Smartphone } from 'lucide-react'
import { RETAIL_PRODUCTS } from './retail'

// Products menu tree. Items without a page yet (ready: false) are listed as "coming soon".
const soon = (slug, short, icon, blurb) => ({ slug, short, icon, blurb, ready: false })

export const CATEGORIES = [
  { id: 'retail', title: 'Retail Software', icon: Store, items: RETAIL_PRODUCTS },
  {
    id: 'distribution', title: 'Distribution Software', icon: Truck,
    items: [
      soon('wholesale-billing-software', 'Wholesale', Truck, 'Bulk billing, party-wise rates and outstanding.'),
      soon('fmcg-distributor-billing-software', 'FMCG Distributor', Package, 'Beat-wise orders, schemes and van stock.'),
      soon('pharma-distributor-billing-software', 'Pharma Distributor', Pill, 'Batch, expiry and drug licence details.'),
      soon('warehouse-inventory-software', 'Warehouse & Inventory', Warehouse, 'Rack-wise stock, inward and dispatch.'),
    ],
  },
  {
    id: 'gst', title: 'GST Invoicing Software', icon: ReceiptText,
    items: [
      soon('gst-billing-software', 'GST Billing', Receipt, 'GST invoices, HSN and GSTR-ready reports.'),
      soon('e-invoice-e-way-bill-software', 'E-Invoice & E-Way Bill', FileCheck, 'IRN and e-way bills from the invoice.'),
      soon('quotation-invoice-software', 'Quotation & Invoice', FileText, 'Quotes that turn into invoices in one click.'),
    ],
  },
  {
    id: 'cloud', title: 'Cloud Billing Software', icon: CloudCog,
    items: [
      soon('cloud-billing-software', 'Cloud Billing', Cloud, 'Bill anywhere, data safe in the cloud.'),
      soon('web-billing-software', 'Web-Based Billing', Globe, 'Bill from any browser, no installation.'),
      soon('multi-branch-billing-software', 'Multi-Branch Billing', Building2, 'HO and branches on one dashboard.'),
    ],
  },
  {
    id: 'mobile', title: 'Mobile Billing Software', icon: Smartphone,
    items: [
      soon('android-billing-app', 'Android Billing App', TabletSmartphone, 'Full billing on an Android phone or tablet.'),
      soon('owner-mobile-app', 'Owner Mobile App', ChartLine, 'Live sales and stock on your phone.'),
      soon('van-sales-billing-app', 'Van Sales Billing App', MapPin, 'Field billing and collections on the move.'),
    ],
  },
]

export const PRODUCTS = CATEGORIES.flatMap((c) => c.items.filter((p) => p.ready !== false).map((p) => ({ ...p, category: c.title })))
export const PRODUCT_COUNT = CATEGORIES.reduce((n, c) => n + c.items.length, 0)
export const productPath = (slug) => `/products/${slug}`
