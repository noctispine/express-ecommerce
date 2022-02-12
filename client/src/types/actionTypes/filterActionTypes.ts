import { ICategory } from '../stateTypes/filterStateTypes'

export interface AddFilterAction {
  type: 'ADD_FILTER'
  payload: string
}

export interface RemoveFilterAction {
  type: 'REMOVE_FILTER'
  payload: string
}

export interface FetchFilterSuccessAction {
  type: 'FETCH_FILTER_SUCCESS'
  payload: ICategory[]
}

export interface FetchFilterStartAction {
  type: 'FETCH_FILTER_START'
  payload: string[]
}

export type FilterActions =
  | AddFilterAction
  | RemoveFilterAction
  | FetchFilterSuccessAction
  | FetchFilterStartAction
