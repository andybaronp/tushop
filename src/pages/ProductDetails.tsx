import { useParams } from 'react-router-dom'
import SomeProducts from '../components/SomeProducts'
import SomeReviews from '../components/SomeReviews'
import { useFetch } from '../hooks/useFetch'
import { ProductElement } from '../interfaces/product'
import { formatPrice } from '../utils/helpers'
import Carousel from '../components/Carousel'

const ProductDetails = () => {
  const { id } = useParams()

  const { data, loading, error } = useFetch<ProductElement>(`/products/${id}`)

  return (
    <div className='mt-4 mb-2 pt-7 md:py-12'>
      {error ? (
        <p>{error}</p>
      ) : (
        <section className='flex flex-col w-full mb-8 '>
          <div className='grid grid-cols-1 md:grid-cols-3 '>
            {/* Images */}
            <div className='col-span-2 mb-2 sm:mb-0'>
              <div className='max-w-lg'>
                {data?.images && <Carousel slides={data?.images} />}
              </div>
            </div>
            {/* Details */}
            <div className='flex flex-col items-center sm:max-w-sm'>
              <div className='flex flex-col items-start p-5 overflow-hidden rounded shadow-lg bg-slate-100'>
                <h1 className='mb-3 text-2xl font-bold text-gray-700'>
                  {data?.title}
                </h1>
                <div className='flex items-center gap-2'>
                  <p className='text-lg font-bold text-gray-700 '>
                    {formatPrice(
                      data?.price &&
                        data?.price -
                          data?.price * (data?.discountPercentage / 100),
                    )}
                  </p>
                  <p className='text-sm font-bold text-gray-400 line-through '>
                    {formatPrice(data?.price)}
                  </p>
                  <p>
                    <span className='px-2 py-1 text-red-600 bg-yellow-100 rounded-full '>
                      {data?.discountPercentage}% OFF
                    </span>
                  </p>
                </div>
                <div className='flex w-full gap-4 mt-4 '>
                  <div className=''>
                    <span className='text-sm font-bold text-gray-500'>
                      Stock: {data?.stock}
                    </span>
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
          </div>
        </section>
      )}
      <SomeProducts />
      <SomeReviews category={data?.category as string} />
    </div>
  )
}

export default ProductDetails
