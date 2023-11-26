import { reviews } from '../utils/reviews_data_example'
import CardReview from './CardReview'
const SomeReviews = () => {
  const reviewsLength = reviews.length
  const reviewsRandom = Math.floor(Math.random() * reviewsLength)

  return (
    <div className='my-10 bg-gray-50'>
      <div className='mt-16'>
        <h3 className='p-4 mb-3 text-2xl font-medium text-center text-gray-800'>
          Reseñas de los usuarios
        </h3>
        <div className='p-2'>
          {reviews
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
