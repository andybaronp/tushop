import Main from '../components/Main'
import Search from '../components/Search'
import SomeProducts from '../components/SomeProducts'

const Home = () => {
  return (
    <div className='bg-white'>
      {/* <!-- Title --> */}
      <div className='bg-white pt-14'>
        <h1 className='text-2xl font-bold text-center text-gray-800'>
          Todo en un solo lugar
        </h1>
      </div>
      <Search />
      <Main />
      <SomeProducts />
    </div>
  )
}

export default Home
