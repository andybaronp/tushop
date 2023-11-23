import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProduct } from '../apis/getProducts'
import { ProductElement } from '../interfaces/product'
import ProductCard from '../components/ProductCard'
import SomeProducts from '../components/SomeProducts'

const Category = () => {
  const { id } = useParams()
  const [first, setfirst] = useState<ProductElement[] | []>([])
  const getProductById = async () => {
    const { data } = await getProduct(`/products/category/${id} `)
    setfirst(data.products)
  }
  useEffect(() => {
    getProductById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <section className='px-2 py-10 mb-4 bg-gray-50'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {first &&
            first.map((product: ProductElement) => {
              return <ProductCard key={product.id} {...product} />
            })}
        </div>
      </section>
      <SomeProducts />
    </div>
  )
}

export default Category
