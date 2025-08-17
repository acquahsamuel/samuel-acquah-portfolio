import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'

export async function generateMeta({ params: { slug } }) {
  // Add metadata generation logic here if needed
}

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  const description = content.slice(0, 150) + '...'
  const keywords = `${title}, ${category}, development, coding`

  return (
    <Layout
      title={title}
      image={cover_image}
      keywords={keywords}
      description={description}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">

       <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Go Back
        </span>
      </Link>
        
        <article className="text-white rounded-lg shadow-sm overflow-hidden">
          <div className="#">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
              <h1 className="text-4xl font-bold text-white leading-tight flex-1">{title}</h1>
              <CategoryLabel>{category}</CategoryLabel>
            </div>
            
            <img src={cover_image} alt={title} className="w-full h-80 object-cover rounded-lg mb-8" />

            <div className="flex items-center py-4  mb-8">
              <img
                src={author_image}
                alt={author}
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-white">{author}</h4>
                <div className="text-sm text-white">{date}</div>
              </div>
            </div>

            <div 
              className="prose prose-lg max-w-none blog-text"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            />
          </div>
        </article>
      </div>

      <style jsx global>{`
        .blog-text h1 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1.5rem;
          color: #fff;
          padding-bottom: 0.5rem;
        }
        
        .blog-text h2 {
          font-size: 1.75rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #fff;
          padding-bottom: 0.5rem;
        }
        
        .blog-text h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          color: #374151;
        }
        
        .blog-text p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: #fff;
          font-size: 1.1rem;
        }
        
        .blog-text strong {
          font-weight: 600;
          color: #FFD700;
        }
        
        .blog-text em {
          font-style: italic;
          color: #00BFFF;
        }
        
        .blog-text ul, .blog-text ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .blog-text ul li {
          margin-bottom: 0.5rem;
          color: #E5E5E5;
          line-height: 1.6;
        }
        
        .blog-text ol li {
          margin-bottom: 0.5rem;
          color: #FFD700;
          line-height: 1.6;
        }
        
        .blog-text ul li::marker {
          color: #2563eb;
        }
        
        .blog-text ol li::marker {
          color: #2563eb;
          font-weight: 600;
        }
        
        .blog-text blockquote {
          border-left: 4px solid #2563eb;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #6b7280;
          background-color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
        }
        
        .blog-text code {
          background-color: #f3f4f6;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #dc2626;
        }
        
        .blog-text pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .blog-text pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}