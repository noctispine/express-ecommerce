import { FormWrapper } from './LoginForm.styles'
import { registerActionCreators } from '../../reducers/registerationReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'
import { RegisterState } from '../../types/stateTypes/registerStateType'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  setShowLoginForm: Dispatch<SetStateAction<boolean>>
  setShowSignUpForm: Dispatch<SetStateAction<boolean>>
}

const SignUpForm = ({setShowLoginForm, setShowSignUpForm}: Props) => {
  const registerState: RegisterState = useSelector(
    (state: RootState) => state.register
  )

  const dispatch = useDispatch()
  const error = registerState.error
  
  const handleRouteToLoginForm = () => {
    setShowSignUpForm(false)
    setShowLoginForm(true)
  }

  const handleRegistration = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      username: { value: string }
      email: { value: string }
      password: { value: string }
    }

    let username = target.username.value
    let email = target.email.value
    let password = target.password.value

    dispatch(
      registerActionCreators.registerStartCreator(username, email, password)
    )
  }
  return (
    <FormWrapper>
      <div onClick={() => setShowSignUpForm(false)} className="exit-button">
        <AiOutlineCloseCircle size="2rem" />
      </div>
      <form onSubmit={handleRegistration}>
        {error && <p id="error">{error}</p>}
        <input type="username" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="email" name="email" placeholder="email" />
        <div className="form-button">
          <button>Sign Up</button>
        </div>
      </form>
      <p id='direct-register'>
        <span id='question'>Already have an account</span>
        <span onClick={handleRouteToLoginForm} id='register'>Login</span>
      </p>
    </FormWrapper>
  )
}

export default SignUpForm
