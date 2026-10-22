import { Star } from 'lucide-react'

const STATS = [
  ['10,000+', 'Happy Customers'],
  ['500+', 'Cities & Towns'],
  ['50+', 'Business Categories'],
  ['99%', 'Customer Satisfaction'],
]

// Sample reviews: replace with real customer reviews
const REVIEWS = [
  { name: 'Ramesh Kumar', place: 'Supermarket, Coimbatore', text: 'Angadi made our billing very simple. The support team is excellent.' },
  { name: 'Priya', place: 'Grocery Store, Madurai', text: 'Easy to use and very affordable. Perfect for our grocery store.' },
  { name: 'Selvam', place: 'Retail Shop, Tirunelveli', text: 'Offline mode is very useful in our area. Reports are very detailed.' },
]

export default function Trusted() {
  return (
    <section className="trusted" aria-labelledby="trusted-title">
      <div className="trusted__panel">
        <h2 id="trusted-title">Trusted by Businesses Across India</h2>
        <dl className="trusted__stats">
          {STATS.map(([num, label]) => (
            <div key={label}>
              <dt>{num}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="reviews">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="review">
            <span className="review__avatar" aria-hidden="true">{r.name[0]}</span>
            <div>
              <blockquote>“{r.text}”</blockquote>
              <figcaption>
                <b>{r.name}</b>
                <small>{r.place}</small>
              </figcaption>
              <div className="review__stars" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" aria-hidden="true" />
                ))}
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
