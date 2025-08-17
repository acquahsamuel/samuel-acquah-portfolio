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
          color: #ffffff; /* bright white */
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #2563eb; /* subtle accent underline */
          display: inline-block;
        }

        .blog-text h2 {
          font-size: 1.55rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #e5e7eb; /* light gray for softer contrast */
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #374151; 
           display: inline-block;
        }

        .blog-text h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          color: #93c5fd; /* soft sky blue */
          display: inline-block;
        }

        .blog-text p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: #d1d5db; /* neutral light gray for body text */
          font-size: .95rem;
        }

        .blog-text strong {
          font-weight: 600;
          color: #facc15; /* warm gold for emphasis */
        }

        .blog-text em {
          font-style: italic;
          color: #38bdf8; /* cyan/sky blue for contrast */
        }

        .blog-text ul, .blog-text ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .blog-text ul li {
          margin-bottom: 0.5rem;
          color: #e5e7eb; 
          line-height: 1.6;
        }

        .blog-text ol li {
          margin-bottom: 0.5rem;
          color: #fbbf24; /* amber for ordered list */
          line-height: 1.6;
        }

        .blog-text ul li::marker {
          color: #3b82f6; /* bright blue bullets */
        }

        .blog-text ol li::marker {
          color: #3b82f6;
          font-weight: 600;
        }

        .blog-text blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #f3f4f6; /* light text for readability */
          background-color: #111827; /* dark slate bg */
          padding: 1rem;
          border-radius: 0.5rem;
        }

        .blog-text code {
          background-color: #374151; /* dark gray background */
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #f87171; /* soft red text */
        }

        .blog-text pre {
          background-color: #111827; /* deep slate background */
          color: #e5e7eb;
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