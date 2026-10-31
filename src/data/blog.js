export const BLOG_POSTS = [
  {
    slug: 'prepare-your-billing-counter',
    title: 'A smoother checkout starts before your first customer',
    category: 'Billing Tips', image: 'retail-shop-billing',
    alt: 'Retail billing counter with Angadi software and a receipt printer',
    excerpt: 'A short opening routine for your scanner, item list and printer can save interruptions during the evening rush.',
    takeaway: 'Run one test bill before opening, then cancel it using your normal audit process.',
    sections: [
      ['Test the counter as a cashier', 'Scan a packaged item, search for a loose item and print a receipt. Check that the product name, selling price and unit match what is on the shelf. A working computer alone does not tell you whether the whole counter is ready.'],
      ['Keep frequent items easy to find', 'Give staff a consistent way to search for bread, milk and other daily purchases. Use clear item names and separate pack sizes. If two products share a similar name, add the brand or quantity so the cashier can tell them apart.'],
      ['Agree on how staff handle exceptions', 'Decide who can approve a discount, correct a price or process a return. Keep a spare receipt roll beside the printer. Before the rush, show a new cashier how to find an item with a damaged barcode without creating a duplicate product.'],
    ],
  },
  {
    slug: 'weekly-stock-count-routine',
    title: 'Count a little stock each week, without closing the shop',
    category: 'Inventory', image: 'purchase-stock',
    alt: 'Purchase and stock management screen for a retail shop',
    excerpt: 'Start with one shelf and a small group of fast-moving items. Here is a stock-count routine your team can repeat.',
    takeaway: 'Investigate a stock difference before changing the quantity in your software.',
    sections: [
      ['Choose a manageable section', 'Pick one shelf, category or supplier group for each count. Start with items that sell often or have caused problems. Count at a quieter time and record any sales or deliveries that happen while you work.'],
      ['Compare the same units', 'Check whether your software records pieces, boxes or kilograms. Twelve bottles and one carton may describe the same stock, but only if the pack size is correct. Count sealed packs and loose pieces separately before converting them to the unit you use in billing.'],
      ['Find the reason for a difference', 'Look for an unentered purchase, a return, damage or a bill entered against the wrong item. Record the reason and the person who approved an adjustment. Use that record at the next count to see whether the same mistake has happened again.'],
    ],
  },
  {
    slug: 'daily-closing-checklist',
    title: 'What to check before you close the shop for the day',
    category: 'Shop Operations', image: 'analytics-dashboard',
    alt: 'Angadi sales dashboard with shop performance reports',
    excerpt: 'Match cash, review returns and leave clear notes for tomorrow. A practical closing checklist for the owner and cashier.',
    takeaway: 'Keep sales totals separate from the money received against older customer dues.',
    sections: [
      ['Match receipts by payment method', 'Compare the cash in the drawer with your recorded cash receipts, opening float and cash paid out. Review card and UPI receipts against the relevant payment records. A payment still awaiting confirmation needs a note rather than an assumption.'],
      ['Review corrections while staff remember them', 'Look through returns, cancelled bills and manual discounts with the cashier. Ask about an unusual entry while the details are fresh. Keep the bill reference and reason together so another member of staff can follow what happened.'],
      ['Leave tomorrow a clear starting point', 'Record the closing cash, pending deliveries and customer requests that need follow-up. Check that your backup process completed and that the backup can be accessed by an authorised person. End the shift with each staff member signed out of their own account.'],
    ],
  },
  {
    slug: 'organise-product-barcode-list',
    title: 'Clean up your product list before adding more barcodes',
    category: 'Billing Tips', image: 'supermarket-billing',
    alt: 'Supermarket checkout with barcode billing equipment',
    excerpt: 'Duplicate items and unclear pack sizes make billing harder. Put a simple naming and barcode routine in place.',
    takeaway: 'Search for an existing item before creating a new product record.',
    sections: [
      ['Use names staff can recognise', 'Choose a naming pattern such as brand, product and pack size. Keep the unit visible. A cashier should be able to distinguish a 500 g pack from a 1 kg pack without opening a second screen or asking another person.'],
      ['Check what each barcode identifies', 'Scan a sample from a new delivery and confirm the item and pack size. Keep separate records when products need separate stock quantities. When a supplier changes packaging, check the code before changing the existing product record.'],
      ['Give one person ownership of changes', 'Let cashiers report missing or incorrect products, but choose who can approve master-data edits. Review duplicates with their bill and stock history before merging or retiring them. Keep an old item inactive when you still need its transaction records.'],
    ],
  },
  {
    slug: 'plan-your-second-shop',
    title: 'Opening a second shop? Write down these decisions first',
    category: 'Business Growth', image: 'multi-branch-billing',
    alt: 'Connected branch billing and head office management illustration',
    excerpt: 'Decide who controls prices, how stock moves and what each branch reports before the first delivery arrives.',
    takeaway: 'Test a complete stock transfer with both branches before using it for daily deliveries.',
    sections: [
      ['Decide what the branches share', 'Write down whether branches use the same product names, prices and offers. Assign responsibility for changing each one. A shared item list is easier to maintain when staff know where to request a correction and who approves it.'],
      ['Track stock at both ends', 'Record the quantity sent from one location and the quantity received at the other. Give the receiving team a way to report damage or missing items. Agree on how to record goods that have left the first shop but have not reached the second.'],
      ['Compare a small set of daily figures', 'Begin with branch sales, returns, collections and stock differences. Give managers access to the information they need for their own shop. Before launch, rehearse a busy day with a return, a price change and a delayed delivery so your process has been tested beyond a straightforward sale.'],
    ],
  },
  {
    slug: 'manage-customer-credit-records',
    title: 'Keep customer credit clear for you and your customers',
    category: 'Shop Operations', image: 'grocery-billing',
    alt: 'Grocery shop billing counter and customer account management',
    excerpt: 'Record each credit sale and repayment against the right account, with a clear balance your staff can explain.',
    takeaway: 'Confirm the customer account before recording a credit sale or a repayment.',
    sections: [
      ['Create one account per customer', 'Use a name your staff can recognise and confirm contact details with the customer. Check for an existing account before creating another. Customers with similar names need a clear identifier so a bill does not reach the wrong ledger.'],
      ['Record payments when you receive them', 'Link each repayment to the correct customer and record the payment method. Give the customer an acknowledgement and keep a reference your team can retrieve. If a sale includes an immediate payment, show the paid amount and remaining balance separately.'],
      ['Review balances with the customer', 'Set a regular time to check outstanding amounts and resolve disputed entries using the original bill or receipt. Ask permission before sending account information through a messaging service. Limit staff access to customer records and use individual logins to track changes.'],
    ],
  },
]

export const BLOG_CATEGORIES = ['All articles', ...new Set(BLOG_POSTS.map((post) => post.category))]
export const readingTime = (post) => Math.max(1, Math.ceil(post.sections.reduce((count, section) => count + section.join(' ').split(/\s+/).length, 0) / 200))
