import {
  UserLoginStartAction,
  UserLoginSuccessAction,
  UserLoginFailureAction,
  UserLogoutAction,
  UserReloginStartAction
} from '../actionTypes/userActionTypes'

export type userLoginStartActionCreator = (
  username: string,
  password: string
) => UserLoginStartAction

export type userLoginSuccessActionCreator = (
  username: string,
  token: string
) => UserLoginSuccessAction

export type userLoginFailureActionCreator = (
  error: string
) => UserLoginFailureAction

export type userReloginStartActionCreator = (
  username: string,
  token: string
) => UserReloginStartAction

export type userLogoutActionCreator = () => UserLogoutAction
