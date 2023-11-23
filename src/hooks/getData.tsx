import { useState, useEffect } from 'react'
import axios from 'axios'
export const base_url = 'https://dummyjson.com'

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
}
export const useFetch = <T,>(url: string) => {
  const initialState: FetchState<T> = {
    data: null,
    loading: true,
    error: null,
  }
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState({ data: null, loading: true, error: null })

    axios
      .get(`${base_url}${url}`)
      .then((resp) => resp.data)
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        })
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info' as never,
        })
      })
  }, [url])

  return state
}