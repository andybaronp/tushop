import { getProduct } from '../apis/getProducts'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import { ProductElement } from '../interfaces/product'

const Products = () => {
  const [first, setfirst] = useState<ProductElement[] | []>([])

  const getProductById = async () => {
    const { data } = await getProduct(`/products`)

    setfirst(data.products)
  }
  useEffect(() => {
    getProductById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='bg-gray-100 mt-14'>
      <div className='grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {first.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
    </div>
  )
}

export default Products
