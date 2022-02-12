export interface RegisterStartAction {
  type: 'REGISTER_START'
  payload: { username: string; email: string; password: string }
}

export interface RegisterSuccessAction {
  type: 'REGISTER_SUCCESS'
}

export interface RegisterFailAction {
  type: 'REGISTER_FAIL'
  payload: string
}

export type RegisterActions =
  | RegisterStartAction
  | RegisterSuccessAction
  | RegisterFailAction
