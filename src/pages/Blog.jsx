import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, BookOpen, Clock3, Search, X } from 'lucide-react'
import Seo from '../components/Seo'
import { BLOG_POSTS, BLOG_CATEGORIES, readingTime } from '../data/blog'
import { heroSrc, heroSrcSet } from '../data/heroSlides'
import { SITE_URL } from '../data/site'
import '../styles/blog.css'

export function BlogCard({ post, featured = false }) {
  return (
    <article className={`blog-card${featured ? ' blog-card--featured' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="blog-card__image" tabIndex={-1} aria-hidden="true">
        <img src={heroSrc(post.image, 720)} srcSet={heroSrcSet(post.image)} sizes={featured ? '(min-width: 900px) 650px, 100vw' : '(min-width: 900px) 390px, (min-width: 600px) 50vw, 100vw'} width="1200" height="800" alt={post.alt} loading={featured ? 'eager' : 'lazy'} />
        {featured && <span className="blog-featured-label"><BookOpen size={14} aria-hidden="true" /> Editor&apos;s pick</span>}
      </Link>
      <div className="blog-card__content">
        <div className="blog-meta"><span>{post.category}</span><span><Clock3 size={14} aria-hidden="true" />{readingTime(post)} min read</span></div>
        <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="blog-read" aria-label={`Read article: ${post.title}`}>Read article <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </article>
  )
}

export default function Blog() {
  const [category, setCategory] = useState('All articles')
  const [query, setQuery] = useState('')
  const filtered = BLOG_POSTS.filter((post) => (category === 'All articles' || post.category === category) && `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query.trim().toLowerCase()))
  const defaultView = category === 'All articles' && !query.trim()
  const visible = defaultView ? filtered.slice(1) : filtered
  return (
    <>
      <Seo title="Blog: Practical Guides for Shop Owners" description="Practical Angadi guides for smoother billing, accurate stock, daily shop routines and business growth." path="/blog" jsonLd={{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Angadi Journal', url: `${SITE_URL}/blog`, description: 'Practical guides for shop owners.' }} />
      <section className="blog-hero">
        <div className="container">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Blog</span></nav>
          <div className="blog-hero__row"><div><p className="blog-eyebrow">THE ANGADI JOURNAL</p><h1>Small changes.<br /><span>Better shop days.</span></h1></div><p>Practical ideas for the people behind the counter. Get your billing, stock and daily routines working better, one step at a time.</p></div>
          <div className="blog-hero__foot"><span><BookOpen size={18} aria-hidden="true" /> Written for shop owners &amp; their teams</span><a href="#articles">Find your next read <ArrowRight size={18} aria-hidden="true" /></a></div>
        </div>
      </section>
      <section id="articles" className="blog-library" aria-labelledby="articles-title"><div className="container">
        <div className="blog-library__head"><div><p className="blog-eyebrow">IDEAS YOU CAN PUT TO WORK</p><h2 id="articles-title">From the shop floor</h2></div><label className="blog-search"><Search size={19} aria-hidden="true" /><span className="blog-sr-only">Search articles</span><input type="search" placeholder="Search articles…" value={query} onChange={(event) => setQuery(event.target.value)} />{query && <button type="button" aria-label="Clear search" onClick={() => setQuery('')}><X size={17} /></button>}</label></div>
        <div className="blog-filters" role="group" aria-label="Filter articles by topic">{BLOG_CATEGORIES.map((topic) => <button key={topic} type="button" aria-pressed={category === topic} onClick={() => setCategory(topic)}>{topic}</button>)}</div>
        <p className="blog-result-count" role="status">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}{category !== 'All articles' ? ` in ${category}` : ''}{query.trim() ? ` matching “${query.trim()}”` : ''}</p>
        {defaultView && <BlogCard post={BLOG_POSTS[0]} featured />}
        {visible.length ? <div className="blog-grid">{visible.map((post) => <BlogCard key={post.slug} post={post} />)}</div> : <div className="blog-empty"><Search size={32} aria-hidden="true" /><h3>No articles found</h3><p>Try a different search or browse all topics.</p><button type="button" onClick={() => { setCategory('All articles'); setQuery('') }}>Show all articles <ArrowRight size={18} aria-hidden="true" /></button></div>}
        <aside className="blog-cta"><div><p className="blog-eyebrow">LET&apos;S TALK ABOUT YOUR SHOP</p><h2>Put better billing into practice.</h2><p>Tell us how you work. We&apos;ll walk you through Angadi with your business in mind.</p></div><Link to="/contact-us">Talk to the Angadi team <ArrowRight size={20} aria-hidden="true" /></Link></aside>
      </div></section>
    </>
  )
}
