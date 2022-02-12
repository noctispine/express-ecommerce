import { Reducer } from 'redux'
import indexOfObject from '../helpers/indexOfObject'
// State Types
import CartState, { ICartItem } from '../types/stateTypes/cartStateTypes'
// Action Types
import CartAction from '../types/actionTypes/cartActionTypes'

// Action Creator Types
import {
  addToCartCreator,
  fetchItemsFailCreator,
  fetchItemsStartCreator,
  fetchItemsSuccessCreator,
  removeFromCartCreator,
  resetCartCreator,
} from '../types/actionCreatorTypes/cartActionCreatorTypes'
import { IProduct } from '../types/stateTypes/productStateType'

// Actions
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const FETCH_ITEMS_START = 'FETCH_ITEMS_START'
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
const FETCH_ITEMS_FAIL = 'FETCH_ITEMS_FAIL'
const RESET_CART = 'RESET_CART'

// Initial State
export const initialState: CartState = {
  products: [],
  total: 0,
  loading: false,
  error: null,
}

// Reducer
const cartReducer: Reducer<CartState, CartAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_ITEMS_START: {
      return { ...state, loading: true }
    }

    case FETCH_ITEMS_SUCCESS: {
      return {
        ...state,
        products: action.payload.items,
        loading: false,
        total: action.payload.total,
      }
    }

    case FETCH_ITEMS_FAIL: {
      return { ...state, loading: false, error: action.payload }
    }

    case ADD_TO_CART: {
      const newState = { ...state }
      newState.total = state.total + action.payload.price

      // if item has been already added to the cart, increase the quantity
      const item = action.payload
      const indexOfItem = indexOfObject(newState.products, item)
      if (indexOfItem !== -1) {
        newState.products[indexOfItem].quantity++
        return { ...state, products: newState.products, total: newState.total }
      }
      return {
        ...state,
        products: [...state.products, action.payload],
        total: newState.total,
      }
    }

    case REMOVE_FROM_CART: {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload
      )
      if (itemIndex !== -1) {
        const product = state.products[itemIndex]
        const newTotal = state.total - product.price
        if (product.quantity === 1) {
          const newProducts = state.products.filter(
            (item) => item.id !== action.payload
          )
          return { ...state, products: newProducts, total: newTotal }
        } else {
          product.quantity--
          let newProducts = state.products
          newProducts[itemIndex] = product
          return { ...state, products: newProducts, total: newTotal }
        }
      }
      return state
    }
    case RESET_CART: {
      return initialState
    }

    default: {
      return state
    }
  }
}
// Action Creators
export const addToCart: addToCartCreator = (
  product: IProduct,
  quantity: number = 1
) => {
  const newCartProduct: ICartItem = { ...product, quantity }
  return {
    type: ADD_TO_CART,
    payload: newCartProduct,
  }
}

const removeFromCart: removeFromCartCreator = (id: number) => {
  return { type: REMOVE_FROM_CART, payload: id }
}

const fetchItemsStart: fetchItemsStartCreator = () => {
  return { type: FETCH_ITEMS_START }
}

const fetchItemsSuccess: fetchItemsSuccessCreator = (
  items: ICartItem[],
  total: number
) => {
  return { type: FETCH_ITEMS_SUCCESS, payload: { items, total } }
}

const fetchItemsFail: fetchItemsFailCreator = (error: string) => {
  return { type: 'FETCH_ITEMS_FAIL', payload: error }
}

const resetCart: resetCartCreator = () => {
  return { type: 'RESET_CART' }
}

export const cartActionCreators = {
  removeFromCart,
  addToCart,
  fetchItemsStart,
  fetchItemsSuccess,
  fetchItemsFail,
  resetCart,
}

// Cart Actions
export const cartActions = {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
}

export default cartReducer
