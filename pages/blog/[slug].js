import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel';



export async function generateMeta({ params: { slug } }) {
 
}

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {

  const description = content.slice(0, 150) + '...';
  const keywords = `${title}, ${category}, development, coding`;

  return (
    <Layout
     title={title} 
     image={cover_image}
     keywords={keywords}
     description={description}>

      <div className=''>
      <Link href='/blog'>Go Back</Link>
      <div className='w-full rounded-lg  mt-2'>
        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-3xl mb-7'>{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt='' className='w-full rounded' />

        <div className='flex justify-between items-center p-2 my-8'>
          <div className='flex items-center'>
            <img
              src={author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
            <div>
              <h4>{author}</h4>
              <div className='mr-4 text-xs'>{date}</div>
            </div>
          </div>
        
        </div>

        <div className='blog-text mt-2'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

  /**
   * Gets all the static paths for the blog posts.
   *
   * @returns {Object} An object containing the paths and fallback value.
   * @property {Array} paths The array of paths.
   * @property {Boolean} fallback The value for the fallback.
   */
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
