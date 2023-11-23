import { reviews } from '../apis/reviews_data_example'
import CardReview from './CardReview'
const SomeReviews = ({ category }: { category: string }) => {
  const reviewsLength = reviews.length
  const reviewsRandom = Math.floor(Math.random() * reviewsLength)

  return (
    <div className='my-10 bg-gray-50'>
      <div className='mt-16'>
        <h3 className='p-4 mb-3 text-2xl font-medium text-left text-gray-00'>
          Reseñas de los usuarios
        </h3>
        <div className='p-2'>
          {reviews

            .filter((prod) => prod.category === category)
            .slice(0, 5 + reviewsRandom)
            .map(({ comment, date, name, rating }, index) => {
              return (
                <CardReview
                  key={index}
                  comment={comment}
                  date={date}
                  name={name}
                  rating={rating}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default SomeReviews
