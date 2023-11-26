import { Link } from 'react-router-dom'
import { ProductElement } from '../interfaces/product'
import Rating from './Rating'
import { formatPrice } from '../utils/helpers'

const ProductCard: React.FC<ProductElement> = ({
  title,
  description,
  price,
  thumbnail,
  rating,
  id,
}) => {
  return (
    <article className='p-3 duration-300 shadow-lg w-72 bg-slate-100 rounded-xl hover:shadow-xl hover:bg-white'>
      <Link to={`/products/${id}`}>
        <div className='relative flex items-end overflow-hidden rounded-xl'>
          <img
            src={thumbnail}
            alt='Hotel Photo'
            className='object-contain w-full h-64 '
          />
        </div>
        <div className='flex flex-col justify-around h-48 p-2 '>
          <h2 className='text-lg font-semibold text-slate-900'> {title}</h2>
          <p className='text-sm text-slate-400'>{description.slice(0, 50)}</p>
          <div className='flex items-end justify-between '>
            <p className='text-lg font-semibold '>{formatPrice(price)}</p>
            <Rating rating={rating} />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
