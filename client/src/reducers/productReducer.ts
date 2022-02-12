import { Reducer } from 'react'
import FetchProductsAction from '../types/actionTypes/productActionTypes'
import { IProduct, ProductState } from '../types/stateTypes/productStateType'
import * as actionCreatorTypes from '../types/actionCreatorTypes/productActionCreators'

const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START'
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
const FETCH_PRODUCTS__FAIL = 'FETCH_PRODUCTS_FAIL'

const initialState: ProductState = {
  products: [],
  error: null,
  loading: false,
}

const productReducer: Reducer<ProductState, FetchProductsAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, loading: true }
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case FETCH_PRODUCTS__FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default productReducer

// Action Creators
const fetchStart: actionCreatorTypes.FetchProductsStartCreator = () => {
  return { type: FETCH_PRODUCTS_START }
}

const fetchSuccess: actionCreatorTypes.FetchProductsSuccessCreator = (
  products: IProduct[]
) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products }
}

const fetchFail: actionCreatorTypes.FetchProductsFailCreator = (
  error: string
) => {
  return { type: FETCH_PRODUCTS__FAIL, payload: error }
}

export const productActionCreators = {
  fetchStart,
  fetchSuccess,
  fetchFail,
}

export const productActions = {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS__FAIL,
}
