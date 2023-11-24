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
  'https://ldyrhubczjlztyjtvwly.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkeXJodWJjempsenR5anR2d2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1ODIzNTcsImV4cCI6MjAxNjE1ODM1N30.vznLnrQm0I2Rq7-ZuiQd6_pml83vFPFid29jBrbq_gU',
)

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
