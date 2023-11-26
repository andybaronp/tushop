import ProductCard from '../components/ProductCard'
import { useFetch } from '../hooks/useFetch'
import { Product, ProductElement } from '../interfaces/product'

const Products = () => {
  const { data, loading, error } = useFetch<Product>(`/products`)
  return (
    <div className='bg-red-400 mt-14'>
      <div className='flex flex-wrap justify-center max-w-5xl gap-4 lg:justify-between'>
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
  )
}

export default Products
