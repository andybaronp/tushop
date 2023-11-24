import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SomeProducts from '../components/SomeProducts'
import Rating from '../components/Rating'
import SomeReviews from '../components/SomeReviews'
import { useFetch } from '../hooks/useFetch'
import { ProductElement } from '../interfaces/product'
import { formatPrice } from '../utils/helpers'

const ProductDetails = () => {
  const { id } = useParams()
  const [imageThumbnail, setImageThumbnail] = useState('')

  const { data, loading, error } = useFetch<ProductElement>(
    `https://dummyjson.com/products/${id}`,
  )

  useEffect(() => {
    if (!loading && data) {
      setImageThumbnail(data.thumbnail)
    }
  }, [data, loading])
  return (
    <div className='py-8 mb-2 md:py-12'>
      {error ? (
        <p>{error}</p>
      ) : (
        <section className='flex flex-col w-full mb-8 '>
          <div className='p-2'>
            <h1 className='text-lg md:text-3xl '>
              {data?.title.toLocaleUpperCase()}
            </h1>
          </div>
          <div className='grid grid-cols-1 gap-2 p-2 bg-gray-50 md:grid-cols-3'>
            {/* Details */}
            <div className='flex flex-col items-center order-3'>
              <div className='flex flex-col items-start p-5 overflow-hidden rounded shadow-lg bg-slate-200'>
                <h1 className='mb-3 text-lg font-bold text-gray-700'>
                  {data?.title}
                </h1>
                <p className='text-base font-bold text-gray-600 '>
                  {formatPrice(
                    data?.price &&
                      data?.price -
                        data?.price * (data?.discountPercentage / 100),
                  )}
                  <span className='inline-block px-2 py-1 ml-2 text-sm text-red-500 bg-yellow-100 rounded-full'>
                    {data?.discountPercentage}% OFF
                  </span>
                </p>
                <p className='text-sm font-bold text-gray-400 line-through '>
                  {formatPrice(data?.price)}
                </p>
                <div className='mt-4'>
                  <div className=''>
                    <span className='text-sm font-bold text-gray-500'>
                      Stock: {data?.stock}
                    </span>
                  </div>
                  <div className='relative'>
                    <Rating
                      rating={data?.rating || 0}
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
                      .repeat(Math.round(data?.rating as number))
                      .padEnd(5, '☆')}
                  </div>
                </div>
                <div>
                  <p className='my-4 text-base font-bold text-left text-gray-600'>
                    Descripción
                  </p>
                  <p className='text-base text-left text-gray-500'>
                    {data?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className='grid col-span-2 gap-4 p-2 justify-items-center '>
              <div className=' w-80 h-72 md:h-auto md:w-auto md:max-w-lg'>
                <img
                  className='object-contain h-64 mx-auto rounded-lg md:h-96 md:w-full'
                  src={
                    imageThumbnail ? imageThumbnail : 'https://placehold.co/400'
                  }
                  alt=''
                />
              </div>
              <div className='px-2 mt-4 overflow-x-auto md:overflow-hidden'>
                <div
                  className={`grid md:grid-cols-5 gap-4  grid-cols-3   whitespace-no-wrap  `}
                >
                  {data?.images.map((image: string) => (
                    <div
                      key={image}
                      onClick={() => setImageThumbnail(image)}
                      className='px-2 pb-2 rounded-lg cursor-pointer'
                    >
                      <img
                        className='object-cover w-full h-32 sm:w-32 '
                        src={image}
                        alt={data?.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <SomeReviews category={data?.category as string} />
      <SomeProducts />
    </div>
  )
}

export default ProductDetails
