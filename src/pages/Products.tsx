import ProductCard from '../components/ProductCard'
import { useFetch } from '../hooks/getData'
import { Product, ProductElement } from '../interfaces/product'

const Products = () => {
  const { data, loading, error } = useFetch<Product>(`/products`)
  return (
    <div className='bg-gray-100 mt-14'>
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
  )
}

export default Products
