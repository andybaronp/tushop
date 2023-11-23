import { Link } from 'react-router-dom'
import { Category } from '../interfaces/product'

const CategoryCard = ({ category, name, description, thumbnail }: Category) => {
  console.log(thumbnail)

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
    // <div className='flex flex-col w-full max-w-full px-4 mb-8 transition cursor-pointer sm:w-1/2 lg:w-1/3 hover:scale-105 '>
    //   <Link to={`/category/${category}`}>
    //     <img
    //       src={thumbnail}
    //       alt='Card img'
    //       className='object-cover object-center w-full h-48'
    //     />
    //     <div className='flex flex-grow'>
    //       <div className='flex flex-col justify-between w-full px-4 py-6 bg-white border border-gray-200 text'>
    //         <div>
    //           <p className='block mb-4 text-2xl leading-tight '>{name}</p>
    //           <p className='mb-4'>{description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  )
}

export default CategoryCard
