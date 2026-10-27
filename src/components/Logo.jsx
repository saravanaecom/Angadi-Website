import { Link } from 'react-router-dom'
import { SITE_NAME, TAGLINE } from '../data/site'

// Small "A" mark, used inside the hero picture
export function LogoMark({ size = 40 }) {
  return <img src="/images/angadi-icon.webp" width={size} height={size} alt="" />
}

export default function Logo({ full = false }) {
  return (
    <Link to="/" className={`logo${full ? ' logo--full' : ''}`} aria-label={`${SITE_NAME} home`}>
      {full ? (
        <img
          src="/images/angadi-logo-full.webp"
          width="132" height="80" loading="lazy"
          alt={`${SITE_NAME} - ${TAGLINE}`}
        />
      ) : (
        <img
          src="/images/angadi-logo.webp"
          srcSet="/images/angadi-logo-180.webp 180w, /images/angadi-logo.webp 291w"
          sizes="(max-width: 400px) 110px, (max-width: 1080px) 132px, 142px"
          width="142" height="78" fetchPriority="high"
          alt={`${SITE_NAME} - ${TAGLINE}`}
        />
      )}
    </Link>
  )
}
