import { categories } from '../apis/categories_data_example'
import CategoryCard from '../components/CategoryCard'
import { Category } from '../interfaces/product'

const Categories = () => {
  return (
    <div className='min-h-screen p-6 bg-green-300 mt-14 '>
      <div className='gap-4 md:flex md:justify-between md:flex-wrap'>
        {categories.map(({ category, name, description }: Category, index) => (
          <CategoryCard
            key={index}
            category={category}
            name={name}
            description={description}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
