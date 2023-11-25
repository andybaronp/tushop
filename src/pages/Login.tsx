import { Auth } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Logo from '../components/Logo'

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
    <div className='flex h-screen -top-20'>
      <div className='items-center justify-center flex-1 hidden text-black bg-white lg:flex'>
        <div className='max-w-md text-center'>
          <Logo />
        </div>
      </div>
      <div className='flex items-center justify-center w-full bg-gray-200 lg:w-1/2'>
        <div className='w-full max-w-md p-6'>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'rgb(59 130 246);',
                    brandAccent: 'rgb(59 130 246);',
                  },
                },
              },
              className: {
                anchor: 'text-blue-700',
                container: 'w-full bg-gray-50 p-3 rounded-md',
                button:
                  'bg-blue-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
                label: 'block text-gray-700 text-sm  mb-2',
                input:
                  'shadow appearance-none border rounded w-full   text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-900',
              },
            }}
            theme='light'
            socialLayout='horizontal'
            providers={false}
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
                sign_up: {
                  email_label: 'Correo Electrónico',
                  password_label: 'Contraseña',
                  button_label: 'Registrarse',
                  loading_button_label: 'Registrando',
                  password_input_placeholder: '******',
                  email_input_placeholder: 'E-mail',
                  link_text: '¿Aún no tienes una cuenta?',
                },
                forgotten_password: {
                  email_label: 'Correo Electrónico',
                  button_label: 'Recuperar Contraseña',
                  loading_button_label: 'Recuperando',
                  email_input_placeholder: 'E-mail',
                  link_text: '¿Olvidaste tu contraseña?',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
