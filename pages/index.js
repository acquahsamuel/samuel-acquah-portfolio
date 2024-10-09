import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'

export default function HomePage({ posts }) {
  return (
    <Layout>
     <section>
      <h1 className='text-5xl  font-bold'>Latest Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Link href='/blog'>
        <a className='inline-block text-center border border-gray-500 text-gray-800 rounded-md px-6 py-2 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline '>
          All Posts
        </a>
      </Link>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  }
}
