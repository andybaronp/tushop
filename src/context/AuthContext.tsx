import { createContext } from 'react'
import { createClient, SupabaseClient, AuthError } from '@supabase/supabase-js'

interface IAuthContext {
  supabase: SupabaseClient
  singOut: () => Promise<AuthError | null> | null
}
export const AuthContext = createContext<IAuthContext>({
  supabase: {} as SupabaseClient,
  singOut: () => null,
})

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)
/**
 * A function that signs out the user from the authentication provider.
 *
 * @return {Promise<string|null>} Returns a Promise that resolves to a string representing any potential error that occurred during the sign out process, or null if there was no error.
 */
export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  async function singOut() {
    const { error } = await supabase.auth.signOut()
    return error
  }

  return (
    <AuthContext.Provider
      value={{
        singOut,
        supabase,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
