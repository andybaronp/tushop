import { useState, useEffect } from 'react'
import axios from 'axios'
export const base_url = 'https://dummyjson.com'

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
}
/**
 * Fetches data from a given URL using axios and returns the state of the fetch operation.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {boolean} canFetch - A flag indicating whether the fetch should be performed or not. Defaults to false.
 * @return {FetchState } - The state of the fetch operation, including data, loading status, and potential error.
 */
export const useFetch = <T,>(url: string, canFetch = false) => {
  const initialState: FetchState<T> = {
    data: null,
    loading: true,
    error: null,
  }
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState({ data: null, loading: true, error: null })
    if (!canFetch) {
      axios
        .get(url)
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
    }
  }, [url, canFetch])

  return state
}
