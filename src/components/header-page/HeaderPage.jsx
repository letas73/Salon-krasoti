import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from './logo.png'
import './HeaderPage.scss'

const HeaderPage = ({ title }) => {
  return <div className='header-page'>
    <Link to='/'>
      <img src={LogoImage} alt="logo" className="header-page__img" />
    </Link>
    <h1 className='header-page__title'>
      {title}
    </h1>
 </div>
}

export default HeaderPage