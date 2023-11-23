import { useContext } from 'react'
import { ProductElement } from '../interfaces/product'
import ProductCard from './ProductCard'
import { SearchContext } from '../context/SearchContex'

const SearchResults = () => {
  const { dataFetch } = useContext(SearchContext)
  return (
    <div className='bg-gray-100 mt-14'>
      {dataFetch.error ? (
        <div className='flex flex-col items-center w-full py-4 bg-red-100'>
          <h2 className='text-3xl text-center'>Error al consultar</h2>
        </div>
      ) : dataFetch.loading ? (
        <p className='text-3xl text-center'>Cargando...</p>
      ) : dataFetch.data && dataFetch?.data.products.length === 0 ? (
        <div className='flex flex-col items-center w-full py-4 bg-red-100'>
          <h2 className='text-3xl text-center'>No hay resultados</h2>
        </div>
      ) : (
        <div className='grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {dataFetch.data?.products.map((product: ProductElement) => {
            return <ProductCard key={product.id} {...product} />
          })}
        </div>
      )}
    </div>
  )
}

export default SearchResults
