import { ItemCard } from './Cart.styles'
import { BiX } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { cartActionCreators } from '../../reducers/cartReducer'

interface CartItemProps {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch()

  return (
    <ItemCard>
      <div className="item-wrapper">
        <div className="img-container">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="item-content">
          <div className="item-details">
            <h4>
              {props.title.length < 20
                ? props.title
                : props.title.slice(0, 15) + '...'}
            </h4>
            <p>quantity: {props.quantity}</p>
          </div>
          <p>${(props.quantity * props.price).toFixed(2)}</p>
        </div>
      </div>
      <div className="button-div">
        <button
          onClick={() => dispatch(cartActionCreators.removeFromCart(props.id))}
        >
          <BiX size="2rem" />
        </button>
      </div>
    </ItemCard>
  )
}

export default CartItem
