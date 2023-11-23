import { Link } from 'react-router-dom'
import { Category } from '../interfaces/product'

const CategoryCard = ({ category, name, description, thumbnail }: Category) => {
  return (
    <Link
      to={`/category/${category}`}
      className='flex flex-col items-center w-full bg-gray-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200'
    >
      <img
        className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
        src={thumbnail}
        alt=''
      />
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-700 '>
          {name}
        </h5>
        <p className='mb-3 font-normal text-gray-700 '>{description}</p>
      </div>
    </Link>
  )
}

export default CategoryCard
