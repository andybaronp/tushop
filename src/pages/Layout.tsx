import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AuthContext } from '../context/AuthContext'
import { useEffect, useContext } from 'react'

const Layout = () => {
  const { supabase } = useContext(AuthContext)
  const navitage = useNavigate()
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (_, session) => {
      if (!session) {
        navitage('/login')
      }
    })
  }, [supabase, navitage])
  return (
    <div className='flex flex-col justify-between max-w-screen-lg min-h-screen mx-auto'>
      <Header />
      <main className='p-6'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
