import { call, put, takeEvery, StrictEffect, take, fork } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { productActions } from '../reducers/productReducer'
import { IProduct } from '../types/stateTypes/productStateType'
import { productActionCreators } from '../reducers/productReducer'

import productsApi from '../services/productApi'
import { ICategory } from '../types/stateTypes/filterStateTypes'
import { filterActionCreators, filterActions } from '../reducers/filterReducer'

// workers
function* onLoadProducts() {
  try {
    const response: AxiosResponse = yield call(productsApi)
    const data: { products: IProduct[]; categoryCount: ICategory[] } =
      response.data
    yield put(productActionCreators.fetchSuccess(data.products))
    yield put(
      filterActionCreators.fetchFilterSuccessCreator(data.categoryCount)
    )
  } catch (error) {
    if (error instanceof Error)
      yield put(productActionCreators.fetchFail(error.message))
  }
}

function* onLoadProductsByCategories(categories: string[]) {
  try {
    const response: AxiosResponse = yield call(productsApi, categories)
    const data: { products: IProduct[] } = response.data
    yield put(productActionCreators.fetchSuccess(data.products))
  } catch (error) {
    if (error instanceof Error)
      yield put(productActionCreators.fetchFail(error.message))
  }
}

// watchers
export function* fetchProducts(): Generator<StrictEffect> {
  yield takeEvery(productActions.FETCH_PRODUCTS_START, onLoadProducts)
}

export function* fetchProductsByCategories() {
  while (true) {
    const { payload } = yield take(filterActions.FETCH_FILTER_START)
    yield fork(onLoadProductsByCategories, payload)
  }
}
