import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='mx-6 mt-1 bg-gray-200'>
      <div className='container flex items-center justify-between px-6 mx-auto'>
        <Link to='/' className='flex items-center cursor-pointer'>
          <Logo width='52px' height='52px' />
        </Link>
        <p className='text-sm'> © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
