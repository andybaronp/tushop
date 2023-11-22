import axios from 'axios'
export const getAllProducts = async (url: string) => {
  return axios.get(url)
}

export const getProduct = async (url: string) => {
  return axios.get(url)
}
