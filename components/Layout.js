import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { Metadata } from 'next'


export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js application.',
  keywords: ['Next.js', 'React', 'JavaScript'],
  twitter: {
    card: 'summary_large_image',
    site: 'https://www.example.com',
    title: 'My Next.js App',
    description: 'A simple Next.js application.',
    image: 'https://www.example.com/image.jpg',
    creator: '@johndoe',
  },
};
 

export default function Layout({ title, keywords, description, image, children }) {
  return (
    <div className='container'>
      <Head>
        
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta property="og:image" content={image} />
        <link rel='icon' href='/favicon.ico' />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

      </Head>

    <div className=''>
      <Header /> 
     </div>
      <main className='container mx-auto my-7'>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Acquah samuel-Software Engineer',
  keywords: 'software engineer, devmode, coding, programming',
  description: 'Am Samuel, I talk about technology, programming, business and personal development.',
  image: '/images/posts/img5.jpg'
}
