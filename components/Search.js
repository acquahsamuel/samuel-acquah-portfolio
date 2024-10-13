import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchResults from './SearchResults'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const { results } = await res.json()
        setSearchResults(results)
      }
    }

    getResults()
  }, [searchTerm])

  return (
    <div className='relative my-3  '>
      <div className=''>
        <div className='relative md:w-1/2 text-gray-600'>
          <form className=''>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                Search
            </label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    name='search'
                    className="block p-2.5 pl-10 w-full border-white  text-sm text-white rounded-lg border 
                      dark:placeholder-gray-400 dark:text-white bg-brown-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search by Title or Keyword"
                    required
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    type="submit"
                    className=" absolute right-2 bottom-1.5 bg-dark 
                     bg-brown-600 text-white font-medium rounded-lg text-sm px-6 py-1.5"
                  >
                  Search
                </button>
            </div>
          </form>
        </div>
      </div>

      <SearchResults results={searchResults} />
    </div>
  )
}
