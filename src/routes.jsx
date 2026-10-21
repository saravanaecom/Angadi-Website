import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import { PRODUCTS } from './data/products/catalog'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/components/Layout.jsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <About /> },
      { path: 'product', element: <Product /> },
      { path: 'products', element: <Products /> },
      ...PRODUCTS.map((p) => ({ path: `products/${p.slug}`, element: <ProductPage product={p} /> })),
      { path: 'pricing', element: <Pricing /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact-us', element: <Contact /> },
      { path: 'privacy-policy', element: <LegalPage page="privacy" /> },
      { path: 'terms-and-conditions', element: <LegalPage page="terms" /> },
      { path: 'refund-policy', element: <LegalPage page="refund" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
