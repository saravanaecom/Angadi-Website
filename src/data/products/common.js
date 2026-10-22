import {
  ScanBarcode, Languages, Wallet, CirclePause, Award, BellRing, Gift, Printer,
  ClipboardList, FileSpreadsheet, Truck, BookUser, PackageMinus, ClipboardCheck, ArrowLeftRight, Undo2, Repeat, BadgeIndianRupee,
  TrendingUp, Gauge, Receipt, Smartphone, MessageCircle, UserCog, CloudUpload, Calculator, IndianRupee, ChartPie,
} from 'lucide-react'

// Features every shop type gets. Each product page lists its own special features first,
// then tops up from these lists, so every page has a different mix.
export const COMMON = {
  billing: [
    [ScanBarcode, 'Barcode & Quick Search Billing', 'Scan or type 2 letters, the item is on the bill.'],
    [Languages, 'Tamil & English Bills', 'Print each bill in the language your customer reads.'],
    [Wallet, 'Split Payments', 'Cash, UPI and card on one bill, tallied at day end.'],
    [CirclePause, 'Bill Hold & Recall', 'Park a bill, serve the next customer, resume later.'],
    [Gift, 'Offers & Discounts', 'Item, bill and festival offers applied automatically.'],
    [Award, 'Loyalty Points', 'Reward regular customers and bring them back.'],
    [Printer, 'Thermal & A4 Printing', 'Print 2", 3" or A4 bills with your logo and GSTIN.'],
    [BellRing, 'Low Stock Alert', 'A gentle warning while billing when stock runs low.'],
  ],
  stock: [
    [ClipboardList, 'Purchase Entry & Orders', 'Raise POs and enter supplier bills in minutes.'],
    [FileSpreadsheet, 'Excel Import', 'Upload items and purchase bills from Excel at once.'],
    [Truck, 'Supplier Ledger & Dues', 'See what you owe each supplier and when it is due.'],
    [BookUser, 'Customer Credit (Kadan)', 'Track credit sales and send payment reminders.'],
    [PackageMinus, 'Stock Adjustment', 'Record damage, expiry and free samples properly.'],
    [ClipboardCheck, 'Physical Stock Audit', 'Count the shelf, compare with system, fix the gap.'],
    [Undo2, 'Purchase & Sales Returns', 'Returns update stock and accounts automatically.'],
    [Repeat, 'Reorder Suggestions', 'Angadi suggests what to buy based on your sales.'],
    [BadgeIndianRupee, 'Margin-based Pricing', 'Set selling price from purchase cost and margin.'],
    [ArrowLeftRight, 'Branch Stock Transfer', 'Move goods between HO and branches with one entry.'],
  ],
  reports: [
    [TrendingUp, 'Daily Sales & Profit', "Today's sales, cost and profit on one screen."],
    [Gauge, 'Fast & Slow Movers', 'Find best sellers and items stuck on the shelf.'],
    [Receipt, 'GST Reports & Excel Export', 'GSTR-1 and 3B ready data for your auditor.'],
    [Smartphone, 'Owner Mobile App', 'Live sales of every counter, right on your phone.'],
    [MessageCircle, 'WhatsApp & SMS Bills', 'Send bills and offers to customers instantly.'],
    [UserCog, 'User Rights', 'Cashiers bill, only owners can edit or delete.'],
    [CloudUpload, 'Auto Cloud Backup', 'Data saved to the cloud every day, automatically.'],
    [Calculator, 'Day-end Cash Closing', 'Counter-wise cash, UPI and card tally in one click.'],
    [IndianRupee, 'Expense Tracking', 'Rent, salary, EB, all expenses in your profit report.'],
    [ChartPie, 'Purchase & Supplier Reports', 'Supplier-wise buying and pending payments.'],
  ],
}

const GROUP_META = {
  billing: { id: 'billing-product', title: 'Billing & Product', tag: 'Fast counter, happy queue', image: 'retail-shop-plan' },
  stock: { id: 'purchase-stock', title: 'Purchase & Stock', tag: 'Right stock, right time', image: 'multi-branch-plan' },
  reports: { id: 'report-utility', title: 'Report & Utility', tag: 'Clear numbers, calm owner', image: 'gst-invoice-plan', phone: true },
}
const SIZES = { billing: 12, stock: 12, reports: 10 }

// Special items first, then common items (skipping same titles) up to the group size
export function buildGroups({ intro, special, alt = {}, image = {} }) {
  return Object.keys(GROUP_META).map((k) => {
    const own = special[k] || []
    const titles = new Set(own.map(([, t]) => t))
    const items = [...own, ...COMMON[k].filter(([, t]) => !titles.has(t))].slice(0, Math.max(SIZES[k], own.length))
    return { ...GROUP_META[k], image: image[k] || GROUP_META[k].image, intro: intro[k], alt: alt[k] || `${GROUP_META[k].title} screen in Angadi billing software`, items }
  })
}

export const TRIAL_FAQ = ['Is there a free trial?', 'Yes. You get a 14-day free trial with free installation and training. No credit card needed.']
export const OFFLINE_FAQ = ['Does Angadi work without internet?', 'Yes. Billing runs fully offline on the counter computer and syncs to the cloud when the internet is back.']
