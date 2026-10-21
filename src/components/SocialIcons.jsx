import { SOCIAL_LINKS } from '../data/site'

// Brand icons drawn inline (no extra library or image downloads)
const ICONS = {
  youtube: (
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
  ),
  facebook: (
    <path d="M14 8V6c0-.9.6-1.1 1-1.1h2.6V1h-3.6C10 1 9.2 3.9 9.2 5.8V8H7v4h2.2v11H14V12h3.3l.4-4z" />
  ),
  instagram: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.6" cy="6.4" r="1.4" />
    </>
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" />
  ),
}

const LABELS = { youtube: 'YouTube', facebook: 'Facebook', instagram: 'Instagram', linkedin: 'LinkedIn' }

export default function SocialIcons({ className = 'social' }) {
  return (
    <ul className={className}>
      {Object.entries(SOCIAL_LINKS).map(([key, href]) => (
        <li key={key}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Angadi on ${LABELS[key]}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{ICONS[key]}</svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

