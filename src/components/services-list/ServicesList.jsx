import ServicesItem from "../services-item/ServicesItem"
import { useSelector } from 'react-redux'
import './ServicesList.scss'

const ServicesList = () => {
  const services = useSelector((state) => state.services.data)

  if(!services.length) return null

  return <ul className='services-list'>
    {
      services.map((item) => (
        <ServicesItem key={item.id} item={item} />
      ))
    }
  </ul>
}

export default ServicesList