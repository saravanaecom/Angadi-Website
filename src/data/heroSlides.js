// Hero slider content. Each slide has its own scene picture in /public/images/hero/:
// hero-<image>-1200.webp and hero-<image>-720.webp (3:2). To use a real photo later,
// export it at those two sizes with the same file names and nothing else needs to change.
export const HERO_SLIDES = [
  {
    pill: 'For Retail & Kirana Shops',
    title: ['Retail Shop Billing.', 'Fast Bills,', 'Happy Customers.'],
    text: 'Bill in seconds with barcode or quick item search, print neat receipts and track every rupee your shop earns.',
    points: ['Barcode & quick item search', 'Thermal & A4 bill print', 'Daily sales & profit report', 'Low stock alerts'],
    image: 'retail-shop-billing',
    alt: 'Retail shop billing counter in Tamil Nadu with the Angadi billing software on a POS computer, a barcode scanner, a weighing scale and a thermal printer printing a bill',
  },
  {
    pill: 'For Supermarkets & Hypermarkets',
    title: ['Supermarket Billing.', 'Long Queues,', 'Cleared Fast.'],
    text: 'Handle rush hours with multi-counter billing, barcode scanning, weighing scale support and offers that apply automatically.',
    points: ['Multi-counter billing', 'Barcode & weighing scale', 'Offers, combos & loyalty', 'Batch & expiry tracking'],
    image: 'supermarket-billing',
    alt: 'Tamil Nadu supermarket checkout with Angadi billing software on a POS computer, barcode scanner, receipt printer and a basket of groceries',
  },
  {
    pill: '100% GST Ready',
    title: ['GST Invoice Billing.', 'Correct Tax,', 'Zero Stress.'],
    text: 'Create GST invoices with HSN codes and automatic CGST / SGST / IGST split, then get GSTR reports in one click.',
    points: ['Auto CGST, SGST & IGST', 'HSN / SAC codes', 'GSTR-1 & GSTR-3B reports', 'B2B & B2C invoices'],
    image: 'gst-invoice-billing',
    alt: 'GST tax invoice made in Angadi billing software, printed on an A4 printer with GSTIN, HSN codes and CGST and SGST split',
  },
  {
    pill: 'Desktop + Mobile App',
    title: ['Cloud Billing.', 'Shop PC + Mobile,', 'Always in Sync.'],
    text: 'Bill on your shop computer and see live sales on your phone. Data backs up to the cloud and billing works offline too.',
    points: ['Live sales on mobile app', 'Auto cloud backup', 'Works offline, syncs later', 'Owner & staff logins'],
    image: 'cloud-billing-desktop-mobile',
    alt: 'Angadi cloud billing dashboard on a shop computer and the Angadi mobile app on a phone, synced through the cloud',
  },
  {
    pill: 'Multi-Branch Billing',
    title: ['Multiple Branch.', 'HO + Branch 1, 2, 3,', 'One Dashboard.'],
    text: 'Run your head office and every branch from one Angadi account. See branch-wise sales, move stock and control prices centrally.',
    points: ['HO sees all branches live', 'Branch-wise sales reports', 'Stock transfer between branches', 'Central price & item control'],
    image: 'multi-branch-billing',
    alt: 'Angadi head office dashboard connected live to Branch 1 Madurai, Branch 2 Trichy and Branch 3 Salem with branch-wise sales',
  },
]

export const heroSrc = (image, w) => `/images/hero/hero-${image}-${w}.webp`
export const heroSrcSet = (image) => `${heroSrc(image, 720)} 720w, ${heroSrc(image, 1200)} 1200w`
// Picture column is ~55% of the page on desktop, full width on mobile
export const HERO_SIZES = '(min-width: 1024px) 55vw, 100vw'
