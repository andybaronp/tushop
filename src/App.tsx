import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {
  Home,
  Login,
  Register,
  ProductDetails,
  Products,
  NotFound,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
