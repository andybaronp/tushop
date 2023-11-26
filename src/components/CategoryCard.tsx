import { Link } from 'react-router-dom'
import { Category } from '../interfaces/product'

const CategoryCard = ({ category, name, description, thumbnail }: Category) => {
  return (
    <article className='gap-4 transition duration-500 ease-in bg-gray-100 border border-gray-200 rounded-lg shadow sm:w-72 hover:bg-gray-200'>
      <Link
        to={`/category/${category}`}
        className='flex flex-col items-center justify-between max-w-xs '
      >
        <img
          className='object-contain w-full p-2 rounded-t-lg h-96 sm:h-80 m:w-48 md:rounded-none md:rounded-s-lg'
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
    </article>
  )
}

export default CategoryCard
