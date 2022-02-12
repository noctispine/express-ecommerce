import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
import registerationReducer from './registerationReducer'
import userReducer from './userReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  user: userReducer,
  register: registerationReducer,
  filter: filterReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
