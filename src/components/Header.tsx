import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4'>
      <div className='container flex flex-wrap items-center justify-between max-w-6xl mx-auto'>
        <Link to='/' className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 mr-3 text-blue-500 sm:h-9'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
            />
          </svg>

          <span className='self-center text-xl font-semibold whitespace-nowrap'>
            Termcode
          </span>
        </Link>
        <div className='mt-2 sm:mt-0 sm:flex md:order-2'>
          {/* <!-- Login Button --> */}
          <button
            type='button'
            className='rounde mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg'
          >
            Salir
          </button>

          {/* <!-- Register Button --> */}
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:order-1 md:flex md:w-auto'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium'>
            <li>
              <Link
                to='/'
                className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-700'
                aria-current='page'
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to='/products'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
              >
                Todos los productos
              </Link>
            </li>
            <li>
              <Link
                to='/categories'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
              >
                Categorias
              </Link>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700'
              >
                Favoritos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
