import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock3, BookOpen } from 'lucide-react'
import Seo from '../components/Seo'
import { BLOG_POSTS, readingTime } from '../data/blog'
import { heroSrc, heroSrcSet } from '../data/heroSlides'
import { SITE_URL } from '../data/site'
import '../styles/blog.css'

export default function BlogArticle({ slug }) {
  const post = BLOG_POSTS.find((item) => item.slug === slug)
  const related = BLOG_POSTS.filter((item) => item.slug !== slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 2)
  const path = `/blog/${post.slug}`
  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={path} jsonLd={{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.excerpt, image: SITE_URL + heroSrc(post.image, 1200), author: { '@type': 'Organization', name: 'Angadi', url: SITE_URL }, mainEntityOfPage: SITE_URL + path }} />
      <section className="blog-article-hero"><div className="container">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{post.category}</span></nav>
        <div className="blog-meta"><span>{post.category}</span><span><Clock3 size={14} aria-hidden="true" />{readingTime(post)} min read</span></div>
        <h1>{post.title}</h1><p>{post.excerpt}</p><span className="blog-byline">By the Angadi team</span>
      </div></section>
      <div className="container blog-article-layout">
        <article className="blog-article-body">
          <img className="blog-article-cover" src={heroSrc(post.image, 1200)} srcSet={heroSrcSet(post.image)} sizes="(min-width: 1000px) 780px, 100vw" width="1200" height="800" alt={post.alt} fetchPriority="high" />
          {post.sections.map(([title, text], index) => <section key={title} id={`step-${index + 1}`}><h2>{title}</h2><p>{text}</p></section>)}
          <div className="blog-takeaway"><BookOpen size={25} aria-hidden="true" /><div><h2>Try this at your shop</h2><p>{post.takeaway}</p></div></div>
          <Link to="/blog" className="blog-read"><ArrowLeft size={18} aria-hidden="true" /> Back to all articles</Link>
        </article>
        <aside className="blog-article-side"><nav aria-label="In this article"><p className="blog-eyebrow">IN THIS ARTICLE</p><ol>{post.sections.map(([title], index) => <li key={title}><a href={`#step-${index + 1}`}>{title}</a></li>)}</ol></nav><div><h2>Make it work for your shop.</h2><p>Ask our team how Angadi can fit your billing and stock routines.</p><Link to="/contact-us" className="blog-read">Talk to us <ArrowRight size={18} aria-hidden="true" /></Link></div></aside>
      </div>
      <section className="blog-related"><div className="container"><p className="blog-eyebrow">KEEP READING</p><h2>More from the Angadi journal</h2><div>{related.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`}><span>{item.category}</span><h3>{item.title}</h3><span className="blog-read">Read article <ArrowRight size={18} aria-hidden="true" /></span></Link>)}</div></div></section>
    </>
  )
}

