import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    HTML: 'red',
    CSS: 'red',
    SaSS: 'pink',
    JavaScript: 'yellow',
    Git: 'lightgreen',
    Angular: 'purple',
    Nodejs: 'darkblue',
    Nestjs: 'rose',
    Nextjs: 'cyan',
    Python: 'yellow',
    PHP: 'pink',
    Business: 'green',
    Technology: 'teal',
    Consulting: 'magenta',
    "Job Hunting": 'green',
    "Computer Science": 'green',
  }

  return (
    <div className={`px-1 py-0.5  bg-${colorKey[children]}-600 text-gray-100 rounded-md px-3 py-1.5 font-normal text-xs`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
