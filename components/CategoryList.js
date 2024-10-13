import Link from 'next/link'

export default function CategoryList({ categories }) {
  return (
    <div className='rounded-lg  mt-2 overflow-hidden'>
      <ul className='flex flex-wrap md:overflow-x-auto overflow-x-scroll  scrollbar-hidden'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li className={`cursor-pointer hover:bg-grey-300 bg-brown-600 text-gray-300 rounded-lg text-sm !important px-3 py-1 my-1 ${index >= 0 ? 'mr-3' : ' '}`}>
               {category} 
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}




