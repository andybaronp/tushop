import { Link } from 'react-router-dom'
import { ProductElement } from '../interfaces/product'

const ProductCard: React.FC<ProductElement> = ({
  title,
  description,
  price,
  thumbnail,
  rating,
  id,
}) => {
  return (
    <article className='max-w-xs p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl'>
      <Link to={`/products/${id}`}>
        <div className='relative flex items-end overflow-hidden rounded-xl'>
          <img
            src={thumbnail}
            alt='Hotel Photo'
            className='object-contain w-full h-64 '
          />
          <div className='absolute inline-flex items-center p-2 bg-white rounded-lg shadow-md bottom-1 right-2 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 text-yellow-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            <span className='ml-1 text-sm text-slate-400 '>{rating}</span>
          </div>
        </div>

        <div className='p-2 mt-1'>
          <h2 className='text-slate-700'> {title}</h2>
          <p className='mt-1 text-sm text-slate-400'>
            {description.slice(0, 50)}
          </p>

          <div className='flex items-end justify-between mt-3'>
            <p className='text-lg font-bold text-blue-500'>
              {price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>

            {/* <div className='flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>

              <button className='text-sm'>Add to cart</button>
            </div> */}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
