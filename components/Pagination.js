import Link from 'next/link'

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  if (numPages === 1) return <></>

  return (
    <div className='mt-6  hover:cursor-pointer'>
      <ul className='flex justify-end pl-0 list-none my-2'>
        <div className='flex justify-end  border border-gray-200 overflow-hidden items-center px-3 py-2 rounded-full hover:cursor-pointer'>
        {!isFirst && (
          <Link href={prevPage}>
            <li className='px-3  hover:cursor-pointer'>
              Previous
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`} key={`page-${i}`}> 
            <li className='px-3  hover:cursor-pointer'>
              {i + 1} 
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className='px-3  hover:cursor-pointer'>
              Next
            </li>
          </Link>
        )}
      </div>
      </ul>
    </div>
  )
}
