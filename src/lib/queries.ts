import { client } from './sanity'

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(displayOrder asc) {
    _id, title, slug, description, whatsIncluded, image, displayOrder, ctaText
  }`)
}

export async function getTestimonials(featured?: boolean) {
  const filter = featured ? ' && featured == true' : ''
  return client.fetch(`*[_type == "testimonial"${filter}] {
    _id, clientName, location, quote, rating, serviceType, featured
  }`)
}

export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishedAt desc) {
    _id, title, slug, excerpt, category, author, publishedAt, readTime, coverImage
  }`)
}

export async function getPressFeatures() {
  return client.fetch(`*[_type == "pressFeature"] | order(date desc) {
    _id, publicationName, type, title, date, link, logo, topic, subtype
  }`)
}

export async function getPage(slug: string) {
  return client.fetch(`*[_type == "page" && slug.current == $slug][0] {
    _id, title, slug, sections
  }`, { slug })
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0] {
    _id, siteTitle, tagline, socialLinks, contactEmail, contactPhone, address
  }`)
}
