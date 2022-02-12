import { Reducer } from 'redux'
import {
  addFilterActionCreatorType,
  fetchFilterStartCreatorType,
  fetchFilterSuccessCreatorType,
  removeFilterActionCreatorType,
} from '../types/actionCreatorTypes/filterActionCreators'
import { FilterActions } from '../types/actionTypes/filterActionTypes'
import {
  FilterStateType,
  ICategory,
} from '../types/stateTypes/filterStateTypes'

const initialState: FilterStateType = {
  categories: [],
  activeCategories: [],
}

const ADD_FILTER = 'ADD_FILTER'
const REMOVE_FILTER = 'REMOVE_FILTER'
const FETCH_FILTER_START = 'FETCH_FILTER_START'
const FETCH_FILTER_SUCCESS = 'FETCH_FILTER_SUCCESS'

const filterReducer: Reducer<FilterStateType, FilterActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (!state.activeCategories.includes(action.payload)) {
        return {
          ...state,
          activeCategories: [...state.activeCategories, action.payload],
        }
      }
      return state
    }
    case REMOVE_FILTER: {
      const newActiveCategories = state.activeCategories.filter(
        (activeCategory) => activeCategory !== action.payload
      )
      return { ...state, activeCategories: newActiveCategories }
    }
    
    case FETCH_FILTER_START: {
      return state;
    }
    case FETCH_FILTER_SUCCESS: {
      return { ...state, categories: action.payload }
    }
    default:
      return state
  }
}

// Action Creators
const addFilterActionCreator: addFilterActionCreatorType = (
  category: string
) => {
  return { type: 'ADD_FILTER', payload: category }
}

const removeFilterActionCreator: removeFilterActionCreatorType = (
  category: string
) => {
  return { type: 'REMOVE_FILTER', payload: category }
}

const fetchFilterSuccessCreator: fetchFilterSuccessCreatorType = (
  categories: ICategory[]
) => {
  return { type: 'FETCH_FILTER_SUCCESS', payload: categories }
}

const fetchFilterStartCreator: fetchFilterStartCreatorType = (
  categories: string[]
) => {
  return { type: 'FETCH_FILTER_START', payload: categories }
}

export const filterActionCreators = {
  addFilterActionCreator,
  removeFilterActionCreator,
  fetchFilterSuccessCreator,
  fetchFilterStartCreator,
}

// Filter Actions
export const filterActions = {
  ADD_FILTER,
  REMOVE_FILTER,
  FETCH_FILTER_SUCCESS,
  FETCH_FILTER_START,
}

export default filterReducer
