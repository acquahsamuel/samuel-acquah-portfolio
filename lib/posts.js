// lib/posts.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

// Get all posts
export function getPosts() {
  const files = fs.readdirSync(postsDir)

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join(postsDir, filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )
}

// Get a single post (content + frontmatter)
export function getPostBySlug(slug) {
  const file = fs.readFileSync(path.join(postsDir, slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(file)

  return { frontmatter, content, slug }
}
