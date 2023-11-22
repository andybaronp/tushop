import { Link } from 'react-router-dom'
import { Category } from '../interfaces/product'

const CategoryCard = ({ category, name, description }: Category) => {
  return (
    <div className='w-64 h-56 overflow-hidden bg-center bg-cover rounded-md '>
      <div className='flex flex-col items-center justify-between h-full px-3 py-4 bg-gray-700 bg-opacity-50'>
        <h2 className='text-2xl font-semibold text-white'>{name}</h2>
        <p className='text-gray-100 '>{description}</p>

        <div className='flex items-center w-32 px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
          <Link to={`/category/${category}`}>
            <span>Ver ahora ⟶</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
{
  /* md:mt-0 md:w-1/2 w-full mt-8 */
}

export default CategoryCard
