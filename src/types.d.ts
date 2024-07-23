export interface Product {
  ID: string
  name?: string
  nombre?: string
  price: number
  discount: number
  img: string
  description: string
  category: string
  url: string
}

export interface CartItem {
  product: Product
  quantity: number
}
