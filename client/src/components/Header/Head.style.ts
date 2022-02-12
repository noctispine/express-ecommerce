import styled from 'styled-components'

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #5e4dbc;
  z-index: 20;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: #ffd300;
      margin-left: 5rem;
      font-size: 2em;
    }
  }

  .shopping-cart {
    position: relative;
    display: none;
    @media (max-width: 1200px) {
      display: block;
    }
    div {
      padding: 0.1rem 0.3rem;
      background-color: #ffd300;
      border-radius: 50%;
      position: absolute;
      bottom: -20%;
      left: -40%;
    }
  }

  @media (max-width: 768px) {
    div {
      h1 {
        margin-left: 2rem;
      }
    }
  }
`

const Navbar = styled.div`
  margin-right: 10rem;
  display: flex;
  align-content: space-between;



  div {
    flex-direction: column;
    margin-left: 2rem;
    cursor: pointer;
  }

  span {
    color: #dbdbff;
  }

  @media (max-width: 768px) {
    margin-right: 3rem;
    span {
      font-size: .8rem;
    }
  }
`

export { Header, Navbar }
