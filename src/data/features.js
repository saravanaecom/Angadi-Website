import { ReceiptText, Tags, Boxes, Users, ChartColumn, Cloud } from 'lucide-react'

// Content for /features: every feature, grouped by area of the shop. `tone` picks the card colour (see features.css).
export const FEATURE_CATEGORIES = [
  {
    id: 'billing',
    title: 'Billing & Counter',
    icon: ReceiptText,
    tone: 'green',
    items: [
      ['Barcode & Quick Search Billing', 'Scan or type 2 letters, the item is on the bill.'],
      ['Offline Billing', 'The counter keeps billing with no internet and syncs when the line is back.'],
      ['Tamil & English Bills', 'Print each bill in the language your customer reads.'],
      ['Multiple MRP Billing', 'Same item, different MRP batches, pick the right one.'],
      ['Weighing Scale Link', 'Loose items read weight straight from the scale.'],
      ['Bill Hold & Recall', 'Park a bill, serve the next customer, resume later.'],
      ['Split Payments', 'Cash, UPI and card on one bill, tallied at day end.'],
      ['Free Offers & Combos', 'Buy 2 Get 1 and combo deals applied automatically.'],
    ],
  },
  {
    id: 'products',
    title: 'Products & Pricing',
    icon: Tags,
    tone: 'amber',
    items: [
      ['Barcode Label Printing', 'Print your own labels for loose and repacked goods.'],
      ['Repacking', 'Turn a 25 kg bag into 1 kg packs, stock updates itself.'],
      ['Margin-based Pricing', 'Set selling price from purchase cost and margin.'],
      ['Batch & Expiry Tracking', 'Know which batch expires first, sell it first.'],
      ['Excel Import', 'Upload items and purchase bills from Excel at once.'],
      ['Size & Colour Variants', 'One item, many sizes and colours, each with its own stock.'],
      ['Retail & Wholesale Rates', 'Keep separate rates for walk-in, wholesale and regular buyers.'],
      ['Quick Keys for Loose Items', 'One tap for rice, dal and vegetables, no barcode needed.'],
    ],
  },
  {
    id: 'stock',
    title: 'Purchase & Stock',
    icon: Boxes,
    tone: 'blue',
    items: [
      ['Purchase Entry & Orders', 'Raise POs and enter supplier bills in minutes.'],
      ['Supplier Ledger & Dues', 'See what you owe each supplier and when it is due.'],
      ['Batch-wise Stock', 'Stock, cost and MRP kept separately for every batch.'],
      ['Stock Adjustment', 'Record damage, expiry and free samples properly.'],
      ['Physical Stock Audit', 'Count the shelf, compare with system, fix the gap.'],
      ['Purchase & Sales Returns', 'Returns update stock and accounts automatically.'],
      ['Reorder Suggestions', 'Angadi suggests what to buy based on your sales.'],
      ['Low Stock Alert', 'A gentle warning while billing when stock runs low.'],
    ],
  },
  {
    id: 'customers',
    title: 'Customers & Loyalty',
    icon: Users,
    tone: 'rose',
    items: [
      ['Customer Credit (Kadan)', 'Track credit sales and send payment reminders.'],
      ['Credit Limit', 'Set a limit for each customer, billing warns when it is crossed.'],
      ['Loyalty Points', 'Reward regular customers and bring them back.'],
      ['Customer History', 'See what each customer buys and how often they visit.'],
      ['WhatsApp & SMS Bills', 'Send bills to customers instantly, no paper needed.'],
      ['Offer Messages', 'Tell your customer list about festival offers and new stock.'],
    ],
  },
  {
    id: 'reports',
    title: 'Reports & GST',
    icon: ChartColumn,
    tone: 'violet',
    items: [
      ['Daily Sales & Profit', "Today's sales, cost and profit on one screen."],
      ['Fast & Slow Movers', 'Find best sellers and items stuck on the shelf.'],
      ['GST Reports & Excel Export', 'GSTR-1 and 3B ready data for your auditor.'],
      ['E-Invoice & E-Way Bill', 'Generate IRN and e-way bills from the bill itself.'],
      ['Day-end Cash Closing', 'Counter-wise cash, UPI and card tally in one click.'],
      ['Expense Tracking', 'Rent, salary, EB, all expenses in your profit report.'],
      ['Purchase & Supplier Reports', 'Supplier-wise buying and pending payments.'],
      ['Staff-wise Sales', 'Sales by cashier and counter, so you know who sells best.'],
    ],
  },
  {
    id: 'cloud',
    title: 'Branches, Cloud & Security',
    icon: Cloud,
    tone: 'teal',
    items: [
      ['Owner Mobile App', 'Live sales of every counter, right on your phone.'],
      ['Multi-Branch Dashboard', 'Head office and every branch on one screen.'],
      ['Branch Stock Transfer', 'Move goods between HO and branches with one entry.'],
      ['Godown & Multi Location', 'Know stock in the shop, godown and every branch.'],
      ['User Rights', 'Cashiers bill, only owners can edit or delete.'],
      ['Auto Cloud Backup', 'Data saved to the cloud every day, automatically.'],
      ['Edit & Delete Log', 'See who changed or deleted a bill, and when.'],
      ['Desktop, Web & Mobile', 'Use Angadi on Windows, Mac, the web, Android and iOS.'],
    ],
  },
]

export const FEATURE_TOTAL = FEATURE_CATEGORIES.reduce((n, c) => n + c.items.length, 0)

export const FEATURE_FAQS = [
  ['Does Angadi work without internet?', 'Yes. Billing runs fully offline and syncs to the cloud when the internet is back.'],
  ['Can I print bills in Tamil?', 'Yes. Angadi prints bills in Tamil or English, and you can choose the language for each customer.'],
  ['Which hardware works with Angadi?', 'Common barcode scanners, thermal printers, weighing scales, cash drawers, customer displays and label printers.'],
  ['Can I see sales from my phone?', 'Yes. The Owner Mobile App shows live sales of every counter and branch.'],
]
