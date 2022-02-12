import { call, put, take, takeEvery } from '@redux-saga/core/effects'
import {
  addToCartPost,
  removeFromCartPost,
  fetchCart,
} from '../services/cartService'
import { cartActions, cartActionCreators } from '../reducers/cartReducer'
import { fork } from 'redux-saga/effects'
import { ICartItem } from '../types/stateTypes/cartStateTypes'

function* addToCartFlow(
  productId: number,
  quantity: number
): Generator<any, any, any> {
  const token: string | null = localStorage.getItem('token')
  try {
    if (token) {
      const newCart: { newProduct: number; newTotal: number; error?: string } =
        yield call(addToCartPost, token, productId, quantity)
    } else {
      console.log('user has to be logged in to add item')
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}

function* removeFromCartFlow(productId: number) {
  const token: string | null = localStorage.getItem('token')
  try {
    if (token) {
      const newCart: {
        newProduct: number
        newTotal: number
        quantity: number
        error?: string
      } = yield call(removeFromCartPost, token, productId)
    } else {
      console.log('user has to be logged in to remove item')
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

function* onLoadCart(): Generator<any, any, any> {
  const token: string | null = localStorage.getItem('token')
  try {
    if (token) {
      const data: {
        cartItems: ICartItem[]
        cartTotal: number
        error?: string
      } = yield call(fetchCart, token)

      if (!data.error) {
        yield put(
          cartActionCreators.fetchItemsSuccess(data.cartItems, data.cartTotal)
        )
      }
    } else {
      yield put(cartActionCreators.fetchItemsFail('token invalid'))
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      yield put(cartActionCreators.fetchItemsFail(error.message))
    }
  }
}

export function* addToCartWatcher(): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take(cartActions.ADD_TO_CART)
    yield fork(addToCartFlow, payload.id, payload.quantity)
  }
}

export function* removeFromCartWatcher(): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take(cartActions.REMOVE_FROM_CART)
    yield fork(removeFromCartFlow, payload)
  }
}

export function* fetchCartWatcher(): Generator<any, any, any> {
  yield takeEvery(cartActions.FETCH_ITEMS_START, onLoadCart)
}