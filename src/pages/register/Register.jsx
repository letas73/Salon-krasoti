import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthForm from '../../components/auth-form/AuthForm'
import { useDispatch } from 'react-redux'
import './Register.scss'
import { register } from '../../store/slices/user-slice'

const Register = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClickRegister = (e) => {
    e.preventDefault()
    const user = {
      id: Math.floor(Math.random() * (50 - 6) + 6),
      email,
      password,
      role: 'USER'
    }

    if (!email || password.length < 4) {
      alert('Введите правильные данные')
    } else {
      dispatch(register(user))
    }
  }

  return <div className='login'>
    <AuthForm title='Регистрация'>
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
          <button onClick={onClickRegister} className="login__form-submit">
            Зарегистрироваться
          </button>
        </form>
        <Link to='/login' className='login__link'>
          Уже есть аккаунт?
        </Link>
      </div>
    </AuthForm>
  </div>
}

export default Register