import Post from './Post'

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>

  return (
    <div className='absolute top-20 right-0 md:right-10 z-10 border-2 border-gray-500 bg-white text-black w-full md:w-6/12 rounded-md'>
      <div className='p-10'>
        <h2 className='text-3xl mb-3'>{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  )
}
