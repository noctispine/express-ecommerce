import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`


export const FormWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem 3rem 3rem 3rem;
  border: 1px solid black;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #353535;
  z-index: 40;
  animation-duration: 1s;
  animation-name: ${fadeIn};

  .exit-button {
    opacity: .80;
    color: #EEEEEE;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem 1rem 0 0;
  }  

  input {
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    border: 0;
    padding: 1rem 1rem;
    margin: 1.5rem -1rem;
  }

  .form-button {
    display: flex;
    justify-content: center;
  }

  button {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    width: 70%;
    border: 0;
    padding: 1rem 0;
    margin-left: -0.5rem;
    border-radius: 5px;
    background-color: #2196F3;
  }

  #error {
    color: red;
    word-spacing: 1px;
    margin-top: 1rem;
  }

  #register {
    opacity: 0.87;
    margin-left: 1ch;
    cursor: pointer;
  }
  #question {
    opacity: 0.67;
  }
  #direct-register {
    margin-top: 1rem;
    color: #EEEEEE;
  }
`
