import Main from '../components/Main'
import Search from '../components/Search'
import SearchResults from '../components/SearchResults'
import SomeProducts from '../components/SomeProducts'
import { useState } from 'react'

const Home = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false)
  return (
    <div className='bg-white'>
      <div className='bg-white pt-14'></div>
      <Search setIsSearch={setIsSearch} />
      {isSearch ? <SearchResults /> : <Main />}
      <SomeProducts />
    </div>
  )
}

export default Home
