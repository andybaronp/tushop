import { categories } from '../utils/categories_data_example'
import CategoryCard from '../components/CategoryCard'
import { Category } from '../interfaces/product'

const Categories = () => {
  return (
    <div className='mb-3 mt-14'>
      <div className='flex flex-wrap justify-center max-w-6xl gap-8 lg:justify-start'>
        {categories.map(
          ({ category, name, description, thumbnail }: Category, index) => (
            <CategoryCard
              key={index}
              category={category}
              name={name}
              description={description}
              thumbnail={thumbnail}
            />
          ),
        )}
      </div>
    </div>
  )
}

export default Categories
