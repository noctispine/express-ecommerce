import React, { Dispatch, SetStateAction } from 'react'
import { Header, Navbar } from './Head.style'
import { GoPerson } from 'react-icons/go'
import { MdLogout } from 'react-icons/md'
import { RiUserAddFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { loginActionCreators } from '../../reducers/userReducer'
import { cartActionCreators } from '../../reducers/cartReducer'
import { FaShoppingCart } from 'react-icons/fa'
import { RootState } from '../../reducers/rootReducer'

interface Props {
  isUserLoggedIn: boolean
  setShowLoginForm: Dispatch<SetStateAction<boolean>>
  setShowSignUpForm: Dispatch<SetStateAction<boolean>>
  setShowSideCart: Dispatch<SetStateAction<boolean>>
  showSideCart: boolean
}

const Head = ({
  isUserLoggedIn,
  setShowLoginForm,
  setShowSignUpForm,
  setShowSideCart,
  showSideCart
}: Props) => {
  const dispatch = useDispatch()

  const state = useSelector((state: RootState) => state.cart)

  const LoginBar = () => {
    const handleLogout = () => {
      dispatch(loginActionCreators.userLogoutCreator())
      dispatch(cartActionCreators.resetCart())
      setShowLoginForm(false)
      setShowSignUpForm(false)
    }

    if (!isUserLoggedIn) {
      return (
        <>
          <div onClick={() => setShowLoginForm(true)}>
            <GoPerson size="1.7rem" color="#DBDBFF" />
            <span>Login</span>
          </div>
          <div onClick={() => setShowSignUpForm(true)}>
            <RiUserAddFill size="1.7rem" color="#dbdbffe1" />
            <span>Sign Up</span>
          </div>
          <div onClick={() => setShowSideCart(!showSideCart)} className="shopping-cart">
            <FaShoppingCart size="1.9rem" color="#dbdbffe1" />
            {state.total !== 0 && <div>{state.products.length}</div>}
          </div>
        </>
      )
    } else
      return (
        <>
          <div onClick={handleLogout}>
            <MdLogout size="1.7rem" color="#DBDBFF" />
            <span>Logout</span>
          </div>
          <div onClick={() => setShowSideCart(!showSideCart)} className="shopping-cart">
            <FaShoppingCart size="1.9rem" color="#dbdbffe1" />
            {state.total !== 0 && <div>{state.products.length}</div>}
          </div>
        </>
      )
  }

  return (
    <Header>
      <div>
        <h1>Shop</h1>
        <Navbar>
          <LoginBar />
        </Navbar>
      </div>
    </Header>
  )
}

export default Head
