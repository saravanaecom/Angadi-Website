// Runs after `vite-react-ssg build` on every pre-rendered page in dist/.
// PageSpeed tweaks that the SSG/beasties pipeline has no hook for:
//  1. Hero and logo image preloads go to the top of <head>, so the LCP image is requested first.
//  2. The app JS (hydration) starts loading after the page has painted and the hero image is in,
//     instead of competing with them for the first network round trips.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DIST = new URL('../dist/', import.meta.url).pathname

function pages(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) return f === 'assets' || f === 'images' || f === 'fonts' ? [] : pages(p)
    return f === 'index.html' ? [p] : []
  })
}

for (const file of pages(DIST)) {
  let html = readFileSync(file, 'utf8')

  {
    const imgPreloads = html.match(/<link rel="preload" as="image"[^>]*>/g) || []
    for (const l of imgPreloads) html = html.replace(l, '')
    // The viewport meta must come before them, or the preload picks the image size for a 980px desktop viewport
    const viewport = html.match(/<meta name="viewport"[^>]*>/)[0]
    html = html.replace(viewport, '').replace('<meta charset="UTF-8">', '<meta charset="UTF-8">' + viewport + imgPreloads.reverse().join(''))
  }

  {
    const m = html.match(/<script type="module" async crossorigin src="([^"]+)"><\/script>/)
    if (m) {
      html = html.replace(m[0], '').replace(/<link rel="modulepreload"[^>]*>/g, '')
      const loader = `<script>(function(){function go(){var s=document.createElement('script');s.type='module';s.crossOrigin='';s.src='${m[1]}';document.head.appendChild(s)}if(document.readyState==='complete')go();else addEventListener('load',go)})()</script>`
      html = html.replace('</body>', loader + '</body>')
    }
  }

  writeFileSync(file, html)
}
