import Post from './Post'

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>

  return (
    <div className='absolute top-20 h-80 overflow-y-scroll left-0 md:right-10 z-10 border-2 border-gray-500 bg-brown-600 text-white w-full md:w-6/12 rounded-md'>
      <div className='p-10'>
        <h2 className='text-md mb-3'>{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  )
}
