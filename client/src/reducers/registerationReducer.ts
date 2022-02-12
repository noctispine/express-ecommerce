import { Reducer } from 'redux'
import {
  registerFailureActionCreator,
  registerStartActionCreator,
  registerSuccessActionCreator,
} from '../types/actionCreatorTypes/registerActionCreatorsTypes'
import { RegisterActions } from '../types/actionTypes/registerActionTypes'
import { RegisterState } from '../types/stateTypes/registerStateType'
// Actions
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAIL = 'REGISTER_FAIL'
const REGISTER_START = 'REGISTER_START'

const initialState = {
  loading: false,
  error: null,
}

const registerationReducer: Reducer<RegisterState, RegisterActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case REGISTER_START: {
      return { ...state, loading: true }
    }
    case REGISTER_SUCCESS: {
      return { ...state, loading: false }
    }

    case REGISTER_FAIL: {
      return { ...state, loading: false, error: action.payload }
    }
    default:
      return state
  }
}

// Action Creators
const registerStartCreator: registerStartActionCreator = (
  username,
  email,
  password
) => {
  return { type: REGISTER_START, payload: { username, email, password } }
}

const registerFailureCreator: registerFailureActionCreator = (
  error: string
) => {
  console.log(error)
  return { type: REGISTER_FAIL, payload: error }
}

const registerSuccessCreator: registerSuccessActionCreator = () => {
  return { type: REGISTER_SUCCESS }
}

export const registerActionCreators = {
  registerStartCreator,
  registerSuccessCreator,
  registerFailureCreator,
}

export const registerActions = {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
}

export default registerationReducer
