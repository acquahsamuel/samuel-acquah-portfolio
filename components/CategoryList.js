import Link from 'next/link'

export default function CategoryList({ categories }) {
  return (
    <div className=' bg-white rounded-lg  mt-6'>
      {/* <h3 className='text-2xl  text-gray-700 p-3 rounded'>
         Categories
      </h3> */}
      <ul className='flex flex-wrap'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li className='px-2 cursor-pointer hover:bg-gray-50'>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
