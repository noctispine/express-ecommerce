import { useDispatch, useSelector } from 'react-redux'
import { loginActionCreators } from '../../reducers/userReducer'
import UserState from '../../types/stateTypes/userStateType'
import { RootState } from '../../reducers/rootReducer'
import { FormWrapper } from './LoginForm.styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  setShowLoginForm: Dispatch<SetStateAction<boolean>>
  setShowSignUpForm: Dispatch<SetStateAction<boolean>>
}

const LoginForm = ({ setShowLoginForm, setShowSignUpForm }: Props) => {
  const dispatch = useDispatch()
  const state: UserState = useSelector((state: RootState) => state.user)
  const error = state.error

  const handleRouteToRegisterForm = () => {
    setShowLoginForm(false)
    setShowSignUpForm(true)
  }

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      username: { value: string }
      password: { value: string }
    }

    let username = target.username.value
    let password = target.password.value

    dispatch(loginActionCreators.userLoginStartCreator(username, password))
  }
  return (
    <FormWrapper>
      <div onClick={() => setShowLoginForm(false)} className="exit-button">
        <AiOutlineCloseCircle size="2rem" />
      </div>
      <form onSubmit={handleLogin}>
        {error && <p id="error">{error}</p>}
        <input type="username" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <div className="form-button">
          <button>Login</button>
        </div>
      </form>
      <p id="direct-register">
        <span id="question">Don't have an account?</span>

        <span onClick={handleRouteToRegisterForm} id="register">
          Register here
        </span>
      </p>
    </FormWrapper>
  )
}
export default LoginForm
