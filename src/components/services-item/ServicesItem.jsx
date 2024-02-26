import { Link } from 'react-router-dom'
import './ServicesItem.scss'

const ServicesItem = ({ item }) => {
  return <li className='services-item'>
    <div className='services-item__left'>
      <div className="services-item__title">
        {item.title}
      </div>
      <div className="services-item__price">
        от {item.price}р
      </div>
    </div>
    <Link to='/services' className='services-item__link'>
      Подробнее
    </Link>
  </li>
}

export default ServicesItem