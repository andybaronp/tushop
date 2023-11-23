import { Link } from 'react-router-dom'
import { ProductElement } from '../interfaces/product'
import Rating from './Rating'

const ProductCard: React.FC<ProductElement> = ({
  title,
  description,
  price,
  thumbnail,
  rating,
  id,
}) => {
  return (
    <article className='max-w-xs p-3 duration-300 shadow-lg bg-slate-100 rounded-xl hover:shadow-xl hover:bg-white'>
      <Link to={`/products/${id}`}>
        <div className='relative flex items-end overflow-hidden rounded-xl'>
          <img
            src={thumbnail}
            alt='Hotel Photo'
            className='object-contain w-full h-64 '
          />
          <Rating rating={rating} positionX='right-2' positionY='bottom-1' />
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
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
