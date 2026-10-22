// Hero slider content. Each slide has its own scene picture in /public/images/hero/:
// hero-<image>-1200.webp and hero-<image>-720.webp (3:2). To use a real photo later,
// export it at those two sizes with the same file names and nothing else needs to change.
export const HERO_SLIDES = [
  {
    pill: 'For Retail & Kirana Shops',
    title: ['Retail Shop Billing.', 'Fast Bills,', 'Happy Customers.'],
    text: 'Bill in seconds with barcode or quick item search, print neat receipts and track every rupee your shop earns.',
    points: ['Barcode & quick item search', 'Thermal & A4 bill print', 'Daily sales & profit report', 'Low stock alerts'],
    image: 'retail-shop-plan',
    alt: 'Retail shop owner billing a customer at the counter with Angadi billing software, barcode scanner and receipt printer',
  },
  {
    pill: 'For Supermarkets & Hypermarkets',
    title: ['Supermarket Billing.', 'Long Queues,', 'Cleared Fast.'],
    text: 'Handle rush hours with multi-counter billing, barcode scanning, weighing scale support and offers that apply automatically.',
    points: ['Multi-counter billing', 'Barcode & weighing scale', 'Offers, combos & loyalty', 'Batch & expiry tracking'],
    image: 'supermarket-plan',
    alt: 'Supermarket cashier billing a smiling customer with Angadi billing software, barcode scanner and receipt printer',
  },
  {
    pill: '100% GST Ready',
    title: ['GST Invoice Billing.', 'Correct Tax,', 'Zero Stress.'],
    text: 'Create GST invoices with HSN codes and automatic CGST / SGST / IGST split, then get GSTR reports in one click.',
    points: ['Auto CGST, SGST & IGST', 'HSN / SAC codes', 'GSTR-1 & GSTR-3B reports', 'B2B & B2C invoices'],
    image: 'gst-invoice-plan',
    alt: 'Angadi GST invoice billing screen with HSN codes and CGST and SGST split, A4, A5 and A6 tax invoice formats and the Angadi mobile app',
  },
  {
    pill: 'Desktop + Mobile App',
    title: ['Cloud Billing.', 'Shop PC + Mobile,', 'Always in Sync.'],
    text: 'Bill on your shop computer and see live sales on your phone. Data backs up to the cloud and billing works offline too.',
    points: ['Live sales on mobile app', 'Auto cloud backup', 'Works offline, syncs later', 'Owner & staff logins'],
    image: 'cloud-billing-plan',
    alt: 'Angadi cloud billing on a shop computer and the Angadi mobile app, synced through Angadi Cloud with offline and online billing',
  },
  {
    pill: 'Multi-Branch Billing',
    title: ['Multiple Branch.', 'HO + Branch 1, 2, 3,', 'One Dashboard.'],
    text: 'Run your head office and every branch from one Angadi account. See branch-wise sales, move stock and control prices centrally.',
    points: ['HO sees all branches live', 'Branch-wise sales reports', 'Stock transfer between branches', 'Central price & item control'],
    image: 'multi-branch-plan',
    alt: 'Angadi multiple branch billing dashboard showing head office and Branch 1, 2 and 3 connected through Angadi Cloud with branch-wise sales',
  },
]

export const heroSrc = (image, w) => `/images/hero/hero-${image}-${w}.webp`
export const heroSrcSet = (image) => `${heroSrc(image, 720)} 720w, ${heroSrc(image, 1200)} 1200w`
// Picture column is ~55% of the page on desktop, full width on mobile
export const HERO_SIZES = '(min-width: 1024px) 55vw, 100vw'
