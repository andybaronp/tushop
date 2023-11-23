import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-1 bg-gray-200'>
      <div className='container flex flex-wrap items-center justify-between max-w-6xl mx-auto'>
        <div className='container flex items-center justify-between px-6 py-3 mx-auto'>
          <Link to='/' className='flex items-center'>
            <span className='self-center ml-2 text-xl '>Tu Shop</span>
          </Link>
          <p className='py-2 text-gray-500 sm:py-0'>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
