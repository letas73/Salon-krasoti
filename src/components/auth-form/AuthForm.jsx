import HeaderPage from '../header-page/HeaderPage'
import './AuthForm.scss'

const AuthForm = ({ title, children }) => {
  return <div className='auth-form'>
    <HeaderPage title={title} />
    {children}
  </div>
}

export default AuthForm