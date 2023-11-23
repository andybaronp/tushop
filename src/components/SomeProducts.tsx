import { Product, ProductElement } from '../interfaces/product'
import ProductCard from './ProductCard'
import { useFetch } from '../hooks/useFetch'
const randoSkip = Math.floor(Math.random() * 95)

const SomeProducts = () => {
  const { data, loading, error } = useFetch<Product>(
    `/products?limit=8&skip=${randoSkip}`,
  )
  return (
    <section className='py-10 bg-gray-50'>
      <div className='mt-16'>
        <h3 className='mb-3 text-3xl font-medium text-gray-800'>
          También te puede interesar
        </h3>
        <div className='grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {error ? (
            <p>{error}</p>
          ) : loading ? (
            <p>Cargando...</p>
          ) : (
            data?.products.map((product: ProductElement) => {
              return <ProductCard key={product.id} {...product} />
            })
          )}
        </div>
      </div>
    </section>
  )
}

export default SomeProducts
