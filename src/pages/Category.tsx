import { useParams } from 'react-router-dom'
import { Product, ProductElement } from '../interfaces/product'
import ProductCard from '../components/ProductCard'
import SomeProducts from '../components/SomeProducts'
import { useFetch } from '../hooks/getData'

const Category = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch<Product>(
    `/products/category/${id} `,
  )

  return (
    <div>
      <section className='px-2 py-10 mb-4 bg-gray-50'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
      </section>
      <SomeProducts />
    </div>
  )
}

export default Category
