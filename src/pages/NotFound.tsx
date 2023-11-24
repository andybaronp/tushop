import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center mt-16 bg-gray-100 - '>
      <div className='p-4 mx-auto text-center '>
        <div className='p-8 bg-white rounded-lg shadow'>
          <h1 className='text-3xl font-bold text-gray-800'>
            404 Página no encontrada
          </h1>
          <p className='mt-4 text-gray-600'>La página que buscas no existe.</p>

          <Link
            to='/'
            className='inline-block px-3 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500'
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
