import Main from '../components/Main'
import Search from '../components/Search'
import SomeProducts from '../components/SomeProducts'

const Home = () => {
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
      <SomeProducts />
    </div>
  )
}

export default Home
