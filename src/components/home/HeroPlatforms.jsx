import { Monitor, Smartphone, Globe } from 'lucide-react'

// Brand marks drawn inline (tiny, no extra request)
const Windows = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="#0078d4" d="M2 4.3 10 3.2v7.6H2zM11 3 22 1.5v9.3H11zM2 12h8v7.7l-8-1.1zM11 12h11v9.5L11 20z" /></svg>
)
const Apple = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="#111827" d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.4-.6 3.1-1.5z" /></svg>
)
const Android = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="#3ddc84" d="M6 9h12v8a1.5 1.5 0 0 1-1.5 1.5H16V21a1.2 1.2 0 0 1-2.4 0v-2.5h-3.2V21A1.2 1.2 0 0 1 8 21v-2.5h-.5A1.5 1.5 0 0 1 6 17zM3.5 9.2a1.2 1.2 0 0 1 2.4 0v5a1.2 1.2 0 0 1-2.4 0zm14.6 0a1.2 1.2 0 0 1 2.4 0v5a1.2 1.2 0 0 1-2.4 0zM6.2 8a6 6 0 0 1 3-4.6L8.3 1.9a.3.3 0 0 1 .5-.3l.9 1.6a6.3 6.3 0 0 1 4.6 0l.9-1.6a.3.3 0 0 1 .5.3l-.9 1.5a6 6 0 0 1 3 4.6zm3.3-2.3a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4zm5 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4z" /></svg>
)
const Web = () => <Globe size={16} color="#0f7a3d" strokeWidth={2} aria-hidden="true" />

const GROUPS = [
  [Monitor, 'Computer', [[Windows, 'Windows'], [Apple, 'Mac'], [Web, 'Web']]],
  [Smartphone, 'Mobile', [[Android, 'Android'], [Apple, 'iOS']]],
]

// Two labelled boxes sitting on top of the green strip: where Angadi runs
export default function HeroPlatforms() {
  return (
    <div className="platforms">
      {GROUPS.map(([Icon, title, items]) => (
        <div key={title} className="platforms__box">
          <p className="platforms__title"><Icon size={14} strokeWidth={2.4} aria-hidden="true" /> {title}</p>
          <ul className="platforms__list" aria-label={`${title} platforms`}>
            {items.map(([Mark, name]) => (
              <li key={name}><Mark />{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
