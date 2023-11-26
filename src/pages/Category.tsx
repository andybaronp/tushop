import { useParams } from 'react-router-dom'
import { Product, ProductElement } from '../interfaces/product'
import ProductCard from '../components/ProductCard'
import { useFetch } from '../hooks/useFetch'
import { categories } from '../utils/categories_data_example'

const Category = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch<Product>(
    `/products/category/${id} `,
  )

  return (
    <div>
      <section className='px-2 py-10 mb-4 bg-gray-50'>
        <h1 className='py-6 text-2xl font-bold text-center'>
          {categories.find((cat) => cat.category === id)?.name}
        </h1>
        <div className='flex flex-wrap justify-center max-w-5xl gap-4 lg:justify-start'>
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
    </div>
  )
}

export default Category
