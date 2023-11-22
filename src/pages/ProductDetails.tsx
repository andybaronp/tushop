import { useEffect, useState } from 'react'
import { ProductElement } from '../interfaces/product'
import { getProduct } from '../apis/getProducts'
import { useParams } from 'react-router-dom'
import SomeProducts from '../components/SomeProducts'
import Rating from '../components/Rating'

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
  }, [id])

  return (
    <div className='py-8 mb-2 md:py-12'>
      <section className='flex flex-col w-full mb-8 '>
        <div className='p-2'>
          <h1 className='text-xl md:text-3xl '> {first?.title}</h1>
        </div>

        <div className='grid items-center grid-cols-1 bg-gray-50 md:grid-cols-3'>
          {/* Details */}

          <div className='max-w-sm overflow-hidden bg-white rounded shadow-lg'>
            <div className=''>
              <div className='mb-2 text-xl font-bold'>{first?.title}</div>
              <p className='text-base text-gray-700'>{first?.description}</p>
            </div>
            <div className='relative'>
              <Rating rating={first?.rating} />
            </div>
            <div className=''>
              <p>
                Precio con descuento{' '}
                {(
                  first?.price -
                  first?.price * (first?.discountPercentage / 100)
                ).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                {first?.discountPercentage > 0 && (
                  <span className='inline-block px-3 py-1 mr-2 text-sm font-semibold text-red-500 bg-yellow-100 rounded-full'>
                    {first?.discountPercentage}% OFF
                  </span>
                )}
              </p>
            </div>
            <div>
              <p className='px-3 py-1 mr-2 text-sm font-semibold text-gray-700 rounded-full '>
                Precio actual ${first?.price}
              </p>
              <p className='px-3 py-1 text-sm font-semibold '>
                Marca: {first?.brand}
              </p>
              <div className=''>
                <span className='text-sm font-semibold '>
                  Stock: {first?.stock}
                </span>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className='grid col-span-2 gap-4 justify-items-center '>
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
      <SomeProducts />
    </div>
  )
}

export default ProductDetails
