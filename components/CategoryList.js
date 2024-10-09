import Link from 'next/link'

export default function CategoryList({ categories }) {
  return (
    <div className='w-full p-5 bg-white rounded-lg  mt-6'>
      <h3 className='text-2xl  text-gray-700 p-3 rounded'>
        Blog Categories
      </h3>
      <ul className=''>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li className='p-4 cursor-pointer hover:bg-gray-50'>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
