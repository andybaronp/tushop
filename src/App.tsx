import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import {
  Login,
  Register,
  ProductDetails,
  Products,
  NotFound,
  Layout,
  Home,
} from './pages'
import Categories from './pages/Categories'
import Category from './pages/Category'
import Favorites from './pages/Favorites'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/*' element={<NotFound />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
