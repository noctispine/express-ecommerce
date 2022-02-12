import { IProduct, ProductState } from '../stateTypes/productStateType'
import {
  FetchProductsSuccessAction,
  FetchProductsFailAction,
  FetchProductsStartAction,
} from '../actionTypes/productActionTypes'

export type FetchProductsStartCreator = () => FetchProductsStartAction
export type FetchProductsSuccessCreator = (products: IProduct[]) => FetchProductsSuccessAction
export type FetchProductsFailCreator = (error: string) => FetchProductsFailAction 