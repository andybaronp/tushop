import { useState, useEffect } from 'react'
export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: {
  autoSlide?: boolean
  autoSlideInterval?: number
  slides: string[]
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='relative overflow-hidden'>
      <div
        className='flex transition-transform duration-500 ease-out'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <img src={img} alt='' key={img} />
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={prev}
          className='p-1 text-gray-800 rounded-full shadow bg-white/80 hover:bg-white'
        >
          <svg
            width='24px'
            height='24px'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            color='#000000'
          >
            <path
              d='M15 6L9 12L15 18'
              stroke='#000000'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </button>
        <button
          onClick={next}
          className='p-1 text-gray-800 rounded-full shadow bg-white/80 hover:bg-white'
        >
          <svg
            width='24px'
            height='24px'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            color='#000000'
          >
            <path
              d='M9 6L15 12L9 18'
              stroke='#000000'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </button>
      </div>

      <div className='absolute left-0 right-0 bottom-4'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
