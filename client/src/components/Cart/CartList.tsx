import React, { Dispatch, SetStateAction } from 'react'
import CartItem from './CartItem'
import { CartListWrapper, CartTitle } from './Cart.styles'
import { RootState } from '../../reducers/rootReducer'
import CartState from '../../types/stateTypes/cartStateTypes'
import { useSelector } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface CartListProps {
  setShowSideCart: Dispatch<SetStateAction<boolean>>
  showSideCart: boolean
}

const CartList = ({ setShowSideCart, showSideCart }: CartListProps) => {
  const cart: CartState = useSelector((state: RootState) => state.cart)

  return (
    <CartListWrapper showSideCart={showSideCart}>
      <CartTitle>Shopping Cart</CartTitle>
      <div className="cart-header">
        <h3>Shoping Cart</h3>
        <AiOutlineCloseCircle
          onClick={() => setShowSideCart(false)}
          className="exit-button"
          size="2.2rem"
        />
      </div>
      {cart.products.length > 0 &&
        cart.products.map((item) => {
          const { title, price, quantity, image, id } = item
          return (
            <CartItem
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
              quantity={quantity}
            />
          )
        })}
      <div className="total-wrapper">
        <h2 className="text-total">
          Total: ${cart.total <= 0 ? 0 : cart.total.toFixed(2)}
        </h2>
      </div>
    </CartListWrapper>
  )
}

export default CartList
