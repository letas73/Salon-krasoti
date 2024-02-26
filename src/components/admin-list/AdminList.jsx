import AdminItem from '../admin-item/AdminItem'
import { useSelector } from 'react-redux'
import './AdminList.scss'

const AdminList = () => {
  const services = useSelector((state) => state.services.data)

  if (!services.length) return null

  return <ul className='admin-list'>
    {
      services.map((item) => (
        <AdminItem key={item.id} item={item} />
      ))
    }
  </ul>
}

export default AdminList