import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    HTML: 'orange',
    CSS: 'lightblue',
    SaSS: 'pink',
    JavaScript: 'yellow',
    Git: 'lightgreen',
    Angular: 'purple',
    Nodejs: 'darkblue',
    Nestjs: 'rose',
    Nextjs: 'cyan',
    Python: 'brown',
    PHP: 'merlot',
    Business: 'green',
    Technology: 'teal',
    Consultatn: 'magenta',
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-normal text-sm rounded-full`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
