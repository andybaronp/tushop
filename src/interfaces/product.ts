export interface Product {
  products: ProductElement[]
  total: number
  skip: number
  limit: number
}

export interface ProductElement {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface Category {
  category: string
  description: string
  name: string
}

export interface ProductReview {
  name: string
  comment: string
  date: string
  rating: number
  category?: string
}
