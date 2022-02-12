import {
  AddFilterAction,
  FetchFilterStartAction,
  FetchFilterSuccessAction,
  RemoveFilterAction,
} from '../actionTypes/filterActionTypes'
import { ICategory } from '../stateTypes/filterStateTypes'

export type addFilterActionCreatorType = (category: string) => AddFilterAction

export type removeFilterActionCreatorType = (
  category: string
) => RemoveFilterAction

export type fetchFilterSuccessCreatorType = (
  categories: ICategory[]
) => FetchFilterSuccessAction

export type fetchFilterStartCreatorType = (
  categories: string[]
) => FetchFilterStartAction
