import Main from '../components/Main'
import { getProduct } from '../apis/getProducts'
import ProductCard from '../components/ProductCard'
import Search from '../components/Search'
import { useState, useEffect } from 'react'
import { ProductElement } from '../interfaces/product'

const randoSkip = Math.floor(Math.random() * 95)
const Home = () => {
  const [first, setfirst] = useState<ProductElement[] | null>(null)

  const getProductById = async () => {
    const { data } = await getProduct(
      `${import.meta.env.VITE_API_URL}/products?limit=8&skip=${randoSkip}`,
    )
    setfirst(data.products)
  }
  useEffect(() => {
    getProductById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='bg-white'>
      {/* <!-- Title --> */}
      <div className='pt-20 bg-white'>
        <h1 className='text-2xl font-bold text-center text-gray-800'>
          All Products
        </h1>
      </div>
      <Search />
      {/* <!-- Tab Menu --> */}
      {/* <div className='flex flex-wrap items-center justify-center py-10 overflow-x-auto overflow-y-hidden text-gray-800 bg-green-500'>
        <a
          rel='noopener noreferrer'
          href='#'
          className='flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-4 h-4'
          >
            <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
          </svg>
          <span>Architecto</span>
        </a>
        <a
          rel='noopener noreferrer'
          href='#'
          className='flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-900 rounded-t-lg'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-4 h-4'
          >
            <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
            <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
          </svg>
          <span>Corrupti</span>
        </a>
        <a
          rel='noopener noreferrer'
          href='#'
          className='flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-4 h-4'
          >
            <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
          </svg>
          <span>Excepturi</span>
        </a>
        <a
          rel='noopener noreferrer'
          href='#'
          className='flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-gray-600'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-4 h-4'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <polygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'></polygon>
          </svg>
          <span>Consectetur</span>
        </a>
      </div> */}

      <Main />

      {/* <!-- Product List --> */}
      <section className='py-10 bg-gray-50'>
        <div className='mt-16'>
          <h3 className='mb-3 text-2xl font-medium text-gray-00'>
            Más artículos por considerar
          </h3>
          <div className='grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {first &&
              first.map((product: ProductElement) => {
                return <ProductCard key={product.id} {...product} />
              })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
