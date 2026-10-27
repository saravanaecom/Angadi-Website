import Layout from './components/Layout'
import Home from './pages/Home'
import { PRODUCTS } from './data/products/catalog'

// Home ships in the main bundle; every other page is its own chunk, loaded only when visited
// (the import() must sit inside each lazy function so the build can find the page's CSS)
const page = (props) => ({ default: Page }) => ({ Component: () => <Page {...props} /> })

export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/components/Layout.jsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', lazy: () => import('./pages/About').then(page()) },
      { path: 'product', lazy: () => import('./pages/Product').then(page()) },
      { path: 'products', lazy: () => import('./pages/Products').then(page()) },
      ...PRODUCTS.map((p) => ({ path: `products/${p.slug}`, lazy: () => import('./pages/ProductPage').then(page({ product: p })) })),
      { path: 'pricing', lazy: () => import('./pages/Pricing').then(page()) },
      { path: 'features', lazy: () => import('./pages/Features').then(page()) },
      { path: 'blog', lazy: () => import('./pages/Blog').then(page()) },
      { path: 'contact-us', lazy: () => import('./pages/Contact').then(page()) },
      { path: 'privacy-policy', lazy: () => import('./pages/LegalPage').then(page({ page: 'privacy' })) },
      { path: 'terms-and-conditions', lazy: () => import('./pages/LegalPage').then(page({ page: 'terms' })) },
      { path: 'refund-policy', lazy: () => import('./pages/LegalPage').then(page({ page: 'refund' })) },
      { path: '*', lazy: () => import('./pages/NotFound').then(page()) },
    ],
  },
]
