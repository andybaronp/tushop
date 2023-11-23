import { useEffect, useState } from 'react'
import { ProductElement } from '../interfaces/product'
import { getProduct } from '../apis/getProducts'
import { useParams } from 'react-router-dom'
import SomeProducts from '../components/SomeProducts'
import Rating from '../components/Rating'
import SomeReviews from '../components/SomeReviews'

const ProductDetails = () => {
  const { id } = useParams()
  const [imageThumbnail, setImageThumbnail] = useState('')
  const [first, setfirst] = useState<ProductElement | null>(null)
  const getProductById = async () => {
    const { data } = await getProduct(`/products/${id}`)
    setfirst(data)
    setImageThumbnail(data.thumbnail)
  }
  useEffect(() => {
    getProductById()
  }, [id])

  return (
    <div className='py-8 mb-2 md:py-12'>
      <section className='flex flex-col w-full mb-8 '>
        <div className='p-2'>
          <h1 className='text-lg md:text-3xl '> {first?.title}</h1>
        </div>

        <div className='grid items-center grid-cols-1 gap-2 p-2 bg-gray-50 md:grid-cols-1'>
          {/* Details */}
          <div className='flex flex-col items-center p-5 '>
            <div className='flex flex-col items-start p-5 overflow-hidden rounded shadow-lg bg-slate-100'>
              <h1 className='mb-3 text-lg font-bold text-gray-700'>
                {first?.title}
              </h1>
              <p className='text-base font-bold text-gray-600 '>
                {first?.price &&
                  (
                    first?.price -
                    first?.price * (first?.discountPercentage / 100)
                  ).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                <span className='inline-block px-2 py-1 ml-2 text-sm text-red-500 bg-yellow-100 rounded-full'>
                  {first?.discountPercentage}% OFF
                </span>
              </p>
              <p className='text-sm font-bold text-gray-300 line-through '>
                {first?.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
              <div className='mt-4'>
                <div className=''>
                  <span className='text-sm font-bold text-gray-500'>
                    Stock: {first?.stock}
                  </span>
                </div>
                <div className='relative'>
                  <Rating
                    rating={first?.rating || 0}
                    positionX='left-20'
                    positionY='bottom-0'
                  />
                </div>
              </div>
              <div>
                <p className='mt-4 text-base font-bold text-gray-600'>
                  Última valoración
                </p>
                <div className='flex items-center '>
                  {'★'
                    .repeat(Math.round(first?.rating as number))
                    .padEnd(5, '☆')}
                </div>
              </div>
              <div>
                <p className='my-4 text-base font-bold text-left text-gray-600'>
                  Descripción
                </p>
                <p className='text-base text-left text-gray-500'>
                  {first?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className='grid col-span-2 gap-4 p-2 justify-items-center bg-slate-100 '>
            <div className=' w-80 h-80 md:h-auto md:w-auto md:max-w-lg'>
              <img
                className='object-contain mx-auto rounded-lg md:h-96 md:w-full'
                src={imageThumbnail}
                alt=''
              />
            </div>
            <div className='px-2 mt-4 overflow-x-auto md:overflow-hidden'>
              <div className={`grid grid-cols-5 gap-4    whitespace-no-wrap`}>
                {first?.images.map((image) => (
                  <div
                    key={image}
                    onClick={() => setImageThumbnail(image)}
                    className='px-2 pb-2 rounded-lg cursor-pointer'
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
      <SomeReviews category={first?.category as string} />
      <SomeProducts />
    </div>
  )
}

export default ProductDetails
