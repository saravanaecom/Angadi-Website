import {
  ScanBarcode, Languages, Tags, Scale, Printer, Gift, CirclePause, CalendarClock, PackageOpen, Award, Wallet, BellRing,
  ClipboardList, FileSpreadsheet, Truck, BookUser, Layers, PackageMinus, ClipboardCheck, ArrowLeftRight, Undo2, Repeat, BadgeIndianRupee, Warehouse,
  TrendingUp, Gauge, Receipt, FileCheck, Smartphone, MessageCircle, UserCog, CloudUpload, Calculator, IndianRupee, ChartPie,
  Inbox, Tv, Tag,
} from 'lucide-react'

// Content for /products/supermarket-billing-software
export const FEATURE_GROUPS = [
  {
    id: 'billing-product',
    title: 'Billing & Product',
    tag: 'Fast counter, happy queue',
    intro: 'Everything at the supermarket counter: scan, weigh, apply offers and print in seconds.',
    image: 'billing-product',
    alt: 'Angadi billing and product screen with 1 second product search, 2 second bill print and grocery items at the counter',
    items: [
      [ScanBarcode, 'Barcode & Quick Search Billing', 'Scan or type 2 letters, the item is on the bill.'],
      [Languages, 'Tamil & English Bills', 'Print each bill in the language your customer reads.'],
      [Tags, 'Multiple MRP Billing', 'Same item, different MRP batches, pick the right one.'],
      [Scale, 'Weighing Scale Link', 'Loose items read weight straight from the scale.'],
      [Printer, 'Barcode Label Printing', 'Print your own labels for loose and repacked goods.'],
      [Gift, 'Free Offers & Combos', 'Buy 2 Get 1 and combo deals applied automatically.'],
      [CirclePause, 'Bill Hold & Recall', 'Park a bill, serve the next customer, resume later.'],
      [CalendarClock, 'Batch & Expiry Tracking', 'Know which batch expires first, sell it first.'],
      [PackageOpen, 'Repacking', 'Turn a 25 kg bag into 1 kg packs, stock updates itself.'],
      [Award, 'Loyalty Points', 'Reward regular customers and bring them back.'],
      [Wallet, 'Split Payments', 'Cash, UPI and card on one bill, tallied at day end.'],
      [BellRing, 'Low Stock Alert', 'A gentle warning while billing when stock runs low.'],
    ],
  },
  {
    id: 'purchase-stock',
    title: 'Purchase & Stock',
    tag: 'Right stock, right time',
    intro: 'Buy smart, track every packet and never lose money on dead stock.',
    image: 'purchase-stock',
    alt: 'Angadi purchase and stock dashboard with purchase entry, stock report, supplier dues, stock transfer and reorder alerts',
    items: [
      [ClipboardList, 'Purchase Entry & Orders', 'Raise POs and enter supplier bills in minutes.'],
      [FileSpreadsheet, 'Excel Import', 'Upload items and purchase bills from Excel at once.'],
      [Truck, 'Supplier Ledger & Dues', 'See what you owe each supplier and when it is due.'],
      [BookUser, 'Customer Credit (Kadan)', 'Track credit sales and send payment reminders.'],
      [Layers, 'Batch-wise Stock', 'Stock, cost and MRP kept separately for every batch.'],
      [PackageMinus, 'Stock Adjustment', 'Record damage, expiry and free samples properly.'],
      [ClipboardCheck, 'Physical Stock Audit', 'Count the shelf, compare with system, fix the gap.'],
      [ArrowLeftRight, 'Branch Stock Transfer', 'Move goods between HO and branches with one entry.'],
      [Undo2, 'Purchase & Sales Returns', 'Returns update stock and accounts automatically.'],
      [Repeat, 'Reorder Suggestions', 'Angadi suggests what to buy based on your sales.'],
      [BadgeIndianRupee, 'Margin-based Pricing', 'Set selling price from purchase cost and margin.'],
      [Warehouse, 'Godown & Multi Location', 'Know stock in the shop, godown and every branch.'],
    ],
  },
  {
    id: 'report-utility',
    title: 'Report & Utility',
    tag: 'Clear numbers, calm owner',
    intro: 'Daily numbers, GST filing and safety tools so the owner sleeps well.',
    image: 'analytics-dashboard',
    alt: 'Angadi reports dashboard with daily sales and profit, GST reports, fast and slow movers, day-end cash closing and stock alerts',
    phone: true,
    items: [
      [TrendingUp, 'Daily Sales & Profit', "Today's sales, cost and profit on one screen."],
      [Gauge, 'Fast & Slow Movers', 'Find best sellers and items stuck on the shelf.'],
      [Receipt, 'GST Reports & Excel Export', 'GSTR-1 and 3B ready data for your auditor.'],
      [FileCheck, 'E-Invoice & E-Way Bill', 'Generate IRN and e-way bills from the bill itself.'],
      [Smartphone, 'Owner Mobile App', 'Live sales of every counter, right on your phone.'],
      [MessageCircle, 'WhatsApp & SMS Bills', 'Send bills and offers to customers instantly.'],
      [UserCog, 'User Rights', 'Cashiers bill, only owners can edit or delete.'],
      [CloudUpload, 'Auto Cloud Backup', 'Data saved to the cloud every day, automatically.'],
      [Calculator, 'Day-end Cash Closing', 'Counter-wise cash, UPI and card tally in one click.'],
      [IndianRupee, 'Expense Tracking', 'Rent, salary, EB, all expenses in your profit report.'],
      [ChartPie, 'Purchase & Supplier Reports', 'Supplier-wise buying and pending payments.'],
    ],
  },
]

export const FEATURE_COUNT = FEATURE_GROUPS.reduce((n, g) => n + g.items.length, 0)

export const HARDWARE = [
  [ScanBarcode, 'Barcode Scanner'],
  [Printer, 'Thermal Printer'],
  [Scale, 'Weighing Scale'],
  [Inbox, 'Cash Drawer'],
  [Tv, 'Customer Display'],
  [Tag, 'Label Printer'],
]

export const FAQS = [
  ['Which is the best supermarket billing software in Chennai?', 'Angadi is built for Chennai and Tamil Nadu supermarkets: fast barcode billing, Tamil bills, weighing scale support, GST reports and 24x7 Tamil support. Book a free demo and try it in your own store.'],
  ['Does Angadi work without internet?', 'Yes. Billing runs fully offline on the counter computer and syncs to the cloud when the internet is back, so your queue never stops.'],
  ['Can I print bills in Tamil?', 'Yes. Angadi prints bills in Tamil or English, and you can choose the language for each customer.'],
  ['Which hardware works with Angadi?', 'Common barcode scanners, thermal and A4 printers, weighing scales, cash drawers, customer displays and label printers.'],
  ['Can I manage multiple branches?', 'Yes. Head office and every branch share one dashboard with branch stock transfer, branch-wise sales and the owner mobile app.'],
  ['Is there a free trial?', 'Yes. You get a 14-day free trial with free installation and training. No credit card needed.'],
]
