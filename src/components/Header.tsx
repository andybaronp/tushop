import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4'>
      <div className='container flex flex-wrap items-center justify-between max-w-6xl mx-auto'>
        <Link to='/' className='flex items-center'>
          <svg
            width='24px'
            height='24px'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            color='#000000'
          >
            <path
              d='M2.76923 13L2.13717 9.71331C2.06601 9.34327 2.34956 9 2.72638 9H21.2736C21.6504 9 21.934 9.34327 21.8628 9.71331L21.2308 13M2.76923 13H21.2308M2.76923 13L3.38462 17M21.2308 13L20.6154 17M20.6154 17L20.0783 20.4912C20.0332 20.7839 19.7814 21 19.4852 21H4.51475C4.21861 21 3.96676 20.7839 3.92173 20.4912L3.38462 17M20.6154 17H3.38462'
              stroke='#000000'
              strokeWidth='1.5'
            ></path>
            <path
              d='M8 9V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V9'
              stroke='#000000'
              strokeWidth='1.5'
            ></path>
          </svg>

          <span className='self-center ml-2 text-xl font-semibold whitespace-nowrap'>
            Tu SHop
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
