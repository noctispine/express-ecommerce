export interface IProduct {
  id: number
  title: string
  price: number
  category: string
  image: string
}

export interface ProductState {
  products: IProduct[] | []
  error: string | null
  loading: boolean
}
