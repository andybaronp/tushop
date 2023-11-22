import Main from '../components/Main'
import Search from '../components/Search'
import SomeProducts from '../components/SomeProducts'

const Home = () => {
  return (
    <div className='bg-white'>
      {/* <!-- Title --> */}
      <div className='pt-20 bg-white'>
        <h1 className='text-2xl font-bold text-center text-gray-800'>
          Todo en un solo lugar
        </h1>
      </div>
      <Search />

      <Main />

      {/* <!-- Product List --> */}
      <SomeProducts />
    </div>
  )
}

export default Home
