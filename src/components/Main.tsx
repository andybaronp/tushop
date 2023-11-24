import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main className='my-8'>
      <div className='h-64 overflow-hidden bg-center bg-contain bg-no-repeat rounded-md bg-[url("https://i.dummyjson.com/data/products/3/thumbnail.jpg")]   '>
        <div className='flex items-center h-full transition duration-500 ease-in bg-opacity-50 bg-gray-950 hover:bg-opacity-20'>
          <div className='max-w-xl px-10 sm:text-left'>
            <h2 className='text-2xl font-semibold text-white'>Smartphones</h2>
            <p className='mt-2 text-gray-200'>
              ¡Descubre la tecnología que te conecta con el mundo! Explora
              nuestra selección de smartphones de última generación y haz que
              cada momento cuente.
            </p>
            <Link to='/category/smartphones' className='block mt-4'>
              <button className='flex items-center px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                <span>Ver ahora ⟶</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='gap-2 mt-4 md:flex md:justify-between '>
        <div className='h-72 overflow-hidden  bg-center bg-cover   rounded-md bg-[url("https://i.dummyjson.com/data/products/92/thumbnail.jpg")]'>
          <div className='flex items-center h-full transition duration-500 ease-in bg-opacity-50 bg-gray-950 hover:bg-opacity-20'>
            <div className='max-w-xl px-10 sm:text-left'>
              <h2 className='text-2xl font-semibold text-white'>
                Motocicletas
              </h2>
              <p className='mt-2 text-gray-200'>
                ¡Experimenta la libertad sobre dos ruedas! Descubre nuestra gama
                de motocicletas, un universo de potencia, estilo y aventura.
              </p>
              <Link to='/category/motorcycle' className='block mt-4'>
                <button className='flex items-center px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                  <span>Ver ahora ⟶</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full h-72 mt-8 overflow-hidden bg-center bg-cover  aspect-video	  rounded-md md:mt-0 md:w-1/2 bg-[url("https://i.dummyjson.com/data/products/66/thumbnail.jpg")]'>
          <div className='flex items-center h-full transition duration-500 ease-in bg-opacity-50 bg-gray-950 hover:bg-opacity-20'>
            <div className='max-w-xl px-10 sm:text-left'>
              <h2 className='text-2xl font-semibold text-white'>
                Relojes Masculinos
              </h2>
              <p className='mt-2 text-gray-100'>
                Explora nuestra colección de relojes, donde la elegancia se
                encuentra con la funcionalidad. Encuentra el complemento
                perfecto para cada ocasión.
              </p>
              <Link to='/category/mens-watches' className='block mt-4'>
                <button className='flex items-center px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                  <span>Ver ahora ⟶</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
