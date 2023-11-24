import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const Layout = () => {
  const { getUser } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    async function getSession() {
      const data = await getUser()
      if (data?.data.user === null) {
        navigate('/login')
      }
    }
    getSession()
  }, [getUser, navigate])

  return (
    <div className='flex flex-col justify-between min-h-screen '>
      <Header />
      <main className=''>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
