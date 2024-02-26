import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import AuthForm from '../../components/auth-form/AuthForm'
import { login } from '../../store/slices/user-slice'
import './Login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClickLogin = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }

    if (!email || password.length < 4) {
      alert('Введите правильные данные')
    } else {
      dispatch(login(user))
    }
  }

  return <div className='login'>
    <AuthForm title='Авторизация'>
      <div className='login__wrapper'>
        <form className='login__form'>
          <input
            type='email'
            placeholder='E-mail'
            className='login__form-input'
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            type='password'
            placeholder='Пароль'
            className='login__form-input'
            value={password}
            onChange={handleChangePassword}
          />
          <button onClick={onClickLogin} className="login__form-submit">
            Войти
          </button>
        </form>
        <Link to='/register' className='login__link'>
          Еще нет аккаунта?
        </Link>
      </div>
    </AuthForm>
  </div>
}

export default Login