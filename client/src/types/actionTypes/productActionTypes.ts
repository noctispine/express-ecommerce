import { IProduct } from '../stateTypes/productStateType'
import { productActions } from '../../reducers/productReducer'

export interface FetchProductsStartAction {
  type: 'FETCH_PRODUCTS_START'
}

export interface FetchProductsSuccessAction {
  type: 'FETCH_PRODUCTS_SUCCESS'
  payload: IProduct[]
}

export interface FetchProductsFailAction {
  type: 'FETCH_PRODUCTS_FAIL'
  payload: string
}

type FetchProductsAction =
  | FetchProductsStartAction
  | FetchProductsSuccessAction
  | FetchProductsFailAction

export default FetchProductsAction
