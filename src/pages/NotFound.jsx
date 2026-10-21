import PagePlaceholder from '../components/PagePlaceholder'

export default function NotFound() {
  return (
    <PagePlaceholder
      title="Page Not Found"
      heading="Page not found"
      description="Sorry, the page you are looking for does not exist."
      path="/404"
    />
  )
}
