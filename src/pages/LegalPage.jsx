import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { LEGAL_PAGES, LEGAL_LINKS, LEGAL_UPDATED } from '../data/legal'
import '../styles/legal.css'

// Shared layout for the privacy, terms and refund pages
export default function LegalPage({ page }) {
  const { path, title, description, intro, sections } = LEGAL_PAGES[page]
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <section className="legal">
        <div className="container legal__in">
          <nav aria-label="Breadcrumb">
            <ol className="legal__crumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          <h1>{title}</h1>
          <p className="legal__updated">Last updated: {LEGAL_UPDATED}</p>
          <p className="legal__intro">{intro}</p>
          {sections.map(([heading, paras], i) => (
            <section key={heading} className="legal__sec">
              <h2><span>{i + 1}.</span> {heading}</h2>
              {paras.length > 1
                ? <ul>{paras.map((p) => <li key={p}>{p}</li>)}</ul>
                : <p>{paras[0]}</p>}
            </section>
          ))}
          <nav className="legal__others" aria-label="Other policies">
            {LEGAL_LINKS.filter((l) => l.to !== path).map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          </nav>
        </div>
      </section>
    </>
  )
}
