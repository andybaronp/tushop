import { Product, ProductElement } from '../interfaces/product'
import ProductCard from './ProductCard'
import { useFetch } from '../hooks/useFetch'
const randoSkip = Math.floor(Math.random() * 95)

const SomeProducts = () => {
  const { data, loading, error } = useFetch<Product>(
    `/products?limit=6&skip=${randoSkip}`,
  )
  return (
    <section className='py-5 '>
      <div className='mt-16'>
        <h3 className='mb-5 text-2xl font-medium text-center text-gray-800'>
          También te puede interesar
        </h3>
        <div className='flex flex-wrap justify-center max-w-6xl gap-4 lg:justify-between'>
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
