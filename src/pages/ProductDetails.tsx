import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductElement } from '../interfaces/product'
import { getProduct } from '../apis/getProducts'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const [first, setfirst] = useState<ProductElement | null>(null)
  const getProductById = async () => {
    const { data } = await getProduct(
      `${import.meta.env.VITE_API_URL}/products/${id}`,
    )
    setfirst(data)
    setImageThumbnail(data.thumbnail)
  }
  useEffect(() => {
    getProductById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(first)
  const [imageThumbnail, setImageThumbnail] = useState<string>('')
  return (
    <section className='p-11 '>
      <h1 className='py-5 text-3xl'> {first?.title}</h1>
      <div className='flex flex-wrap justify-center'>
        <div className='grid gap-4'>
          <div className='p-4 bg-black'>
            <img
              className='object-contain rounded-lg h-96 '
              src={imageThumbnail}
              alt=''
            />
          </div>
          <div className='grid grid-cols-5 gap-4 '>
            {first?.images.map((image) => (
              <div
                key={image}
                onClick={() => setImageThumbnail(image)}
                className='p-2 bg-gray-200 rounded-lg cursor-pointer'
              >
                <img
                  className='w-32 h-32 rounded-lg '
                  src={image}
                  alt={first?.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <ProductCard {...first} /> */}
    </section>
  )
}

export default ProductDetails
