import axios from 'axios'
export const BASE_URL = 'https://dummyjson.com'

export const getAllProducts = async (url: string) => {
  return axios.get(`${BASE_URL}${url}`)
}

export const getProduct = async (url: string) => {
  return axios.get(`${BASE_URL}${url}`)
}
