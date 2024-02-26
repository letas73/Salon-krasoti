import React from 'react'
import { Link } from 'react-router-dom'
import HeaderPage from '../../components/header-page/HeaderPage'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/slices/user-slice'
import './Home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  const onClickLogout = () => {
    dispatch(logout())
  }

  if(!user) return null

  return <div className='home'>
    <div className="home__container">
      <HeaderPage title='Меню' />
      <div className="home__nav">
        <Link to='/services' className='home__nav-link'>
          Услуги
        </Link>
        <Link to='/record' className='home__nav-link'>
          Записаться онлайн
        </Link>
        <Link to='/' className='home__nav-link'>
          О нас
        </Link>
        <Link to='/' className='home__nav-link'>
          Контакты
        </Link>
        {
          user.role === 'ADMIN' && (
            <Link to='/admin' className='home__nav-link'>
              Админ панель
            </Link>
          )
        }
        <button onClick={onClickLogout} className='home__nav-link'>
          Выйти
        </button>
      </div>
    </div>
  </div>
}

export default Home