import { IProduct } from './productStateType'

export interface ICartItem extends IProduct {
  quantity: number
}

interface CartState {
  products: ICartItem[] | []
  total: number
  loading: boolean
  error: string | null
}

export default CartState
