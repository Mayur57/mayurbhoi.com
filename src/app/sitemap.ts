import { getPosts } from 'src/processor/posts'

const posts = getPosts()

export default async function sitemap() {
  const blogs = posts.map(post => ({
    url: `https://mayurbhoi.com/posts/${post.metadata.slug}`,
    lastModified: new Date(post.metadata.uploaded).toISOString().split('T')[0],
  }))

  const routes = ['', '/posts', '/privacy'].map(route => ({
    url: `https://mayurbhoi.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
