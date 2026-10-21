import { Link } from 'react-router-dom'
import Seo from './Seo'

// Temporary page body until each page is designed
export default function PagePlaceholder({ title, heading, description, path, children }) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <section className="section page-hero">
        <div className="container">
          <h1 className="section__title">{heading}</h1>
          <p className="section__sub">{description}</p>
          {children}
          <p className="section__sub">This page is coming soon.</p>
          <Link to="/" className="btn btn--primary">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
