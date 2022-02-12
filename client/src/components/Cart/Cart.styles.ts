import styled, {keyframes} from 'styled-components'

interface CartListWrapperProps {
  showSideCart: boolean
}

const slideIn = keyframes`
  0% {transform: translateX(30%);}
  100% {transform: translateX(0);}
`

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

export const CartListWrapper = styled.div<CartListWrapperProps>`
  height: min-content;
  max-height: 42rem;
  overflow-y: auto;
  padding-bottom: 30;
  min-height: 30%;
  background-color: #353535;
  color: rgba(255, 255, 255, 0.77);

  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;

  .total-wrapper {
    margin-top: 1rem;
  }
  .text-total {
    bottom: 0;
    color: rgba(255, 255, 255, 0.87);
    margin: 1.5rem;
    ::before {
      display: block;
      margin-top: 1rem;
      margin-bottom: 0.5rem;

      content: '';
      width: 5rem;
      border: 1px solid rgba(255, 255, 255, 0.6 7);
    }
  }

  .cart-header {
    display: none;
  }



  @media (max-width: 1200px) {
    display: ${(props) => (props.showSideCart ? 'block' : 'none')};
    position: fixed;
    width: 100%;
    height: 100vh;
    max-height: none;
    top: 0;
    left: 0;
    animation-duration: 1s;
    animation-name: ${slideIn};
    .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 0.8rem;
      margin-top: 3rem;
      h3 {
        margin-left: 1rem;
        font-size: 1.5rem;
      }
      .exit-button {
        margin-bottom: 0;
        margin-right: 0.7rem;
        padding: 0.2 rem;
        cursor: pointer;
      }
    }
  }
`
export const ItemCard = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  animation-duration: 1s;
  animation-name: ${fadeIn};

  .item-wrapper {
    margin-left: 1rem;
    display: flex;
  }

  .item-content {
    margin-left: 0.5rem;
    margin-right: 0.7rem;
    .item-details {
      margin-bottom: .5rem;
    }
    
  }

  button {
    height: 100%;
    padding: 0 0.5rem 0 0.5rem;
    border: none;
    background-color: red;
    cursor: pointer;
  }

  img {
    width: 5rem;
    height: 5rem;
  }
`

export const CartTitle = styled.h2`
  margin: 1.5rem auto;
  width: 100%;
  text-align: center;
  ::after {
    content: '';
    display: block;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.67);
    width: 50%;
    left: 25%;
    margin-top: 0.7rem;
  }
`
