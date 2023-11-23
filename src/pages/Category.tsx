import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProduct } from '../apis/getProducts'
import { ProductElement } from '../interfaces/product'
import ProductCard from '../components/ProductCard'

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
    <section className='py-10 bg-gray-50'>
      <div className='grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {first &&
          first.map((product: ProductElement) => {
            return <ProductCard key={product.id} {...product} />
          })}
      </div>
    </section>
  )
}

export default Category
