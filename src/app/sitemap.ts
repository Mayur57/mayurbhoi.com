import { allPosts, allProjects, Post, Project } from 'contentlayer/generated'

export default async function sitemap() {
  const blogs = allPosts.map((post: Post) => ({
    url: `https://mayurbhoi.com/posts/${post.slug}`,
    lastModified: new Date(post.uploaded).toISOString().split('T')[0],
  }))

  const projects = allProjects.map((project: Project) => ({
    url: `https://mayurbhoi.com/projects/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = ['', '/posts', '/projects', '/privacy'].map(route => ({
    url: `https://mayurbhoi.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs, ...projects]
}
