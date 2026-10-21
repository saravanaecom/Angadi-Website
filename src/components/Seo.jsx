import { Head } from 'vite-react-ssg'
import { SITE_NAME, SITE_URL } from '../data/site'

export default function Seo({ title, description, path = '/', jsonLd }) {
  const url = SITE_URL + path
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME

  return (
    <Head>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  )
}
