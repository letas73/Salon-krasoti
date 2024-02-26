import React from 'react'
import HeaderPage from '../../components/header-page/HeaderPage'
import ServicesList from '../../components/services-list/ServicesList'
import './Services.scss'

const Services = () => {
  return <div className='services'>
    <div className="services__container">
      <HeaderPage title='Список услуг' />
      <ServicesList />
    </div>
  </div>
}

export default Services