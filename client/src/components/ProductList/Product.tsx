import { useDispatch } from 'react-redux'
import { ProductCard, ProductWrapper } from './Product.style'
import { addToCart } from '../../reducers/cartReducer'
import { IProduct } from '../../types/stateTypes/productStateType'
import { BiPlus } from 'react-icons/bi'

const Product = (props: IProduct) => {
  const dispatch = useDispatch()

  return (
    <ProductWrapper>
      <ProductCard>
        <div className="product-content-container">
          <div className="img-container">
            <img src={props.image} alt={props.title} />
          </div>
          <h4>${props.price}</h4>
          <h3>
            {props.title.length < 15
              ? props.title
              : props.title.slice(0, 15) + '...'}
          </h3>
        </div>
        <div className="button-div-wrapper">
          <div className="button-div">
            <button onClick={() => dispatch(addToCart(props))}>
              <BiPlus size="1.5rem" />
            </button>
          </div>
        </div>
      </ProductCard>
    </ProductWrapper>
  )
}

export default Product
