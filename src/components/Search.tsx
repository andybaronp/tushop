import { useState, useContext, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useDebounce } from '../hooks/useDebaunce'
import { SearchContext } from '../context/SearchContex'
import { Product } from '../interfaces/product'
interface Props {
  setIsSearch: (value: boolean) => void
}
const Search: React.FC<Props> = ({ setIsSearch }) => {
  const [first, setfirst] = useState('')
  const [canFetch, setCantFecht] = useState<boolean>(true)
  const debouncedSearch = useDebounce({ value: first, delay: 1000 })
  const { setDataFetch } = useContext(SearchContext)
  const { data, loading, error } = useFetch<Product>(
    `/products/search?q=${debouncedSearch}`,
    canFetch,
  )

  useEffect(() => {
    if (debouncedSearch.length > 0) {
      setCantFecht(false)
    }
  }, [debouncedSearch])

  useEffect(() => {
    if (data !== null && loading === false && error === null) {
      setIsSearch(true)
      setDataFetch({ data, loading, error })
    }
  }, [data, loading, error, setDataFetch, setIsSearch])

  useEffect(() => {
    if (first === '') {
      setIsSearch(false)
      setCantFecht(true)
    }
  }, [first, setIsSearch])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setfirst(value)
  }

  const handleClearInput = () => {
    setfirst('')
    setIsSearch(false)
    setCantFecht(true)
  }

  return (
    <div className='relative max-w-lg mx-auto mt-6'>
      <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
        <svg
          className='w-5 h-5 text-gray-500'
          viewBox='0 0 24 24'
          fill='none'
        ></svg>
      </span>

      <input
        className='w-full py-2 pl-10 pr-10 border rounded-md focus:border-blue-500 focus:outline-none focus:shadow-outline'
        type='text'
        placeholder='Search'
        value={first}
        onChange={handleChange}
      />

      {first && (
        <button
          className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-500'
          onClick={handleClearInput}
        >
          <svg
            className='w-4 h-4'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
          >
            <path
              d='M6 18L18 6M6 6l12 12'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Search
