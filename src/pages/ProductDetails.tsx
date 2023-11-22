import { useEffect, useState } from 'react'
import { ProductElement } from '../interfaces/product'
import { getProduct } from '../apis/getProducts'
import { useParams } from 'react-router-dom'
import SomeProducts from '../components/SomeProducts'

const ProductDetails = () => {
  const { id } = useParams()
  const [imageThumbnail, setImageThumbnail] = useState('')
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

  return (
    <div className='py-8 mb-2 md:py-12 '>
      <section className='flex flex-col w-full mb-8 '>
        <div className='p-2'>
          <h1 className='text-xl md:text-3xl '> {first?.title}</h1>
        </div>
        <div className='flex flex-col justify-between bg-gray-50 md:flex-row'>
          {/* Details */}

          <div className='bg-red-500 border  border-e-gray-200 h-80'>
            <div className='w-full'>
              <h2>{first?.title}</h2>
              <p>
                {first?.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}{' '}
                <span className='px-1 text-[10px] text-red-500 bg-yellow-100 rounded'>
                  {first?.discountPercentage}% Off
                </span>
              </p>

              <p>{first?.rating}</p>
              <p>{first?.category}</p>
              <p>{first?.brand}</p>
              <p></p>
              <p>{first?.stock}</p>

              <p>{first?.description}</p>
            </div>
          </div>

          {/* Images */}
          <div className='grid gap-4 justify-items-center '>
            <div className='bg-white w-80 md:w-auto md:max-w-lg'>
              <img
                className='object-contain mx-auto rounded-lg md:h-96 md:w-full'
                src={imageThumbnail}
                alt=''
              />
            </div>
            <div className='px-2 overflow-x-auto md:overflow-hidden'>
              <div className={`grid grid-cols-5 gap-4    whitespace-no-wrap`}>
                {first?.images.map((image) => (
                  <div
                    key={image}
                    onClick={() => setImageThumbnail(image)}
                    className='px-2 pb-2 bg-red-200 rounded-lg cursor-pointer'
                  >
                    <img
                      className='object-cover w-32 h-32 '
                      src={image}
                      alt={first?.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SomeProducts />
    </div>
  )
}

export default ProductDetails
