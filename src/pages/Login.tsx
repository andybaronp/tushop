import { Auth } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { supabase } = useContext(AuthContext)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/')
      }
    })
  }, [navigate, supabase])

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event === 'SIGNED_IN') {
        navigate('/')
      }
    })
  }, [navigate, supabase])
  return (
    <div className='container flex flex-col items-center justify-center bg-gray-100'>
      <div className='max-w-screen-sm '>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,

            className: {
              container: 'w-full bg-blue-100 p-3 rounded-md',
              button:
                'bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
              label: 'block text-gray-700 text-sm  mb-2',
            },
          }}
          theme='light'
          providers={['github']}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Correo Electrónico',
                password_label: 'Contraseña',
                button_label: 'Iniciar Sesión',
                loading_button_label: 'Iniciando Sesión',
                password_input_placeholder: '******',
                email_input_placeholder: 'E-mail',
                link_text: '¿Ya tienes una cuenta?',
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default Login
