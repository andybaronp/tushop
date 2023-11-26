import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Logo from './Logo'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { singOut } = useContext(AuthContext)
  const navegate = useNavigate()
  const handleSingOut = async () => {
    const isOunt = await singOut()
    setShowMenu(false)
    if (!isOunt) {
      navegate('/login')
    }
  }
  return (
    <nav className='fixed top-0 left-0 z-20 w-full px-6 bg-white border-b border-gray-200 sm:px-4'>
      <div className='container flex flex-wrap items-center justify-between max-w-5xl mx-auto sm:px-3'>
        {/* Menu */}
        <div
          className='mt-2 sm:mt-0 sm:flex md:order-1 md:hidden'
          onClick={() => setShowMenu(!showMenu)}
        >
          <button
            type='button'
            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
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
        <Link to='/' className='flex items-center '>
          <Logo width='78px' height='64px' />
        </Link>
        <div
          className={`items-center justify-between ${
            !showMenu ? 'hidden' : ''
          } w-full   md:flex md:w-auto`}
        >
          <ul
            className='flex flex-col p-4 mt-4 bg-gray-100 border border-gray-100 rounded-lg md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm '
            onClick={() => setShowMenu(false)}
          >
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
          </ul>
        </div>
        {/* Salir */}
        <div
          className='cursor-pointer sm:mt-0 md:block md:order-2'
          onClick={() => handleSingOut()}
        >
          <svg
            version='1.2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 50 50'
            width='30'
            height='30'
          >
            <defs>
              <image
                width='38'
                height='38'
                id='img1'
                href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAAXNSR0IB2cksfwAAAEtQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5mA6dAAAABl0Uk5Tyv/OAQAImb4VvdMW0tcZ2BrU0NYCGMSuzGmjUDEAAACaSURBVHic7dbZCoAgEAXQpqxM2xfr/780KoowSW9PGd1H4YA64xIEdJswYnosgig2kevgkfgnXyHG+E6SlKMkIyFBwnMqSoycjfPyudiN+45JQVWJkdXUGGGyWQ1Uys1oJGptl1QnNdKHMHkwMQeBbvJSGKiUBVZKvGHwtlzEwCCi8CM2Kvggn+Mpee1j8RMjgT9Xlotrun7hZvjaJibLwPmvAAAAAElFTkSuQmCC'
              />
            </defs>
            <style></style>
            <use id='Background' href='#img1' x='0' y='0' />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Header
