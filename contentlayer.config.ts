import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tag: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    uploaded: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: post => `/posts/${post.slug}` },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    featured: { type: 'boolean', required: true },
    slug: { type: 'string', required: true },
    status: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    repo: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: project => `/projects/${project.slug}` },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'dracula',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
    ],
  },
  documentTypes: [Post, Project],
})
