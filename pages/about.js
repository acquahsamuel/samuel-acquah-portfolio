import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout title='About DevSpace'>
      <h1 className='text-5xl  font-bold'>About</h1>

      <div className='bg-white   rounded-lg  mt-6'>
        <h3 className='text-2xl mb-5'> Samuel Blog</h3>

        <p className='mb-3'>This is a blog built with Next.js and Markdown</p>

        <p>
          <span className='font-bold'>Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}
