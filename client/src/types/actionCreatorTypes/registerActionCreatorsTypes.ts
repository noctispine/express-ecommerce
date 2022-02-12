import {
  RegisterStartAction,
  RegisterSuccessAction,
  RegisterFailAction,
} from '../actionTypes/registerActionTypes'

export type registerStartActionCreator = (username: string, email: string, password: string) => RegisterStartAction
export type registerSuccessActionCreator = () => RegisterSuccessAction
export type registerFailureActionCreator = (error: string) => RegisterFailAction