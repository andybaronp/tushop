import { createContext, useState } from 'react'
import { Product } from '../interfaces/product'

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface FetchState {
  data: Product | null
  loading: boolean
  error: string | null
}

interface ContextProps {
  dataFetch: FetchState
  setDataFetch: (data: FetchState) => void
}

export const SearchContext = createContext<ContextProps>({
  dataFetch: {
    data: null,
    loading: false,
    error: null,
  },
  setDataFetch: () => {},
})
/**
 * Initializes the SearchProvider component.
 *
 * @param {Props} children - The children components.
 * @return {JSX.Element} The rendered component.
 */
export const SearchProvider = ({ children }: Props) => {
  const [dataFetch, setDataFetch] = useState<FetchState>({
    data: null,
    loading: false,
    error: null,
  })

  return (
    <SearchContext.Provider value={{ dataFetch, setDataFetch }}>
      {children}
    </SearchContext.Provider>
  )
}
